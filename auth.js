const Auth = {
    async hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    },

    generateToken() {
        const array = new Uint8Array(32);
        crypto.getRandomValues(array);
        return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
    },

    getUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : {};
    },

    saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    },

    getCurrentUser() {
        const username = localStorage.getItem('currentUser');
        const token = localStorage.getItem('sessionToken');
        
        if (!username || !token) {
            return null;
        }

        const users = this.getUsers();
        if (!users[username]) {
            return null;
        }

        return {
            username: username,
            createdAt: users[username].createdAt
        };
    },

    async register(username, password) {
        if (!username || !password) {
            return { success: false, message: '用户名和密码不能为空' };
        }

        if (username.length < 3) {
            return { success: false, message: '用户名至少需要3个字符' };
        }

        if (password.length < 6) {
            return { success: false, message: '密码至少需要6个字符' };
        }

        const users = this.getUsers();
        
        if (users[username]) {
            return { success: false, message: '用户名已存在' };
        }

        const passwordHash = await this.hashPassword(password);
        
        users[username] = {
            username: username,
            passwordHash: passwordHash,
            createdAt: new Date().toISOString()
        };

        this.saveUsers(users);

        const token = this.generateToken();
        localStorage.setItem('currentUser', username);
        localStorage.setItem('sessionToken', token);

        this.initUserData(username);

        return { success: true, message: '注册成功' };
    },

    async login(username, password) {
        if (!username || !password) {
            return { success: false, message: '用户名和密码不能为空' };
        }

        const users = this.getUsers();
        
        if (!users[username]) {
            return { success: false, message: '用户名不存在' };
        }

        const passwordHash = await this.hashPassword(password);
        
        if (users[username].passwordHash !== passwordHash) {
            return { success: false, message: '密码错误' };
        }

        const token = this.generateToken();
        localStorage.setItem('currentUser', username);
        localStorage.setItem('sessionToken', token);

        return { success: true, message: '登录成功' };
    },

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('sessionToken');
    },

    initUserData(username) {
        const dataKey = `user_${username}_data`;
        const existingData = localStorage.getItem(dataKey);
        
        if (!existingData) {
            const defaultData = {
                learnedWords: [],
                ebbinghausData: {},
                dailyLogs: {},
                wrongWords: [],
                settings: {
                    dailyWordCount: 10,
                    checkInMode: 'both',
                    ebbinghausEnabled: false
                },
                createdAt: new Date().toISOString()
            };
            localStorage.setItem(dataKey, JSON.stringify(defaultData));
        }
    },

    getUserData(username) {
        const currentUser = username || this.getCurrentUser()?.username;
        if (!currentUser) {
            return null;
        }

        const dataKey = `user_${currentUser}_data`;
        const data = localStorage.getItem(dataKey);
        
        if (!data) {
            this.initUserData(currentUser);
            return this.getUserData(currentUser);
        }

        return JSON.parse(data);
    },

    saveUserData(data, username) {
        const currentUser = username || this.getCurrentUser()?.username;
        if (!currentUser) {
            return false;
        }

        const dataKey = `user_${currentUser}_data`;
        localStorage.setItem(dataKey, JSON.stringify(data));
        return true;
    },

    migrateOldData(username) {
        const oldDataKeys = [
            'learnedWords',
            'ebbinghausData',
            'dailyLogs',
            'wrongWords',
            'settings'
        ];

        let hasOldData = false;
        const oldData = {};

        oldDataKeys.forEach(key => {
            const data = localStorage.getItem(key);
            if (data) {
                hasOldData = true;
                oldData[key] = JSON.parse(data);
            }
        });

        if (!hasOldData) {
            return false;
        }

        const userData = this.getUserData(username);
        
        if (oldData.learnedWords) {
            userData.learnedWords = oldData.learnedWords;
        }
        if (oldData.ebbinghausData) {
            userData.ebbinghausData = oldData.ebbinghausData;
        }
        if (oldData.dailyLogs) {
            userData.dailyLogs = oldData.dailyLogs;
        }
        if (oldData.wrongWords) {
            userData.wrongWords = oldData.wrongWords;
        }
        if (oldData.settings) {
            userData.settings = { ...userData.settings, ...oldData.settings };
        }

        this.saveUserData(userData, username);

        oldDataKeys.forEach(key => {
            localStorage.removeItem(key);
        });

        return true;
    },

    isLoggedIn() {
        return this.getCurrentUser() !== null;
    },

    requireAuth() {
        if (!this.isLoggedIn()) {
            window.location.href = '#login';
            return false;
        }
        return true;
    }
};

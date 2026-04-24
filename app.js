const App = {
    state: {
        dailyCount: 10,
        lang: 'en-US',
        rate: 0.8,
        currentWordIndex: 0,
        sessionWords: [],
        sessionCorrect: 0,
        sessionStartTime: null,
        speechCorrect: false,
        spellCorrect: false,
        hintUsed: false,
        recognition: null,
        isRecording: false
    },

    init() {
        this.loadData();
        this.bindEvents();
        this.updateUI();
    },

    loadData() {
        const saved = localStorage.getItem('toefl_junior_data');
        if (saved) {
            const data = JSON.parse(saved);
            this.state.dailyCount = data.dailyCount || 10;
            this.state.lang = data.lang || 'en-US';
            this.state.rate = data.rate || 0.8;
            this.state.learnedWords = data.learnedWords || [];
            this.state.dailyLog = data.dailyLog || {};
            this.state.totalCorrect = data.totalCorrect || 0;
            this.state.totalAttempts = data.totalAttempts || 0;
        } else {
            this.state.learnedWords = [];
            this.state.dailyLog = {};
            this.state.totalCorrect = 0;
            this.state.totalAttempts = 0;
        }
    },

    saveData() {
        localStorage.setItem('toefl_junior_data', JSON.stringify({
            dailyCount: this.state.dailyCount,
            lang: this.state.lang,
            rate: this.state.rate,
            learnedWords: this.state.learnedWords,
            dailyLog: this.state.dailyLog,
            totalCorrect: this.state.totalCorrect,
            totalAttempts: this.state.totalAttempts
        }));
    },

    getTodayKey() {
        return new Date().toISOString().split('T')[0];
    },

    getTodayLog() {
        const key = this.getTodayKey();
        if (!this.state.dailyLog[key]) {
            this.state.dailyLog[key] = { words: 0, correct: 0, time: 0 };
        }
        return this.state.dailyLog[key];
    },

    getStreakDays() {
        const keys = Object.keys(this.state.dailyLog).sort().reverse();
        if (keys.length === 0) return 0;
        let streak = 0;
        let checkDate = new Date();
        for (let i = 0; i < 365; i++) {
            const key = checkDate.toISOString().split('T')[0];
            if (this.state.dailyLog[key] && this.state.dailyLog[key].words > 0) {
                streak++;
            } else if (i > 0) {
                break;
            }
            checkDate.setDate(checkDate.getDate() - 1);
        }
        return streak;
    },

    getTotalWords() {
        return this.state.learnedWords.length;
    },

    getTotalTime() {
        let total = 0;
        Object.values(this.state.dailyLog).forEach(log => {
            total += log.time || 0;
        });
        return Math.round(total);
    },

    bindEvents() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchPage(btn.dataset.page));
        });

        document.getElementById('btn-start-learn').addEventListener('click', () => this.startSession());
        document.getElementById('btn-speak').addEventListener('mousedown', () => this.startSpeech());
        document.getElementById('btn-speak').addEventListener('mouseup', () => this.stopSpeech());
        document.getElementById('btn-speak').addEventListener('touchstart', (e) => { e.preventDefault(); this.startSpeech(); });
        document.getElementById('btn-speak').addEventListener('touchend', () => this.stopSpeech());
        document.getElementById('btn-next-step').addEventListener('click', () => this.goToSpellStep());
        document.getElementById('btn-check-spell').addEventListener('click', () => this.checkSpelling());
        document.getElementById('spell-input').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.checkSpelling();
        });
        document.getElementById('btn-hint').addEventListener('click', () => this.showHint());
        document.getElementById('btn-demo-speak').addEventListener('click', () => this.speakWord());
        document.getElementById('btn-next-word').addEventListener('click', () => this.nextWord());
        document.getElementById('btn-back-home').addEventListener('click', () => this.backToHome());

        document.getElementById('btn-decrease').addEventListener('click', () => this.adjustDailyCount(-1));
        document.getElementById('btn-increase').addEventListener('click', () => this.adjustDailyCount(1));
        document.getElementById('setting-lang').addEventListener('change', (e) => {
            this.state.lang = e.target.value;
            this.saveData();
        });
        document.getElementById('setting-rate').addEventListener('input', (e) => {
            this.state.rate = parseFloat(e.target.value);
            document.getElementById('setting-rate-value').textContent = this.state.rate + 'x';
            this.saveData();
        });
        document.getElementById('btn-reset').addEventListener('click', () => {
            if (confirm('确定要重置所有学习进度吗？此操作不可恢复！')) {
                localStorage.removeItem('toefl_junior_data');
                location.reload();
            }
        });
    },

    switchPage(page) {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelector(`.nav-btn[data-page="${page}"]`).classList.add('active');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(`page-${page}`).classList.add('active');
        if (page === 'stats') this.updateStats();
        if (page === 'settings') this.updateSettings();
    },

    updateUI() {
        document.getElementById('streak-days').textContent = this.getStreakDays();
        document.getElementById('total-words').textContent = this.getTotalWords();
        document.getElementById('total-time').textContent = this.getTotalTime();

        const todayLog = this.getTodayLog();
        document.getElementById('today-target').textContent = this.state.dailyCount;
        document.getElementById('today-done').textContent = todayLog.words;
        const pct = Math.min(100, Math.round((todayLog.words / this.state.dailyCount) * 100));
        document.getElementById('today-progress').style.width = pct + '%';
    },

    startSession() {
        const unlearned = WORDS.filter(w => !this.state.learnedWords.includes(w.word));
        const pool = unlearned.length > 0 ? unlearned : WORDS;
        const shuffled = [...pool].sort(() => Math.random() - 0.5);
        this.state.sessionWords = shuffled.slice(0, this.state.dailyCount);
        this.state.currentWordIndex = 0;
        this.state.sessionCorrect = 0;
        this.state.sessionStartTime = Date.now();

        document.getElementById('learn-start').classList.add('hidden');
        document.getElementById('learn-session').classList.remove('hidden');
        document.getElementById('learn-complete').classList.add('hidden');

        this.showCurrentWord();
    },

    showCurrentWord() {
        const word = this.state.sessionWords[this.state.currentWordIndex];
        this.state.speechCorrect = false;
        this.state.spellCorrect = false;
        this.state.hintUsed = false;

        document.getElementById('session-current').textContent = this.state.currentWordIndex + 1;
        document.getElementById('session-total').textContent = this.state.sessionWords.length;

        document.getElementById('word-chinese').textContent = word.meaning;
        document.getElementById('word-pos').textContent = word.pos;
        document.getElementById('word-chinese-2').textContent = word.meaning;
        document.getElementById('word-pos-2').textContent = word.pos;

        document.getElementById('speech-result').textContent = '';
        document.getElementById('speech-result').className = 'speech-result';
        document.getElementById('btn-next-step').classList.add('hidden');

        document.getElementById('spell-input').value = '';
        document.getElementById('spell-result').textContent = '';
        document.getElementById('spell-result').className = 'spell-result';

        this.showStep('step-meaning');
    },

    showStep(stepId) {
        document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
        document.getElementById(stepId).classList.add('active');
    },

    startSpeech() {
        if (this.state.isRecording) return;

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            document.getElementById('speech-result').textContent = '⚠️ 浏览器不支持语音识别，请使用Chrome浏览器';
            document.getElementById('speech-result').className = 'speech-result info';
            document.getElementById('btn-next-step').classList.remove('hidden');
            this.state.speechCorrect = true;
            return;
        }

        this.state.recognition = new SpeechRecognition();
        this.state.recognition.lang = this.state.lang;
        this.state.recognition.continuous = false;
        this.state.recognition.interimResults = false;

        this.state.recognition.onresult = (event) => {
            const result = event.results[0][0].transcript.toLowerCase().trim();
            const word = this.state.sessionWords[this.state.currentWordIndex].word.toLowerCase();
            const confidence = event.results[0][0].confidence;

            if (result.includes(word) || this.isSimilar(result, word)) {
                document.getElementById('speech-result').textContent = `✅ 发音正确！识别到: "${result}" (置信度: ${Math.round(confidence * 100)}%)`;
                document.getElementById('speech-result').className = 'speech-result success';
                this.state.speechCorrect = true;
                document.getElementById('btn-next-step').classList.remove('hidden');
            } else {
                document.getElementById('speech-result').textContent = `❌ 识别到: "${result}"，再试一次吧！`;
                document.getElementById('speech-result').className = 'speech-result fail';
                document.getElementById('btn-next-step').classList.remove('hidden');
            }
        };

        this.state.recognition.onerror = (event) => {
            if (event.error === 'no-speech') {
                document.getElementById('speech-result').textContent = '没有检测到语音，请再试一次';
            } else if (event.error === 'not-allowed') {
                document.getElementById('speech-result').textContent = '⚠️ 请允许麦克风权限';
            } else {
                document.getElementById('speech-result').textContent = '语音识别出错，可以跳过此步骤';
            }
            document.getElementById('speech-result').className = 'speech-result info';
            document.getElementById('btn-next-step').classList.remove('hidden');
        };

        this.state.recognition.onend = () => {
            this.state.isRecording = false;
            document.getElementById('btn-speak').classList.remove('recording');
        };

        try {
            this.state.recognition.start();
            this.state.isRecording = true;
            document.getElementById('btn-speak').classList.add('recording');
            document.getElementById('speech-result').textContent = '🎤 正在听...请大声读出单词';
            document.getElementById('speech-result').className = 'speech-result info';
        } catch (e) {
            document.getElementById('speech-result').textContent = '语音识别启动失败，可以跳过';
            document.getElementById('speech-result').className = 'speech-result info';
            document.getElementById('btn-next-step').classList.remove('hidden');
        }
    },

    stopSpeech() {
        if (this.state.recognition && this.state.isRecording) {
            this.state.recognition.stop();
            this.state.isRecording = false;
            document.getElementById('btn-speak').classList.remove('recording');
        }
    },

    isSimilar(spoken, target) {
        if (spoken.length < 2) return false;
        let matches = 0;
        for (let i = 0; i < target.length; i++) {
            if (spoken.includes(target[i])) matches++;
        }
        return matches / target.length > 0.7;
    },

    goToSpellStep() {
        this.stopSpeech();
        this.showStep('step-spell');
        document.getElementById('spell-input').focus();
    },

    checkSpelling() {
        const word = this.state.sessionWords[this.state.currentWordIndex];
        const input = document.getElementById('spell-input').value.toLowerCase().trim();
        const correct = word.word.toLowerCase();

        if (!input) {
            document.getElementById('spell-result').textContent = '请输入单词';
            document.getElementById('spell-result').className = 'spell-result fail';
            return;
        }

        if (input === correct) {
            document.getElementById('spell-result').textContent = '✅ 拼写正确！';
            document.getElementById('spell-result').className = 'spell-result success';
            this.state.spellCorrect = true;
            if (!this.state.hintUsed) this.state.sessionCorrect++;
            this.state.totalAttempts++;
            this.state.totalCorrect++;

            setTimeout(() => this.showDetailStep(), 800);
        } else {
            document.getElementById('spell-result').textContent = `❌ 拼写不正确，正确答案: ${word.word}`;
            document.getElementById('spell-result').className = 'spell-result fail';
            this.state.totalAttempts++;

            setTimeout(() => this.showDetailStep(), 1500);
        }
    },

    showHint() {
        const word = this.state.sessionWords[this.state.currentWordIndex].word;
        const hint = word[0] + '_'.repeat(word.length - 2) + word[word.length - 1];
        document.getElementById('spell-result').textContent = `💡 提示: ${hint} (${word.length}个字母)`;
        document.getElementById('spell-result').className = 'spell-result info';
        this.state.hintUsed = true;
    },

    showDetailStep() {
        const word = this.state.sessionWords[this.state.currentWordIndex];

        document.getElementById('detail-word').textContent = word.word;
        document.getElementById('detail-phonetic').textContent = word.phonetic;
        document.getElementById('detail-meaning').textContent = word.pos + ' ' + word.meaning;
        document.getElementById('detail-collocation').textContent = word.collocation;
        document.getElementById('detail-grammar').textContent = word.grammar;
        document.getElementById('detail-example-en').textContent = word.example_en;
        document.getElementById('detail-example-cn').textContent = word.example_cn;

        if (!this.state.learnedWords.includes(word.word)) {
            this.state.learnedWords.push(word.word);
        }

        const todayLog = this.getTodayLog();
        todayLog.words++;
        todayLog.correct += this.state.spellCorrect ? 1 : 0;
        this.saveData();

        this.showStep('step-detail');
        this.speakWord();
    },

    speakWord() {
        const word = this.state.sessionWords[this.state.currentWordIndex].word;
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = this.state.lang;
        utterance.rate = this.state.rate;
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
    },

    nextWord() {
        this.state.currentWordIndex++;
        if (this.state.currentWordIndex >= this.state.sessionWords.length) {
            this.completeSession();
        } else {
            this.showCurrentWord();
        }
    },

    completeSession() {
        const elapsed = Math.round((Date.now() - this.state.sessionStartTime) / 60000);
        const todayLog = this.getTodayLog();
        todayLog.time += elapsed;
        this.saveData();

        document.getElementById('learn-session').classList.add('hidden');
        document.getElementById('learn-complete').classList.remove('hidden');

        document.getElementById('complete-words').textContent = this.state.sessionWords.length;
        document.getElementById('complete-correct').textContent = this.state.sessionCorrect;
        document.getElementById('complete-time').textContent = elapsed;
    },

    backToHome() {
        document.getElementById('learn-start').classList.remove('hidden');
        document.getElementById('learn-session').classList.add('hidden');
        document.getElementById('learn-complete').classList.add('hidden');
        this.updateUI();
    },

    adjustDailyCount(delta) {
        this.state.dailyCount = Math.max(5, Math.min(50, this.state.dailyCount + delta));
        document.getElementById('setting-daily-count').textContent = this.state.dailyCount;
        this.saveData();
        this.updateUI();
    },

    updateSettings() {
        document.getElementById('setting-daily-count').textContent = this.state.dailyCount;
        document.getElementById('setting-lang').value = this.state.lang;
        document.getElementById('setting-rate').value = this.state.rate;
        document.getElementById('setting-rate-value').textContent = this.state.rate + 'x';
    },

    updateStats() {
        const totalDays = Object.values(this.state.dailyLog).filter(l => l.words > 0).length;
        document.getElementById('stat-total-days').textContent = totalDays;
        document.getElementById('stat-total-words').textContent = this.getTotalWords();
        document.getElementById('stat-total-time').textContent = this.getTotalTime();
        document.getElementById('stat-accuracy').textContent =
            this.state.totalAttempts > 0 ? Math.round((this.state.totalCorrect / this.state.totalAttempts) * 100) + '%' : '0%';

        const mastered = this.state.learnedWords.length;
        const total = WORDS.length;
        document.getElementById('stat-mastered').textContent = mastered;
        document.getElementById('stat-total-all').textContent = total;
        document.getElementById('stat-progress').style.width = Math.round((mastered / total) * 100) + '%';

        this.renderHistoryChart();
        this.renderLearnedWords();
    },

    renderHistoryChart() {
        const chart = document.getElementById('history-chart');
        chart.innerHTML = '';
        const days = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const key = d.toISOString().split('T')[0];
            const log = this.state.dailyLog[key] || { words: 0 };
            const label = (d.getMonth() + 1) + '/' + d.getDate();
            days.push({ label, words: log.words });
        }
        const maxWords = Math.max(...days.map(d => d.words), 1);
        days.forEach(day => {
            const bar = document.createElement('div');
            bar.className = 'history-bar';
            const height = Math.max(4, Math.round((day.words / maxWords) * 100));
            bar.innerHTML = `
                <div class="history-bar-value">${day.words}</div>
                <div class="history-bar-fill" style="height:${height}px"></div>
                <div class="history-bar-label">${day.label}</div>
            `;
            chart.appendChild(bar);
        });
    },

    renderLearnedWords() {
        const container = document.getElementById('learned-words-tags');
        container.innerHTML = '';
        if (this.state.learnedWords.length === 0) {
            container.innerHTML = '<p style="color:#9ca3af;font-size:0.85rem;">还没有学过的单词</p>';
            return;
        }
        this.state.learnedWords.forEach(word => {
            const tag = document.createElement('span');
            tag.className = 'word-tag';
            tag.textContent = word;
            container.appendChild(tag);
        });
    }
};

window.addEventListener('DOMContentLoaded', () => App.init());
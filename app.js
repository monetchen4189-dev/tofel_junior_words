const App = {
    EBINGHAUS_INTERVALS: [1, 2, 4, 7, 15, 30],

    state: {
        dailyCount: 10,
        mode: 'both',
        lang: 'en-US',
        rate: 0.9,
        ebbinghaus: false,
        currentWordIndex: 0,
        sessionWords: [],
        sessionWordTypes: [],
        sessionCorrect: 0,
        sessionTotal: 0,
        sessionStartTime: null,
        speechCorrect: false,
        spellAttempts: 0,
        hintUsed: false,
        recognition: null,
        isRecording: false,
        speechTimeout: null,
        learnedWords: [],
        dailyLog: {},
        totalCorrect: 0,
        totalAttempts: 0,
        wordRecords: {}
    },

    init() {
        this.loadData();
        this.bindEvents();
        this.updateUI();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = () => {};
        }
        speechSynthesis.getVoices();
    },

    loadData() {
        const saved = localStorage.getItem('toefl_junior_data');
        if (saved) {
            const data = JSON.parse(saved);
            this.state.dailyCount = data.dailyCount || 10;
            this.state.mode = data.mode || 'both';
            this.state.lang = data.lang || 'en-US';
            this.state.rate = data.rate || 0.9;
            this.state.ebbinghaus = data.ebbinghaus || false;
            this.state.learnedWords = data.learnedWords || [];
            this.state.dailyLog = data.dailyLog || {};
            this.state.totalCorrect = data.totalCorrect || 0;
            this.state.totalAttempts = data.totalAttempts || 0;
            this.state.wordRecords = data.wordRecords || {};
        }
    },

    saveData() {
        localStorage.setItem('toefl_junior_data', JSON.stringify({
            dailyCount: this.state.dailyCount,
            mode: this.state.mode,
            lang: this.state.lang,
            rate: this.state.rate,
            ebbinghaus: this.state.ebbinghaus,
            learnedWords: this.state.learnedWords,
            dailyLog: this.state.dailyLog,
            totalCorrect: this.state.totalCorrect,
            totalAttempts: this.state.totalAttempts,
            wordRecords: this.state.wordRecords
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

    getEbbinghausReviewWords() {
        const today = new Date();
        const reviewWords = [];
        for (const [word, record] of Object.entries(this.state.wordRecords)) {
            if (!record.learnDate) continue;
            const learnDate = new Date(record.learnDate);
            const nextReview = record.nextReview;
            if (nextReview && new Date(nextReview) <= today) {
                const wordData = WORDS.find(w => w.word === word);
                if (wordData) reviewWords.push(wordData);
            }
        }
        return reviewWords;
    },

    getEbbinghausNewCount() {
        if (!this.state.ebbinghaus) return this.state.dailyCount;
        const reviewWords = this.getEbbinghausReviewWords();
        const reviewCount = Math.min(reviewWords.length, Math.floor(this.state.dailyCount * 0.4));
        return this.state.dailyCount - reviewCount;
    },

    getEbbinghausReviewCount() {
        if (!this.state.ebbinghaus) return 0;
        const reviewWords = this.getEbbinghausReviewWords();
        return Math.min(reviewWords.length, Math.floor(this.state.dailyCount * 0.4));
    },

    updateWordRecord(word, isCorrect) {
        if (!this.state.wordRecords[word]) {
            this.state.wordRecords[word] = {
                learnDate: this.getTodayKey(),
                reviewCount: 0,
                nextReview: null,
                level: 0
            };
        }
        const record = this.state.wordRecords[word];
        if (isCorrect) {
            record.reviewCount++;
            record.level = Math.min(record.level + 1, this.EBINGHAUS_INTERVALS.length - 1);
            const days = this.EBINGHAUS_INTERVALS[record.level];
            const next = new Date();
            next.setDate(next.getDate() + days);
            record.nextReview = next.toISOString().split('T')[0];
        } else {
            record.level = 0;
            const next = new Date();
            next.setDate(next.getDate() + 1);
            record.nextReview = next.toISOString().split('T')[0];
        }
        this.saveData();
    },

    bindEvents() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchPage(btn.dataset.page));
        });

        document.getElementById('btn-start-learn').addEventListener('click', () => this.startSession());

        const btnSpeak = document.getElementById('btn-speak');
        btnSpeak.addEventListener('click', () => this.toggleSpeech());

        document.getElementById('btn-skip-speech').addEventListener('click', () => this.goToSpellStep());
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
        document.getElementById('setting-mode').addEventListener('change', (e) => {
            this.state.mode = e.target.value;
            this.saveData();
            const sessionEl = document.getElementById('learn-session');
            if (!sessionEl.classList.contains('hidden')) {
                this.showCurrentWord();
            }
        });
        document.getElementById('setting-lang').addEventListener('change', (e) => {
            this.state.lang = e.target.value;
            this.saveData();
        });
        document.getElementById('setting-rate').addEventListener('input', (e) => {
            this.state.rate = parseFloat(e.target.value);
            document.getElementById('setting-rate-value').textContent = this.state.rate + 'x';
            this.saveData();
        });
        document.getElementById('setting-ebbinghaus').addEventListener('change', (e) => {
            this.state.ebbinghaus = e.target.checked;
            this.saveData();
            this.updateEbbinghausInfo();
            this.updateUI();
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
        const totalTarget = this.state.ebbinghaus
            ? this.state.dailyCount
            : this.state.dailyCount;
        document.getElementById('today-target').textContent = totalTarget;
        document.getElementById('today-done').textContent = todayLog.words;

        const reviewInfo = document.getElementById('today-review-info');
        if (this.state.ebbinghaus) {
            const reviewCount = this.getEbbinghausReviewCount();
            document.getElementById('today-review').textContent = reviewCount;
            reviewInfo.classList.remove('hidden');
        } else {
            reviewInfo.classList.add('hidden');
        }

        const pct = Math.min(100, Math.round((todayLog.words / totalTarget) * 100));
        document.getElementById('today-progress').style.width = pct + '%';
    },

    startSession() {
        this.state.sessionWords = [];
        this.state.sessionWordTypes = [];

        if (this.state.ebbinghaus) {
            const reviewPool = this.getEbbinghausReviewWords();
            const shuffledReview = [...reviewPool].sort(() => Math.random() - 0.5);
            const reviewCount = this.getEbbinghausReviewCount();
            const newCount = this.state.dailyCount - reviewCount;

            shuffledReview.slice(0, reviewCount).forEach(w => {
                this.state.sessionWords.push(w);
                this.state.sessionWordTypes.push('review');
            });

            const unlearned = WORDS.filter(w => !this.state.learnedWords.includes(w.word) && !this.state.sessionWords.find(sw => sw.word === w.word));
            const pool = unlearned.length > 0 ? unlearned : WORDS.filter(w => !this.state.sessionWords.find(sw => sw.word === w.word));
            const shuffledNew = [...pool].sort(() => Math.random() - 0.5);
            shuffledNew.slice(0, newCount).forEach(w => {
                this.state.sessionWords.push(w);
                this.state.sessionWordTypes.push('new');
            });
        } else {
            const unlearned = WORDS.filter(w => !this.state.learnedWords.includes(w.word));
            const pool = unlearned.length > 0 ? unlearned : WORDS;
            const shuffled = [...pool].sort(() => Math.random() - 0.5);
            this.state.sessionWords = shuffled.slice(0, this.state.dailyCount);
            this.state.sessionWordTypes = this.state.sessionWords.map(() => 'new');
        }

        if (this.state.sessionWords.length === 0) {
            alert('暂无需要学习的单词！');
            return;
        }

        this.state.currentWordIndex = 0;
        this.state.sessionCorrect = 0;
        this.state.sessionTotal = 0;
        this.state.sessionStartTime = Date.now();

        document.getElementById('learn-start').classList.add('hidden');
        document.getElementById('learn-session').classList.remove('hidden');
        document.getElementById('learn-complete').classList.add('hidden');

        this.showCurrentWord();
    },

    showCurrentWord() {
        const word = this.state.sessionWords[this.state.currentWordIndex];
        const wordType = this.state.sessionWordTypes[this.state.currentWordIndex];
        this.state.speechCorrect = false;
        this.state.spellAttempts = 0;
        this.state.hintUsed = false;

        document.getElementById('session-current').textContent = this.state.currentWordIndex + 1;
        document.getElementById('session-total').textContent = this.state.sessionWords.length;

        const badge = document.getElementById('session-word-type');
        if (this.state.ebbinghaus) {
            badge.textContent = wordType === 'new' ? '新词' : '复习';
            badge.className = 'word-type-badge ' + (wordType === 'new' ? 'new-word' : 'review-word');
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }

        document.getElementById('word-chinese').textContent = word.meaning;
        document.getElementById('word-pos').textContent = word.pos;
        document.getElementById('word-chinese-2').textContent = word.meaning;
        document.getElementById('word-pos-2').textContent = word.pos;

        document.getElementById('speech-result').textContent = '';
        document.getElementById('speech-result').className = 'speech-result';
        document.getElementById('btn-next-step').classList.add('hidden');
        document.getElementById('btn-skip-speech').classList.add('hidden');

        document.getElementById('spell-input').value = '';
        document.getElementById('spell-input').classList.remove('input-error');
        document.getElementById('spell-result').textContent = '';
        document.getElementById('spell-result').className = 'spell-result';

        const mode = this.state.mode;
        if (mode === 'spell') {
            this.showStep('step-spell');
            setTimeout(() => document.getElementById('spell-input').focus(), 100);
        } else if (mode === 'speech') {
            this.showStep('step-meaning');
            document.getElementById('step-meaning-hint').textContent = '请大声读出这个单词的英文发音';
            document.getElementById('btn-skip-speech').classList.remove('hidden');
        } else {
            this.showStep('step-meaning');
            document.getElementById('step-meaning-hint').textContent = '请大声读出这个单词的英文发音';
            document.getElementById('btn-skip-speech').classList.remove('hidden');
        }
    },

    showStep(stepId) {
        document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
        document.getElementById(stepId).classList.add('active');
    },

    toggleSpeech() {
        if (this.state.isRecording) {
            this.stopSpeech();
        } else {
            this.startSpeech();
        }
    },

    startSpeech() {
        if (this.state.isRecording) return;

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            document.getElementById('speech-result').textContent = '⚠️ 浏览器不支持语音识别，请使用Chrome浏览器';
            document.getElementById('speech-result').className = 'speech-result info';
            if (this.state.mode === 'both') {
                document.getElementById('btn-next-step').classList.remove('hidden');
            } else {
                this.handleSpeechComplete(true);
            }
            return;
        }

        if (this.state.recognition) {
            try { this.state.recognition.abort(); } catch(e) {}
        }

        this.state.recognition = new SpeechRecognition();
        this.state.recognition.lang = this.state.lang;
        this.state.recognition.continuous = false;
        this.state.recognition.interimResults = false;
        this.state.recognition.maxAlternatives = 3;

        this.state.recognition.onresult = (event) => {
            this.clearSpeechTimeout();
            const word = this.state.sessionWords[this.state.currentWordIndex].word.toLowerCase();
            let matched = false;
            let bestResult = '';

            for (let i = 0; i < event.results[0].length; i++) {
                const result = event.results[0][i].transcript.toLowerCase().trim();
                if (result === word || result.includes(word) || this.isSimilar(result, word)) {
                    matched = true;
                    bestResult = result;
                    break;
                }
                if (!bestResult) bestResult = result;
            }

            const confidence = event.results[0][0].confidence;

            if (matched) {
                document.getElementById('speech-result').textContent = `✅ 发音正确！识别到: "${bestResult}"`;
                document.getElementById('speech-result').className = 'speech-result success';
                this.state.speechCorrect = true;
                this.handleSpeechComplete(true);
            } else {
                document.getElementById('speech-result').textContent = `❌ 识别到: "${bestResult}"，再试一次吧！`;
                document.getElementById('speech-result').className = 'speech-result fail';
                document.getElementById('btn-skip-speech').classList.remove('hidden');
            }

            this.state.isRecording = false;
            document.getElementById('btn-speak').classList.remove('recording');
        };

        this.state.recognition.onerror = (event) => {
            this.clearSpeechTimeout();
            this.state.isRecording = false;
            document.getElementById('btn-speak').classList.remove('recording');

            if (event.error === 'no-speech') {
                document.getElementById('speech-result').textContent = '没有检测到语音，请再试一次或点击跳过';
            } else if (event.error === 'not-allowed') {
                document.getElementById('speech-result').textContent = '⚠️ 请允许麦克风权限后重试';
            } else if (event.error === 'aborted') {
                return;
            } else {
                document.getElementById('speech-result').textContent = '语音识别出错，可以跳过此步骤';
            }
            document.getElementById('speech-result').className = 'speech-result info';
            document.getElementById('btn-skip-speech').classList.remove('hidden');
        };

        this.state.recognition.onend = () => {
            this.clearSpeechTimeout();
            this.state.isRecording = false;
            document.getElementById('btn-speak').classList.remove('recording');
        };

        try {
            this.state.recognition.start();
            this.state.isRecording = true;
            document.getElementById('btn-speak').classList.add('recording');
            document.getElementById('speech-result').textContent = '🎤 正在听...请大声读出单词';
            document.getElementById('speech-result').className = 'speech-result info';

            this.state.speechTimeout = setTimeout(() => {
                if (this.state.isRecording) {
                    this.stopSpeech();
                    document.getElementById('speech-result').textContent = '⏰ 语音识别超时，请再试一次或点击跳过';
                    document.getElementById('speech-result').className = 'speech-result info';
                    document.getElementById('btn-skip-speech').classList.remove('hidden');
                }
            }, 8000);
        } catch (e) {
            document.getElementById('speech-result').textContent = '语音识别启动失败，可以跳过';
            document.getElementById('speech-result').className = 'speech-result info';
            document.getElementById('btn-skip-speech').classList.remove('hidden');
        }
    },

    clearSpeechTimeout() {
        if (this.state.speechTimeout) {
            clearTimeout(this.state.speechTimeout);
            this.state.speechTimeout = null;
        }
    },

    stopSpeech() {
        this.clearSpeechTimeout();
        if (this.state.recognition && this.state.isRecording) {
            try { this.state.recognition.stop(); } catch(e) {}
            this.state.isRecording = false;
            document.getElementById('btn-speak').classList.remove('recording');
        }
    },

    handleSpeechComplete(success) {
        const mode = this.state.mode;
        if (mode === 'speech') {
            if (success) {
                this.state.spellAttempts = 0;
                setTimeout(() => this.showDetailStep(), 800);
            } else {
                document.getElementById('btn-skip-speech').classList.remove('hidden');
            }
        } else {
            if (success) {
                document.getElementById('btn-next-step').classList.remove('hidden');
                document.getElementById('btn-skip-speech').classList.add('hidden');
            } else {
                document.getElementById('btn-skip-speech').classList.remove('hidden');
            }
        }
    },

    isSimilar(spoken, target) {
        if (spoken.length < 2) return false;
        if (spoken === target) return true;
        let matches = 0;
        const targetChars = target.split('');
        const spokenChars = spoken.split('');
        for (let i = 0; i < targetChars.length; i++) {
            const idx = spokenChars.indexOf(targetChars[i]);
            if (idx !== -1) {
                matches++;
                spokenChars.splice(idx, 1);
            }
        }
        return matches / target.length > 0.7;
    },

    goToSpellStep() {
        this.stopSpeech();
        this.showStep('step-spell');
        setTimeout(() => document.getElementById('spell-input').focus(), 100);
    },

    checkSpelling() {
        const word = this.state.sessionWords[this.state.currentWordIndex];
        const input = document.getElementById('spell-input').value.toLowerCase().trim();
        const correct = word.word.toLowerCase();
        const spellInput = document.getElementById('spell-input');
        const spellResult = document.getElementById('spell-result');

        if (!input) {
            spellResult.textContent = '请输入单词';
            spellResult.className = 'spell-result fail';
            return;
        }

        this.state.spellAttempts++;

        if (input === correct) {
            spellResult.textContent = '✅ 拼写正确！';
            spellResult.className = 'spell-result success';
            spellInput.classList.remove('input-error');
            this.state.sessionTotal++;
            if (this.state.spellAttempts === 1 && !this.state.hintUsed) {
                this.state.sessionCorrect++;
            }
            this.state.totalAttempts++;
            this.state.totalCorrect++;
            this.updateWordRecord(word.word, true);

            setTimeout(() => this.showDetailStep(), 800);
        } else {
            spellInput.classList.add('input-error');
            setTimeout(() => spellInput.classList.remove('input-error'), 500);

            this.state.totalAttempts++;

            if (this.state.spellAttempts >= 3) {
                spellResult.innerHTML = `❌ 拼写不正确<br>正确答案: <strong>${word.word}</strong><br>请照着输入一次吧！`;
                spellResult.className = 'spell-result fail';
                spellInput.value = '';
                spellInput.placeholder = word.word;
                spellInput.focus();
                this.state.spellAttempts = 99;
            } else if (this.state.spellAttempts === 2) {
                const hint = word.word[0] + '_'.repeat(word.word.length - 2) + word.word[word.word.length - 1];
                spellResult.innerHTML = `❌ 再试一次！<br>💡 提示: ${hint} (${word.word.length}个字母)`;
                spellResult.className = 'spell-result fail';
                spellInput.value = '';
                spellInput.focus();
            } else {
                spellResult.textContent = '❌ 拼写不正确，再试一次吧！';
                spellResult.className = 'spell-result fail';
                spellInput.value = '';
                spellInput.focus();
            }

            this.updateWordRecord(word.word, false);
        }
    },

    showHint() {
        const word = this.state.sessionWords[this.state.currentWordIndex].word;
        const hint = word[0] + '_'.repeat(word.length - 2) + word[word.length - 1];
        document.getElementById('spell-result').innerHTML = `💡 提示: ${hint} (${word.length}个字母)`;
        document.getElementById('spell-result').className = 'spell-result info';
        this.state.hintUsed = true;
    },

    showDetailStep() {
        const word = this.state.sessionWords[this.state.currentWordIndex];

        document.getElementById('detail-word').textContent = word.word;
        document.getElementById('detail-phonetic').textContent = word.phonetic;
        document.getElementById('detail-meaning').innerHTML = `<span style="color:#8b5cf6;font-weight:600">${word.pos}</span> ${word.meaning}`;
        document.getElementById('detail-collocation').innerHTML = word.collocation.split(' / ').map(c => `<span style="display:inline-block;background:#ede9fe;color:#6366f1;padding:3px 10px;border-radius:8px;margin:3px 2px;font-size:0.95rem">${c}</span>`).join('');
        document.getElementById('detail-grammar').innerHTML = word.grammar;
        document.getElementById('detail-example-en').innerHTML = `<span style="color:#6366f1;font-weight:600">${word.word}</span>` + word.example_en.slice(word.word.length);
        document.getElementById('detail-example-cn').textContent = word.example_cn;

        if (!this.state.learnedWords.includes(word.word)) {
            this.state.learnedWords.push(word.word);
        }

        const todayLog = this.getTodayLog();
        todayLog.words++;
        if (this.state.spellAttempts === 1 && !this.state.hintUsed) {
            todayLog.correct++;
        }
        this.saveData();

        this.showStep('step-detail');
        this.speakWord();
    },

    speakWord(wordOverride) {
        const word = wordOverride || this.state.sessionWords[this.state.currentWordIndex].word;
        const audio = new Audio();
        audio.src = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(word)}&tl=en&client=tw-ob`;
        audio.playbackRate = this.state.rate;
        audio.play().catch(() => {
            this.speakWordFallback(word);
        });
    },

    speakWordFallback(word) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = this.state.rate;
        utterance.pitch = 1.0;
        const voices = speechSynthesis.getVoices();
        const preferred = ['Samantha', 'Google US English', 'Microsoft Zira', 'Alex', 'Karen', 'Victoria', 'Daniel', 'Google UK English Female', 'Tessa', 'Moira'];
        let voice = null;
        for (const name of preferred) {
            voice = voices.find(v => v.name.includes(name) && v.lang.startsWith('en'));
            if (voice) break;
        }
        if (!voice) {
            voice = voices.find(v => v.lang === 'en-US') || voices.find(v => v.lang.startsWith('en'));
        }
        if (voice) utterance.voice = voice;
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
        const elapsed = Math.max(1, Math.round((Date.now() - this.state.sessionStartTime) / 60000));
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
        this.updateEbbinghausInfo();
    },

    updateEbbinghausInfo() {
        const infoEl = document.getElementById('ebbinghaus-info');
        if (this.state.ebbinghaus) {
            const newCount = this.getEbbinghausNewCount();
            const reviewCount = this.getEbbinghausReviewCount();
            document.getElementById('ebbinghaus-new').textContent = newCount;
            document.getElementById('ebbinghaus-review').textContent = reviewCount;
            document.getElementById('ebbinghaus-total').textContent = newCount + reviewCount;
            infoEl.classList.remove('hidden');
        } else {
            infoEl.classList.add('hidden');
        }
    },

    updateSettings() {
        document.getElementById('setting-daily-count').textContent = this.state.dailyCount;
        document.getElementById('setting-mode').value = this.state.mode;
        document.getElementById('setting-lang').value = this.state.lang;
        document.getElementById('setting-rate').value = this.state.rate;
        document.getElementById('setting-rate-value').textContent = this.state.rate + 'x';
        document.getElementById('setting-ebbinghaus').checked = this.state.ebbinghaus;
        this.updateEbbinghausInfo();
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

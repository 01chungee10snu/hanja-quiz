import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const hanjaData = [
    { hanja: '家', hun: '집', eum: '가' },
    { hanja: '歌', hun: '노래', eum: '가' },
    { hanja: '間', hun: '사이', eum: '간' },
    { hanja: '江', hun: '강', eum: '강' },
    { hanja: '開', hun: '열', eum: '개' },
    { hanja: '去', hun: '갈', eum: '거' },
    { hanja: '車', hun: '수레', eum: '차, 거' },
    { hanja: '建', hun: '세울', eum: '건' },
    { hanja: '結', hun: '맺을', eum: '결' },
    { hanja: '京', hun: '서울', eum: '경' },
    { hanja: '高', hun: '높을', eum: '고' },
    { hanja: '谷', hun: '골', eum: '곡' },
    { hanja: '工', hun: '장인', eum: '공' },
    { hanja: '空', hun: '빌', eum: '공' },
    { hanja: '課', hun: '과목', eum: '과' },
    { hanja: '敎', hun: '가르칠', eum: '교' },
    { hanja: '校', hun: '학교', eum: '교' },
    { hanja: '口', hun: '입', eum: '구' },
    { hanja: '九', hun: '아홉', eum: '구' },
    { hanja: '國', hun: '나라', eum: '국' },
    { hanja: '軍', hun: '군사', eum: '군' },
    { hanja: '金', hun: '쇠', eum: '금' },
    { hanja: '旗', hun: '깃발', eum: '기' },
    { hanja: '氣', hun: '기운', eum: '기' },
    { hanja: '記', hun: '기록할', eum: '기' },
    { hanja: '南', hun: '남녘', eum: '남' },
    { hanja: '男', hun: '사내', eum: '남' },
    { hanja: '內', hun: '안', eum: '내' },
    { hanja: '女', hun: '여자', eum: '녀' },
    { hanja: '年', hun: '해', eum: '년' },
    { hanja: '農', hun: '농사', eum: '농' },
    { hanja: '答', hun: '대답', eum: '답' },
    { hanja: '大', hun: '큰', eum: '대' },
    { hanja: '道', hun: '길', eum: '도' },
    { hanja: '冬', hun: '겨울', eum: '동' },
    { hanja: '同', hun: '한가지', eum: '동' },
    { hanja: '東', hun: '동녘', eum: '동' },
    { hanja: '動', hun: '움직일', eum: '동' },
    { hanja: '洞', hun: '골', eum: '동' },
    { hanja: '登', hun: '오를', eum: '등' },
    { hanja: '來', hun: '올', eum: '래, 내' },
    { hanja: '力', hun: '힘', eum: '력' },
    { hanja: '老', hun: '늙을', eum: '로, 노' },
    { hanja: '六', hun: '여섯', eum: '륙, 육' },
    { hanja: '里', hun: '마을', eum: '리, 이' },
    { hanja: '林', hun: '수풀', eum: '림, 임' },
    { hanja: '立', hun: '설', eum: '립, 입' },
    { hanja: '萬', hun: '일만', eum: '만' },
    { hanja: '每', hun: '매양', eum: '매' },
    { hanja: '面', hun: '낯', eum: '면' },
    { hanja: '名', hun: '이름', eum: '명' },
    { hanja: '命', hun: '목숨', eum: '명' },
    { hanja: '母', hun: '어미', eum: '모' },
    { hanja: '木', hun: '나무', eum: '목' },
    { hanja: '文', hun: '글월', eum: '문' },
    { hanja: '門', hun: '문', eum: '문' },
    { hanja: '物', hun: '물건', eum: '물' },
    { hanja: '米', hun: '쌀', eum: '미' },
    { hanja: '民', hun: '백성', eum: '민' },
    { hanja: '方', hun: '모', eum: '방' },
    { hanja: '百', hun: '일백', eum: '백' },
    { hanja: '白', hun: '흰', eum: '백' },
    { hanja: '父', hun: '아비', eum: '부' },
    { hanja: '夫', hun: '지아비', eum: '부' },
    { hanja: '北', hun: '북녘', eum: '북' },
    { hanja: '不', hun: '아닐', eum: '불, 부' },
    { hanja: '四', hun: '넉', eum: '사' },
    { hanja: '事', hun: '일', eum: '사' },
    { hanja: '山', hun: '뫼', eum: '산' },
    { hanja: '算', hun: '셈', eum: '산' },
    { hanja: '三', hun: '석', eum: '삼' },
    { hanja: '上', hun: '윗', eum: '상' },
    { hanja: '色', hun: '빛', eum: '색' },
    { hanja: '生', hun: '날', eum: '생' },
    { hanja: '西', hun: '서녘', eum: '서' },
    { hanja: '夕', hun: '저녁', eum: '석' },
    { hanja: '先', hun: '먼저', eum: '선' },
    { hanja: '姓', hun: '성', eum: '성' },
    { hanja: '世', hun: '인간', eum: '세' },
    { hanja: '小', hun: '작을', eum: '소' },
    { hanja: '少', hun: '적을', eum: '소' },
    { hanja: '所', hun: '바', eum: '소' },
    { hanja: '手', hun: '손', eum: '수' },
    { hanja: '水', hun: '물', eum: '수' },
    { hanja: '數', hun: '셀', eum: '수' },
    { hanja: '市', hun: '저자', eum: '시' },
    { hanja: '時', hun: '때', eum: '시' },
    { hanja: '食', hun: '밥', eum: '식' },
    { hanja: '植', hun: '심을', eum: '식' },
    { hanja: '室', hun: '집', eum: '실' },
    { hanja: '心', hun: '마음', eum: '심' },
    { hanja: '십', hun: '열', eum: '십' },
    { hanja: '安', hun: '편안할', eum: '안' },
    { hanja: '語', hun: '말씀', eum: '어' },
    { hanja: '言', hun: '말씀', eum: '언' },
    { hanja: '旅', hun: '나그네', eum: '려, 여' },
    { hanja: '然', hun: '그럴', eum: '연' },
    { hanja: '午', hun: '낮', eum: '오' },
    { hanja: '五', hun: '다섯', eum: '오' },
    { hanja: '王', hun: '임금', eum: '왕' },
    { hanja: '外', hun: '바깥', eum: '외' },
    { hanja: '右', hun: '오른쪽', eum: '우' },
    { hanja: '月', hun: '달', eum: '월' },
    { hanja: '有', hun: '있을', eum: '유' },
    { hanja: '遊', hun: '놀', eum: '유' },
    { hanja: '育', hun: '기를', eum: '육' },
    { hanja: '邑', hun: '고을', eum: '읍' },
    { hanja: '二', hun: '두', eum: '이' },
    { hanja: '人', hun: '사람', eum: '인' },
    { hanja: '日', hun: '날', eum: '일' },
    { hanja: '一', hun: '한', eum: '일' },
    { hanja: '入', hun: '들', eum: '입' },
    { hanja: '子', hun: '아들', eum: '자' },
    { hanja: '字', hun: '글자', eum: '자' },
    { hanja: '自', hun: '스스로', eum: '자' },
    { hanja: '長', hun: '길', eum: '장' },
    { hanja: '場', hun: '마당', eum: '장' },
    { hanja: '全', hun: '온전', eum: '전' },
    { hanja: '前', hun: '앞', eum: '전' },
    { hanja: '電', hun: '번개', eum: '전' },
    { hanja: '正', hun: '바를', eum: '정' },
    { hanja: '弟', hun: '아우', eum: '제' },
    { hanja: '祖', hun: '할아비', eum: '조' },
    { hanja: '足', hun: '발', eum: '족' },
    { hanja: '左', hun: '왼', eum: '좌' },
    { hanja: '主', hun: '주인', eum: '주' },
    { hanja: '住', hun: '살', eum: '주' },
    { hanja: '中', hun: '가운데', eum: '중' },
    { hanja: '重', hun: '무거울', eum: '중' },
    { hanja: '地', hun: '땅', eum: '지' },
    { hanja: '紙', hun: '종이', eum: '지' },
    { hanja: '直', hun: '곧을', eum: '직' },
    { hanja: '千', hun: '일천', eum: '천' },
    { hanja: '天', hun: '하늘', eum: '천' },
    { hanja: '川', hun: '내', eum: '천' },
    { hanja: '靑', hun: '푸를', eum: '청' },
    { hanja: '草', hun: '풀', eum: '초' },
    { hanja: '村', hun: '마을', eum: '촌' },
    { hanja: '總', hun: '거느릴', eum: '총' },
    { hanja: '秋', hun: '가을', eum: '추' },
    { hanja: '春', hun: '봄', eum: '춘' },
    { hanja: '出', hun: '날', eum: '출' },
    { hanja: '七', hun: '일곱', eum: '칠' },
    { hanja: '土', hun: '흙', eum: '토' },
    { hanja: '八', hun: '여덟', eum: '팔' },
    { hanja: '便', hun: '편할', eum: '편' },
    { hanja: '平', hun: '평평할', eum: '평' },
    { hanja: '下', hun: '아래', eum: '하' },
    { hanja: '夏', hun: '여름', eum: '하' },
    { hanja: '學', hun: '배울', eum: '학' },
    { hanja: '漢', hun: '한나라', eum: '한' },
    { hanja: '韓', hun: '한국', eum: '한' },
    { hanja: '海', hun: '바다', eum: '해' },
    { hanja: '兄', hun: '형', eum: '형' },
    { hanja: '火', hun: '불', eum: '화' },
    { hanja: '花', hun: '꽃', eum: '화' },
    { hanja: '話', hun: '말씀', eum: '화' },
    { hanja: '活', hun: '살', eum: '활' },
    { hanja: '孝', hun: '효도', eum: '효' },
    { hanja: '後', hun: '뒤', eum: '후' },
    { hanja: '休', hun: '쉴', eum: '휴' }
  ];

  const [gameMode, setGameMode] = useState('menu');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [badges, setBadges] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [statistics, setStatistics] = useState(null);
  const timerRef = useRef(null);

  // localStorage에서 통계 불러오기
  useEffect(() => {
    const savedStats = localStorage.getItem('hanjaQuizStats');
    if (savedStats) {
      setStatistics(JSON.parse(savedStats));
    } else {
      const initialStats = {
        totalGames: 0,
        totalQuestions: 0,
        totalCorrect: 0,
        bestScore: 0,
        bestStreak: 0,
        hanjaStats: {}
      };
      hanjaData.forEach(h => {
        initialStats.hanjaStats[h.hanja] = { correct: 0, wrong: 0, total: 0 };
      });
      setStatistics(initialStats);
      localStorage.setItem('hanjaQuizStats', JSON.stringify(initialStats));
    }
  }, []);

  // 타이머 효과
  useEffect(() => {
    if (isTimerActive && timeLeft > 0 && !showFeedback) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !showFeedback) {
      handleTimeOut();
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [timeLeft, isTimerActive, showFeedback]);

  const handleTimeOut = () => {
    setIsCorrect(false);
    setShowFeedback(true);
    setStreak(0);
    setIsTimerActive(false);

    const currentQ = questions[currentQuestion];
    if (!wrongQuestions.find(q => q.hanja === currentQ.originalData.hanja)) {
      setWrongQuestions([...wrongQuestions, currentQ.originalData]);
    }

    updateHanjaStats(currentQ.originalData.hanja, false);
  };

  const updateHanjaStats = (hanja, isCorrect) => {
    if (!statistics) return;

    const newStats = { ...statistics };
    if (!newStats.hanjaStats[hanja]) {
      newStats.hanjaStats[hanja] = { correct: 0, wrong: 0, total: 0 };
    }

    newStats.hanjaStats[hanja].total += 1;
    if (isCorrect) {
      newStats.hanjaStats[hanja].correct += 1;
      newStats.totalCorrect += 1;
    } else {
      newStats.hanjaStats[hanja].wrong += 1;
    }
    newStats.totalQuestions += 1;

    setStatistics(newStats);
    localStorage.setItem('hanjaQuizStats', JSON.stringify(newStats));
  };

  const saveGameStats = (finalScore, finalMaxStreak) => {
    if (!statistics) return;

    const newStats = { ...statistics };
    newStats.totalGames += 1;
    if (finalScore > newStats.bestScore) {
      newStats.bestScore = finalScore;
    }
    if (finalMaxStreak > newStats.bestStreak) {
      newStats.bestStreak = finalMaxStreak;
    }

    setStatistics(newStats);
    localStorage.setItem('hanjaQuizStats', JSON.stringify(newStats));
  };

  const generateQuestions = (reviewMode = false) => {
    let dataToUse = reviewMode && wrongQuestions.length > 0 ? wrongQuestions : hanjaData;

    const shuffled = [...dataToUse].sort(() => Math.random() - 0.5);

    const generatedQuestions = shuffled.map((item) => {
      const questionType = Math.random() > 0.5 ? 'hanjaToHunEum' : 'hunEumToHanja';

      let wrongAnswers = hanjaData
        .filter(h => h.hanja !== item.hanja)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      let options;
      if (questionType === 'hanjaToHunEum') {
        options = [
          { text: `${item.hun} ${item.eum}`, isCorrect: true },
          ...wrongAnswers.map(w => ({ text: `${w.hun} ${w.eum}`, isCorrect: false }))
        ].sort(() => Math.random() - 0.5);

        return {
          question: `'${item.hanja}' 의 음훈은?`,
          options,
          correctAnswer: `${item.hun} ${item.eum}`,
          hanja: item.hanja,
          originalData: item
        };
      } else {
        options = [
          { text: item.hanja, isCorrect: true },
          ...wrongAnswers.map(w => ({ text: w.hanja, isCorrect: false }))
        ].sort(() => Math.random() - 0.5);

        return {
          question: `'${item.hun} ${item.eum}' 의 한자는?`,
          options,
          correctAnswer: item.hanja,
          hunEum: `${item.hun} ${item.eum}`,
          originalData: item
        };
      }
    });

    setQuestions(generatedQuestions);
  };

  const checkBadges = (currentScore, total, currentStreak) => {
    const newBadges = [];
    const percentage = (currentScore / total) * 100;

    if (percentage === 100) newBadges.push({ name: '전설의 마스터', emoji: '👑', desc: '100점 달성!' });
    if (percentage >= 90) newBadges.push({ name: '푸른 빛의 현자', emoji: '🔮', desc: '90점 이상!' });
    if (currentStreak >= 10) newBadges.push({ name: '빛의 질주', emoji: '🌠', desc: '10연속 정답!' });
    if (currentStreak >= 5) newBadges.push({ name: '집중의 오라', emoji: '✨', desc: '5연속 정답!' });
    if (total >= 50) newBadges.push({ name: '끝없는 도전', emoji: '🏰', desc: '50문제 도전!' });

    return newBadges;
  };

  const handleAnswerClick = (option) => {
    if (showFeedback) return;

    setIsTimerActive(false);
    setSelectedAnswer(option.text);
    setIsCorrect(option.isCorrect);
    setShowFeedback(true);

    const currentQ = questions[currentQuestion];

    if (option.isCorrect) {
      setScore(score + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) {
        setMaxStreak(newStreak);
      }
      updateHanjaStats(currentQ.originalData.hanja, true);
    } else {
      setStreak(0);
      if (!wrongQuestions.find(q => q.hanja === currentQ.originalData.hanja)) {
        setWrongQuestions([...wrongQuestions, currentQ.originalData]);
      }
      updateHanjaStats(currentQ.originalData.hanja, false);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(10);
      setIsTimerActive(true);
    } else {
      const finalScore = score + (isCorrect ? 1 : 0);
      const earnedBadges = checkBadges(finalScore, questions.length, maxStreak);
      setBadges(earnedBadges);
      saveGameStats(finalScore, maxStreak);
      setGameMode('result');
    }
  };

  const handleStartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setStreak(0);
    setMaxStreak(0);
    setTimeLeft(10);
    generateQuestions(false);
    setGameMode('quiz');
    setIsTimerActive(true);
  };

  const handleStartReview = () => {
    if (wrongQuestions.length === 0) return;
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setStreak(0);
    setTimeLeft(10);
    generateQuestions(true);
    setGameMode('review');
    setIsTimerActive(true);
  };

  const handleBackToMenu = () => {
    setGameMode('menu');
    setQuestions([]);
    setIsTimerActive(false);
  };

  const handleViewStats = () => {
    setGameMode('stats');
  };

  const handleResetStats = () => {
    if (window.confirm('정말로 모든 학습 기록을 초기화하시겠습니까?')) {
      const initialStats = {
        totalGames: 0,
        totalQuestions: 0,
        totalCorrect: 0,
        bestScore: 0,
        bestStreak: 0,
        hanjaStats: {}
      };
      hanjaData.forEach(h => {
        initialStats.hanjaStats[h.hanja] = { correct: 0, wrong: 0, total: 0 };
      });
      setStatistics(initialStats);
      localStorage.setItem('hanjaQuizStats', JSON.stringify(initialStats));
      setWrongQuestions([]);
    }
  };

  // 배경 래퍼 (Stars Background)
  const BackgroundWrapper = ({ children }) => (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="stars"></div>
      <div className="relative z-10 w-full max-w-2xl">{children}</div>
    </div>
  );

  // 메뉴 화면
  if (gameMode === 'menu') {
    return (
      <BackgroundWrapper>
        <div className="glass-card rounded-3xl p-8 w-full text-center border-t border-blue-300/20">
          <div className="mb-8 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-200 mb-3 royal-text drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              푸른 빛의 공주
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-100 mb-4 font-serif">
              한자 맞추기 🔮
            </h2>
            <p className="text-blue-200/80 mb-2 font-light tracking-wide">50개의 별을 모으는 여정 · 10초의 마법</p>
          </div>

          {statistics && (
            <div className="glass-button rounded-2xl p-5 mb-6 border border-white/5">
              <div className="text-center mb-3">
                <div className="text-sm font-bold text-cyan-300 tracking-wider">📊 왕국의 기록</div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-slate-400 text-xs mb-1">총 도전</div>
                  <div className="text-lg font-bold text-blue-300">{statistics.totalGames}회</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-slate-400 text-xs mb-1">최고 점수</div>
                  <div className="text-lg font-bold text-emerald-400">{statistics.bestScore}점</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-slate-400 text-xs mb-1">정답률</div>
                  <div className="text-lg font-bold text-cyan-400">
                    {statistics.totalQuestions > 0
                      ? ((statistics.totalCorrect / statistics.totalQuestions) * 100).toFixed(1)
                      : 0}%
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-slate-400 text-xs mb-1">최고 연속</div>
                  <div className="text-lg font-bold text-amber-400">{statistics.bestStreak}✨</div>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4 mb-6">
            <div
              className="group relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-5 text-white cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all overflow-hidden"
              onClick={handleStartQuiz}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="text-left">
                  <div className="text-xl font-bold royal-text text-cyan-50">✨ 퀴즈 시작</div>
                  <div className="text-sm text-blue-200">50개 한자 랜덤 출제</div>
                </div>
                <div className="text-2xl group-hover:translate-x-1 transition-transform">💎</div>
              </div>
            </div>

            {wrongQuestions.length > 0 && (
              <div
                className="group relative bg-gradient-to-r from-purple-600 to-pink-700 rounded-xl p-5 text-white cursor-pointer hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all overflow-hidden"
                onClick={handleStartReview}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className="text-left">
                    <div className="text-xl font-bold royal-text text-pink-50">🔮 복습 모드</div>
                    <div className="text-sm text-pink-200">틀린 {wrongQuestions.length}개 기억 되살리기</div>
                  </div>
                  <div className="text-2xl group-hover:translate-x-1 transition-transform">📚</div>
                </div>
              </div>
            )}

            <div
              className="group relative bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl p-5 text-white cursor-pointer hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all overflow-hidden"
              onClick={handleViewStats}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="text-left">
                  <div className="text-xl font-bold royal-text text-emerald-50">📈 마법서 기록</div>
                  <div className="text-sm text-emerald-200">나의 학습 현황 분석</div>
                </div>
                <div className="text-2xl group-hover:translate-x-1 transition-transform">📜</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleResetStats}
              className="text-xs text-slate-500 hover:text-red-400 transition-colors"
            >
              기록 초기화
            </button>
          </div>
        </div>
      </BackgroundWrapper>
    );
  }

  // 통계 화면
  if (gameMode === 'stats') {
    if (!statistics) return null;

    const hanjaWithStats = hanjaData.map(h => ({
      ...h,
      stats: statistics.hanjaStats[h.hanja] || { correct: 0, wrong: 0, total: 0 },
      accuracy: statistics.hanjaStats[h.hanja]?.total > 0
        ? (statistics.hanjaStats[h.hanja].correct / statistics.hanjaStats[h.hanja].total) * 100
        : 0
    }));

    const weakHanja = hanjaWithStats
      .filter(h => h.stats.total >= 3)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 10);

    const strongHanja = hanjaWithStats
      .filter(h => h.stats.total >= 3)
      .sort((a, b) => b.accuracy - a.accuracy)
      .slice(0, 10);

    return (
      <BackgroundWrapper>
        <div className="glass-card rounded-3xl p-6 w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]">
          <div className="flex justify-between items-center mb-6 shrink-0">
            <h2 className="text-2xl font-bold text-cyan-200 royal-text">📈 마법서 기록</h2>
            <button
              onClick={handleBackToMenu}
              className="bg-slate-700/50 text-slate-200 px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors text-sm"
            >
              ← 돌아가기
            </button>
          </div>

          <div className="overflow-y-auto pr-2 custom-scrollbar space-y-4">
            {/* 전체 통계 */}
            <div className="bg-slate-800/40 rounded-xl p-4 border border-white/5">
              <h3 className="text-lg font-bold text-blue-200 mb-3 flex items-center gap-2">
                <span>🎯</span> 전체 현황
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center border border-white/5">
                  <div className="text-xs text-slate-400">총 게임</div>
                  <div className="text-xl font-bold text-blue-300">{statistics.totalGames}</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center border border-white/5">
                  <div className="text-xs text-slate-400">총 문제</div>
                  <div className="text-xl font-bold text-purple-300">{statistics.totalQuestions}</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center border border-white/5">
                  <div className="text-xs text-slate-400">정답률</div>
                  <div className="text-xl font-bold text-emerald-300">
                    {statistics.totalQuestions > 0
                      ? ((statistics.totalCorrect / statistics.totalQuestions) * 100).toFixed(1)
                      : 0}%
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center border border-white/5">
                  <div className="text-xs text-slate-400">최고 연속</div>
                  <div className="text-xl font-bold text-amber-300">{statistics.bestStreak}🔥</div>
                </div>
              </div>
            </div>

            {/* 약점 한자 */}
            <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20">
              <h3 className="text-lg font-bold text-red-200 mb-3 flex items-center gap-2">
                <span>⚠️</span> 보완이 필요한 마법
              </h3>
              <div className="space-y-2">
                {weakHanja.length > 0 ? (
                  weakHanja.map((h, idx) => (
                    <div key={idx} className="bg-slate-900/60 rounded-lg p-3 flex items-center justify-between border-l-4 border-red-500">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-bold text-white">{h.hanja}</div>
                        <div className="text-sm text-slate-300">{h.hun} {h.eum}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-xs text-slate-500">
                          {h.stats.correct}/{h.stats.total}
                        </div>
                        <div className={`font-bold ${h.accuracy < 50 ? 'text-red-400' : 'text-orange-400'}`}>
                          {h.accuracy.toFixed(0)}%
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-slate-500 py-4 text-sm">아직 충분한 데이터가 없습니다</div>
                )}
              </div>
            </div>

            {/* 강점 한자 */}
            <div className="bg-emerald-900/20 rounded-xl p-4 border border-emerald-500/20">
              <h3 className="text-lg font-bold text-emerald-200 mb-3 flex items-center gap-2">
                <span>✨</span> 마스터한 마법
              </h3>
              <div className="space-y-2">
                {strongHanja.length > 0 ? (
                  strongHanja.map((h, idx) => (
                    <div key={idx} className="bg-slate-900/60 rounded-lg p-3 flex items-center justify-between border-l-4 border-emerald-500">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-bold text-white">{h.hanja}</div>
                        <div className="text-sm text-slate-300">{h.hun} {h.eum}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-xs text-slate-500">
                          {h.stats.correct}/{h.stats.total}
                        </div>
                        <div className="font-bold text-emerald-400">
                          {h.accuracy.toFixed(0)}%
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-slate-500 py-4 text-sm">아직 충분한 데이터가 없습니다</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </BackgroundWrapper>
    );
  }

  // 결과 화면
  if (gameMode === 'result') {
    const percentage = ((score / questions.length) * 100).toFixed(1);
    let message = '';
    let emoji = '';

    if (percentage >= 90) {
      message = '완벽해요! 푸른 빛의 마스터시군요! 👑';
      emoji = '🏆';
    } else if (percentage >= 70) {
      message = '대단해요! 아주 훌륭한 실력이에요! 👏';
      emoji = '🌟';
    } else if (percentage >= 50) {
      message = '잘했어요! 빛이 점점 더 밝아지고 있어요! ✨';
      emoji = '💫';
    } else {
      message = '괜찮아요! 다시 도전하면 더 빛날 거예요! 🔥';
      emoji = '🕯️';
    }

    return (
      <BackgroundWrapper>
        <div className="glass-card rounded-3xl p-8 w-full text-center border-t border-cyan-400/20">
          <div className="mb-6">
            <div className="text-6xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-bounce">{emoji}</div>
            <h2 className="text-3xl font-bold text-white mb-2 royal-text">도전 완료!</h2>
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-2 drop-shadow-sm">
              {score}/{questions.length}
            </div>
            <div className="text-xl text-blue-200 mb-6">{percentage}점</div>
            <p className="text-lg text-slate-200 mb-6 font-light">{message}</p>

            {badges.length > 0 && (
              <div className="bg-amber-900/20 rounded-xl p-4 mb-6 border border-amber-500/20">
                <div className="text-sm font-bold text-amber-200 mb-3 tracking-widest uppercase">획득한 유물</div>
                <div className="flex flex-wrap justify-center gap-2">
                  {badges.map((badge, idx) => (
                    <div key={idx} className="bg-slate-900/80 rounded-lg px-3 py-2 border border-amber-500/30 flex items-center gap-2 shadow-lg">
                      <span className="text-xl">{badge.emoji}</span>
                      <div className="text-left">
                        <div className="text-xs font-bold text-amber-100">{badge.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-emerald-900/30 rounded-lg p-3 border border-emerald-500/30">
                <div className="text-emerald-400 text-xs font-semibold mb-1">정답</div>
                <div className="text-2xl font-bold text-emerald-100">{score}</div>
              </div>
              <div className="bg-red-900/30 rounded-lg p-3 border border-red-500/30">
                <div className="text-red-400 text-xs font-semibold mb-1">오답</div>
                <div className="text-2xl font-bold text-red-100">{questions.length - score}</div>
              </div>
              <div className="bg-amber-900/30 rounded-lg p-3 border border-amber-500/30">
                <div className="text-amber-400 text-xs font-semibold mb-1">최고 연속</div>
                <div className="text-2xl font-bold text-amber-100">{maxStreak}🔥</div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleBackToMenu}
                className="w-full glass-button bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl text-lg font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
              >
                왕국으로 귀환 🏰
              </button>

              {wrongQuestions.length > 0 && (
                <button
                  onClick={handleStartReview}
                  className="w-full glass-button bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all"
                >
                  오답 노트 복습 🔮 ({wrongQuestions.length})
                </button>
              )}

              <button
                onClick={handleViewStats}
                className="w-full text-slate-400 hover:text-white transition-colors text-sm py-2"
              >
                기록 확인하기
              </button>
            </div>
          </div>
        </div>
      </BackgroundWrapper>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-blue-200">
        <div className="animate-pulse">마법 소환 중...</div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const modeLabel = gameMode === 'review' ? '🔮 복습 모드' : '✨ 퀴즈 모드';
  const timerColor = timeLeft <= 3 ? 'text-red-400 drop-shadow-[0_0_5px_rgba(248,113,113,0.8)]' : timeLeft <= 5 ? 'text-amber-400' : 'text-cyan-400';
  const progressPercent = (timeLeft / 10) * 100;

  return (
    <BackgroundWrapper>
      <div className="glass-card rounded-3xl p-6 w-full border-t border-cyan-500/20">
        {/* Header */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-xl font-bold text-cyan-200 royal-text">푸른 빛의 한자</h1>
              <div className="text-xs text-blue-300/70">{modeLabel}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400">점수</div>
              <div className="text-2xl font-bold text-white">{score}<span className="text-slate-500 text-sm">/{questions.length}</span></div>
              {streak > 0 && (
                <div className="text-sm font-bold text-amber-400 animate-pulse">🔥 {streak}연속</div>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-4">
            <div className="flex mb-1 items-center justify-between text-xs text-slate-400">
              <span>진행률</span>
              <span>{((currentQuestion / questions.length) * 100).toFixed(0)}%</span>
            </div>
            <div className="overflow-hidden h-1.5 flex rounded-full bg-slate-700/50">
              <div
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                className="shadow-[0_0_10px_rgba(34,211,238,0.6)] flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-400 transition-all duration-500"
              />
            </div>
          </div>

          {/* Timer */}
          {!showFeedback && (
            <div className="bg-slate-800/50 rounded-xl p-3 border border-white/5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-xs text-slate-400">남은 시간</span>
                <span className={`text-2xl font-bold font-mono ${timerColor}`}>{timeLeft}</span>
              </div>
              <div className="overflow-hidden h-1 flex rounded-full bg-slate-700/50 relative z-10">
                <div
                  style={{ width: `${progressPercent}%` }}
                  className={`transition-all duration-1000 ${timeLeft <= 3 ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]'
                    }`}
                />
              </div>
            </div>
          )}
        </div>

        {/* Question */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full"></div>
          <div className="relative glass-button bg-gradient-to-br from-indigo-900/50 to-slate-900/50 rounded-2xl p-8 text-center border border-indigo-400/30">
            <h2 className="text-4xl font-bold text-white royal-text drop-shadow-md">{currentQ.question}</h2>
          </div>
        </div>

        {/* Options - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {currentQ.options.map((option, index) => {
            let buttonClass = "w-full p-5 text-lg font-semibold rounded-xl transition-all duration-300 border relative overflow-hidden ";

            if (!showFeedback) {
              buttonClass += "bg-slate-800/40 border-slate-600/30 hover:border-cyan-400/50 hover:bg-slate-700/50 text-slate-200 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]";
            } else if (option.isCorrect) {
              buttonClass += "bg-emerald-500/20 border-emerald-400 text-emerald-100 shadow-[0_0_20px_rgba(52,211,153,0.4)] scale-105 z-10";
            } else if (selectedAnswer === option.text) {
              buttonClass += "bg-red-500/20 border-red-400 text-red-100";
            } else {
              buttonClass += "bg-slate-900/20 border-transparent text-slate-600 opacity-50";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                disabled={showFeedback}
                className={buttonClass}
              >
                <div className="flex items-center justify-center gap-2 relative z-10">
                  <span className="break-all">{option.text}</span>
                  {showFeedback && option.isCorrect && <span className="text-xl animate-pulse">✨</span>}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className="mb-2 animate-fade-in-up">
            <div className={`rounded-xl p-4 border ${isCorrect ? 'bg-emerald-900/20 border-emerald-500/30' : 'bg-red-900/20 border-red-500/30'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl filter drop-shadow-lg">{isCorrect ? '🎉' : (timeLeft === 0 ? '⏰' : '💧')}</span>
                  <div>
                    <div className={`text-lg font-bold ${isCorrect ? 'text-emerald-300' : 'text-red-300'}`}>
                      {isCorrect ? '정답입니다!' : timeLeft === 0 ? '시간이 다 됐어요...' : '틀렸습니다...'}
                    </div>
                    {!isCorrect && (
                      <div className="text-slate-300 text-sm mt-1">
                        정답은 <span className="font-bold text-emerald-300 underline underline-offset-2">{currentQ.correctAnswer}</span> 입니다.
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleNextQuestion}
                  className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-lg font-semibold transition-colors border border-white/10"
                >
                  {currentQuestion + 1 < questions.length ? '다음 →' : '결과 보기'}
                </button>
              </div>
            </div>
          </div>
        )}

        {!showFeedback && (
          <div className="text-center text-slate-500 text-xs mt-4">
            ⚡ 10초의 마법이 흐르고 있습니다
          </div>
        )}
      </div>
    </BackgroundWrapper>
  );
};

export default App;

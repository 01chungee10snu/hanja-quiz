import React, { useMemo, useState } from 'react';

const OPTION_COUNT = 5;

const HANJA_6 = [
  { h: '價', hun: '값', eum: '가' }, { h: '可', hun: '옳을', eum: '가' },
  { h: '感', hun: '느낄', eum: '감' }, { h: '開', hun: '열', eum: '개' },
  { h: '客', hun: '손', eum: '객' }, { h: '結', hun: '맺을', eum: '결' },
  { h: '敬', hun: '공경할', eum: '경' }, { h: '固', hun: '굳을', eum: '고' },
  { h: '功', hun: '공', eum: '공' }, { h: '空', hun: '빌', eum: '공' },
  { h: '課', hun: '매길', eum: '과' }, { h: '官', hun: '벼슬', eum: '관' },
  { h: '觀', hun: '볼', eum: '관' }, { h: '廣', hun: '넓을', eum: '광' },
  { h: '郡', hun: '고을', eum: '군' }, { h: '近', hun: '가까울', eum: '근' },
  { h: '期', hun: '기약할', eum: '기' }, { h: '吉', hun: '길할', eum: '길' },
  { h: '念', hun: '생각할', eum: '념' }, { h: '達', hun: '통할', eum: '달' },
  { h: '談', hun: '말씀', eum: '담' }, { h: '對', hun: '대답할', eum: '대' },
  { h: '德', hun: '큰', eum: '덕' }, { h: '到', hun: '이를', eum: '도' },
  { h: '動', hun: '움직일', eum: '동' }, { h: '落', hun: '떨어질', eum: '락' },
  { h: '旅', hun: '나그네', eum: '려' }, { h: '禮', hun: '예도', eum: '례' },
  { h: '路', hun: '길', eum: '로' }, { h: '論', hun: '논의할', eum: '론' },
  { h: '流', hun: '흐를', eum: '류' }, { h: '律', hun: '법', eum: '률' },
  { h: '理', hun: '다스릴', eum: '리' }, { h: '末', hun: '끝', eum: '말' },
  { h: '問', hun: '물을', eum: '문' }, { h: '未', hun: '아닐', eum: '미' },
  { h: '發', hun: '필', eum: '발' }, { h: '富', hun: '부유할', eum: '부' },
  { h: '産', hun: '낳을', eum: '산' }, { h: '席', hun: '자리', eum: '석' },
  { h: '說', hun: '말씀', eum: '설' }, { h: '誠', hun: '정성', eum: '성' },
  { h: '守', hun: '지킬', eum: '수' }, { h: '是', hun: '이', eum: '시' },
  { h: '永', hun: '길', eum: '영' }, { h: '園', hun: '동산', eum: '원' },
  { h: '議', hun: '의논할', eum: '의' }, { h: '再', hun: '두', eum: '재' },
  { h: '節', hun: '마디', eum: '절' }, { h: '知', hun: '알', eum: '지' },
  { h: '冊', hun: '책', eum: '책' }, { h: '忠', hun: '충성', eum: '충' },
  { h: '親', hun: '친할', eum: '친' }, { h: '波', hun: '물결', eum: '파' },
  { h: '韓', hun: '한국', eum: '한' }, { h: '惠', hun: '은혜', eum: '혜' },
  { h: '效', hun: '본받을', eum: '효' }, { h: '別', hun: '다를', eum: '별' },
  { h: '復', hun: '돌아올', eum: '복' }, { h: '船', hun: '배', eum: '선' },
  { h: '雪', hun: '눈', eum: '설' }, { h: '歲', hun: '해', eum: '세' },
  { h: '收', hun: '거둘', eum: '수' }, { h: '式', hun: '법', eum: '식' },
  { h: '移', hun: '옮길', eum: '이' }, { h: '在', hun: '있을', eum: '재' },
  { h: '絶', hun: '끊을', eum: '절' }, { h: '宗', hun: '마루', eum: '종' },
  { h: '至', hun: '이를', eum: '지' }, { h: '淸', hun: '맑을', eum: '청' },
  { h: '蟲', hun: '벌레', eum: '충' }, { h: '宅', hun: '집', eum: '택' },
  { h: '片', hun: '조각', eum: '편' }, { h: '解', hun: '풀', eum: '해' },
  { h: '號', hun: '이름', eum: '호' }, { h: '訓', hun: '가르칠', eum: '훈' },
  { h: '備', hun: '갖출', eum: '비' }, { h: '想', hun: '생각할', eum: '상' },
  { h: '選', hun: '가릴', eum: '선' }, { h: '洗', hun: '씻을', eum: '세' },
  { h: '完', hun: '완전할', eum: '완' }, { h: '恩', hun: '은혜', eum: '은' },
  { h: '益', hun: '더할', eum: '익' }, { h: '才', hun: '재주', eum: '재' },
  { h: '接', hun: '이을', eum: '접' }, { h: '進', hun: '나아갈', eum: '진' },
  { h: '體', hun: '몸', eum: '체' }, { h: '取', hun: '취할', eum: '취' },
  { h: '統', hun: '거느릴', eum: '통' }, { h: '豐', hun: '풍년', eum: '풍' },
  { h: '向', hun: '향할', eum: '향' }, { h: '黃', hun: '누를', eum: '황' }
];

const WORDS_6 = [
  { w: '價格', r: '가격', m: '물건의 값' }, { w: '感動', r: '감동', m: '마음이 크게 움직임' },
  { w: '結果', r: '결과', m: '어떤 일의 마지막 상태' }, { w: '敬語', r: '경어', m: '상대방을 높이는 말' },
  { w: '空間', r: '공간', m: '비어 있거나 일이 이루어지는 자리' }, { w: '課題', r: '과제', m: '해결해야 할 일' },
  { w: '觀察', r: '관찰', m: '자세히 살펴봄' }, { w: '期間', r: '기간', m: '어느 때부터 어느 때까지' },
  { w: '吉日', r: '길일', m: '좋은 날' }, { w: '念願', r: '염원', m: '마음속 깊이 바람' },
  { w: '達成', r: '달성', m: '목표를 이룸' }, { w: '談話', r: '담화', m: '서로 이야기함' },
  { w: '對話', r: '대화', m: '마주하여 주고받는 말' }, { w: '德目', r: '덕목', m: '바람직한 품성' },
  { w: '到着', r: '도착', m: '목적한 곳에 다다름' }, { w: '落下', r: '낙하', m: '아래로 떨어짐' },
  { w: '旅行', r: '여행', m: '다른 곳으로 떠나 다님' }, { w: '禮節', r: '예절', m: '예의에 맞는 절차' },
  { w: '道路', r: '도로', m: '사람이나 차가 다니는 길' }, { w: '論理', r: '논리', m: '이치에 맞는 생각의 흐름' },
  { w: '流水', r: '유수', m: '흐르는 물' }, { w: '法律', r: '법률', m: '나라에서 정한 규범' },
  { w: '理由', r: '이유', m: '어떤 일의 까닭' }, { w: '問答', r: '문답', m: '묻고 대답함' },
  { w: '未來', r: '미래', m: '아직 오지 않은 때' }, { w: '發表', r: '발표', m: '드러내어 알림' },
  { w: '富者', r: '부자', m: '재물이 많은 사람' }, { w: '生産', r: '생산', m: '가치를 만들어 냄' },
  { w: '說明', r: '설명', m: '알기 쉽게 풀어 말함' }, { w: '守備', r: '수비', m: '지키고 막음' },
  { w: '是非', r: '시비', m: '옳고 그름' }, { w: '議論', r: '의논', m: '의견을 주고받아 논함' },
  { w: '再生', r: '재생', m: '다시 살아나거나 만들어짐' }, { w: '忠誠', r: '충성', m: '진심으로 정성을 다함' },
  { w: '韓國', r: '한국', m: '대한민국' }, { w: '恩惠', r: '은혜', m: '고맙게 베푸는 도움' },
  { w: '效果', r: '효과', m: '작용으로 생기는 결과' }, { w: '復習', r: '복습', m: '배운 것을 다시 익힘' },
  { w: '船長', r: '선장', m: '배를 책임지는 사람' }, { w: '雪山', r: '설산', m: '눈이 덮인 산' },
  { w: '歲月', r: '세월', m: '흘러가는 시간' }, { w: '收入', r: '수입', m: '돈이나 물건이 들어옴' },
  { w: '形式', r: '형식', m: '겉으로 나타나는 방식' }, { w: '移動', r: '이동', m: '위치를 옮김' },
  { w: '在學', r: '재학', m: '학교에 적을 두고 배움' }, { w: '絶對', r: '절대', m: '아무 조건이나 제한이 없음' },
  { w: '淸水', r: '청수', m: '맑은 물' }, { w: '宅地', r: '택지', m: '집을 지을 땅' },
  { w: '片道', r: '편도', m: '가거나 오는 한쪽 길' }, { w: '解答', r: '해답', m: '문제의 답' },
  { w: '號令', r: '호령', m: '큰 소리로 명령함' }, { w: '準備', r: '준비', m: '미리 갖추어 둠' },
  { w: '思想', r: '사상', m: '생각이나 견해' }, { w: '選手', r: '선수', m: '경기에 나가는 사람' },
  { w: '洗手', r: '세수', m: '손이나 얼굴을 씻음' }, { w: '數學', r: '수학', m: '수와 도형 등을 연구하는 학문' },
  { w: '植物', r: '식물', m: '뿌리와 줄기, 잎으로 자라는 생물' }, { w: '完全', r: '완전', m: '모자람이나 흠이 없음' },
  { w: '才能', r: '재능', m: '타고난 능력' }, { w: '接近', r: '접근', m: '가까이 다가감' },
  { w: '進行', r: '진행', m: '일을 앞으로 해 나감' }, { w: '體育', r: '체육', m: '몸을 튼튼하게 기르는 활동' },
  { w: '統一', r: '통일', m: '여럿을 하나로 합침' }, { w: '方向', r: '방향', m: '향하는 쪽이나 길' },
  { w: '希望', r: '희망', m: '앞으로 잘되기를 바라는 마음' }
];

const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);
const labelHanja = (item) => `${item.hun} ${item.eum}`;
const labelTriple = (items) => items.map((item) => item.w).join(' · ');
const readTriple = (items) => items.map((item) => item.r).join(' → ');

const makeOptions = (answer, pool, pick) => {
  const seen = new Set([answer]);
  const wrong = shuffle(pool).map(pick).filter((value) => {
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  }).slice(0, OPTION_COUNT - 1);
  return shuffle([answer, ...wrong]).map((text) => ({ text, isCorrect: text === answer }));
};

const makeWordTriples = (words) => {
  const shuffled = shuffle(words);
  const triples = [];
  for (let i = 0; i <= shuffled.length - 3; i += 3) {
    triples.push(shuffled.slice(i, i + 3));
  }
  return triples;
};

function buildQuestionPool() {
  const type1 = HANJA_6.map((item) => ({
    typeNo: 1,
    kind: '유형1 · 한자보고 음훈 맞추기',
    prompt: item.h,
    helper: '이 한자의 음훈을 고르세요.',
    answer: labelHanja(item),
    options: makeOptions(labelHanja(item), HANJA_6.filter((v) => v.h !== item.h), labelHanja)
  }));

  const type2 = HANJA_6.map((item) => ({
    typeNo: 2,
    kind: '유형2 · 음훈 보고 한자 맞추기',
    prompt: labelHanja(item),
    helper: '이 음훈에 맞는 한자를 고르세요.',
    answer: item.h,
    options: makeOptions(item.h, HANJA_6.filter((v) => v.h !== item.h), (v) => v.h)
  }));

  const type3 = WORDS_6.map((item) => ({
    typeNo: 3,
    kind: '유형3 · 한글 음만 보고 한자 단어 맞추기',
    prompt: item.r,
    helper: '한글 음에 맞는 한자 단어를 고르세요.',
    answer: item.w,
    options: makeOptions(item.w, WORDS_6.filter((v) => v.w !== item.w), (v) => v.w)
  }));

  const triples = makeWordTriples(WORDS_6);
  const type4 = triples.map((triple) => ({
    typeNo: 4,
    kind: '유형4 · 한글 음만 보고 한자 단어 3개 연속 맞추기',
    prompt: readTriple(triple),
    helper: '순서대로 맞는 한자 단어 3개 묶음을 고르세요.',
    answer: labelTriple(triple),
    options: makeOptions(labelTriple(triple), triples.filter((items) => labelTriple(items) !== labelTriple(triple)), labelTriple)
  }));

  return shuffle([...type1, ...type2, ...type3, ...type4]);
}

export default function App() {
  const [questions, setQuestions] = useState(() => buildQuestionPool());
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const current = questions[index];
  const score = answers.filter((answer) => answer.isCorrect).length;
  const percentage = answers.length ? Math.round((score / answers.length) * 100) : 0;

  const weakList = useMemo(
    () => answers.filter((answer) => !answer.isCorrect).slice(-8).reverse(),
    [answers]
  );

  const startNew = () => {
    setQuestions(buildQuestionPool());
    setIndex(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  };

  const choose = (option) => {
    if (selected) return;
    const entry = {
      no: index + 1,
      kind: current.kind,
      prompt: current.prompt,
      selected: option.text,
      correct: current.answer,
      isCorrect: option.isCorrect
    };
    setSelected(option.text);
    setAnswers((prev) => [...prev, entry]);
  };

  const next = () => {
    if (index + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setIndex((value) => value + 1);
    setSelected(null);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="stars" />
      <main className="relative z-10 w-full max-w-4xl">
        <section className="glass-card rounded-3xl p-6 md:p-8 border-t border-cyan-400/20">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-cyan-300/80">6급 자격증 대비</p>
              <h1 className="royal-text text-3xl md:text-5xl font-bold text-cyan-100 mt-1">한자 음훈과 한자단어 퀴즈</h1>
              <p className="text-blue-200/80 mt-2">4개 유형으로 분류해서 5지선다 랜덤 출제합니다. 보기 글자도 크게 키웠습니다.</p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center min-w-64">
              <div className="bg-slate-900/50 rounded-xl p-3 border border-white/5">
                <div className="text-xs text-slate-400">채점</div>
                <div className="text-2xl font-bold text-white">{score}/{answers.length}</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-3 border border-white/5">
                <div className="text-xs text-slate-400">정답률</div>
                <div className="text-2xl font-bold text-emerald-300">{percentage}%</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-3 border border-white/5">
                <div className="text-xs text-slate-400">문항</div>
                <div className="text-2xl font-bold text-blue-300">{index + 1}/{questions.length}</div>
              </div>
            </div>
          </header>

          {!finished ? (
            <>
              <div className="mb-5">
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>{current.kind}</span>
                  <span>{Math.round(((index + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-cyan-400 transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
                </div>
              </div>

              <div className="glass-button rounded-2xl p-8 text-center border border-indigo-400/30 mb-5">
                <p className="text-sm md:text-base font-bold tracking-widest text-cyan-200/80 mb-3">{current.kind}</p>
                <h2 className="royal-text text-5xl md:text-7xl font-bold text-white leading-tight">{current.prompt}</h2>
                <p className="text-blue-100/75 mt-4 text-base md:text-lg">{current.helper}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {current.options.map((option) => {
                  const revealed = Boolean(selected);
                  const picked = selected === option.text;
                  const tone = !revealed
                    ? 'bg-slate-800/50 border-slate-600/40 text-slate-100 hover:border-cyan-300 hover:bg-slate-700/70'
                    : option.isCorrect
                      ? 'bg-emerald-500/20 border-emerald-300 text-emerald-50 shadow-[0_0_18px_rgba(52,211,153,0.35)]'
                      : picked
                        ? 'bg-red-500/20 border-red-300 text-red-50'
                        : 'bg-slate-900/30 border-transparent text-slate-500';

                  return (
                    <button
                      key={option.text}
                      type="button"
                      onClick={() => choose(option)}
                      disabled={revealed}
                      className={`min-h-24 rounded-2xl border p-5 text-2xl md:text-3xl font-bold leading-snug transition-all ${tone}`}
                    >
                      {option.text}
                    </button>
                  );
                })}
              </div>

              {selected && (
                <div className={`mt-5 rounded-xl border p-4 ${selected === current.answer ? 'bg-emerald-900/25 border-emerald-500/30' : 'bg-red-900/25 border-red-500/30'}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <div className={`font-bold ${selected === current.answer ? 'text-emerald-200' : 'text-red-200'}`}>
                        {selected === current.answer ? '정답입니다.' : '오답입니다.'}
                      </div>
                      <div className="text-sm text-slate-300 mt-1">선택: {selected} · 정답: <span className="font-bold text-emerald-200">{current.answer}</span></div>
                    </div>
                    <button onClick={next} className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg font-bold border border-white/10">
                      {index + 1 === questions.length ? '결과 보기' : '다음 문제'}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h2 className="royal-text text-4xl font-bold text-white mb-2">이번 세션 채점 완료</h2>
              <p className="text-blue-200 mb-6">{score}/{answers.length} 정답 · 정답률 {percentage}%</p>
              <button onClick={startNew} className="glass-button bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl text-lg font-bold mb-6">
                새 랜덤 세트 시작
              </button>

              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="bg-slate-900/40 rounded-xl p-4 border border-cyan-400/20">
                  <h3 className="font-bold text-cyan-100 mb-3">이번 세션 피드백</h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar pr-1">
                    {answers.map((answer) => (
                      <div key={`${answer.no}-${answer.prompt}`} className={`rounded-lg p-3 border ${answer.isCorrect ? 'bg-emerald-900/20 border-emerald-500/20' : 'bg-red-900/20 border-red-500/20'}`}>
                        <div className="flex justify-between gap-3 text-xs font-bold mb-1">
                          <span className="text-cyan-200">{answer.no}. {answer.kind}</span>
                          <span className={answer.isCorrect ? 'text-emerald-300' : 'text-red-300'}>{answer.isCorrect ? '정답' : '오답'}</span>
                        </div>
                        <div className="text-sm text-slate-100">{answer.prompt}</div>
                        <div className="text-xs text-slate-300 mt-1">선택: {answer.selected}</div>
                        {!answer.isCorrect && <div className="text-xs text-emerald-200 mt-1">정답: {answer.correct}</div>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/40 rounded-xl p-4 border border-red-400/20">
                  <h3 className="font-bold text-red-100 mb-3">바로 복습할 항목</h3>
                  {weakList.length > 0 ? (
                    <div className="space-y-2">
                      {weakList.map((answer) => (
                        <div key={`weak-${answer.no}-${answer.prompt}`} className="rounded-lg p-3 bg-red-950/30 border border-red-500/20">
                          <div className="text-xs text-red-200 font-bold">{answer.kind}</div>
                          <div className="text-sm text-slate-100 mt-1">{answer.prompt}</div>
                          <div className="text-xs text-emerald-200 mt-1">정답: {answer.correct}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-400">이번 세션 오답이 없습니다.</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

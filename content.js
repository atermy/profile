// 여기만 수정하면 사이트 내용이 바뀜
const PROFILE = {
  brandName: "x",
  kicker: "Hello",
  headline: "닉네임 / 핸들",
  subheadline: "관심 분야 2~3개 + 지금 하는 일 한 줄",

  tags: {
    mono: "OSINT-safe intro",
    big: "Portfolio-lite",
    small: "No over-sharing",
  },

  ctas: [
    // { label: "GitHub", href: "https://github.com/x" },
    // { label: "Blog", href: "https://example.com" },
    { label: "Issues로 연락", href: "https://github.com/x/profile/issues" },
  ],

  meta: [
    // 과노출 위험 큰 정보(학교, 지역, 생년 등)는 넣지 않는 걸 추천
    { k: "Interested in", v: "Chem · Data · Robotics" },
    { k: "Currently", v: "Building things & writing notes" },
  ],

  aboutHint: "짧고 안전하게, 지금 하는 것만.",
  aboutText:
    "긴 이력 대신, 요즘 집중하는 주제와 만들어본 것들을 짧게 정리해둠. 개인을 특정할 수 있는 정보는 의도적으로 제외함.",

  pills: ["Chemistry", "Modeling", "Hardware", "Python", "Writing"],

  focus: [
    "관찰/측정 → 데이터 정리 → 간단한 모델링",
    "작게 만들고 빠르게 반복 개선",
    "실험/제작 과정 문서화",
  ],

  skills: [
    "Python (data/automation)",
    "Arduino / basic electronics",
    "HTML/CSS/JS (static site)",
    "보고서/발표 자료 정리",
  ],

  projects: [
    {
      title: "Project A",
      desc: "무엇을 만들었는지 1줄 + 무엇이 달라졌는지 1줄.",
      tags: ["Role", "Tech", "Outcome"],
      links: [
        { label: "Repo", href: "https://github.com/x/PROJECT_A" },
        // { label: "Demo", href: "https://x.github.io/PROJECT_A/" },
      ],
    },
    {
      title: "Project B",
      desc: "짧게. 너무 자세한 스펙/시간/장소는 생략.",
      tags: ["Prototype", "Data", "Iteration"],
      links: [{ label: "Repo", href: "https://github.com/x/PROJECT_B" }],
    },
    {
      title: "Project C",
      desc: "읽는 사람이 10초 안에 이해하게 쓰기.",
      tags: ["Experiment", "Analysis"],
      links: [{ label: "Repo", href: "https://github.com/x/PROJECT_C" }],
    },
  ],

  notes: [
    "요즘 관심: (키워드 3개 정도)",
    "읽은 것: (책/논문 제목만, 개인 스토리 최소화)",
    "만드는 중: (공개해도 되는 수준의 짧은 문장)",
  ],

  contact: [
    { label: "GitHub", href: "https://github.com/x" },
    { label: "Profile repo", href: "https://github.com/x/profile" },
    { label: "Contact (Issues)", href: "https://github.com/x/profile/issues" },
  ],

  contactFine:
    "개인 이메일/전화번호 대신 GitHub Issues로 받는 구성을 기본값으로 둠.",

  footerLeft: "© x",
  footerRight: "Last updated: 2026",
};

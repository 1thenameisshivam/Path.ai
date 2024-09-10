/* eslint-disable react/jsx-no-undef */
export const navData = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Create",
    route: "/create",
  },
  {
    name: "Paths",
    route: "/paths",
  },
  {
    name: "About",
    route: "/about",
  },
];

export const featuresData = [
  {
    name: "AI-Powered",
    logo: "🤖",
    description: [
      "Let our AI analyze and",
      "suggest personalized learning roadmaps",
      " for various technologies.",
    ],
  },
  {
    name: "AI-Assessment",
    logo: "👨🏻‍🏫",
    description: [
      "Use AI-powered quizzes ",
      "and challenges to evaluate",
      " yours skill level. ",
    ],
  },
  {
    name: "Create Paths",
    logo: "🏔️",
    description: [
      "creatte your own path",
      "of learning any technology",
      "you want to learn",
    ],
  },
  {
    name: "Learning Resources",
    logo: "🪶",
    description: [
      "Leverage AI to curate ",
      "the most effective resources",
      " for each step of your path.",
    ],
  },
  {
    name: "Save & Sharing",
    logo: "↗️",
    description: [
      "save and Share your ",
      "created paths with yor friend",
      "to help them grow",
    ],
  },
  {
    name: "Authentication",
    logo: "👨‍💻",
    description: [
      "secure Authentication system",
      "with google sign in",
      "firebase",
    ],
  },
];

export const prompt =
  "you are professional roadmap creater and i want to learn {react} and i am {biginer} and i want to learn in {25} days. you have to generate a full roadmap not outline, for {25} days in array of object in which each object has has multiple things like topics covered ,between how many days, authentic resourse link if possible , vedios link if possible, defficulty level, etc. keep in mind output only in array of object, nothing outside. accept array hear is example [{topic: 'React Fundamentals',days: 1-5,difficulty: 'Beginner',resources: [{type: 'Documentation',title: 'Official React Documentation',link: 'https://reactjs.org/',},],},], optput only array of object no any text outside.";

export const level = [
  {
    id: 1,
    title: "Beginner",
    desc: "start from scratch",
    icon: "😊",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "spend wisely",
    icon: "👨‍💻",
  },
  {
    id: 3,
    title: "advance",
    desc: "invest in yourself",
    icon: "🚀",
  },
  {
    id: 4,
    title: "Experianced",
    desc: "king level knowledge ",
    icon: "👑",
  },
];

export const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCCKET,
  VITE_MESSAGE_SENDER_ID,
  VITE_APP_ID,
  VITE_GEMINI_API_KEY,
} = import.meta.env;

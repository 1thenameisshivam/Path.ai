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

export const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCCKET,
  VITE_MESSAGE_SENDER_ID,
  VITE_APP_ID,
} = import.meta.env;

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

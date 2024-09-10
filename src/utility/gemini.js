import { GoogleGenerativeAI } from "@google/generative-ai";
import { VITE_GEMINI_API_KEY } from "./constant";
const apiKey = VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 1.25,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'you are professional roadmap creater and i want to learn react and i am biginer and i want to learn in  days. you have to generate a full roadmap not outline, for 60 days in array of object in which each object has has multiple things like topics covered ,between how many days, authentic resourse link if possible , vedios link if possible, defficulty level, etc. keep in mind output only in array of object, nothing outside. accept array haere is example  [\n  {\n    topic: "React Fundamentals",\n    days: 1-5,\n    difficulty: "Beginner",\n    resources: [\n      {\n        type: "Documentation",\n        title: "Official React Documentation",\n        link: "https://reactjs.org/",\n      },\n    ],\n  },],  optput only array of object no any text outside.\n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[{"topic": "Introduction to React", "days": "1-3", "difficulty": "Beginner", "resources": [{"type": "Documentation", "title": "Official React Website", "link": "https://react.dev/"}, {"type": "Tutorial", "title": "React Tutorial for Beginners (FreeCodeCamp)", "link": "https://www.youtube.com/watch?v=bMknfKXIFA8"}]}, {"topic": "JSX and Components", "days": "4-7", "difficulty": "Beginner", "resources": [{"type": "Documentation", "title": "React JSX Documentation", "link": "https://react.dev/learn/writing-markup-with-jsx"}, {"type": "Article", "title": "Understanding React Components", "link": "https://www.robinwieruch.de/react-components-explained/"}]}, {"topic": "Props and State", "days": "8-12", "difficulty": "Beginner", "resources": [{"type": "Documentation", "title": "React Props and State", "link": "https://react.dev/learn/passing-props-to-a-component"}, {"type": "Tutorial", "title": "React Props and State Explained (Web Dev Simplified)", "link": "https://www.youtube.com/watch?v=d1xZTPY98Oc"}]}, {"topic": "Lifecycle Methods", "days": "13-15", "difficulty": "Intermediate", "resources": [{"type": "Documentation", "title": "React Lifecycle Methods", "link": "https://react.dev/reference/react/useEffect#useeffect"}, {"type": "Article", "title": "Understanding React Lifecycle Methods", "link": "https://www.freecodecamp.org/news/react-lifecycle-methods-tutorial/"}]}, {"topic": "Event Handling", "days": "16-18", "difficulty": "Beginner", "resources": [{"type": "Documentation", "title": "React Event Handling", "link": "https://react.dev/learn/handling-events"}, {"type": "Tutorial", "title": "React Event Handling (Codevolution)", "link": "https://www.youtube.com/watch?v=Ke90Tje7VS0"}]}, {"topic": "Conditional Rendering", "days": "19-21", "difficulty": "Beginner", "resources": [{"type": "Documentation", "title": "React Conditional Rendering", "link": "https://react.dev/learn/conditional-rendering"}, {"type": "Article", "title": "7 Ways to Implement Conditional Rendering in React", "link": "https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications"}]}, {"topic": "Lists and Keys", "days": "22-24", "difficulty": "Beginner", "resources": [{"type": "Documentation", "title": "React Lists and Keys", "link": "https://react.dev/learn/rendering-lists"}, {"type": "Tutorial", "title": "React Lists and Keys Explained (Traversy Media)", "link": "https://www.youtube.com/watch?v=ScT2tQlwfu4"}]}, {"topic": "Forms and Form Handling", "days": "25-28", "difficulty": "Intermediate", "resources": [{"type": "Documentation", "title": "React Forms", "link": "https://react.dev/learn/forms"}, {"type": "Tutorial", "title": "React Forms Tutorial (Net Ninja)", "link": "https://www.youtube.com/playlist?list=PL4cUxeGInDj-kxJfS-KbBB0UnU6LOsN_v"}]}, {"topic": "HTTP Requests with Fetch or Axios", "days": "29-32", "difficulty": "Intermediate", "resources": [{"type": "Documentation", "title": "Fetch API Documentation", "link": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}, {"type": "Tutorial", "title": "Making HTTP Requests with Axios", "link": "https://www.digitalocean.com/community/tutorials/react-axios-react-http-client"}]}, {"topic": "Introduction to React Router", "days": "33-36", "difficulty": "Intermediate", "resources": [{"type": "Documentation", "title": "React Router Documentation", "link": "https://reactrouter.com/"}, {"type": "Tutorial", "title": "React Router Tutorial for Beginners (The Net Ninja)", "link": "https://www.youtube.com/playlist?list=PL4cUxeGInDj-RRpqgFyvXfWejUES-iSb_"}]}, {"topic": "Styling React Applications", "days": "37-40", "difficulty": "Beginner", "resources": [{"type": "Documentation", "title": "Inline Styles, CSS Modules, CSS-in-JS Libraries", "link": "https://react.dev/learn/adding-styles"}, {"type": "Tutorial", "title": "Styling React Components (Ben Awad)", "link": "https://www.youtube.com/watch?v=C9-0cEr-dVA"}]}, {"topic": "State Management with Context API", "days": "41-45", "difficulty": "Intermediate", "resources": [{"type": "Documentation", "title": "React Context API Documentation", "link": "https://react.dev/learn/passing-data-deeply-with-context"}, {"type": "Tutorial", "title": "React Context API Explained (Web Dev Simplified)", "link": "https://www.youtube.com/watch?v=35lXWvRKaYQ"}]}, {"topic": "Introduction to Redux (Optional)", "days": "46-52", "difficulty": "Intermediate", "resources": [{"type": "Documentation", "title": "Redux Documentation", "link": "https://redux.js.org/"}, {"type": "Tutorial", "title": "Redux Tutorial for Beginners (Codevolution)", "link": "https://www.youtube.com/watch?v=93p3LxR9xfM"}]}, {"topic": "Testing React Components", "days": "53-56", "difficulty": "Intermediate", "resources": [{"type": "Documentation", "title": "React Testing Library Documentation", "link": "https://testing-library.com/react"}, {"type": "Tutorial", "title": "Testing React with Jest and React Testing Library (The Net Ninja)", "link": "https://www.youtube.com/playlist?list=PL4cUxeGInDj-W3AIjQg5Qm8Prn2_vUDE-"}]}, {"topic": "Building and Deploying a React Application", "days": "57-60", "difficulty": "Beginner", "resources": [{"type": "Documentation", "title": "Deployment Options for React Apps", "link": "https://create-react-app.dev/docs/deployment/"}, {"type": "Tutorial", "title": "Deploying a React App to Netlify (Netlify Blog)", "link": "https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/"}]}]\n\n```',
        },
      ],
    },
  ],
});

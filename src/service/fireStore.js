import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCCKET,
  VITE_MESSAGE_SENDER_ID,
  VITE_APP_ID,
} from "../utility/constant";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCCKET,
  messagingSenderId: VITE_MESSAGE_SENDER_ID,
  appId: VITE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

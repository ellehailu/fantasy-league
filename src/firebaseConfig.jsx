
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

//Try loading environment variables first

// const {
//   REACT_APP_FIREBASE_API_KEY,
//   REACT_APP_FIREBASE_AUTH_DOMAIN,
//   REACT_APP_FIREBASE_PROJECT_ID,
//   REACT_APP_FIREBASE_STORAGE_BUCKET,
//   REACT_APP_FIREBASE_SENDER_ID,
//   REACT_APP_FIREBASE_APP_ID,
//   REACT_APP_FIREBASE_MEASUREMENT_ID
// } = import.meta.env;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
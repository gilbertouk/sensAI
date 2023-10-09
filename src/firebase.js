// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_SENDER,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP,
  measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

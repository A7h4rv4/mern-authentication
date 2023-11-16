// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mern-auth-89127.firebaseapp.com",
  projectId: "mern-auth-89127",
  storageBucket: "mern-auth-89127.appspot.com",
  messagingSenderId: "348014835855",
  appId: "1:348014835855:web:b91b56a51caaf3e94ad8fa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

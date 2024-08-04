// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-lakshya.firebaseapp.com",
  projectId: "mern-auth-lakshya",
  storageBucket: "mern-auth-lakshya.appspot.com",
  messagingSenderId: "58655959634",
  appId: "1:58655959634:web:ad4dfeac2030ba157d8d8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPFCTh9fguBp2x9Ei040NHOIks5bQL3qk",
  authDomain: "news-auth-40eab.firebaseapp.com",
  projectId: "news-auth-40eab",
  storageBucket: "news-auth-40eab.firebasestorage.app",
  messagingSenderId: "810942400263",
  appId: "1:810942400263:web:760fa94c11e816a872a7a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
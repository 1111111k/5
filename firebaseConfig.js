// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDstt_8apcFRETWHPr2gesreNkQMVVklag",
  authDomain: "messageapp-29c26.firebaseapp.com",
  projectId: "messageapp-29c26",
  storageBucket: "messageapp-29c26.firebasestorage.app",
  messagingSenderId: "96313422542",
  appId: "1:96313422542:web:55d8b904b4c82538f3169f",
  measurementId: "G-XZMPN27D90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

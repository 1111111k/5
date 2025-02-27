// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9q2ahZsAERx5QBbvXoeVly9W11ldsxVc",
  authDomain: "messagepage-b90d4.firebaseapp.com",
  databaseURL: "https://messagepage-b90d4-default-rtdb.firebaseio.com",
  projectId: "messagepage-b90d4",
  storageBucket: "messagepage-b90d4.firebasestorage.app",
  messagingSenderId: "484641663372",
  appId: "1:484641663372:web:dbaac4afaf178fa5f24ea9",
  measurementId: "G-7B4M8WT8HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

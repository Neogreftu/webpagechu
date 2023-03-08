// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5bullxx7Yc1ZY19LgCbUlPv3kHKSuszc",
  authDomain: "chuwebpage.firebaseapp.com",
  projectId: "chuwebpage",
  storageBucket: "chuwebpage.appspot.com",
  messagingSenderId: "1048147363707",
  appId: "1:1048147363707:web:4d7f6476941b666967dfde",
  measurementId: "G-DQYZQ99PPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)
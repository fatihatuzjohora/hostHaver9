// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWL4-Tod0iIQfnpDt1yM2Oj0xC-5kGQok",
  authDomain: "hosthaven-62afd.firebaseapp.com",
  projectId: "hosthaven-62afd",
  storageBucket: "hosthaven-62afd.appspot.com",
  messagingSenderId: "140863560485",
  appId: "1:140863560485:web:edeab2753b4e0608b318cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyCHZdyihzAaLA8NkxzgNJa-z9jYFNGXmLI",
  authDomain: "another-form-details.firebaseapp.com",
  projectId: "another-form-details",
  storageBucket: "another-form-details.appspot.com",
  messagingSenderId: "64590941931",
  appId: "1:64590941931:web:8c2bee9d1f6aed0baab8ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

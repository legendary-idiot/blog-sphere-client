// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0um3uPqx41GzFiyA82z-XEyD_84DvyEg",
  authDomain: "blog-sphere-rafee.firebaseapp.com",
  projectId: "blog-sphere-rafee",
  storageBucket: "blog-sphere-rafee.firebasestorage.app",
  messagingSenderId: "51875922713",
  appId: "1:51875922713:web:467335e3df3c0e3e223b88",
  measurementId: "G-R2F05S9HXN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;

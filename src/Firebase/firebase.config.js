// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByNdmkyAJU2w_uEg7uK9MshYu9kl3G75M",
  authDomain: "study-mate-b5716.firebaseapp.com",
  projectId: "study-mate-b5716",
  storageBucket: "study-mate-b5716.firebasestorage.app",
  messagingSenderId: "966384826076",
  appId: "1:966384826076:web:ce6ee7533f6ba5b824a619",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
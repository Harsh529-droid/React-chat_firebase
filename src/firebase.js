// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvhaniQlmvidzFuK0JSkG50ta-CBnckEo",
  authDomain: "chatab-a0764.firebaseapp.com",
  projectId: "chatab-a0764",
  storageBucket: "chatab-a0764.appspot.com",
  messagingSenderId: "1089131262579",
  appId: "1:1089131262579:web:1e26261690e6f9ee7db006",
  measurementId: "G-SNF66GZNDD"
};

// Initialize Firebase
export const app  = initializeApp(firebaseConfig);
export const auth = getAuth 
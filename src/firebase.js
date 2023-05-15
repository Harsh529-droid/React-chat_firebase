import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

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
export const auth = getAuth(); //to be used in register/login page
export const storage = getStorage(); //to be used in upload page
export const db = getFirestore();
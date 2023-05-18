import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //your firebase config data
};

// Initialize Firebase
export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(); //to be used in register/login page
export const storage = getStorage(); //to be used in upload page
export const db = getFirestore();

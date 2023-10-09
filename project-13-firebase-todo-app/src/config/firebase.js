// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ZQV8qN5vvxe9UFyAC2j3gA2P2FmF8BE",
  authDomain: "vite-contact-5cafe.firebaseapp.com",
  projectId: "vite-contact-5cafe",
  storageBucket: "vite-contact-5cafe.appspot.com",
  messagingSenderId: "1071747711334",
  appId: "1:1071747711334:web:8a353d51f92612b8c7c8a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
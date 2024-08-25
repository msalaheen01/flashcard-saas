// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGmyuxJ5oPfAC-eWuSu5dMG1RhWtRdXWg",
  authDomain: "flashcardsaas-aa7ed.firebaseapp.com",
  projectId: "flashcardsaas-aa7ed",
  storageBucket: "flashcardsaas-aa7ed.appspot.com",
  messagingSenderId: "766172111683",
  appId: "1:766172111683:web:9afd04da06e3ecf67745f6",
  measurementId: "G-7DLGWP5E3F"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
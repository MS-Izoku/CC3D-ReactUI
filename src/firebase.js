// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAAbyAsmupTJbJ-fh-bTl8dTshnm4IBPU",
  authDomain: "cc3d-api-845b7.firebaseapp.com",
  projectId: "cc3d-api-845b7",
  storageBucket: "cc3d-api-845b7.appspot.com",
  messagingSenderId: "469448190202",
  appId: "1:469448190202:web:b24978bf9c64b7145d0143"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
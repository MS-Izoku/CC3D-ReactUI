/*

* This is the main configuration of Firebase for this side of the application.

* Code here is mainly from the Firebase online UI, but also includes necessary Firebase packages used for whatever our application needs.

* Since we need only Authentication, we are using the firebase/auth package, and for the time being, only the getAuth method

*/

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
// // Other firebase packages for future use are to be included below here

// // This web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDAAbyAsmupTJbJ-fh-bTl8dTshnm4IBPU",
//     authDomain: "cc3d-api-845b7.firebaseapp.com",
//     projectId: "cc3d-api-845b7",
//     storageBucket: "cc3d-api-845b7.appspot.com",
//     messagingSenderId: "469448190202",
//     appId: "1:469448190202:web:b24978bf9c64b7145d0143"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// export const auth = getAuth(firebaseApp);

/* */


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABBwAu8oHiUK3pr1JHOHG57vJiiJY5hcU",
  authDomain: "cc3d-fbapi-challenge.firebaseapp.com",
  databaseURL: "https://cc3d-fbapi-challenge-default-rtdb.firebaseio.com",
  projectId: "cc3d-fbapi-challenge",
  storageBucket: "cc3d-fbapi-challenge.appspot.com",
  messagingSenderId: "69566925407",
  appId: "1:69566925407:web:3701595f1264258edd69ea"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
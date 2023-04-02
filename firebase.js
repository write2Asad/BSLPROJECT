// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
// import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjH0bpZ6886U-wYiFzCmSTErw0g4RRS2E",
  authDomain: "bslproject.firebaseapp.com",
  projectId: "bslproject",
  storageBucket: "bslproject.appspot.com",
  messagingSenderId: "277418767928",
  appId: "1:277418767928:web:73e619c7238baceff458cd"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const authentication = getAuth(app);


// let app;

// if(firebase.apps.length === 0) {
//     app = firebase.initializeApp(firebaseConfig)
// } else {
//     app = firebase.app()
// }

// const auth = firebase.auth();

// export { auth };

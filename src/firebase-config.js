
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4XAt7KA1AaGyVfzV5CYxT3x1SLaJd5dI",
  authDomain: "safeloan-assignment.firebaseapp.com",
  projectId: "safeloan-assignment",
  storageBucket: "safeloan-assignment.firebasestorage.app",
  messagingSenderId: "71103588933",
  appId: "1:71103588933:web:4b8b289e0e388efd52512c",
  measurementId: "G-2SFDXQHWF5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

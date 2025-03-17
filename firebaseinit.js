// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAC0PNYbqP3ishSbZxjEGP1gLeTbYUvSeQ",
    authDomain: "bookswap-f06b7.firebaseapp.com",
    projectId: "bookswap-f06b7",
    storageBucket: "bookswap-f06b7.firebasestorage.app",
    messagingSenderId: "917203182794",
    appId: "1:917203182794:web:4e36e31c6e4ed0ea5e4033",
    measurementId: "G-WR4NWQCJ3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


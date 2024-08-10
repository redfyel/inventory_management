// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD-I1NlJLKShaZvhGlT49yzPXG2qqteI0",
  authDomain: "inventory-management-f0d06.firebaseapp.com",
  projectId: "inventory-management-f0d06",
  storageBucket: "inventory-management-f0d06.appspot.com",
  messagingSenderId: "52885172855",
  appId: "1:52885172855:web:80ed7c5d5c0d098d46cc72",
  measurementId: "G-WYS43NMJ44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

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
const firestore = getFirestore(app)

export {firestore}
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKi82c74YOFwoD0mM1JgMOolpkFkprBQ0",
  authDomain: "uniwork-59ed3.firebaseapp.com",
  projectId: "uniwork-59ed3",
  storageBucket: "uniwork-59ed3.firebasestorage.app",
  messagingSenderId: "11609735566",
  appId: "1:11609735566:web:b9ee8e4790162f5086a4df",
  measurementId: "G-9QQNJTK2G6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

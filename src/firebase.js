// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUF_K5lTTPEviFJ6vSTMEQbN93EYAv9SM",
  authDomain: "alexanderson-fc635.firebaseapp.com",
  projectId: "alexanderson-fc635",
  storageBucket: "alexanderson-fc635.appspot.com",
  messagingSenderId: "763875069692",
  appId: "1:763875069692:web:631cc39f3eaee35588d179",
  measurementId: "G-W56DZM3FVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
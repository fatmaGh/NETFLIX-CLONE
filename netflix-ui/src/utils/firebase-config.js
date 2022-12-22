import { initializeApp } from "firebase/app";
import { getAuth } from "firebase-auth";
const firebaseConfig = {
  apiKey: "AIzaSyC6JrHVCyWWnw5UVTgtaXcRQS26mf6Z2pg",
  authDomain: "react-netflix-clone-1367a.firebaseapp.com",
  projectId: "react-netflix-clone-1367a",
  storageBucket: "react-netflix-clone-1367a.appspot.com",
  messagingSenderId: "112643327582",
  appId: "1:112643327582:web:721d5e974249df749796cf",
  measurementId: "G-3LECGRSCHL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)

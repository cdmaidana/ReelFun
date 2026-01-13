// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuAiAqUC88dz78SOsldyUrWVjg8zQlqHw",
  authDomain: "reelfun-ecommerce.firebaseapp.com",
  projectId: "reelfun-ecommerce",
  storageBucket: "reelfun-ecommerce.firebasestorage.app",
  messagingSenderId: "56897861864",
  appId: "1:56897861864:web:27c62ac8094786270f715d",
  measurementId: "G-9YPXTHW55B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
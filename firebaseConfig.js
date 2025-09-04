// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFM59y5uedCSajxXcI38l06bFYe1G5hss",
  authDomain: "jlg-mobile-app---tracker.firebaseapp.com",
  projectId: "jlg-mobile-app---tracker",
  storageBucket: "jlg-mobile-app---tracker.firebasestorage.app",
  messagingSenderId: "633287768121",
  appId: "1:633287768121:web:e08a37001035dae32535e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
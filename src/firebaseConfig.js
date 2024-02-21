// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBnQopJi6iYRv3cjZ_ponL3Xsa6WaeZCg",
    authDomain: "trainingapp-44fb4.firebaseapp.com",
    projectId: "trainingapp-44fb4",
    storageBucket: "trainingapp-44fb4.appspot.com",
    messagingSenderId: "59926598301",
    appId: "1:59926598301:web:f8cec75e7754b468d97a74",
    measurementId: "G-FRLECR0X3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
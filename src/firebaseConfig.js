// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc8-pPwNBaYmaCM3C6RAXEupAxsGtNqV0",
  authDomain: "vue-firebase-app-2edf6.firebaseapp.com",
  projectId: "vue-firebase-app-2edf6",
  storageBucket: "vue-firebase-app-2edf6.appspot.com",
  messagingSenderId: "392410015733",
  appId: "1:392410015733:web:7ddc5c741f97d5eca8e2bc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export {auth}
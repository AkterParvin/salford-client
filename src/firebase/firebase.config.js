// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBI2U3UCHzhblFNP4UiPmtm8VUBi0QrLrs",
    authDomain: "automotive-brandshop-fab80.firebaseapp.com",
    projectId: "automotive-brandshop-fab80",
    storageBucket: "automotive-brandshop-fab80.appspot.com",
    messagingSenderId: "92982879922",
    appId: "1:92982879922:web:bd305fd7d20e9e4b8f8bab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
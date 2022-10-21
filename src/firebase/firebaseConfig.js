// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1ytQTZH2VP591FTmnrVjou3JCx5qiYEY",
    authDomain: "news24-live.firebaseapp.com",
    projectId: "news24-live",
    storageBucket: "news24-live.appspot.com",
    messagingSenderId: "304899640301",
    appId: "1:304899640301:web:cb0948d44489123913f5e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
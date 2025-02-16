// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhxPcPZJu2C1QlKO5dzxPLxLfsM2brUlw",
    authDomain: "netflix-gpt-b6759.firebaseapp.com",
    projectId: "netflix-gpt-b6759",
    storageBucket: "netflix-gpt-b6759.appspot.com",
    messagingSenderId: "407818540237",
    appId: "1:407818540237:web:67b3344a31dc38971e4584",
    measurementId: "G-C86FPHCZ24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); //required everywhere so maked it here
// Replace with your config from Firebase
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBdYofoMdokPM3umAXX0-CNOhMxhGcm2d0",
    authDomain: "vanika-93745.firebaseapp.com",
    projectId: "vanika-93745",
    storageBucket: "vanika-93745.firebasestorage.app",
    messagingSenderId: "280442476650",
    appId: "1:280442476650:web:931f4c037d98f8eddc9213"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };

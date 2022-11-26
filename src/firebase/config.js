import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC8JI_DWn3_xoLrGTTE6y6UbNGErjxEOjs",
    authDomain: "astrengthinyou-8be4a.firebaseapp.com",
    projectId: "astrengthinyou-8be4a",
    storageBucket: "astrengthinyou-8be4a.appspot.com",
    messagingSenderId: "575117173337",
    appId: "1:575117173337:web:8f1c8a6881f8baf1b58748"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()
const colRef = collection(db, 'guests');

const auth = getAuth(app);
export { app, db, auth, colRef };


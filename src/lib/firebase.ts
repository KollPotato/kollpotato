import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDaN-PnEIMRUDMdxtsSzAhUpTdS1Eq75Rs",
    authDomain: "kollpotato-faf38.firebaseapp.com",
    projectId: "kollpotato-faf38",
    storageBucket: "kollpotato-faf38.appspot.com",
    messagingSenderId: "270276451719",
    appId: "1:270276451719:web:e20795463367a1706d4722",
    measurementId: "G-G3RH944XPB"
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);

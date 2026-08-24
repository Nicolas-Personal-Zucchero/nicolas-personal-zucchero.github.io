import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBBYfPLP89z8fddGd4uST-kNbdjJ5WThz0",
    authDomain: "personal-zucchero-508a8.firebaseapp.com",
    projectId: "personal-zucchero-508a8",
    appId: "1:1039858872625:web:aef4672e151a0ef7a48010"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const operatori = [
    "Daniel Barbieri", 
    "Gianluca Magnanelli", 
    "Luca Soldati", 
    "Denis Severini", 
    "Mauro Amadori",
    "Nicolas Amadori"
];
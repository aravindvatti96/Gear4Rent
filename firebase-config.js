// Import Firebase (compat version)
import "https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js";
import "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js";

const firebaseConfig = {
    apiKey: "AIzaSyCWZsMhVEB1HbbkTC8igAPlsoE8EzqBtzU",
    authDomain: "gear-4-rent.firebaseapp.com",
    projectId: "gear-4-rent",
    storageBucket: "gear-4-rent.appspot.com", // ⚠️ FIXED
    messagingSenderId: "1058165643099",
    appId: "1:1058165643099:web:70fb0e2411710173aeec7e"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

window.db = firebase.firestore();
window.auth = firebase.auth();

console.log("✅ Firebase Connected Successfully");
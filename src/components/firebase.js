import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDg1UIlNIz8kybXBVI-Bo5Ou5XsGQXpQfI",
    authDomain: "fir-e8f6e.firebaseapp.com",
    projectId: "fir-e8f6e",
    storageBucket: "fir-e8f6e.appspot.com",
    messagingSenderId: "469980433035",
    appId: "1:469980433035:web:3abb8aa32788728babe28e",
    measurementId: "G-59FZY8CXNH"
};

//Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

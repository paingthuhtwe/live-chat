import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCPRCA-MHvVbLK0ltRvegtk_KlU2ucyq0",
  authDomain: "live-chat-8c05c.firebaseapp.com",
  projectId: "live-chat-8c05c",
  storageBucket: "live-chat-8c05c.appspot.com",
  messagingSenderId: "179362439738",
  appId: "1:179362439738:web:a1e3720e7cd3f7a2574b03",
  measurementId: "G-4G146EHZRH",
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, timestamp, auth, storage, provider, getAuth, signInWithPopup };


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUgcb1o6woj_jfGgsY904wxWn5Kocb7MA",
  authDomain: "twitter-clone-3da7b.firebaseapp.com",
  projectId: "twitter-clone-3da7b",
  storageBucket: "twitter-clone-3da7b.appspot.com",
  messagingSenderId: "990233450790",
  appId: "1:990233450790:web:d0dc744d1340fbc3cd89e7",
  measurementId: "G-RF3M0EM1V1"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
export default db;
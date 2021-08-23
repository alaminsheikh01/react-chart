import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2mfjPdIdXxGgJFqqVviw32xoaEMHpv6M",
  authDomain: "chart-app-4591b.firebaseapp.com",
  projectId: "chart-app-4591b",
  storageBucket: "chart-app-4591b.appspot.com",
  messagingSenderId: "995691438244",
  appId: "1:995691438244:web:6d945f72ff51d444664631",
  measurementId: "G-2B9ZFG6E33",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth;

export { db, provider, auth };

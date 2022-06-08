// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXwPV9mqAhQawPDXQPpp6IW-c6RjjW98A",
  authDomain: "wechat-sr.firebaseapp.com",
  projectId: "wechat-sr",
  storageBucket: "wechat-sr.appspot.com",
  messagingSenderId: "194524883866",
  appId: "1:194524883866:web:5387dfb1e8627a4ec36823",
  measurementId: "G-4TMLV6MRX0",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export default firebase;
export { db, auth };

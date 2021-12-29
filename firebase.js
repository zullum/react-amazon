import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNtcjT7LIlDYgQw-ldPNtYlWWBPMhJC6A",
  authDomain: "pitalica-a7d97.firebaseapp.com",
  databaseURL: "https://pitalica-a7d97.firebaseio.com",
  projectId: "pitalica-a7d97",
  storageBucket: "pitalica-a7d97.appspot.com",
  messagingSenderId: "169850413808",
  appId: "1:169850413808:web:ea9657af9320b869441835",
  measurementId: "G-XWD7K1K8CD",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;

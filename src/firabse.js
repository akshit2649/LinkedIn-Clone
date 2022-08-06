import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4WredWga0F2kk4srS4eu38nZjEbMsrGY",
  authDomain: "linkedin-clone-50425.firebaseapp.com",
  projectId: "linkedin-clone-50425",
  storageBucket: "linkedin-clone-50425.appspot.com",
  messagingSenderId: "275400405792",
  appId: "1:275400405792:web:ce21f65b91db4b57dc1d45",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCmBE2g-iOV0HEfz3USgn4gIawY5naoA2k",
  authDomain: "project-6f254.firebaseapp.com",
  projectId: "project-6f254",
  storageBucket: "project-6f254.appspot.com",
  messagingSenderId: "50162834216",
  appId: "1:50162834216:web:07ca6fa83d7029858d4e1d"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}
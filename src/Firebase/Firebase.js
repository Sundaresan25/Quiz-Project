import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCE2Geg3EGZwQd9iztrklt7ZOb6gUm6vbw",
  authDomain: "quiz-970c2.firebaseapp.com",
  projectId: "quiz-970c2",
  storageBucket: "quiz-970c2.appspot.com",
  messagingSenderId: "748273175106",
  appId: "1:748273175106:web:30fdf7dbfd96c11e14fbdb",
  measurementId: "G-WCJTLNYTYV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, analytics, storage };

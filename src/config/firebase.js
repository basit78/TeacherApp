import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDWdxGSUqY2C9lpGf2Gkn5SPTd0qjfydhA",
  authDomain: "taskone-f96f3.firebaseapp.com",
  projectId: "taskone-f96f3",
  storageBucket: "taskone-f96f3.appspot.com",
  messagingSenderId: "593630972798",
  appId: "1:593630972798:web:e18c185d928a808b13012f",
  measurementId: "G-9DPGQ8WZE7"
});

const auth=getAuth();
const db=getFirestore();
export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where
};

// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { GoogleAuthProvider } from '@firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqnEuvE8wjOpTYlz3cjG0FQq6DN-7oKBI",
  authDomain: "nutrivida-a2ec2.firebaseapp.com",
  projectId: "nutrivida-a2ec2",
  storageBucket: "nutrivida-a2ec2.appspot.com",
  messagingSenderId: "523819631257",
  appId: "1:523819631257:web:1e706382223c94e34f2e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}
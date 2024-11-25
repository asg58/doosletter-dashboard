// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA687-pNMaW0oVsPt9AJaR2yqQn419hsCY',
  authDomain: 'doosletterfabriek-6e35f.firebaseapp.com',
  projectId: 'doosletterfabriek-6e35f',
  storageBucket: 'doosletterfabriek-6e35f.firebasestorage.app',
  messagingSenderId: '512551425537',
  appId: '1:512551425537:web:7028c8b9bdcfa389625200',
  measurementId: 'G-07487HE4W4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Authentication
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

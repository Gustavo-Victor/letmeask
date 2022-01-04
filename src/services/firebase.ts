//import firebase from 'firebase/app';

import {initializeApp} from 'firebase/app';
import {Database} from 'firebase/database';
import {GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

initializeApp(firebaseConfig);

//export const auth = firebase.auth();
//export const database = firebase.database();
const auth = getAuth();

export {Database, GoogleAuthProvider, auth, signInWithPopup, onAuthStateChanged};


import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbJXNF7qFwJ0d5BQi7HIXNRIbgQGbddr8",
    authDomain: "zaio--clone-15d9b.firebaseapp.com",
    projectId: "zaio--clone-15d9b",
    storageBucket: "zaio--clone-15d9b.appspot.com",
    messagingSenderId: "318339293348",
    appId: "1:318339293348:web:798368b1ef8fc6ede1c631",
    measurementId: "G-KTTX4DHKVM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth()

export {db, auth}
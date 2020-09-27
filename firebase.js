import firebase from 'firebase'
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "newtinder-5ba54.firebaseapp.com",
    databaseURL: "https://newtinder-5ba54.firebaseio.com",
    projectId: "newtinder-5ba54",
    storageBucket: "newtinder-5ba54.appspot.com",
    messagingSenderId: "90499878294",
    appId: "1:90499878294:web:caf490cd41b9d0e6a921b7",
    measurementId: "G-C2155Z636X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
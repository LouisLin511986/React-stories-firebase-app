import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8NBssJ1NvzRCKhqAtj2EFPrWNsCKLDWU",
    authDomain: "stories-firebase-app-8ef76.firebaseapp.com",
    projectId: "stories-firebase-app-8ef76",
    storageBucket: "stories-firebase-app-8ef76.appspot.com",
    messagingSenderId: "764755795941",
    appId: "1:764755795941:web:d8a07418ed060951ecd90c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db }
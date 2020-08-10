import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDzcT2ppbxldnSbf_TAStgSlQIXmIvuuAs',
  authDomain: 'instagram-clone-7e53a.firebaseapp.com',
  databaseURL: 'https://instagram-clone-7e53a.firebaseio.com',
  projectId: 'instagram-clone-7e53a',
  storageBucket: 'instagram-clone-7e53a.appspot.com',
  messagingSenderId: '196643813230',
  appId: '1:196643813230:web:2a921f54a067f10d76b37f',
  measurementId: 'G-BCM95CC9TQ',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

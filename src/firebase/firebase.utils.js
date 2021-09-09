import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyBwBa8TtU1c4yfLlq09GZOU0D_De82RnB4",
  authDomain: "crwn-db-60209.firebaseapp.com",
  projectId: "crwn-db-60209",
  storageBucket: "crwn-db-60209.appspot.com",
  messagingSenderId: "892510757970",
  appId: "1:892510757970:web:2eaaa3b4af0279ed4a6b8b",
  measurementId: "G-L6QLTTL6G5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

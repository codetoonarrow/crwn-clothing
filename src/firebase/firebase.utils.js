import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAgOgXPAHPZMxluXdhF7Aa4akOz0cUVMj8",
    authDomain: "crwn-db-7face.firebaseapp.com",
    databaseURL: "https://crwn-db-7face.firebaseio.com",
    projectId: "crwn-db-7face",
    storageBucket: "crwn-db-7face.appspot.com",
    messagingSenderId: "778904865449",
    appId: "1:778904865449:web:cf01773b906b734db7b7b8",
    measurementId: "G-ZXWWQSBX2C"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
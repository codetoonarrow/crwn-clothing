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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`'users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message)
        }
    }
    return userRef;
};


export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
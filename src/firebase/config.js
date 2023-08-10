import { initializeApp } from 'firebase/app'
import { getAuth, 
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        updateProfile,
        GoogleAuthProvider,
        GithubAuthProvider,
        signInWithPopup,

        } from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
};


// init firebase
const firebaseApp = initializeApp(firebaseConfig);

// init services
export const auth = getAuth(firebaseApp);

export { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
};





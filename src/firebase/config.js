import { initializeApp } from 'firebase/app'
import { getAuth, 
        createUserWithEmailAndPassword,
        updateProfile,
        GoogleAuthProvider,
        GithubAuthProvider,
        FacebookAuthProvider,
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
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    FacebookAuthProvider,
};





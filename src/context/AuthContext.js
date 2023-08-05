import { 
    useEffect,
    createContext, 
    useReducer
} from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase/config"

export const AuthContext = createContext()

// STEP2: this is a reducer function
// state is the current state, action is what we want to do to the state
const authReducer = (state, action) => {
    // action is an object with a type and a payload
    switch(action.type) {
        // when action.type is LOGIN,
        case 'LOGIN':
            // return the current state,
            // and update the user property with the payload(=data from firebase)
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        case 'AUTH_IS_READY':
            return { user: action.payload, authIsReady: true }
        default:
            return state
    }
}

// This is the AuthContextProvider component that we will wrap around our App component,
// so that all the components in our app can access the auth state
export const AuthContextProvider = ({ children }) => {

    // STEP1: reducer takes in a function and an initial state
    const [ state, dispatch ] = useReducer(authReducer, {
        user: null,
        authIsReady: false
    })

    useEffect(() => {
        // use unsub to unsubscribe from the listener, so that we don't have multiple listeners running at the same time
        const unsub = onAuthStateChanged(auth, (user) => {
            // STEP3: dispatch an action
            // we will check authentication status when the app loads
            dispatch({ type: 'AUTH_IS_READY', payload: user })
        })
        return () => unsub()
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
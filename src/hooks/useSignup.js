import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, updateProfile } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(null)
    const navigate = useNavigate();

    // dispatch an action to the AuthContext -> so that we can update the user state!
    const { dispatch } = useAuthContext()

    const signup = async (email, password, confirmPassword, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            // Check if passwords match
            if (password !== confirmPassword) {
                throw new Error('Passwords do not match')
            }

            // signup user 
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            console.log(user)

            // **** dispatch an action(user) to the AuthContext reducer **** //
            dispatch({ type: 'LOGIN', payload: user })

            if (!userCredential) {
                throw new Error('Could not complete signup')
            }

            // add display name to user 
            await updateProfile(user, { displayName })

            setIsPending(false)
            setError(null)

            navigate('/');
        }
        catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }


    return { error, isPending, signup }
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, updateProfile } from "../firebase/config";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(null)
    const navigate = useNavigate();

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
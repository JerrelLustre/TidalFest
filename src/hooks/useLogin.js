import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null);
        setIsPending(true);

        try {
            // Authenticate user
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            console.log(user)

            // Dispatch action to update user state in the context
            dispatch({ type: 'LOGIN', payload: user })

            if (!userCredential) {
                throw new Error('Could not complete login')
            }

            setIsPending(false);
            setError(null);

            navigate('/'); // Redirect to home after login
        } catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }
    };

    return { error, isPending, login };
};

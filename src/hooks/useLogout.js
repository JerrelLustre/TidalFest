import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);

        try {
            await auth.signOut();
            dispatch({ type: 'LOGOUT' }); 

            setIsPending(false);
            setError(null);

            navigate('/'); // Redirect to home after logout
        } catch (err) {
            console.log(err.message);
            setError("An error occurred during logout");
            setIsPending(false);
        }
    };

    return { error, isPending, logout };
};

import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

// Create a custom hook to use the AuthContext in any component,
// this reduce the code amounts when we want to use the AuthContext
export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuthContext must be inside an AuthContextProvider')
    }

    return context
}
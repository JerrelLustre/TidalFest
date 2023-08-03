import { 
    useState,
    createContext 
} from "react"

export const OrderContext = createContext()

export const OrderContextProvider = ({ children }) => {

    const [ order, setOrder ] = useState("")

    return (
        <OrderContext.Provider value={{order, setOrder}}>
            {children}
        </OrderContext.Provider>
    )

}
import { 
    useEffect,
    useState,
    createContext 
} from "react"

export const OrderContext = createContext()

export const OrderContextProvider = ({ children }) => {

    const [ order, setOrder ] = useState("")

    const [ qty, setQty ] = useState(1)
    const [ price, setPrice ] = useState(16.99)
    const [ tax, setTax ] = useState(2.04)
    const [ total, setTotal ] = useState(19.03)

    const handleIncrement = () => {
        setQty(qty + 1) 
        const newPrice = (price + 16.99).toFixed(2)
        setPrice(parseFloat(newPrice))
        const newTax = (tax + 2.04).toFixed(2)
        setTax(parseFloat(newTax))
        const newTotal = (total + 19.03).toFixed(2)
        setTotal(parseFloat(newTotal))
    }

    const handleDecrement = () => {
        setQty(qty - 1)
        const newPrice = (price - 16.99).toFixed(2)
        setPrice(parseFloat(newPrice))
        const newTax = (tax - 2.04).toFixed(2)
        setTax(parseFloat(newTax))
        const newTotal = (total - 19.03).toFixed(2)
        setTotal(parseFloat(newTotal))

        if (qty <= 1) { 
            setQty(1) 
            setPrice(16.99)
            setTax(2.04)
            setTotal(19.03)
        }
    }

    useEffect(() => {
        setOrder(String(total))
        const saveOrder = localStorage.setItem("order", order)

        return saveOrder
    }, [total, setOrder, order])


    return (
        <OrderContext.Provider 
            value={{
                handleIncrement,
                handleDecrement,
                qty,
                price,
                tax,
                total,
                order, 
                setOrder,
            }}
        >
            {children}
        </OrderContext.Provider>
    )

}
import { OrderContext } from "../context/OrderContext";
import { useContext } from "react";

export const useOrderContext = () => {
    const context = useContext(OrderContext)
    if (!context) {
        throw new Error("useOrderContext must be used within a OrderContextProvider")
    }
    return context
}
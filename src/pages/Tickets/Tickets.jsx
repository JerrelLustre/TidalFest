import { Outlet } from "react-router-dom"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import { OrderContextProvider } from "../../context/OrderContext"

export default function Tickets() {
  
  const initialOptions = {
    "client-id": `${process.env.REACT_APP_PAYPAL_MERCHANTID}`,
    "currency": "CAD",
    "components": "buttons",
  }

  return (
    <>
      <OrderContextProvider>  
        <PayPalScriptProvider options={initialOptions} >
          <Outlet />
        </PayPalScriptProvider>
      </OrderContextProvider>
    </>
  )
}

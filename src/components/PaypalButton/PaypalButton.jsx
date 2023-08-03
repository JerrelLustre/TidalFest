import { PayPalButtons } from "@paypal/react-paypal-js"
import { useNavigate } from "react-router-dom"
//import { useOrderContext } from "../../hooks/useOrderContext"

export default function PaypalButton() {

    const navigate = useNavigate()
    // const { order } = useOrderContext()
    // const [ {options}, dispatch ] = usePayPalScriptReducer()


    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "19.03",
                    }
                }
            ]
        })
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function () {
          navigate("/tickets/thankyou");
        });
      };

    const style = {
        layout: "horizontal",
        label: "checkout"
    }


  return <PayPalButtons 
            style={style}
            createOrder={createOrder} 
            disabled={false}
            onApprove={onApprove}
        />
}

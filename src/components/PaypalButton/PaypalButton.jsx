import { PayPalButtons } from "@paypal/react-paypal-js"
import { useNavigate } from "react-router-dom"

export default function PaypalButton() {

    const navigate = useNavigate()
   
    const createOrder = (data, actions) => {

        const savedOrder = localStorage.getItem("order")

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: `${savedOrder}`,
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

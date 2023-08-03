import { 
    useState,
    useEffect
} from "react";
import { Typography } from "@mui/material"
import { styled } from "@mui/material/styles";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useOrderContext } from "../../hooks/useOrderContext"

import Body from "../Body"

export default function TicketsOrderResult() {

    const TitleTxt = styled(Typography)(({theme}) => ({
        fontWeight: "600",
        TextTransform: "capitalize",
        color: theme.palette.jade200.main,
        fontSize: "1.5rem",
        textAlign: "right",
      }))

    const BodyTxt = styled(Typography)(({theme}) => ({
        fontWeight: "600",
        fontSize: "1.5rem",
        textAlign: "right",
    }))

    const QtyTxt = styled(Typography)(({theme}) => ({
        fontWeight: "600",
        fontSize: "1.5rem",
        textAlign: "right",
        padding: "0 1rem",
        minWidth: "2rem",
    }))

    const { setOrder } = useOrderContext()

    const [ qty, setQty ] = useState(1)
    const [ price, setPrice ] = useState(16.99)
    const [ tax, setTax ] = useState(2.04)
    const [ total, setTotal ] = useState(19.03)

    const increment = () => { 
        setQty(qty + 1) 
        const newPrice = (price + 16.99).toFixed(2)
        setPrice(parseFloat(newPrice))
        const newTax = (tax + 2.04).toFixed(2)
        setTax(parseFloat(newTax))
        const newTotal = (total + 19.03).toFixed(2)
        setTotal(parseFloat(newTotal))
    }

    const decrement = () => {
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
    }, [total, setOrder])

  return (
    <>
    <Body>
        <div>
            <div className="grid grid-cols-2 my-2">
                <TitleTxt>Group Pass:</TitleTxt>
                <BodyTxt>${price} CAD</BodyTxt>
            </div>
            <div className="grid grid-cols-2 my-2">
                <TitleTxt>QTY:</TitleTxt>
                <div className="flex justify-end items-center">
                    <RemoveIcon 
                        className="text-[2rem] text-orange-100 cursor-pointer"
                        onClick={decrement}
                    />
                    <QtyTxt>{qty}</QtyTxt>
                    <AddIcon 
                        className="text-[2rem] text-orange-100 cursor-pointer" 
                        onClick={increment}
                    />
                </div>
            </div>
            <div className="w-full border-b-4 border-jade-200 my-6"></div>
            <div className="grid grid-cols-2 my-2">
                <TitleTxt>Estimated Tax:</TitleTxt>
                <BodyTxt>${tax} CAD</BodyTxt>
            </div>
            <div className="grid grid-cols-2 my-2">
                <TitleTxt>Total:</TitleTxt>
                <BodyTxt>${total} CAD</BodyTxt>
            </div>
        </div>
  </Body>
  </>
  )
}

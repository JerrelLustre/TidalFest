import { Typography } from "@mui/material"
import { styled } from "@mui/material/styles";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useOrderContext } from "../../hooks/useOrderContext"

import Body from "../Body"

export default function TicketsOrderResult() {

    const { qty, price, tax, total, handleIncrement, handleDecrement } = useOrderContext()

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
                        onClick={handleDecrement}
                    />
                    <QtyTxt>{qty}</QtyTxt>
                    <AddIcon 
                        className="text-[2rem] text-orange-100 cursor-pointer" 
                        onClick={handleIncrement}
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

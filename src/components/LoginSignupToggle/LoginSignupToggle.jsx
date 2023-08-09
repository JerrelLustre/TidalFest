import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


export default function LoginSignupToggle({promptText, toggleText, toggleLink}) {

    const Prompt = styled(Typography) ({
        fontSize: "18px",
        fontFamily: "Montserrat",
        margin: "0",
    })

    return (
        <div className="flex flex-col items-center border-t-8 border-red-200 pt-6">
            <Prompt className="mb-2">
                {promptText}
            </Prompt>
            <Link 
                to={`/account/${toggleLink}`}
                className="text-[24px] font-bold text-jade-200"
            >
                {toggleText}
            </Link>
        </div>
    )
}
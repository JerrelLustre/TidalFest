import { Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function LoginSignupToggle({promptText, toggleText, toggleLink}) {

    const Prompt = styled(Typography) ({
        fontSize: "18px",
        fontFamily: "Montserrat",
        margin: "0",
    })

    const Toggle = styled(Link)(({theme}) =>({
        fontSize: "24px",
        fontFamily: "Montserrat",
        fontWeight: "700",
        color: `${theme.palette.jade200.main}`,
        textDecoration: "none",
    }))

    return (
        <div className="flex flex-col items-center border-t-8 border-red-200 pt-6">
            <Prompt className="mb-2">
                {promptText}
            </Prompt>
            <Toggle to={toggleLink}>
                {toggleText}
            </Toggle>
        </div>
    )
}
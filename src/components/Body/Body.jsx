import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

function Body({ children }) {

    const BodyContent = styled(Box)(({theme}) => ({
        fontSize: "18px",
        fontFamily: "Montserrat",
        margin: "0",
        border: `8px solid ${theme.palette.red200.main}`,
        maxWidth: "670px",
    }))

    return (
        <div className="w-full max-w-bodycontent-container" >
            <BodyContent className="rounded-lg bg-pale-100 text-jade-300 font-normal p-42 leading-150">
                {children}
            </BodyContent>
        </div>
    )
}


export default Body

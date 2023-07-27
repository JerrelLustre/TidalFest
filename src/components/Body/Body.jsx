import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function Body({text}) {
    const BodyContent = styled(Typography)(({theme}) => ({
        as: "p",
        fontFamily: "Montserrat",
        margin: "0",
        border: `8px solid ${theme.palette.red?.[200] || "#FF797B"}`,
        maxWidth: "670px",
    }))

    return (
        <div
            className="max-w-bodycontent-container"
        >
            <BodyContent className="rounded-lg bg-pale-200 text-jade-300 font-normal p-42 leading-150">
                {/* Remove below example text and add text prop to individual components in layout */}
                Coastal Chillwaves are a laid-back, beach-inspired band that blends groovy surf rock with soothing reggae vibes. Their melodic tunes and catchy hooks create the perfect soundtrack for lazy days on sandy shores, making every moment feel like an endless summer.   
                {text}
            </BodyContent>
        </div>
    )
}

export default Body
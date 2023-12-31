import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function SectionHeading({text, isSmallMargin}) {
    
    const Heading = styled(Typography)(({theme}) => ({
        fontFamily: "Montserrat",
        margin: "0",
        borderLeft: `16px solid ${theme.palette.pale?.[200] || "#FFEED4"}`,

    }))

    return (
        <div className={`flex flex-col text-center justify-center items-center ${isSmallMargin ? "mb-6" : "my-20"}`}>
            <Heading 
                variant="h2"
                className="rounded-lg py-4 px-8 bg-orange-200 text-pale-200 font-bold text-3xl uppercase shadow-sectionheading-shadow"
            >
                {text}
            </Heading>
        </div>
    )
}

export default SectionHeading
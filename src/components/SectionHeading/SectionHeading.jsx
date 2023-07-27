import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function SectionHeading({text}) {
    const Heading = styled(Typography)(({theme}) => ({
        as:"h2",
        fontFamily: "Montserrat",
        margin: "0",
        borderLeft: `16px solid ${theme.palette.pale?.[200] || "#FFEED4"}`,

    }))

    return (
        <div 
            className="flex flex-col text-center"
            style={{ width: "fit-content "}}     
        >
            <Heading className="rounded-lg py-4 px-8 bg-orange-200 text-pale-200 font-bold text-3xl shadow-sectionheading-shadow">
                {/* Remove below example text and add text prop to individual components in layout */}
                SECTION HEADING
                {text}
            </Heading>
        </div>
    )
}

export default SectionHeading
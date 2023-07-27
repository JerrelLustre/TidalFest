import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function SectionSubheading({text}) {
    const Date = styled(Typography)(({theme}) => ({
        as:"span",
        fontFamily: "Montserrat",
        margin: "0",
        borderLeft: `16px solid ${theme.palette.yellow?.[100] || "#F4BB15"}`,
    }))

    const Subheading = styled(Typography)(({theme}) => ({
        as:"h3",
        fontFamily: "Montserrat",
        margin: "0",
        borderLeft: `16px solid ${theme.palette.yellow?.[100] || "#F4BB15"}`,
    }))

    return (
        <div className="flex flex-col">
            <div
                className="flex flex-col text-center"
                style={{ width: "fit-content "}}
            >
                <Date className="bg-pale-200 rounded-lg py-2 px-5 text-red-200 font-extrabold text-xl shadow-sectionheading-shadow tracking-[.15em]">
                    {/* Remove below example text and add text prop to individual components in layout */}
                    07.26 - 07.27
                    {text}
                </Date>
            </div>
            <div
                className="flex flex-col text-center"
                style={{ width: "fit-content "}}
            >
                <Subheading className="bg-red-200 rounded-lg py-2 px-5 text-pale-200 font-bold text-2xl shadow-sectionheading-shadow">
                    {/* Remove below example text and add text prop to individual components in layout */}
                    SECTION SUBHEADING
                    {text}
                </Subheading>
            </div>
        </div>
    )
}

export default SectionSubheading
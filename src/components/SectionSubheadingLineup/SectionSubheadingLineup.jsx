import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function SectionSubheadingLineup({text}) {
    const Date = styled(Typography)(({theme}) => ({
        as:"span",
        fontFamily: "Montserrat",
        margin: "0",
        borderLeft: `16px solid ${theme.palette.red?.[100] || "#F04346"}`,
    }))

    const Subheading = styled(Typography)(({theme}) => ({
        as:"h3",
        fontFamily: "Montserrat",
        margin: "0",
        borderLeft: `16px solid ${theme.palette.red?.[100] || "#F04346"}`,
    }))

    return (
        <div className="flex flex-col">
            <div
                className="flex flex-col text-center"
                style={{ width: "fit-content "}}
            >
                <Date className="bg-pale-200 rounded-lg py-2 px-5 text-red-200 font-extrabold text-xl shadow-sectionheading-shadow tracking-[.15em]">
                    {/* Remove below example text and add text prop to individual components in layout */}
                    JULY 26
                    {text}
                </Date>
            </div>
            <div
                className="flex flex-col text-center"
                style={{ width: "fit-content "}}
            >
                <Subheading className="bg-jade-200 rounded-lg py-2 px-5 text-pale-200 font-bold text-2xl shadow-sectionheading-shadow">
                    {/* Remove below example text and add text prop to individual components in layout */}
                    SECTION SUBHEADING
                    {text}
                </Subheading>
            </div>
        </div>
    )
}

export default SectionSubheadingLineup
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function SectionSubheadingLineup({ dateText, subheadingText}) {
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
                    {dateText}
                </Date>
            </div>
            <div
                className="flex flex-col text-center"
                style={{ width: "fit-content "}}
            >
                <Subheading className="bg-jade-200 rounded-lg py-2 px-5 text-pale-200 font-bold text-2xl shadow-sectionheading-shadow">
                    {subheadingText}
                </Subheading>
            </div>
        </div>
    )
}

export default SectionSubheadingLineup
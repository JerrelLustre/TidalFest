import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function SectionSubheading({dateText, subText}) {

    const Content = styled(Typography)(({ theme }) => ({
        fontFamily: "Montserrat",
        margin: "0",
        borderLeft: `16px solid ${theme.palette.yellow100.main}`,
    }))

    return (
        <div className="flex flex-col items-start pb-6">
            <div className="flex flex-col justify-center items-center" >
                <Content 
                    variant="span"
                    className="bg-pale-200 rounded-lg py-2 px-5 text-red-200 font-extrabold text-xl shadow-sectionheading-shadow tracking-[.15em]"
                >
                    {dateText}
                </Content>
            </div>
            <div className="flex flex-col justify-center items-center" >
                <Content 
                    variant="h3"
                    className="bg-red-200 rounded-lg py-2 px-5 text-pale-200 font-bold text-2xl shadow-sectionheading-shadow"
                >
                    {subText}
                </Content>
            </div>
        </div>
    )
}

export default SectionSubheading
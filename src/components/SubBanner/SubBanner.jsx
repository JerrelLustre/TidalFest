import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function SubBanner({text}) {
    const Slogan = styled(Typography)(() => ({
        as: "p",
        fontFamily: "Permanent Marker",
        margin: "0",
    }))

    return (
        <div className="bg-yellow-100">
            <div className="flex flex-col items-center w-full text-center">
                <Slogan className="text-pale-200 tracking-0.225 p-6 text-2xl">
                    {/* Remove below text and add text prop to component in layout */}
                    Sub Banner, ADD SLOGAN HERE 
                    {text}
                </Slogan>
            </div>
            <div className="shadow-subbanner-shadow max-w-mobile max-w-tablet max-w-desktop h-1"></div>
        </div>
    )
}

export default SubBanner
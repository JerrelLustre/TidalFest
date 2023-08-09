import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function SubBanner({text}) {

    const Slogan = styled(Typography)(() => ({
        fontFamily: "Permanent Marker",
        margin: "0",
    }))

    return (
        <div className=" bg-yellow-100 flex flex-col items-center w-full text-center shadow-subbanner-shadow relative">
            <Slogan className="text-pale-200 tracking-0.225 p-6 text-2xl">
                {text}
            </Slogan>
        </div>
    )
}

export default SubBanner
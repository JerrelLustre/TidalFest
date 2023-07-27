import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// components
import TidalfestLogoLight from "../../../assets/images/tidalfest-logo-light.svg";

function Copyright() {
    const Copy = styled(Typography)(({ theme }) => ({
        as: "p",
        fontFamily: "Montserrat",
        fontWeight: "normal",
        fontSize: "18px",
        color: theme.palette.pale100.main,
        marginTop: "9px"
    }))

    return(
        <div className="flex flex-col items-center">
            <Link to="/">
                <img 
                src={TidalfestLogoLight} 
                alt="TidalFest Logo"
                width="186.25px"
                height="auto" 
                />
            </Link>
            <Copy>
                © 2023 All Rights Reserved
            </Copy>
        </div>
    )
}

export default Copyright
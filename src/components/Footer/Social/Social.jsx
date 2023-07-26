import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import FacebookIcon from "../../../assets/facebook.svg";
import InstagramIcon from "../../../assets/instagram.svg";
import TwitterIcon from "../../../assets/twitter.svg";

function Social() {
    const Title = styled(Typography)(() => ({
        as: "h2",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: "24px",
        color: "#FFF8EF",
        marginBottom: "23px",
    }))

    return (
        <div className="flex flex-col items-center">
            <Title>Connect with Us</Title>
            <div className="flex flex-row">
                <Link to="/">
                    <img 
                    src={FacebookIcon} 
                    alt="Facebook Link" 
                    className=""
                    width="43.16px"
                    height="auto"
                    />
                </Link>
                <Link to="/">
                    <img 
                    src={InstagramIcon} 
                    alt="Instagram Link" 
                    className="mx-3"
                    width="43.16px"
                    height="auto"
                    />
                </Link>
                <Link to="/">
                    <img 
                    src={TwitterIcon}
                    alt="Twitter Link" 
                    className=""
                    width="43.16px"
                    height="auto"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Social
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// assets
import FacebookIcon from "../../../assets/images/facebook.svg";
import InstagramIcon from "../../../assets/images/instagram.svg";
import TwitterIcon from "../../../assets/images/twitter.svg";


function Social() {
    
    const Title = styled(Typography)(({ theme }) => ({
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: "24px",
        color: theme.palette.pale100.main,
        marginBottom: "23px",
    }))

    return (
        <div className="flex flex-col items-center">
            <Title variant="h5">Connect with Us</Title>
            <div className="flex flex-row">
                <Link 
                    to="https://www.facebook.com/" 
                    target="_blank"
                >
                    <img 
                    src={FacebookIcon} 
                    alt="Facebook Link" 
                    width="43.16px"
                    height="auto"
                    />
                </Link>
                <Link 
                    to="https://www.instagram.com/"
                    target="_blank"
                >
                    <img 
                    src={InstagramIcon} 
                    alt="Instagram Link" 
                    className="mx-3"
                    width="43.16px"
                    height="auto"
                    />
                </Link>
                <Link 
                    to="https://www.twitter.com/"
                    target="_blank"
                >
                    <img 
                    src={TwitterIcon}
                    alt="Twitter Link" 
                    width="43.16px"
                    height="auto"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Social
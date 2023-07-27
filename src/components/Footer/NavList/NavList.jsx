import { Link } from "react-router-dom";
import { ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function NavList() {

    const LiTag = styled(ListItem)(({ theme }) => ({
        color: theme.palette.pale100.main,
        fontFamily: "Montserrat",
        fontWeight: "normal",
        fontSize: "18px",
        width: "100%",
        lineHeight: 1.125,
        textAlign: "center",
        padding: "0",
        justifyContent: "center",
        marginTop: "5px", 
        "&:not(:first-of-type)": {
            marginTop: "5px",
        },
    }))

    const Title = styled(Typography)(({ theme }) => ({
        as: "h2",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: "24px",
        color: theme.palette.pale100.main,
        marginBottom: "23px",
    }))

    return (
        <div className="flex flex-col items-center">
            <Title>TidalFest</Title>
            <ul>
                <LiTag>
                    <Link to="/" >
                    Homepage
                    </Link>
                </LiTag>
                <LiTag>
                    <Link to="/" >
                    Events
                    </Link>
                </LiTag>
                <LiTag>
                    <Link to="/faq" >
                    FAQ
                    </Link>
                </LiTag>
                <LiTag>
                    <Link to="/tickets/order" >
                    Ticket Purchase
                    </Link>
                </LiTag>
            </ul>
        </div>
    )
}

export default NavList
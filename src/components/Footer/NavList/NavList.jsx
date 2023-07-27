import { Link } from "react-router-dom";
import { ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function NavList() {

    const LiTag = styled(ListItem)(() => ({
        color: "#FFF8EF",
        fontFamily: "Montserrat",
        fontWeight: "normal",
        fontSize: "18px",
        width: "auto",
        lineHeight: 1.125,
        padding: "0",
        marginTop: "5px", 
        "&:not(:first-of-type)": {
            marginTop: "5px",
        },
    }))

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
            <Title>TidalFest</Title>
            <ul>
                <LiTag>
                    <Link
                        to="/"
                    >
                    Homepage
                    </Link>
                </LiTag>
            </ul>
            <ul>
                <LiTag>
                    <Link
                        to="/"
                    >
                    Events
                    </Link>
                </LiTag>
            </ul>
            <ul>
                <LiTag>
                    <Link
                        to="/faq"
                    >
                    FAQ
                    </Link>
                </LiTag>
            </ul>
            <ul>
                <LiTag>
                    <Link
                        to="/tickets"
                    >
                    Ticket Purchase
                    </Link>
                </LiTag>
            </ul>
        </div>

    )
}

export default NavList
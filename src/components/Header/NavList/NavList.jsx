import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

function NavList() {

  const LiTag = styled(ListItem)(({ theme }) => ({
    as: "li",
    color: theme.palette.pale200,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    width: "auto",
    padding: "0"
  }))

  return (
    <ul className="flex w-full flex-col gap-2 p-4 tablet:p-0 tablet:flex-row tablet:items-center tablet:justify-between">
      <div className="flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-6">
        <LiTag>
          <Link 
            to="/" 
            className="flex items-center"
          >
            HOME
          </Link>
        </LiTag>
        <LiTag>
          <Link 
            to="/tickets" 
            className="flex items-center"
          >
            BUY TICKETS
          </Link>
        </LiTag>
        <LiTag>
          <Link 
            to="/lineup" 
            className="flex items-center"
          >
            LINEUP
          </Link>
        </LiTag>
        <LiTag>
          <Link 
            to="/faq" 
            className="flex items-center"
          >
            FAQ
          </Link>
        </LiTag>
      </div>
      <div className="my-2 flex gap-2 tablet:mb-0 tablet:mt-0 tablet:flex-row tablet:items-center tablet:gap-6">
        <Link 
          to="account/login" 
          className="font-montserrat font-bold"
        >
          Login
        </Link>
        <Link 
          to="/account/signup" 
          className="font-montserrat font-bold"
        >
          Signup
        </Link>
      </div>
    </ul>
  )
}

export default NavList
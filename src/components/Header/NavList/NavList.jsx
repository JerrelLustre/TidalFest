import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAuthContext } from "../../../hooks/useAuthContext";

function NavList() {

  const LiTag = styled(ListItem)(({ theme }) => ({
    color: theme.palette.pale200.main,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    width: "auto",
    padding: "0"
  }))

  // check user existence to display different nav buttons
  const { user } = useAuthContext()

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
            to="/tickets/order" 
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
        { user ? (
          <button 
            className="font-montserrat font-bold"
            // onClick={logout}
          >
            Logout
          </button> ) : (
          <>
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
          </>
          )
        }
      </div>
    </ul>
  )
}

export default NavList
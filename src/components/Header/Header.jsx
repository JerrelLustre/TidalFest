import { useState } from "react";
import { 
  Link, 
  useNavigate 
} from "react-router-dom";
import { ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

// assets
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TidalfestLogo from "../../assets/images/tidalfest-logo.svg";


export default function Header() {

  const LiTag = styled(ListItem)(({ theme }) => ({
    color: theme.palette.pale200.main,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    width: "auto",
    padding: "0",
    textTransform: "uppercase",
  }))

  const MobileMenu = styled(Typography)(({theme}) => ({
    fontFamily: "Montserrat",
    margin: "0",
    borderLeft: `16px solid ${theme.palette.red100.main}`,

}))

  const { user } = useAuthContext()
  const { logout } = useLogout()

  const [ mobileMenu, setMobileMenu ] = useState(false)
  const navigate = useNavigate()

  const openMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  const closeMenu = () => {
    setMobileMenu(false)
  }

  // mobile version nav menu
  const handleLink = async (path) => {
    await closeMenu()
    navigate(path)
  } 

  const navList = [
    { title: "Home", path: "/" },
    { title: "Buy Tickets", path: user ? "/tickets/order" : "/account/login" },
    { title: "Lineup", path: "/lineup" },
    { title: "faq", path: "/faq" }
  ]

  return (
    <header className="fixed top-0 mx-auto px-4 py-3 h-100 bg-orange-100 bg-opacity-100 w-full z-20 shadow-heading-shadow">
      <div className="flex w-full items-center gap-6 text-pale-200 justify-between tablet:justify-normal">
        <Link to="/" > 
          <img
            src={TidalfestLogo}
            alt="Tidalfest Logo"
            className="py-3"
            width="180px"
          />
        </Link>
        <div 
          className="cursor-pointer tablet:hidden"
          onClick={openMenu}>
          {mobileMenu ? <CloseIcon /> : <MenuIcon /> }
        </div>
      <nav className="hidden w-full tablet:block">
          <ul className="flex w-full flex-col gap-2 p-4 tablet:p-0 tablet:flex-row tablet:items-center tablet:justify-between">
            <div className="flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-6">
            {navList.map((item, index) => (
              <LiTag key={index}>
                <Link 
                  to={item.path} 
                  className="flex itmes-center"
                  onClick={() => handleLink(item.path)}
                >
                  {item.title}
                </Link>
              </LiTag>
            ))}
            </div>
            <div className="text-pale-200 my-2 flex gap-2 tablet:mb-0 tablet:mt-0 tablet:flex-row tablet:items-center tablet:gap-6">
            { user ? (
              <button 
                className="font-montserrat font-bold"
                onClick={logout}
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
        </nav>
        { mobileMenu &&
        <nav className="absolute left-0 top-[100px] -z-10 bg-orange-200  w-screen h-screen">
          <ul className="flex w-full h-mobileMenu flex-col gap-2 p-4 tablet:p-0 tablet:flex-row tablet:items-center tablet:justify-between">
            <div className="flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-6">
            {navList.map((item, index) => (
              <Link 
                key={index}
                to={item.path}
                onClick={() => handleLink(item.path)}
                className="flex flex-col text-center justify-center items-center"
              >
                <MobileMenu 
                  variant="h2"
                  className="rounded-lg py-4 px-8 bg-pale-200 text-red-200 font-bold text-3xl uppercase shadow-sectionheading-shadow"
                >
                  {item.title}
                </MobileMenu>
              </Link>
            ))} 
            </div>
            <div className="text-pale-200 my-2 flex justify-center flex-col gap-3 tablet:mb-0 tablet:mt-0 tablet:flex-row tablet:items-center tablet:gap-6">
            { user ? (
              <button 
                className="font-montserrat font-bold flex justify-center items-center"
                onClick={logout}
              >
                <MobileMenu 
                  variant="h2"
                  className="rounded-lg py-4 px-8 bg-pale-200 text-red-200 font-bold text-3xl uppercase shadow-sectionheading-shadow"
                  >
                  Logout
                </MobileMenu>
              </button> ) : (
              <>
                <Link 
                  to="account/login" 
                  className="font-montserrat font-bold flex justify-center items-center"
                  onClick={() => handleLink("/account/login")}
                >
                  <MobileMenu 
                    variant="h2"
                    className="rounded-lg py-4 px-8 bg-pale-200 text-red-200 font-bold text-3xl uppercase shadow-sectionheading-shadow"
                  >
                    Login
                  </MobileMenu>
                </Link>
                <Link 
                  to="/account/signup" 
                  className="font-montserrat font-bold flex justify-center items-center"
                  onClick={() => handleLink("/account/signup")}
                >
                  <MobileMenu 
                    variant="h2"
                    className="rounded-lg py-4 px-8 bg-pale-200 text-red-200 font-bold text-3xl uppercase shadow-sectionheading-shadow"
                  >
                    Signup
                  </MobileMenu>
                </Link>
              </>
              )
            }
            </div>
          </ul>
          </nav>
        }
      </div>
    </header>
  );
}
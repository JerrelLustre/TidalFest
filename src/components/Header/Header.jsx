import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import TidalfestLogo from "../../assets/tidalfest-logo.svg";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <div className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="3xl"
          color="text-pale-200"
          className="3xl montserrat font-bold"
        >
          <a href="#" className="flex items-center transition-colors font-montserrat">
            HOME
          </a>
        </Typography>
        <Typography
          as="li"
          variant="3xl"
          color="text-pale-200"
          className="p-1 font-bold"
        >
          <a href="#" className="flex items-center transition-colors font-montserrat">
            BUY TICKETS
          </a>
        </Typography>
        <Typography
          as="li"
          variant="3xl"
          color="text-pale-200"
          className="p-1 font-bold"
        >
          <a href="#" className="flex items-center transition-colors font-montserrat">
            LINEUP
          </a>
        </Typography>
        <Typography
          as="li"
          variant="3xl"
          color="text-pale-200"
          className="p-1 font-bold"
        >
          <a href="#" className="flex items-center transition-colors font-montserrat">
            FAQ
          </a>
        </Typography>
      </div>
      <div className="my-2 flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="3xl"
          color="text-pale-200"
          className="3xl montserrat font-bold"
        >
          <a href="#" className="font-montserrat">
            Login
          </a>
        </Typography>
        <Typography
          as="li"
          variant="3xl"
          color="text-pale-200"
          className="3xl montserrat font-bold"
        >
          <a href="#" className="font-montserrat">
            Signup
          </a>
        </Typography>
      </div>
    </ul>
  );
}
 
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto px-4 py-3 bg-orange-100 bg-opacity-100 w-screen">
      <div className="flex items-center text-pale-200">
        <div className="flex flex-row items-center text-pale-200">
          <div className="items-center space-x-3.75"> 
            <img
              src={TidalfestLogo}
              alt="Tidalfest Logo"
              className="p-3 w-50" // Adjust the height and width as needed
            />
          </div>
          <div className="hidden lg:block">
            <NavList />
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
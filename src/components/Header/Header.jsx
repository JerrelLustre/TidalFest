import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from '@mui/material'
import NavList from "./NavList";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TidalfestLogo from "../../assets/tidalfest-logo.svg";


export default function Header() {

  const [collapsed, setCollapsed] = useState(false);

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <header className="fixed top-0 mx-auto px-4 py-3 bg-orange-100 bg-opacity-100 w-screen shadow-heading-shadow">
      <nav className="flex items-center gap-6 text-pale-200">
        <div className="flex flex-row items-center gap-6 w-full">
          <Link to="/" > 
            <img
              src={TidalfestLogo}
              alt="Tidalfest Logo"
              className="py-3"
              width="180px"
            />
          </Link>
          <div className="hidden w-full tablet:block">
            <NavList />
          </div>
        </div>
        <div
          className="cursor-pointer tablet:hidden"
          onClick={handleCollapseToggle}
        >
          {collapsed ? (
            <CloseIcon />
          ) : (
            <MenuIcon />
          )}
        </div>
      </nav>
      <Collapse 
        in={collapsed}
        className="text-pale-200 tablet:hidden"
      >
        <NavList />
      </Collapse>
    </header>
  );
}
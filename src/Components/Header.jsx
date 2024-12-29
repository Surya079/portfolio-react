import { useState } from "react";
import { Navbar } from "./common/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMobileView from "../customHooks/useMobileView";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMobileView();

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed w-full p-3 bg-gradient-to-t from-slate-700 to-slate-900 shadow-md z-50">
      <div className="flex flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl  font-bold">
          <Link to="/" className="text-white flex flex-row items-center gap-2 hover:text-white">
            <div className="w-[50px] h-[50px] rounded-full bg-slate-100 flex flex-col items-center justify-center overflow-hidden">
              <img src="/images/logo.png" alt="logo" width={40} className=" " />
            </div>
            Hi There!
          </Link>
        </div>

        {/* Navbar Section */}
        <div>
          {/* Desktop Navbar */}
          {!isMobile && <Navbar />}

          {/* Mobile Navbar */}
          {isMobile && (
            <div>
              <Navbar
                container={`flex flex-col items-start text-lg gap-3 justify-center items-center transition-transform transform duration-300 ease-in-out ${
                  menuOpen ? "translate-x-0" : "translate-x-full"
                } absolute p-6 top-[57px] bg-gradient-to-t from-slate-700 to-slate-900 right-0 w-[200px] h-[300px] shadow-lg`}
              />
              {/* Menu Toggle Icons */}
              <div className="text-2xl text-white cursor-pointer">
                {menuOpen ? (
                  <CloseIcon onClick={handleOpenMenu} />
                ) : (
                  <MenuIcon onClick={handleOpenMenu} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

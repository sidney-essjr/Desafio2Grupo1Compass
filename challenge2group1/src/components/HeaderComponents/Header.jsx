import React from "react";
import PlantIcon from "./PlantIcon";
import UserIcon from "./UserIcon";
import { NavLink, Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isShown, setIsShown] = useState(false);

  const toggleNavbar = () => {
    setIsShown(!isShown);
  };
  return (
    <div className="sticky flex top-0 pt-2 justify-between bg-gelo items-center w-screen z-10 flex-wrap">
      <PlantIcon />
      <div >
        <div className="hidden md:flex">
          <NavLinks />{" "}
        </div>
        <div className="md:hidden">
          <button className="justify-between" onClick={toggleNavbar}>
            {" "}
            {isShown ? <X /> : <Menu />}
          </button>
        </div>{" "}
      </div>
      <Link to="userRegister">
        {" "}
        <UserIcon />{" "}
      </Link>
      {isShown && (
        <div className="div-style">
          <NavLinks />
        </div>
      )}
    </div>
  );
};

export default Header;

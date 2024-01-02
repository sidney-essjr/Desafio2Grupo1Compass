import React from "react";
import { NavLink, Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isShown, setIsShown] = useState(false);

  const toggleNavbar = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <nav className="flex-wrap">
        <div className="hidden md:flex">
          <NavLinks />{" "}
        </div>
        <div className="md:hidden">
          <button className="justify-between" onClick={toggleNavbar}>
            {" "}
            {isShown ? <X /> : <Menu />}
          </button>
        </div>{" "}
      </nav>
      {isShown && (
        <div className="flex flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default NavBar;

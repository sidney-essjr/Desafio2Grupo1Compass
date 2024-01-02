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
      <nav>
        <div className="hidden md:flex">
          <NavLinks />{" "}
        </div>
        <div className="md:hidden">
          <button className="justify-end" onClick={toggleNavbar}>
            {" "}
            {isShown ? <X /> : <Menu />}
          </button>
        </div>{" "}
      </nav>
      {isShown && (
        <div className="flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default NavBar;

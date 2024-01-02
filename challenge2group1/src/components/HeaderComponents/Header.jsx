import React from "react";
import PlantIcon from "./PlantIcon";
import UserIcon from "./UserIcon";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky flex top-0 pt-2 justify-between bg-gelo items-center w-screen z-10 flex-wrap">
      <PlantIcon />
      <NavBar />
      <Link to="userRegister">
        {" "}
        <UserIcon />{" "}
      </Link>
    </div>
  );
};

export default Header;

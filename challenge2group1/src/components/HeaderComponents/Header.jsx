import React from "react";
import PlantIcon from "./HeaderComponents/PlantIcon";
import UserIcon from "./HeaderComponents/UserIcon";
import NavBar from "./HeaderComponents/NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky flex top-0 justify-between bg-gelo items-center w-screen z-10 flex-wrap ">
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

import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="flex w-full justify-between bg-gelo items-center" >
      <img className="ml-20"
        
        src="/plantPeaceIcon.svg"
        alt="the plantPeace logo"
      />
      <nav >
        {" "}
        <ul className="flex font-raleway gap-6 text-lunar text-xs">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="registrationForm">Register</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="about">About us</Link>
          </li>
        </ul>
      </nav>
      <img className="mr-20" src="/userIcon.svg" alt="user icon" />
    </div>
  );
};

export default Header;

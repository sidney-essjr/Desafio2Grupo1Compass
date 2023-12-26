import { Fragment } from "preact";
import React from "react";

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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </nav>
      <img className="mr-20" src="/userIcon.svg" alt="user icon" />
    </div>
  );
};

export default Header;

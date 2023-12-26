import { Fragment } from "preact";
import React from "react";

const Header = () => {
  return (
    <div className="flex">
      <img
        className="flex"
        src="/plantPeaceIcon.svg"
        alt="the plantPeace logo"
      />
      <nav className="flex">
        {" "}
        <ul>
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
      <img src="/userIcon.svg" alt="user icon" />
    </div>
  );
};

export default Header;

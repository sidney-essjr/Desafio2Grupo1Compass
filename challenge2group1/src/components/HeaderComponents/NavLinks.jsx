import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="flex flex-col md:flex-row font-raleway gap-2 md:gap-6 text-lunar text-base -mb-3">
      <li>
        <NavLink
          className="hover:text-abacate"
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#8A9B6E" : undefined,
          })}
          end
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-abacate"
          to="plantRegistration"
          style={({ isActive }) => ({
            color: isActive ? "#8A9B6E" : undefined,
          })}
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-abacate"
          to="products"
          style={({ isActive }) => ({
            color: isActive ? "#8A9B6E" : undefined,
          })}
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-abacate"
          to="about"
          style={({ isActive }) => ({
            color: isActive ? "#8A9B6E" : undefined,
          })}
        >
          About us
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

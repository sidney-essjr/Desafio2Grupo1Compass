import React from "react";
import { NavLink, Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="sticky flex top-0 justify-between bg-gelo items-center w-screen z-10 "  >
      <img className="ml-20"
        
        src="/plantPeaceIcon.svg"
        alt="the plantPeace logo"
      />
      <nav >
      
        <ul className="flex font-raleway gap-6 text-lunar text-xs">
          <li>
            <NavLink 
              to="/"
              style={({isActive}) => ({color: isActive ? "#8A9B6E" : undefined})} end
            >Home</NavLink>
          </li>
          <li>
            <NavLink 
              to="plantRegistration"
              style={({isActive}) => ({color: isActive ? "#8A9B6E" : undefined})}
            >Register</NavLink>
          </li>
          <li>
            <NavLink 
              to="products"
              style={({isActive}) => ({color: isActive ? "#8A9B6E" : undefined})}  
            >Products</NavLink>
          </li>
          <li>
            <NavLink 
              to="about"
              style={({isActive}) => ({color: isActive ? "#8A9B6E" : undefined})}
            >About us</NavLink>
          </li>
        </ul>
      </nav>
      <Link to="userRegister"><img className="mr-20" src="/userIcon.svg" alt="user icon" /></Link>
    </div>
  );
};

export default Header;

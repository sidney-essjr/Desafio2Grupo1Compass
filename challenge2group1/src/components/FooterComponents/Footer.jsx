import React from "react";
import { ContactUS } from "./ContactUS";
import Links from "./Links";
import Community from "./Community";
import FooterElement from "./FooterElement";

const Footer = () => {
  return (
    <div
      className="flex-col justify-between  bg-lunar pb-11 w-screen"
      style="background-image: url(footerBG.svg)"
    >
      <div className="flex-col md:flex md:flex-row justify-between pt-5 md:pt-10 pb-5 md:pb-10 bg-local  text-white ">
        <div className="flex mt-2 md:mt-10 ml-10 md:ml-20 mr-20 gap-10 ">
          <ContactUS />
        </div>
        <div className="md:flex-row md:flex flex-col ml-20 md:mr-20 mt-5 md:mt-20 gap-5 md:gap-10 ">
        <Links />
        <Community />
        </div>
      </div>
      <FooterElement />
    </div>
  );
};

export default Footer;

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
      <div className=" flex justify-between pt-10 pb-10 bg-local  text-white ">
        <div className="flex mt-10 mr-20 gap-10 ">
          <ContactUS />
        </div>
        <Links />
        <Community />
      </div>
      <FooterElement />
    </div>
  );
};

export default Footer;

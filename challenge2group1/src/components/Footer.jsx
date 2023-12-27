import React from "react";

const Footer = () => {
  return (
    <div
      className="flex-col justify-between  bg-lunar pb-11 "
      style="background-image: url(footerBG.svg)"
    > 
      <div className=" flex justify-between pt-10 pb-10 bg-local  text-white ">
        <ul className="ml-20">
          <li className="text-[64px] mb-1 font-garamond font-bold">Stay Fresh</li>
          <li className="mb-4 font-raleway">compassinhos@gmail.com</li>
          <li className="font-raleway">+55 41 99999-9999</li>
        </ul>
        <div className="flex mt-10 mr-20 gap-10 ">
          <ul>
            <label className="font-lato font-bold text-2xl "> Links</label>
            <li className="mt-6 font-raleway mb-3">About us</li>
            <li className="font-raleway mb-3">Products</li>
            <li className="font-raleway mb-3">Blogs</li>
          </ul>
          <ul>
            <label className="font-lato font-bold text-2xl">Community</label>
            <li className=" font-raleway mt-6 mb-3">About us</li>
            <li className="font-raleway mb-3">Products</li>
            <li className="font-raleway">Blogs</li>
          </ul>
        </div>
      </div>
      <hr className="text-accent mt-16" size="10" width="90%" aling="center" /> <br />
      <footer className="flex justify-between">
        <img className="ml-20" src="plantPeaceIconWhite.svg" alt="" />
        <p className="font-raleway text-sm text-white mr-20 w-[221px] text-center">
          Compassinhos ®.All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;

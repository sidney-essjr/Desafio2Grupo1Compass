import React from "react";

const Footer = () => {
  return (
    <div
      className=" flex justify-between pt-28 bg-local bg-lunar text-[#FFFFFF]"
      style="background-image: url(footerBG.svg)"
    >
      <ul className="ml-20">
        <li className="text-5xl mb-4 font-garamond">Stay Fresh</li>
        <li className="mb-3 font-raleway">compassinhos@gmail.com</li>
        <li className="font-raleway">+55 41 99999-9999</li>
      </ul>
      <div className="flex mt-5 mr-20 gap-10 ">
        <ul>
          <label className="font-lato"> Links</label>
          <li className="mt-5 font-raleway">About us</li>
          <li className="font-raleway">Products</li>
          <li className="font-raleway">Blogs</li>
        </ul>
        <ul>
          <label className="font-lato">Community</label>
          <li className=" font-raleway mt-5">About us</li>
          <li className="font-raleway">Products</li>
          <li className="font-raleway">Blogs</li>
        </ul>
      </div>
      {/* <hr className="flex flex-col" size="10" width="80%" align="center" />
      <img src="plantPeaceIcon.svg" alt="" /> */}
    </div>
  );
};

export default Footer;

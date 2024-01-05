import React from "react";

const FooterElement = () => {
  return (
    <>
      <hr className="text-accent border-t border-[#DDDEA0] md:mt-16" size="10" width="90%" aling="center" />{" "}
      <br />
      <footer className="flex justify-between">
        <img className="md:ml-20 ml-10" src="plantPeaceIconWhite.svg" alt="" />
        <p className="font-raleway text-sm text-white md:mr-20 mr-10 w-[221px] text-center">
          Compassinhos ®.All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default FooterElement;

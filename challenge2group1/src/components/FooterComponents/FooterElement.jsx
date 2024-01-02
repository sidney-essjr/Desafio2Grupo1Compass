import React from "react";

const FooterElement = () => {
  return (
    <>
      <hr className="text-accent md:mt-16" size="10" width="90%" aling="center" />{" "}
      <br />
      <footer className="flex justify-between">
        <img className="ml-20" src="plantPeaceIconWhite.svg" alt="" />
        <p className="font-raleway text-sm text-white mr-20 w-[221px] text-center">
          Compassinhos ®.All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default FooterElement;

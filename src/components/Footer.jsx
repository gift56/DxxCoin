import React from "react";

const Footer = () => {
  const date = new Date();

  const year = date.getFullYear();
  return (
    <footer className="w-full py-4 flex justify-center items-center text-center">
      <h2>DXXcoin© Copyright {year}. All rights reserved</h2>
    </footer>
  );
};

export default Footer;

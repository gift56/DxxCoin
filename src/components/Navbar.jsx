import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="flex items-center justify-between py-5">
          <h1 className="uppercase text-2xl text-white font-bold">
            DXX<span className="text-[#00FF38]">coin</span>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

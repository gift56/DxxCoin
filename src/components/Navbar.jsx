import React, { useState } from "react";
import { Link } from "react-scroll";
import { SiWebmoney } from "react-icons/si";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    {
      link: "Home",
      to: "home",
    },
    {
      link: "About Us",
      to: "about",
    },
    {
      link: "How to start",
      to: "how",
    },
    {
      link: "Crypto",
      to: "crypto",
    },
  ];

  return (
    <nav>
      <div className="container">
        <div className="relative flex items-center justify-between py-5">
          <h1 className="uppercase text-2xl text-white font-bold">
            DXX<span className="text-[#00FF38]">coin</span>
          </h1>
          <ul className="hidden md:flex items-center justify-center gap-6">
            {Links.map(({ link, to }, i) => (
              <li
                key={i}
                className="text-[#ffffffea] font-semibold cursor-pointer leading-[120%] text-[19px] hover:text-[#00FF38] transition-all duration-300"
              >
                <Link to={to}>{link}</Link>
              </li>
            ))}
          </ul>
          <button className="bg-btnColor hidden md:flex px-[20px] py-[14px] min-w-[113px] rounded-[56px] cursor-pointer text-primary hover:bg-[#00ff37dc] hover:text-white transition-all duration-500 border-none font-semibold outline-none  items-center justify-center">
            Join us
          </button>
          <span className="md:hidden">
            {open ? (
              <AiOutlineCloseCircle
                onClick={() => setOpen((prev) => !prev)}
                size={25}
              />
            ) : (
              <SiWebmoney onClick={() => setOpen((prev) => !prev)} size={25} />
            )}
          </span>
          <ul className="md:hidden flex flex-col gap-7 absolute items-center justify-center top-[56px] w-full bg-boxColor py-3">
            {Links.map(({ link, to }, i) => (
              <li
                key={i}
                className="text-[#ffffffea] font-semibold cursor-pointer leading-[120%] text-[19px] hover:text-[#00FF38] transition-all duration-300"
              >
                <Link to={to}>{link}</Link>
              </li>
            ))}
            <button className="bg-btnColor  md:hidden px-[20px] py-[14px] min-w-[113px] rounded-[56px] cursor-pointer text-primary hover:bg-[#00ff37dc] hover:text-white transition-all duration-500 border-none font-semibold outline-none  items-center justify-center">
              Join us
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

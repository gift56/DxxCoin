import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = (e) => {
      const nav = document.querySelector("nav");
      if (e.currentTarget.scrollY > 50) {
        nav.classList.add("nav__scrolled");
      } else {
        nav.classList.remove("nav__scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-20`}>
      <div className="container">
        <div className="relative flex items-center justify-between py-4 myDiv">
          <h1 className="uppercase text-2xl text-white font-bold">
            DXX<span className="text-[#00FF38]">coin</span>
          </h1>
          <ul className="hidden md:flex items-center justify-center gap-6">
            {Links.map(({ link, to }, i) => (
              <li
                key={i}
                className="text-[#ffffffea] font-semibold cursor-pointer leading-[120%] text-[19px] hover:text-[#00FF38] transition-all duration-300"
              >
                <Link to={to} spy={true} smooth={true}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <button className="bg-btnColor btn hidden md:flex px-[20px] py-[14px] min-w-[113px] rounded-[56px] cursor-pointer text-primary hover:bg-[#00ff37dc] hover:text-white transition-all duration-500 border-none font-semibold outline-none  items-center justify-center">
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
          <ul
            className={`md:hidden flex flex-col gap-7 absolute items-center justify-center ${
              open ? "top-[56px]" : "top-[-100vh]"
            } w-full bg-[#2cac48d2] py-3 transition-all duration-500`}
          >
            {Links.map(({ link, to }, i) => (
              <li
                key={i}
                className="text-[#ffffffea] font-semibold cursor-pointer leading-[120%] text-[19px] hover:text-[#00FF38] transition-all duration-300"
              >
                <Link to={to} spy={true} smooth={true}>
                  {link}
                </Link>
              </li>
            ))}
            <button className="bg-[#00FF38]  md:hidden px-[20px] py-[14px] min-w-[113px] rounded-[56px] cursor-pointer text-white transition-all duration-500 border-none font-semibold outline-none  items-center justify-center">
              <Link to="join" spy={true} smooth={true}>
                Join us
              </Link>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

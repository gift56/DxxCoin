import React from "react";
import { Link } from "react-scroll";
import { SiWebmoney } from "react-icons/si";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
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
        <div className="flex items-center justify-between py-5">
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
          <button className="bg-btnColor hidden md:flex px-[20px] py-[14px] min-w-[113px] rounded-[56px] cursor-pointer text-primary hover:bg-[#00ff37dc] hover:text-white transition-all duration-500 border-none font-semibold outline-none">
            Join us
          </button>
          <div>
            <SiWebmoney />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

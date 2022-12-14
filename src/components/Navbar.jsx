import React from "react";
import { Link } from "react-scroll";

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
          <ul className="flex items-center justify-center gap-6">
            {Links.map(({ link, to }, i) => (
              <li
                key={i}
                className="text-[#ffffffea] font-semibold cursor-pointer leading-[120%] text-[19px] hover:text-[#00FF38] transition-all duration-300"
              >
                <Link to={to}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

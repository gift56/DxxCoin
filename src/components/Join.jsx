import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTelegram, FaFacebook } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";

const Join = () => {
  const socialIcons = [
    {
      icon: <BsInstagram className="w-[25px] h-[25px] text-[#ffffffb7]" />,
      to: "instagram.com",
    },
    {
      icon: <BsTwitter className="w-[25px] h-[25px] text-[#ffffffb7]" />,
      to: "twitter.com",
    },
    {
      icon: <FaTelegram className="w-[25px] h-[25px] text-[#ffffffb7]" />,
      to: "telegram.com",
    },
    {
      icon: <FaFacebook className="w-[25px] h-[25px] text-[#ffffffb7]" />,
      to: "facebook.com",
    },
  ];
  return (
    <section id="join">
      <div className="container">
        <div className="flex items-start md:flex-row justify-between flex-col w-full gap-5 py-10">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex md:justify-start items-center justify-center gap-4">
              {socialIcons.map(({ icon, to }) => (
                <a key={to}>{icon}</a>
              ))}
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Join;

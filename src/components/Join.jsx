import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTelegram, FaFacebook } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
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

  const contactInfo = [
    {
      icon: (
        <HiOutlineLocationMarker className="w-[15px] h-[15px] text-[#ffffffb7]" />
      ),
      locate: "Turks and caicos Island, over back",
    },
    {
      icon: <HiOutlinePhone className="w-[15px] h-[15px] text-[#ffffffb7]" />,
      locate: "+1 649 3479389",
    },
    {
      icon: <MdOutlineMailOutline />,
      locate: "wilsondorsainvil6@gmail.com",
    },
  ];

  return (
    <section id="join">
      <div className="container">
        <div className="flex items-start sm:flex-row justify-between flex-col w-full gap-5 py-10">
          <div className="flex-1 flex flex-col gap-9">
            <div className="flex flex-col gap-8">
              <div className="flex md:justify-start items-center justify-center gap-4">
                {socialIcons.map(({ icon, to }) => (
                  <a key={to}>{icon}</a>
                ))}
              </div>
              <h2 className="md:text-xl text-lg text-white font-normal">
                “If you can dream it, you can do it”
              </h2>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start">
              {contactInfo.map(({ icon, locate }, i) => (
                <div className="flex gap-2 items-center justify-start" key={i}>
                  <span>{icon}</span>
                  <p className="text-base font-medium text-white">{locate}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center flex-col gap-8 w-full">
            <h2 className="font-bold text-3xl xl:text-5xl">
              Join our community
            </h2>
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                <div className="md:w-[50%] w-full">
                  <input
                    type="text"
                    className="w-full bg-transparent border-b text-lg font-normal placeholder:text-[#ffffffb7] pl-3 outline-none focus:border-[#55DF77]"
                    placeholder="Name"
                  />
                </div>
                <div className="md:w-[50%] w-full">
                  <input
                    type="text"
                    className="w-full bg-transparent border-b text-lg font-normal placeholder:text-[#ffffffb7] pl-3 outline-none focus:border-[#55DF77]"
                    placeholder="Surname"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between w-full gap-4">
                <input
                  type="text"
                  className="w-full bg-transparent border-b text-lg font-normal placeholder:text-[#ffffffb7] pl-3 outline-none focus:border-[#55DF77]"
                  placeholder="Email"
                />
              </div>
              <button className="w-[107px] py-[15px] px-[24px] border-[#55DF77] bg-[#55DF77] rounded-[100px] flex items-center justify-center hover:opacity-5">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;

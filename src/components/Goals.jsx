import { motion } from "framer-motion";
import React from "react";
import AboutImg from "../assets/goalImg.svg";

const Goals = () => {
  const goalsData = [
    {
      text: "An accessible way to buy, sell, and store non-fungible tokens (Crypto) – digital art on the blockchain. You can expect the same industry-leading security technology.",
    },
    {
      text: "The project aims to build increasing connectivity to Ethereum and the wider blockchain ecosystem. AVAX, Avalanche’s native token, is the network’s unit of your persocnal account.",
    },
    {
      text: "High performance tools for active traders and industry-leading security from day one.",
    },
  ];
  return (
    <section id="about" className="relative">
      <div className="container">
        <div className="flex flex-col w-full gap-4 py-5">
          <div className="flex gap-4 flex-col w-full items-center justify-center md:px-4">
            <motion.h2
              initial={{ opacity: 0, y: "-20px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              className="text-white text-2xl md:text-5xl font-bold"
            >
              Our goal and mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: "20px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              className="text-center md:text-xl text-lg md:px-5 font-normal"
            >
              Whether you’re an experienced trader or just getting started,
              dxxcoin has all the tools you need. Execute your trading
              strategies with the professional level crypto trading platform.
            </motion.p>
          </div>
          <div className="flex md:flex-row flex-col md:justify-between justify-center items-center w-full gap-4 md:overflow-hidden mt-5">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: "-5rem" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 2 }}
                className="xl:w-[459px] xl:h-[530px] w-[100%]"
              >
                <img
                  src={AboutImg}
                  alt="hero image"
                  className="w-full h-full"
                />
              </motion.div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-6 dash">
              {goalsData.map(({ text }, i) => (
                <motion.div
                  initial={{ opacity: 0, y: "5rem" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", duration: 2 }}
                  key={i}
                  className="w-full relative flex items-start gap-6 bord"
                >
                  <div className="w-[8px] h-[80px] border border-[#55DF77] bg-[#55DF77] rounded-sm mybord"></div>
                  <h2 className="text-white text-[18px] leading-[25px] font-normal">
                    {text}
                  </h2>
                </motion.div>
              ))}
              <button className="w-[202px] py-[15px] px-[24px] border-[#55DF77] bg-[#55DF77] rounded-[100px] flex items-center justify-center">
                Join our Community
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex bg-[#55DF77] w-[370px] h-[200px] rounded-[50%] blur-[180px] absolute z-[-2] right-0 translate-y-[-490px]"></div>
      <div className="hidden md:flex bg-[#55DF77] w-[350px] h-[200px] rounded-[50%] blur-[200px] absolute z-[-2] left-[-150px] translate-y-[-90px]"></div>
    </section>
  );
};

export default Goals;

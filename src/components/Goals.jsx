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
    <section id="about">
      <div className="container">
        <div className="flex flex-col w-full gap-4 py-5">
          <div className="flex gap-4 flex-col w-full items-center justify-center md:px-4">
            <h2 className="text-white text-2xl md:text-5xl font-bold">
              Our goal and mission
            </h2>
            <p className="text-center md:text-xl text-lg md:px-5 font-normal">
              Whether you’re an experienced trader or just getting started,
              dxxcoin has all the tools you need. Execute your trading
              strategies with the professional level crypto trading platform.
            </p>
          </div>
          <div className="flex md:flex-row flex-col-reverse md:justify-between justify-center items-center w-full gap-4 md:overflow-hidden mt-5">
            <div className="flex-1">
              <div className="xl:w-[459px] xl:h-[530px] w-[100%]">
                <img
                  src={AboutImg}
                  alt="hero image"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1 flex justify-start items-start gap-3">
              {goalsData.map(({ text }, i) => (
                <div key={i}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;

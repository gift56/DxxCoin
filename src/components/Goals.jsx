import React from "react";
import AboutImg from "../assets/goalImg.svg";

const Goals = () => {
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
          <div className="flex md:flex-row flex-col-reverse md:justify-between justify-center items-center w-full gap-3 md:overflow-hidden mt-5">
            <div className="flex-1">
              <div className="xl:w-[459px] xl:h-[530px] w-[100%]">
                <img src={HeroImg} alt="hero image" className="w-full h-full" />
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;

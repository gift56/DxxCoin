import React from "react";
import AboutImg from "../assets/goalImg.svg";

const Goals = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="flex flex-col w-full gap-4 py-5">
          <div className="flex gap-4 flex-col w-full items-center justify-center">
            <h2 className="text-white text-xl md:text-5xl font-bold">
              Our goal and mission
            </h2>
            <p>
              Whether you’re an experienced trader or just getting started,
              dxxcoin has all the tools you need. Execute your trading
              strategies with the professional level crypto trading platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;

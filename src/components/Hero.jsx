import React from "react";
import HeroImg from "../assets/heroImg.svg";
import heroIcon from "../assets/heroIcon.svg";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center w-full gap-3">
          <div className="flex-1">
            <div className="w-[459px] h-[530px]">
              <img src={HeroImg} alt="hero image" className="w-full h-full" />
            </div>
          </div>
          <div className="flex-1 flex items-start justify-start flex-col gap-3 relative">
            <h1 className="text-white text-3xl md:text-6xl leading-[110%] font-bold">
              The World’s Fastest Growing{" "}
              <span className="text-[#57A06A]">Crypto</span> Community
            </h1>
            <p className="text-[#ffffffcc;]">
              A highly-curated platform for creating, collecting{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

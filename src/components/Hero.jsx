import React from "react";
import HeroImg from "../assets/heroImg.svg";
import heroIcon from "../assets/heroIcon.svg";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="flex md:flex-row flex-col-reverse md:justify-between justify-center items-center w-full gap-3 md:overflow-hidden">
          <div className="flex-1">
            <div className="xl:w-[459px] xl:h-[530px] w-[100%]">
              <img src={HeroImg} alt="hero image" className="w-full h-full" />
            </div>
          </div>
          <div className="flex-1 flex items-start justify-start flex-col gap-3 relative">
            <h1 className="text-white text-3xl lg:text-4xl xl:text-6xl leading-[110%] font-bold">
              The World’s Fastest Growing{" "}
              <span className="text-[#57A06A]">Crypto</span> Community
            </h1>
            <p className="text-[#ffffffcc] font-normal xl:text-xl text-lg">
              A highly-curated platform for creating, collecting
            </p>
            <div className="flex justify-center gap-5 items-center mt-5 w-full">
              <button className="border bg-[#55DF77] md:min-w-[192px] w-[50%] text-white h-[45px] flex items-center justify-center border-[#55DF77] hover:bg-transparent hover:border-[#55DF77] transition-all duration-300">
                Explore
              </button>
              <button className="border border-[#55DF77] md:min-w-[192px] w-[50%] text-white h-[45px] flex items-center justify-center  hover:bg-[#55DF77] transition-all duration-300">
                Buy
              </button>
            </div>
            <div className="hidden lg:flex absolute w-[420px] z-[-10] h-[200px] bottom-[-28px] right-[-25px]">
              <img src={heroIcon} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

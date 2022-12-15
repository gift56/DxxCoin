import React from "react";
import HeroImg from "../assets/heroImg.svg";
import heroIcon from "../assets/heroIcon.svg";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 2 };
  return (
    <section id="home" className="relative">
      <div className="hidden md:flex bg-[#55DF77] w-[400px] h-[300px] rounded-[50%] blur-[200px] absolute z-[-2]"></div>
      <div className="container">
        <div className="flex md:flex-row flex-col-reverse md:justify-between justify-center items-center w-full gap-3 md:overflow-hidden mt-5">
          <div className="flex-1">
            <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: "4rem" }}
              transition={transition}
              className="xl:w-[459px] xl:h-[530px] w-[100%]"
            >
              <img src={HeroImg} alt="hero image" className="w-full h-full" />
            </motion.div>
          </div>
          <div className="flex-1 flex items-start justify-start flex-col gap-3 relative">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", duration: 4 }}
              className="text-white text-3xl lg:text-4xl xl:text-6xl leading-[110%] font-bold"
            >
              The World’s Fastest Growing{" "}
              <span className="text-[#57A06A]">Crypto</span> Community
            </motion.h1>
            <p className="text-[#ffffffcc] font-normal xl:text-xl text-lg">
              A highly-curated platform for creating, collecting
            </p>
            <div className="flex md:justify-start justify-center gap-5 items-center mt-5 w-full">
              <button className="border bg-[#55DF77] md:w-[192px] w-[50%] text-white h-[45px] flex items-center justify-center border-[#55DF77] hover:bg-transparent hover:border-[#55DF77] transition-all duration-300">
                Explore
              </button>
              <button className="border border-[#55DF77] md:w-[192px] w-[50%] text-white h-[45px] flex items-center justify-center  hover:bg-[#55DF77] transition-all duration-300">
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

import React from "react";
import HeroImg from "../assets/heroImg.svg";
import heroIcon from "../assets/heroIcon.svg";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="flex justify-between items-start w-full gap-3">
          <div className="flex-1">
            <div className="w-[529px] h-[530px]">
              <img src={HeroImg} alt="hero image" className="w-full h-full" />
            </div>
          </div>
          <div className="flex-1 flex items-start justify-start flex-col gap-3">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

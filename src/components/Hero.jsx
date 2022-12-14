import React from "react";
import HeroImg from "../assets/heroImg.svg";
import heroIcon from "../assets/heroIcon.svg";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="flex justify-between items-start w-full">
          <div>
            <img src={HeroImg} alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

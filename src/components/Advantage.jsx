import React from "react";
import wallet1 from "../assets/cardImg.png";
import wallet2 from "../assets/card2Img.svg";
import wallet3 from "../assets/card3Img.svg";
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";

const Advantage = () => {
  const walletCard = [
    {
      img: wallet1,
      title: "Powerful for developers",
      details:
        "dxxcoin is a decentralized blockchain built to enable scalable, user-friendly apps for the world.",
    },
    {
      img: wallet2,
      title: "Low cost, forever",
      details:
        "Our scalability ensures transactions remain less than $0.01 for both developers and users.",
    },
    {
      img: wallet3,
      title: "Decentralized",
      details:
        "The network is spread over thousands of independent nodes,so  your transactions are always safe.",
    },
  ];

  return (
    <section id="how">
      <div className="container">
        <div className="flex items-center justify-center flex-col w-full gap-10 py-5">
          <div className="flex flex-col gap-4">
            <motion.h1
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              className="text-white text-2xl md:text-5xl font-bold text-center"
            >
              Our directions and advantages
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 3 }}
              className="text-center md:text-xl text-lg md:px-5 font-normal md:max-w-[75%] max-w-[100%] mx-auto"
            >
              Integrate once and never worry about scaling again. We ensure
              composability between ecosystem projects by maintaining a single
              global state as the network scales.
            </motion.p>
          </div>
          <div className="w-full flex md:flex-row flex-col justify-center items-center gap-4">
            {walletCard.map(({ img, title, details }, i) => (
              <div
                key={i}
                className="md:w-[35%] w-full border border-[#ffffff19] rounded-[24px] p-3 flex items-center flex-col gap-2"
              >
                <div className="w-[166px] h-[115px]">
                  <img src={img} alt={title} className="w-full h-full" />
                </div>
                <div className="flex flex-col justify-center items-center text-center gap-4">
                  <h2 className="text-lg font-semibold">{title}</h2>
                  <p className="text-[#ffffffcc] font-normal text-base lg:px-7">
                    {details}
                  </p>
                  <button className="flex items-center justify-center">
                    Learn more <BsArrowRightShort />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;

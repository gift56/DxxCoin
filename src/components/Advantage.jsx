import React from "react";
import wallet1 from "../assets/cardImg.png";
import wallet2 from "../assets/card2Img.svg";
import wallet3 from "../assets/card3Img.svg";

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
        <div className="flex items-center justify-center flex-col w-full gap-6 py-5">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-2xl md:text-5xl font-bold text-center">
              Our directions and advantages
            </h1>
            <p className="text-center md:text-xl text-lg md:px-5 font-normal md:max-w-[75%] max-w-[100%] mx-auto">
              Integrate once and never worry about scaling again. We ensure
              composability between ecosystem projects by maintaining a single
              global state as the network scales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;

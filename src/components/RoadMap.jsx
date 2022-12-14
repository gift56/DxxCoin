import React from "react";

const RoadMap = () => {
  return (
    <section id="crypto">
      <div className="container">
        <div className="flex items-center justify-center flex-col w-full gap-10 py-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
              Road map 2022
            </h1>
            <p className="text-center text-lg md:px-5 font-normal md:max-w-[75%] max-w-[100%] mx-auto">
              The largest and unique Super rare Place marketplace For
              crypto-collectibles
            </p>
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full flex justify-between items-start">
              <div className="flex-1">
                <div className="border-[#00ff3775] rounded-lg p-4 pb-6 flex flex-col items-center justify-center border gap-4 w-[90%]">
                  <h1 className="text-xl font-medium">January</h1>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <h2 className="text-2xl font-semibold text-white">Brief</h2>
                    <p className="text-base font-medium">
                      Lorem ipsum dolor sit amet consectetur. Elit massa erat
                      vitae non semper quis. Morbi sed aliquet donec facilisis.
                      Senectus eget.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="border-[#00ff3775] rounded-lg p-4 pb-6 flex flex-col items-center justify-center border gap-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;

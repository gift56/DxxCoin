import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Goals from "./components/Goals";
import Advantage from "./components/Advantage";
import RoadMap from "./components/RoadMap";
import Join from "./components/Join";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Goals />
      <Advantage />
      <RoadMap />
      <Join />
    </>
  );
};

export default App;

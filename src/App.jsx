import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Goals from "./components/Goals";
import Advantage from "./components/Advantage";
import RoadMap from "./components/RoadMap";
import Join from "./components/Join";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Goals />
      <Advantage />
      <RoadMap />
      <Join />
      <Footer />
    </>
  );
};

export default App;

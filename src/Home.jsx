import React from "react";

import { Navbar } from "./components";
import { Hero } from "./components";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";
import Feature6 from "./components/Feature6";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature6 />
    </>
  );
};

export default Home;

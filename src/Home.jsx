import React from "react";

import { Navbar } from "./components";
import { Hero } from "./components";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
    </>
  );
};

export default Home;

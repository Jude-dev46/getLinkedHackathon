import React from "react";

import { Navbar } from "./components";
import { Hero } from "./components";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import FAQ from "./components/FAQ";
import Prizes from "./components/Prizes";
import Sponsors from "./components/Partners";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";

const Home = () => {
  return (
    <>
      <Navbar style={false} />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <FAQ />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Privacy />
      <Footer />
    </>
  );
};

export default Home;

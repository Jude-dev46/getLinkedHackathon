import React from "react";
import Register from "./Register";
import { Navbar } from "./components";
import { Hero } from "./components";
import Feature1 from "./components/Feature1";

const App = () => {
  return (
    <div className="bg-blue-900">
      <Navbar />
      <Hero />
      {/* <Register /> */}
      <Feature1 />
    </div>
  );
};
export default App;

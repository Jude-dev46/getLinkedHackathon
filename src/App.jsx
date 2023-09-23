import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";

const App = () => {
  return (
    <div className=" overflow-x-hidden font-primary bg-blue-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

import React from "react";
import { heroImage } from "../assets";
import { chainStar } from "../assets";
import { curve } from "../assets";
import { bulb } from "../assets";

const Hero = () => {
  return (
    <div>
      <section className="bg-blue-900 py-8 sm:py-10  text-white text-center sm:text-start">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col text-[1.2rem] sm:text-3xl text-end pb-6 items-end font-semibold  ">
            <p>Igniting a Revolution in HR Innovation</p>
            <img src={curve} alt="" className=" pt-2 w-[10rem] sm:w-auto" />
          </div>

          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 text-white">
            <div>
              <div className="flex justify-end mr-[12rem]">
                <img src={bulb} alt="" />
              </div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-6xl">
                getlinked Tech Hackathon <span className="text-pink">1.0</span>
                <img
                  src={chainStar}
                  alt=""
                  className="inline-flex items-center justify-center"
                />
              </h1>

          <p className="mt-8 text-base text-black sm:text-xl">
          Participate in getlinked tech Hackathon 2023 stand 
a chance to win a Big prize
          </p>

          <div className="my-8 inline-flex items-center justify-center px-12 py-2.5 text-base font-semibold button-gradient-bg rounded-md   hover:text-white transition-all duration-200 focu focus:text-white"
            role="button">
           Register
          </div>
        </div>

        <div>
          <img
            className="w-full"
            src={heroImage}
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
    </div>
  );
};

export default Hero;

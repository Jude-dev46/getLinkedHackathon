import React from "react";
import { Link } from "react-router-dom";

import { heroImage } from "../assets";
import { chainStar } from "../assets";
import { curve } from "../assets";
import { bulb } from "../assets";
import { purpleLeft } from "../assets";
import Star from "../assets/star.png";
import StarWhiteBig from "../assets/starwhitebig.png";
import StarSmall from "../assets/sstar.png";
import Star2 from "../assets/star2.png";
import StarWhite from "../assets/star-white.png";

const Hero = () => {
  return (
    <div className=" relative bottom-10 bg-blue-900">
      <div className="border-b-[.05px] text-white -mb-8"></div>
      <img
        src={purpleLeft}
        alt="purple lens flare"
        className="hidden lg:block absolute pointer-events-none lg:top-[-250px] lg:left-[-10px] mix-blend-hard-light"
      />
      <img src={StarWhite} className="absolute top-24 left-36 lg:hidden" />
      <img
        src={StarWhiteBig}
        className="hidden lg:block absolute top-24 left-36"
      />
      <img
        src={Star}
        className="hidden lg:absolute lg:top-32 lg:left-[600px]"
      />
      <img
        src={Star}
        className="hidden lg:block absolute lg:top-32 lg:left-[600px]"
      />
      <img src={StarSmall} className="absolute top-20 right-16 lg:hidden" />
      <img
        src={StarSmall}
        className="absolute top-[350px] right-[108px] lg:hidden"
      />
      <img
        src={Star}
        className="hidden lg:block absolute lg:bottom-32 lg:left-[500px]"
      />
      <img src={Star2} className="hidden lg:absolute top-24 lg:left-36" />
      <section className="py-8 sm:py-10 text-white text-center sm:text-start">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col text-[1.2rem] sm:text-3xl items-center sm:text-end pb-6 sm:items-end font-semibold pt-4 ">
            <p>Igniting a Revolution in HR Innovation</p>
            <img
              src={curve}
              alt=""
              className=" pt-2 w-[10rem] sm:w-auto self-end"
            />
          </div>

          <img
            src={purpleLeft}
            alt="purple lens flare"
            className="w-[616px] h-[563px] lg:hidden absolute pointer-events-none top-[-8%] left-[-8%] mix-blend-hard-light"
          />
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 text-white ">
            <div className="-pt-10">
              <div className="flex justify-end mr-[4rem] sm:mr-[12rem] ">
                <img src={bulb} alt="" className="h-10 sm:h-auto" />
              </div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-6xl">
                getlinked Tech Hackathon <span className="text-pink">1.0</span>
                <img
                  src={chainStar}
                  alt=""
                  className="inline-flex items-center justify-center h-10 sm:h-16"
                />
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>

              <Link to="/register">
                <div
                  className="my-8 inline-flex items-center justify-center px-12 py-2.5 text-base font-semibold button-gradient-bg rounded-md   hover:text-white transition-all duration-200 focu focus:text-white"
                  role="button"
                >
                  Register
                </div>
              </Link>
              <div className="space-x-4 text-3xl font-bold">
                <span>
                  00<span className="text-sm">H</span>
                </span>
                <span>
                  00<span className="text-sm">M</span>
                </span>
                <span>
                  00<span className="text-sm">S</span>
                </span>
              </div>
            </div>
            <div className="self-end">
              <img className="w-full" src={heroImage} alt="" />
            </div>
          </div>
        </div>
        <div className="border-b-[.05px] text-white"></div>
      </section>
    </div>
  );
};

export default Hero;

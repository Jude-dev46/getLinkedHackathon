import React from "react";
import { logo } from "../assets";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(true);
  };
  const handleClick1 = () => {
    setToggle(false);
  };

  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8 bg-[#150E28] text-white w-full pt-4">
      {/* Desktop mode */}
      <div className="flex items-center justify-between h-16 lg:h-20 ">
        <div className="">
          <a href="#" title="" className="flex">
            <img className="w-auto h-6 sm:h-8" src={logo} alt="" />
          </a>
        </div>

        <ul className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
          <li
            href="#"
            title=""
            className="text-base font-semibold  transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            Timeline
          </li>

          <li
            href="#"
            title=""
            className="text-base font-semibold  transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            Overview{" "}
          </li>

          <li
            href="#"
            title=""
            className="text-base font-semibold  transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            FAQs{" "}
          </li>

          <li
            href="#"
            title=""
            className="text-base font-semibold  transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            Contact
          </li>

          <div className="w-px h-/20"></div>

          <li
            href="#"
            title=""
            className="inline-flex items-center justify-center px-8 py-2.5 text-base font-semibold button-gradient-bg rounded-md   hover:text-white transition-all duration-200 focu focus:text-white"
            role="button"
          >
            Register
          </li>
        </ul>

        <div className="lg:hidden text-white">
          {toggle ? (
            <RiCloseLine size={40} onClick={handleClick1} />
          ) : (
            <RiMenu3Line
              className="cursor-pointer"
              onClick={handleClick}
              size={30}
            />
          )}
        </div>
      </div>

      {/* Mobile mode */}
      <div
        className={`absolute z-10 p-4 bg-[#150E28] w-full left-0 px-8  lg:hidden transform transition-all duration-500 ease-in-out ${
          toggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul>
          <li
            href="#"
            title=""
            className="p-4 text-base font-semibold  transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            Timeline
          </li>

          <li
            href="#"
            title=""
            className="p-4 text-base font-semibold  transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            Overview{" "}
          </li>

          <li
            href="#"
            title=""
            className="p-4 text-base font-semibold  transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            FAQs{" "}
          </li>

          <li
            href="#"
            title=""
            className="p-4 text-base font-semibold  transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            Contact
          </li>

          <li
            href="#"
            title=""
            className="my-8 inline-flex items-center justify-center px-12 py-2.5 text-base font-semibold button-gradient-bg rounded-md   hover:text-white transition-all duration-200 focu focus:text-white"
            role="button"
          >
            {" "}
            Register{" "}
          </li>
        </ul>
        
      </div>
      <div className="border-b-[.05px] text-white mt-4"> </div>
     
    </div>
    
  );
};

export default Navbar;

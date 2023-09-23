import React from "react";
import { Link } from "react-router-dom";

import { logo } from "../assets";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = ({ style }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  };
  const handleClick1 = () => {
    setToggle(false);
  };

  return (
    <>
      <div
        className={`px-4 mx-auto sm:px-6 lg:px-36 bg-[#150E28] text-white w-full z-50 ${
          !style ? "mb-10 py-4" : ""
        }`}
      >
        {/* Desktop mode */}
        <div className="flex items-center justify-between h-20">
          <div className="">
            <Link to="/" title="" className="flex">
              <img className="w-auto h-6 sm:h-8" src={logo} alt="" />
            </Link>
          </div>
          <ul className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <li
              href="#timeline"
              title=""
              className="text-base font-semibold  transition-all duration-200 hover:text-opacity-80 hover:text-blue-600 hover:cursor-pointer"
            >
              {" "}
              Timeline
            </li>

            <li
              href="#overview"
              title=""
              className="text-base font-semibold  transition-all duration-200 hover:text-opacity-80 hover:text-blue-600 hover:cursor-pointer"
            >
              {" "}
              Overview{" "}
            </li>

            <li
              href="#faq"
              title=""
              className="text-base font-semibold  transition-all duration-200 hover:text-opacity-80 hover:text-blue-600 hover:cursor-pointer"
            >
              {" "}
              FAQs{" "}
            </li>

            <Link
              to="/contact"
              title=""
              className="text-base font-semibold  transition-all duration-200 hover:text-opacity-80 hover:text-blue-600 hover:cursor-pointer"
            >
              {" "}
              Contact
            </Link>

            <div className="w-px h-/20"></div>
            <Link to="/register">
              <li
                title=""
                className={`inline-flex items-center justify-center px-8 py-2.5 text-base font-semibold ${
                  !style ? "button-gradient-bg" : ""
                } rounded-md hover:text-white transition-all duration-200 focus:text-white border-2 border-blue-600 hover:animate-pulse`}
                role="button"
              >
                Register
              </li>
            </Link>
          </ul>

          <div className="lg:hidden text-white">
            {toggle ? (
              <RiCloseLine size={40} onClick={handleClick1} />
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={handleClick}
              >
                <path
                  d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z"
                  fill="white"
                />
              </svg>
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
              href="#timeline"
              title=""
              className="p-4 text-base font-semibold  transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Timeline
            </li>

            <li
              href="#overview"
              title=""
              className="p-4 text-base font-semibold  transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Overview{" "}
            </li>

            <li
              href="#faq"
              title=""
              className="p-4 text-base font-semibold  transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              FAQs{" "}
            </li>

            <Link to="/contact">
              <li
                title=""
                className="p-4 text-base font-semibold  transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Contact
              </li>
            </Link>

            <li
              href="#"
              title=""
              className="my-8 inline-flex items-center justify-center px-12 py-2.5 text-base font-semibold button-gradient-bg rounded-md   hover:text-white transition-all duration-200 focu focus:text-white"
              role="button"
            >
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
      {!style && <div className="border-b-[.05px] text-white"></div>}
    </>
  );
};

export default Navbar;

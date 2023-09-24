import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollMagic from "scrollmagic";

import { purpleLeft } from "../assets";
import StarPu from "../assets/star-pu.png";
import StarWhiteBig from "../assets/starwhitebig.png";
import StarWhiteSmall from "../assets/star1.png";
import Feature2Img from "../assets/feature2.png";
import { purpleRight } from "../assets";

const Feature2 = () => {
  const triggerRef = useRef(null);
  const parentRef = useRef(null);
  const controller = new ScrollMagic.Controller();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rightAnimation = gsap.from(".animate-left", {
            x: -50,
            duration: 1,
          });

          new ScrollMagic.Scene({
            triggerElement: triggerRef.current,
            triggerHook: 0.8,
            reverse: false,
          })
            .setTween(rightAnimation)
            .addTo(controller);
        } else {
          // Remove animation class when not in view
          entry.target.classList.remove("animate");
        }
      });
    }, options);

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="bg-blue-900 h-[700px] lg:h-full pt-20 overflow-hidden relative lg:pt-8 ">
        {/* desktop glow */}
        <img
          src={purpleLeft}
          alt="purple lens flare"
          className="hidden lg:block absolute pointer-events-none top-[-300px] left-[230px] mix-blend-hard-light "
        />
        <img
          src={purpleRight}
          alt="purple lens flare"
          className="hidden lg:block absolute pointer-events-none top-[40px] right-[-250px] mix-blend-hard-light  "
        />

        {/* mobile glow */}
        <img
          src={purpleLeft}
          alt="purple lens flare"
          className=" lg:hidden absolute pointer-events-none top-[-100px] left-[0px] mix-blend-hard-light "
        />
        <img
          src={purpleRight}
          alt="purple lens flare"
          className=" lg:hidden absolute pointer-events-none top-[70px] right-[-220px] mix-blend-hard-light  "
        />

        <div
          className="bg-blue-900 px-12 mx-auto max-w-7xl sm:px-6 lg:px-8 -mt-10"
          ref={parentRef}
        >
          <div
            className="grid items-center grid-cols-1 lg:gap-12 lg:grid-cols-2"
            ref={triggerRef}
          >
            <div className="relative text-center lg:text-left flex flex-col order-last lg:order-first self-center justify-center mb-5 animate-left">
              <h2 className="text-white font-bold text-4xl mb-5 font-sans">
                Rules and
                <br /> <span className="text-blue-600 mt-4">Guidelines</span>
              </h2>
              <p className="h-20 lg:h-44 text-white font-sans">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
              <img
                src={StarPu}
                alt="A shining star"
                className="absolute right-[300px] -top-10 animate-pulse"
              />
              <img
                src={StarWhiteBig}
                alt="A shining star"
                className="hidden lg:block absolute left-20 -bottom-40 lg:-right-10 lg:bottom-8 animate-pulse"
              />
              <img
                src={StarWhiteSmall}
                alt="A shining star"
                className="absolute left-20 -bottom-40 lg:hidden animate-pulse"
              />
            </div>
            <div className="order-first lg:order-last -mt-10">
              <img src={Feature2Img} alt="rules and guidelines" />
            </div>
          </div>
        </div>
      </section>
      <div className="border-b-[.02px] text-white"></div>
    </>
  );
};

export default Feature2;

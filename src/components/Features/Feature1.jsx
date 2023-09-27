import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollMagic from "scrollmagic";

import Arrow from "../../assets/arrow.png";
import Idea from "../../assets/idea.png";
import StarPu from "../../assets/star-pu.png";

const Feature1 = () => {
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
          const rightAnimation = gsap.from(".animate-right", {
            x: 50,
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
    <section
      className="bg-blue-900 pt-10 sm:pt-16 lg:pt-4 trigger-element"
      ref={parentRef}
    >
      <div className="bg-blue-900 px-12 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-20">
        <div
          className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
          ref={triggerRef}
        >
          <div className="relative animate-left">
            <img src={Idea} alt="the big idea" />
            <img
              src={Arrow}
              alt="a spiral arrow"
              className="absolute bottom-0 right-10 animate-pulse"
            />
            <img
              src={StarPu}
              alt="A shining star"
              className="absolute left-0 top-36 animate-pulse"
            />
          </div>
          <div className="relative flex flex-col self-center justify-center animate-right">
            <h2 className="text-white font-bold text-4xl mb-10 font-sans">
              Introduction to getlinked
              <br />{" "}
              <span className="text-blue-600 mt-4">techHackathon 1.0</span>
            </h2>
            <p className="h-fit object-contain text-white font-sans">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
            <img
              src={StarPu}
              alt="A shining star"
              className="absolute right-10 top-8 animate-pulse"
            />
          </div>
        </div>
      </div>
      <div className="border-b-[.05px] text-white"></div>
    </section>
  );
};

export default Feature1;

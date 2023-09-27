import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollMagic from "scrollmagic";

import Star from "../../assets/star.png";
import StarPu from "../../assets/star-pu.png";
import StarWhiteBig from "../../assets/starwhitebig.png";
import Ellipse from "../../assets/ellipse.png";
import Feature3Img from "../../assets/feature3.png";
import { purpleRight } from "../../assets";
import { purpleLeft } from "../../assets";

const Feature3 = () => {
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
          // Create a GSAP timeline for staggered animations
          const animationTimeline = gsap.timeline();

          // Get all elements with the class "animate-top"
          const animateTopElements = document.querySelectorAll(".animate-top");

          // Stagger the animations with a delay of 0.2 seconds between each element
          animationTimeline.from(
            animateTopElements,
            {
              opacity: 0,
              y: 50,
              duration: 1,
              ease: "power2.out",
            },
            0.2 // Stagger delay
          );

          new ScrollMagic.Scene({
            triggerElement: triggerRef.current,
            triggerHook: 0.8,
            reverse: false,
          })
            .setTween(animationTimeline) // Use the timeline for animation
            .addTo(controller);

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
      className="bg-blue-900 pt-20 sm:pt-16 lg:pt-8 relative "
      ref={parentRef}
    >
      {/* desktop mode */}
      <img
        src={purpleRight}
        alt="purple lens flare"
        className="hidden lg:block absolute pointer-events-none top-[-550px] right-[-350px] mix-blend-hard-light  "
      />
      <img
        src={purpleLeft}
        alt="purple lens flare"
        className="hidden lg:block absolute pointer-events-none bottom-[0px] left-[0px] mix-blend-hard-light "
      />
      <img
        src={purpleRight}
        alt="purple lens flare"
        className="hidden lg:block absolute pointer-events-none bottom-[0px] right-[-250px] mix-blend-hard-light  "
      />

      {/* mobile glow */}
      <img
        src={purpleLeft}
        alt="purple lens flare"
        className=" lg:hidden absolute pointer-events-none top-[80px] left-[0px] mix-blend-hard-light "
      />
      <img
        src={purpleRight}
        alt="purple lens flare"
        className=" lg:hidden absolute pointer-events-none bottom-[20px] right-[-220px] mix-blend-hard-light  "
      />

      <div className="bg-blue-900 px-12 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-20">
        <div className="relative grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="z-10">
            <img src={Feature3Img} alt="judging criteria" />
          </div>
          <div className="flex flex-col self-center justify-center">
            <h2 className="text-white font-bold text-4xl mb-5 font-sans">
              Judging Criteria
              <br /> <span className="text-blue-600 mt-4">Key attriutes</span>
            </h2>
            <p className="text-white font-sans mb-5 animate-top">
              <span className="text-pink text-lg font-sans">
                Innovaton and Creativity:
              </span>{" "}
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p className="text-white font-sans mb-5 animate-top">
              <span className="text-pink text-lg font-sans">
                Functionality:
              </span>{" "}
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </p>
            <p className="text-white font-sans mb-5 animate-top">
              <span className="text-pink text-lg font-sans">
                Impact and Relevance:
              </span>{" "}
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
            <p className="text-white font-sans mb-5 animate-top">
              <span className="text-pink text-lg font-sans">
                Technical Complexity
              </span>{" "}
              Evaluate the technical sophistiation of the solution. Judges would
              consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p className="h-44 text-white font-sans animate-top">
              <span className="text-pink text-lg font-sans">
                Adherence to Hackathon Rules:
              </span>{" "}
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
            <div
              className="w-44 mt-3 lg:-mt-12 inline-flex items-center justify-center px-2 py-2.5 text-base font-semibold button-gradient-bg rounded-md hover:cursor-pointer hover:text-white transition-all duration-200 focu focus:text-white"
              role="button"
            >
              Read More
            </div>
          </div>
          <img
            src={Ellipse}
            alt="ellipse"
            className="hidden lg:block absolute top-16 left-16"
          />
          <img
            src={Star}
            alt="A shining star"
            className="absolute top-36 left-40 lg:hidden"
          />
          <img
            src={StarPu}
            alt="A shining star"
            className="absolute -top-8 left-32 lg:left-32 lg:top-8"
          />
          <img
            src={StarWhiteBig}
            alt="A shining white star"
            className="absolute left-[550px] bottom-8"
          />
        </div>
      </div>
      <div className="border-b-[.05px] text-white"></div>
    </section>
  );
};

export default Feature3;

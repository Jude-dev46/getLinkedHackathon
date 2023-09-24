import Button from "./utils/Button";
import PrivacyImg from "../assets/privacy.png";
import ListIcon from "../assets/list.png";
import Star from "../assets/star.png";
import StarPu from "../assets/star-pu.png";
import StarPuSmall from "../assets/starsmall.png";
import StarWhite from "../assets/star-white.png";
import { purpleLeft } from "../assets";

const Privacy = () => {
  return (
    <section className="bg-blue-900 py-10 sm:py-16 lg:py-4 relative">
      {/* desktop */}
      <img
        src={purpleLeft}
        alt="purple lens flare"
        className="hidden lg:block absolute pointer-events-none top-[350px] rightt-[-300px]  z-10 mix-blend-hard-light"
      />
      {/* mobile */}
      <img
        src={purpleLeft}
        alt="purple lens flare"
        className=" lg:hidden absolute pointer-events-none top-[590px] left-[-40px] mix-blend-hard-light z-10 "
      />

      <div className="bg-blue-900 px-12 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-20">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative flex flex-col self-center justify-center">
            <h2 className="text-white font-bold text-4xl mb-10 font-sans">
              Privacy Policy and
              <br /> <span className="text-blue-600 mt-4">Terms</span>
            </h2>
            <p className="h-10 text-white font-sans mb-4">
              Last updated on September 12, 2023
            </p>
            <p className="h-6 text-white font-sans">
              Below are our privacy & policy, which outline a lof of goodies.
            </p>
            <p className="h-5 text-white font-sans">
              It's our aim to always take of our participants.
            </p>
            <div className="mt-10 border-2 border-blue-600 rounded-md p-5 lg:p-20">
              <p className="h-full text-white font-sans text-center lg:text-left">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information.
                <br />
                This Privacy Policy outlines how we collect, use, disclose and
                safeguard your data when you participate in our tech hackathon
                event. By participating in our event, you consent to the
                practices described in this policy.
              </p>
              <p className="text-pink font-sans font-bold text-lg mt-8">
                Licensing Policy
              </p>
              <p className="text-white font-sans font-bold text-base mt-1 mb-6">
                Here are terms of our Standard Lincense:
              </p>
              <p className="flex items-start lg:items-center gap-4 text-white font-sans text-base mt-1">
                <img src={ListIcon} alt="list icon" />
                <span>
                  The Standard Lincense grants you a non-exclusive right to
                  navigate and register for our event
                </span>
              </p>
              <p className="flex items-center gap-4 text-white font-sans text-base mt-4 mb-8">
                <img src={ListIcon} alt="list icon" />
                <span>
                  You are liscensed to use the item available at any free source
                  sites, for your project development
                </span>
              </p>
              <div className="w-full flex justify-center mb-5">
                <Button style={true}>Read More</Button>
              </div>
            </div>

            <img
              src={Star}
              alt="A shining star"
              className="absolute left-80 top-0 animate-pulse"
            />
            <img
              src={StarPu}
              alt="A shining star"
              className="absolute -left-16 bottom-52 animate-pulse"
            />
          </div>
          <div className="relative">
            <img src={PrivacyImg} alt="the big lock" />

            <img
              src={Star}
              alt="A shining star"
              className="absolute right-0 bottom-36 animate-pulse"
            />
            <img
              src={StarPuSmall}
              alt="A shining star"
              className="absolute left-2 top-24 lg:right-[390px] lg:bottom-80 animate-pulse"
            />
            <img
              src={StarWhite}
              alt="A shining star"
              className="absolute left-20 bottom-36 lg:right-[450px] lg:bottom-64 animate-pulse"
            />
            <img
              src={StarPu}
              alt="A shining star"
              className="absolute -left-16 top-36 animate-pulse"
            />
          </div>
        </div>
      </div>
      <div className="border-b-[.05px] text-blue-600"></div>
    </section>
  );
};

export default Privacy;

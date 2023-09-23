import Partners from "../assets/partners.png";
import StarPu from "../assets/star-pu.png";
import StarWhite from "../assets/star1.png";
import StarWhiteBig from "../assets/starwhitebig.png";
import { purpleRight } from "../assets";
import { purpleLeft } from "../assets";

const Sponsors = () => {
  return (
    <section className="bg-blue-900 py-10 sm:py-16 lg:py-4 relative">
      {/* desktop */}
      <img src={purpleLeft} alt="purple lens flare" className="hidden lg:block absolute pointer-events-none top-[-50px] rightt-[-300px] mix-blend-hard-light z-10 " />
      <img src={purpleRight} alt="purple lens flare" className="hidden lg:block absolute pointer-events-none bottom-[20px] right-[-320px] mix-blend-hard-light  z-10" />
      <img src={purpleRight} alt="purple lens flare" className="hidden lg:block absolute pointer-events-none top-[400px] right-[-420px] mix-blend-hard-light  z-10" />

      {/* mobile */}
      <img src={purpleLeft} alt="purple lens flare" className=" lg:hidden absolute pointer-events-none top-[10px] left-[-40px] mix-blend-hard-light z-10 " />
      <img src={purpleRight} alt="purple lens flare" className=" lg:hidden absolute pointer-events-none bottom-[-30px] right-[-150px] mix-blend-hard-light  z-10" />
      <div className="bg-blue-900 px-12 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-5">
        <div className="grid items-center grid-cols-1 lg:grid-cols-1">
          <div className="relative flex flex-col items-center justify-center">
            <h2 className="text-white text-center font-bold text-4xl mb-4 font-sans">
              Partners and Sponsors
            </h2>
            <p className="lg:w-[450px] h-12 text-white text-center font-sans">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors.
            </p>
          </div>
          <div className="relative flex flex-col items-center py-20">
            <img src={Partners} alt="partners and support logos" />

            <img
              src={StarPu}
              alt="A shining star"
              className="absolute left-20 top-12"
            />
            <img
              src={StarPu}
              alt="A shining star"
              className="hidden lg:block absolute left-[680px] top-40"
            />
            <img
              src={StarWhiteBig}
              alt="A shining white star"
              className="hidden lg:block absolute lg:right-[500px] lg:bottom-40"
            />
            <img
              src={StarWhite}
              alt="A shining white star"
              className="absolute right-10 bottom-20 lg:hidden"
            />
          </div>
        </div>
      </div>
      <div className="border-b-[.05px] text-blue-600"></div>
    </section>
  );
};

export default Sponsors;

import { purpleLeft } from "../assets";
import StarPu from "../assets/star-pu.png";
import StarWhiteBig from "../assets/starwhitebig.png";
import StarWhiteSmall from "../assets/star1.png";
import Feature2Img from "../assets/feature2.png";

const Feature2 = () => {
  return (
    <>
      <section className="bg-blue-900 h-[650px] lg:h-full py-10 overflow-hidden">
        <div className="bg-blue-900 px-12 mx-auto max-w-7xl sm:px-6 lg:px-8 -mt-10">
          <div className="grid items-center grid-cols-1 lg:gap-12 lg:grid-cols-2">
            <div className="relative text-center lg:text-left flex flex-col order-last lg:order-first self-center justify-center mb-5">
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
                className="absolute right-[300px] -top-10"
              />
              <img
                src={StarWhiteBig}
                alt="A shining star"
                className="hidden lg:block absolute left-20 -bottom-40 lg:-right-10 lg:bottom-8"
              />
              <img
                src={StarWhiteSmall}
                alt="A shining star"
                className="absolute left-20 -bottom-40 lg:hidden"
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

import { MdAdd } from "react-icons/md";

import StarPu from "../assets/star-pu.png";
import StarWhiteBig from "../assets/starwhitebig.png";
import FAQImg from "../assets/faq.png";

const Feature4 = () => {
  return (
    <section className="bg-blue-900 py-10 sm:py-16 lg:py-4">
      <div className="relative bg-blue-900 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-20">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col self-center justify-center">
            <h2 className="text-white text-center lg:text-left font-bold text-4xl mb-4 font-sans">
              Frequently Ask
              <br /> <span className="text-blue-600 mt-4">Question</span>
            </h2>
            <p className="w-full lg:w-[350px] h-full text-center lg:text-left text-white font-sans mb-8">
              We got answers to the questions that you might want to ask about{" "}
              <span className="font-bold">getlinked Hackathon 1.0</span>
            </p>
            <p className="flex justify-between gap-5 h-full w-full lg:w-[465px] text-white font-sans border-b-2 border-blue-600 pb-3 mb-5">
              Can I work on a project I started before the hackathon?
              <MdAdd color="#D434FE" size={24} />
            </p>
            <p className="flex justify-between gap-5 h-full w-full lg:w-[465px] text-white font-sans border-b-2 border-blue-600 pb-3 mb-5">
              What happens if I need help during the hackathon?
              <MdAdd color="#D434FE" size={24} />
            </p>
            <p className="flex justify-between gap-5 h-full w-full lg:w-[465px] text-white font-sans border-b-2 border-blue-600 pb-3 mb-5">
              What happens if I don't have an idea for the hackathon?
              <MdAdd color="#D434FE" size={24} />
            </p>
            <p className="flex justify-between gap-5 h-full w-full lg:w-[465px] text-white font-sans border-b-2 border-blue-600 pb-3 mb-5">
              Can I join a team or do I have to come with one?
              <MdAdd color="#D434FE" size={24} />
            </p>
            <p className="flex justify-between gap-5 h-full w-full lg:w-[465px] text-white font-sans border-b-2 border-blue-600 pb-3 mb-5">
              What happens after the hackathon ends?
              <MdAdd color="#D434FE" size={24} />
            </p>
            <p className="flex justify-between gap-5 h-full w-full lg:w-[465px] text-white font-sans border-b-2 border-blue-600 pb-3 mb-5">
              Can I work on a project I started before the hackathon?
              <MdAdd color="#D434FE" size={24} />
            </p>
          </div>
          <div>
            <img src={FAQImg} alt="3D thinking man" />
          </div>
        </div>
        <img
          src={StarPu}
          alt="A shining star"
          className="absolute left-8 lg:left-2 -top-4 lg:top-8"
        />
        <img
          src={StarWhiteBig}
          alt="A shining star"
          className="absolute right-2 bottom-8"
        />
      </div>
      <div className="border-b-[.05px] text-white"></div>
    </section>
  );
};

export default Feature4;

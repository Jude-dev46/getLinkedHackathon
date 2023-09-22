import Medal from "../assets/medal.png";
import Trophy from "../assets/trophy.png";
import StarPu from "../assets/star-pu.png";
import StarWhiteBig from "../assets/starwhitebig.png";

const Prizes = () => {
  return (
    <section className="bg-blue-900 py-10 sm:py-16 lg:py-12">
      <div className="border-b-[.05px] text-blue-600 mb-5"></div>
      <div className="relative bg-blue-900 px-12 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 gap-20 lg:grid-rows-2">
          <div className="relative lg:w-[80%] lg:h-[200px] flex flex-col items-center lg:items-end">
            <h2 className="text-white text-center lg:text-left font-bold text-4xl lg:mr-[177px] mb-2 font-sans">
              Prizes and
              <br /> <span className="text-blue-600 mt-4">Rewards</span>
            </h2>
            <p className="h-10 text-white text-center lg:text-left font-sans mb-12 z-10">
              Highlight of the prizes or rewards for winners and
              <br /> for participants.
            </p>
          </div>
          <div className="relative flex flex-col gap-4 mx-10 lg:mx-auto lg:flex-row lg:mt-[-200px]">
            <img src={Trophy} alt="congratulatory trophy" />
            <img src={Medal} alt="winners medals" />
            <img
              src={StarWhiteBig}
              alt="A shining white star"
              className="hidden lg:block absolute right-[600px] top-2"
            />
            <img
              src={StarWhiteBig}
              alt="A shining white star"
              className="hidden lg:block absolute right-[-30px] top-28"
            />
            <img
              src={StarWhiteBig}
              alt="A shining white star"
              className="hidden lg:block absolute left-64 -bottom-12"
            />
          </div>
        </div>
        <img
          src={StarPu}
          alt="A shining star"
          className="absolute left-64 top-10"
        />
        <img
          src={StarPu}
          alt="A shining star"
          className="absolute left-80 top-10 lg:hidden"
        />
        <img
          src={StarPu}
          alt="A shining star"
          className="hidden lg:block absolute right-80 top-20"
        />
      </div>
      <div className="border-b-[.05px] text-blue-600"></div>
    </section>
  );
};

export default Prizes;

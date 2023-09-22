import Star from "../assets/star.png";
import StarPu from "../assets/star-pu.png";
import StarWhiteBig from "../assets/starwhitebig.png";
import Ellipse from "../assets/ellipse.png";
import Feature3Img from "../assets/feature3.png";

const Feature3 = () => {
  return (
    <section className="bg-blue-900 py-12 sm:py-16 lg:py-4">
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
            <p className="text-white font-sans mb-5">
              <span className="text-pink text-lg font-sans">
                Innovaton and Creativity:
              </span>{" "}
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p className="text-white font-sans mb-5">
              <span className="text-pink text-lg font-sans">
                Functionality:
              </span>{" "}
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </p>
            <p className="text-white font-sans mb-5">
              <span className="text-pink text-lg font-sans">
                Impact and Relevance:
              </span>{" "}
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
            <p className="text-white font-sans mb-5">
              <span className="text-pink text-lg font-sans">
                Technical Complexity
              </span>{" "}
              Evaluate the technical sophistiation of the solution. Judges would
              consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p className="h-44 text-white font-sans">
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

import StarPu from "../assets/star-pu.png";
import StarWhiteBig from "../assets/starwhitebig.png";
import Feature2Img from "../assets/feature2.png";

const Feature2 = () => {
  return (
    <section className="bg-blue-900 py-10 sm:py-16 -mt-2">
      <div className="bg-blue-900 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative flex flex-col self-center justify-center">
            <h2 className="text-white font-bold text-4xl mb-5 font-sans">
              Rules and
              <br /> <span className="text-blue-600 mt-4">Guidelines</span>
            </h2>
            <p className="h-44 text-white font-sans">
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
              className="absolute right-[300px] -top-10"
            />
            <img
              src={StarWhiteBig}
              alt="A shining star"
              className="absolute -right-10 bottom-8"
            />
          </div>
          <div>
            <img src={Feature2Img} alt="rules and guidelines" />
          </div>
        </div>
      </div>
      <div className="border-b-[.02px] text-white"></div>
    </section>
  );
};

export default Feature2;

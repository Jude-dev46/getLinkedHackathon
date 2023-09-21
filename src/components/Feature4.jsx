import StarPu from "../assets/star-pu.png";
import Idea from "../assets/idea.png";

const Feature4 = () => {
  return (
    <section className="bg-blue-900 py-10 sm:py-16 lg:py-4">
      <div className="bg-blue-900 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-20">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <img src={Idea} alt="the big idea" />
          </div>
          <div className="relative flex flex-col self-center justify-center">
            <h2 className="text-white font-bold text-4xl mb-10 font-sans">
              Introduction to getlinked
              <br />{" "}
              <span className="text-blue-600 mt-4">techHackathon 1.0</span>
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
              className="absolute right-10 top-8"
            />
          </div>
        </div>
      </div>
      <div className="border-b-[.05px] text-white"></div>
    </section>
  );
};

export default Feature4;

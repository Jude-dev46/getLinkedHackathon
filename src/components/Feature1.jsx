import StarPu from "../assets/images/star-pu.png";
import Idea from "../assets/images/idea.png";

const Feature1 = () => {
  return (
    <div className="bg-blue-900 w-full flex justify-center">
      <div className="flex">
        <div>
          <img src={Idea} alt="the big idea" />
        </div>
        <div className="relative">
          <h2 className="w-full text-white font-bold text-4xl mb-5 font-sans">
            Introduction to getlinked
            <br /> <span className="text-pink mt-4">techHackathon 1.0</span>
          </h2>
          <p className="w-2/5 h-44 text-white font-sans">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          <img
            src={StarPu}
            alt="A shining star"
            className="absolute right-10 top-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature1;

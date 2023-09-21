import Button from "./utils/Button";
import StarPu from "../assets/star-pu.png";
import Congratulations from "../assets/congratulation.png";

const Modal = ({ closeModal }) => {
  return (
    <div className="bg-[rgb(0,0,0,0.7)] fixed w-full h-screen top-0 left-0 flex flex-col justify-center items-center z-20 overflow-hidden">
      <div className="border-2 border-blue-600 m-20 lg:m-0 px-20 py-10 rounded-md">
        <div className="w-full flex justify-center">
          <img src={Congratulations} />
        </div>
        <p className="text-white text-base w-6/6 lg:text-3xl font-semibold text-center mb-4">
          Congratulations
          <br /> you have successfully Registered!
        </p>
        <div className="w-full text-center mb-8">
          <p className="w-52 lg:w-96 text-white text-sm font-semibold text-center mb-2">
            Yes it was easy and you did it!
          </p>
          <p className="w-52 lg:w-96 text-white text-sm font-semibold text-center mb-2">
            check your mail box for next step
          </p>
        </div>
        <Button onClick={closeModal}>Back</Button>
      </div>
      <img src={StarPu} className="absolute top-24 right-0" />
    </div>
  );
};

export default Modal;

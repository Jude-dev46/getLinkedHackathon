import Button from "./utils/Button";

const Modal = ({ closeModal }) => {
  return (
    <div className="bg-[rgb(0,0,0,0.5)] absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center z-10">
      <div className="border-2 border-blue-600 m-20 lg:m-0 px-20 py-10 rounded-md">
        <p className="text-white text-base w-44 lg:text-3xl font-semibold text-center mb-4">
          Congratulations
          <br /> you have successfully Registered!
        </p>
        <div className="w-52 text-center mb-8">
          <p className="text-white text-sm font-semibold text-center mb-2">
            Yes it was easy and you did it!
          </p>
          <p className="text-white text-sm font-semibold text-center mb-2">
            check your mail box for next step
          </p>
        </div>
        <Button onClick={closeModal}>Back</Button>
      </div>
    </div>
  );
};

export default Modal;

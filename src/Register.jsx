import { useState } from "react";

import { Navbar } from "./components";
import StarWhite from "./assets/star-white.png";
import StarPu from "./assets/star-pu.png";
import RegisterImage from "./components/register/RegisterImage";
import RegisterForm from "./components/register/RegisterForm";
import Modal from "./components/Modal";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);

  function registrationHandler() {
    setIsOpen(true);
  }

  function closeModalHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-blue-900 w-full h-full lg:max-h-screen overflow-hidden">
      <Navbar />
      <div className="relative flex flex-col lg:flex-row lg:items-center mb-5 overflow-hidden">
        <p className="block absolute top-10 left-20 lg:hidden text-blue-600 font-bold text-sm mb-4">
          Register
        </p>
        <img
          src={StarWhite}
          alt="A shining star"
          className=" hidden lg:block absolute lg:bottom-6 lg:right-60"
        />
        <img
          src={StarPu}
          alt="A shining star"
          className="absolute bottom-64 right-4 lg:hidden"
        />
        <RegisterImage />
        <RegisterForm onRegister={registrationHandler} />
        {isOpen && <Modal closeModal={closeModalHandler} />}
      </div>
    </div>
  );
};

export default Register;

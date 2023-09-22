import { useState, useEffect } from "react";

import { Navbar } from "./components";
import StarWhite from "./assets/star-white.png";
import StarPu from "./assets/star-pu.png";
import RegisterImage from "./components/register/RegisterImage";
import RegisterForm from "./components/register/RegisterForm";
import Modal from "./components/Modal";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://backend.getlinked.ai/hackathon/categories-list"
      );

      const data = await res.json();
      setCategory(data);
    })();
  }, []);

  async function registrationHandler(inputs) {
    const enteredData = {
      team: inputs.team,
      phone: inputs.phone,
      email: inputs.email,
      project: inputs.project,
    };

    const params = {
      email: enteredData.email,
      phone_number: enteredData.phone,
      team_name: enteredData.team,
      group_size: 10,
      project_topic: enteredData.project,
      category: 1,
      privacy_poclicy_accepted: true,
    };

    const res = await fetch(
      "https://backend.getlinked.ai/hackathon/registration",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }
    );
    const data = await res.json();

    if (res.status === 400) {
      alert(`${data.email[0]}`);
      return;
    }

    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModalHandler() {
    setIsOpen(!isOpen);
    document.body.style.overflow = "auto";
  }

  return (
    <div className="bg-blue-900 w-full lg:h-[100vh] overflow-hidden">
      {isOpen && <Modal closeModal={closeModalHandler} />}
      <Navbar style={true} />

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:mx-40 mb-5">
        <p className="block absolute top-10 left-20 lg:hidden text-blue-600 font-bold text-sm mb-4">
          Register
        </p>
        <img
          src={StarWhite}
          alt="A shining star"
          className=" hidden lg:block absolute lg:-bottom-3 lg:right-[120px]"
        />
        <img
          src={StarPu}
          alt="A shining star"
          className="absolute bottom-64 right-4 lg:hidden"
        />

        <RegisterImage />
        <RegisterForm onRegister={registrationHandler} category={category} />
      </div>
    </div>
  );
};

export default Register;

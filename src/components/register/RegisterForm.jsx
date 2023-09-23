import { useState, useRef } from "react";

import Star from "../../assets/star.png";
import Input from "../utils/Input";
import RegisterFormHeader from "./RegisterFormHeader";
import Button from "../utils/Button";

const RegisterForm = ({ onRegister, category }) => {
  const [isLoading, setIsLoading] = useState(false);
  const teamInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const projectInputRef = useRef();

  function registrationHandler() {
    const inputs = {
      team: teamInputRef.current.value,
      phone: phoneInputRef.current.value,
      email: emailInputRef.current.value,
      project: emailInputRef.current.value,
    };

    if (
      inputs.team === "" ||
      inputs.phone < 11 ||
      inputs.email === "" ||
      inputs.project === ""
    ) {
      alert("Invalid inputs");
    }
    setIsLoading(true);
    onRegister(inputs);
  }
  teamInputRef.current.value = "";
  phoneInputRef.current.value = "";
  emailInputRef.current.value = "";
  projectInputRef.current.value = "";

  return (
    <div className="lg:bg-dark relative px-5 lg:h-[85vh] lg:flex lg:flex-col lg:justify-center lg:px-20 py-10 rounded-lg mx-5 lg:mr-10 -lg:mt-10">
      <div className="hidden lg:block bg-purple-right absolute bottom-0 -right-5 w-1/2 z-0" />
      <img
        src={Star}
        alt="A shining star"
        className="absolute -left-2 top-40 lg:left-96 lg:top-5"
      />
      <RegisterFormHeader />
      <div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 mb-4">
          <Input
            label="Team's Name"
            type="text"
            placeholder="Enter the name of your group"
            value={teamInputRef}
          />
          <Input
            label="Phone"
            type="number"
            placeholder="Enter your phone number"
            value={phoneInputRef}
          />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 mb-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email address"
            value={emailInputRef}
          />
          <Input
            label="Project Topic"
            type="text"
            placeholder="What is your group's project topic"
            value={projectInputRef}
          />
        </div>
        <div className="w-full flex flex-row gap-4 lg:gap-8 mb-4">
          <div className="w-8/12 lg:w-full">
            <p className="text-white text-sm mb-2">Category</p>
            <select
              className="bg-dark w-full lg:w-64 h-12 p-2 border-2 border-white rounded-md text-sm lg:text-base"
              style={{ color: "white" }}
            >
              <option>Select your category</option>
              {category?.map((cat) => (
                <option key={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div className="w-4/12 lg:w-full">
            <p className="text-white w-20 text-sm mb-2">Group Size</p>
            <select
              className="bg-dark w-full lg:w-64 h-12 p-2 border-2 border-white rounded-md text-base"
              style={{ color: "white" }}
            >
              <option>Select</option>
              <option>Size 1</option>
              <option>Size 2</option>
              <option>Size 3</option>
            </select>
          </div>
        </div>
      </div>
      <p className="text-pink text-sm italic mb-4">
        Please review your registration details before submitting
      </p>
      <div className="flex gap-2 mb-4">
        <input type="checkbox" />
        <p className="text-white text-sm">
          I agreed with the events terms and conditions and privacy policy
        </p>
      </div>
      <Button onClick={registrationHandler}>Register Now</Button>
      {isLoading && <p className="text-white text-sm">Registering...</p>}
    </div>
  );
};

export default RegisterForm;

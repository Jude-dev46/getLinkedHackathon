import { useState, useRef } from "react";

import Star from "../assets/star.png";
import StarPu from "../assets/star-pu.png";
import StarWhiteBig from "../assets/starwhitebig.png";
import Input from "../components/utils/Input";
import Button from "../components/utils/Button";
import ContactFormHeader from "./ContactHeader";

const ContactForm = ({ onContact }) => {
  const [isLoading, setIsLoading] = useState(false);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const phoneInputRef = useRef();

  function submitHandler() {
    const inputs = {
      name: nameInputRef.current.value,
      message: messageInputRef.current.value,
      email: emailInputRef.current.value,
      phone: phoneInputRef.current.value,
    };

    console.log(inputs);

    if (
      inputs.name === "" ||
      inputs.email === "" ||
      inputs.message === "" ||
      inputs.phone < 11
    ) {
      alert("Invalid inputs!");
    } else {
      onContact(inputs);
      nameInputRef.current.value = "";
      emailInputRef.current.value = "";
      messageInputRef.current.value = "";
    }
  }

  return (
    <div className="lg:bg-dark relative lg:h-[85vh] lg:flex lg:flex-col lg:justify-center lg:px-20 lg:py-10 rounded-lg lg:mr-10 lg:mt-0">
      <img
        src={StarPu}
        alt="A shining star"
        className="hidden lg:block absolute lg:-left-[550px] lg:-top-4"
      />
      <img
        src={StarPu}
        alt="A shining star"
        className="absolute left-[140px] -top-6 lg:left-[-10px] lg:top-[400px]"
      />
      <div className="hidden lg:block bg-purple-right absolute bottom-0 -right-5 w-1/2 z-0" />
      <img
        src={Star}
        alt="A shining star"
        className="absolute left-[300px] top-6 lg:left-96 lg:-top-16"
      />
      <ContactFormHeader />
      <div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 mb-4">
          <Input
            type="text"
            placeholder="First name"
            value={nameInputRef}
            style={true}
          />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 mb-4">
          <Input
            type="email"
            placeholder="Mail"
            value={emailInputRef}
            style={true}
          />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 mb-4">
          <Input
            type="number"
            placeholder="Phone number"
            value={phoneInputRef}
            style={true}
          />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 mb-4">
          <Input
            type="text"
            placeholder="Send a message"
            value={messageInputRef}
            style={true}
            message={true}
          />
        </div>
      </div>
      <div className="flex justify-center lg:self-center mt-2">
        <Button onClick={submitHandler} style={true}>
          Submit
        </Button>
      </div>
      {isLoading && <p className="text-white text-sm mt-2">Submitting...</p>}
      <img
        src={StarWhiteBig}
        alt="A shining star"
        className="absolute left-[340px] top-[430px] lg:left-[600px] lg:top-[550px]"
      />
    </div>
  );
};

export default ContactForm;

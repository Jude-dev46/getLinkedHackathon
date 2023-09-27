import { useRef } from "react";

import Star from "../../assets/star.png";
import StarPu from "../../assets/star-pu.png";
import StarWhiteBig from "../../assets/starwhitebig.png";
import Input from "../utils/Input";
import Button from "../utils/Button";
import ContactFormHeader from "./ContactHeader";

const ContactForm = ({ isLoading, onContact }) => {
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

    if (
      inputs.name === "" ||
      inputs.email === "" ||
      inputs.message === "" ||
      inputs.phone < 11
    ) {
      alert("Invalid inputs!");
    } else {
      onContact(inputs);
    }
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";
  }

  return (
    <div className="lg:bg-dark relative lg:h-[80vh] lg:flex lg:flex-col lg:justify-center lg:px-20 lg:py-10 rounded-lg lg:mr-10 lg:mt-0">
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
          <textarea
            className="w-full lg:w-96 bg-dark text-white border-[1px] border-white placeholder-white outline-primary shadow-md rounded-md px-3 lg:px-5 py-2 h-[119px] custom-scroll-bar resize-none"
            rows={5}
            placeholder="Message"
            name="message"
            ref={messageInputRef}
          />
        </div>
      </div>
      <div className="flex justify-center lg:self-center mt-2">
        <Button onClick={submitHandler} style={true}>
          Submit
        </Button>
      </div>
      {isLoading && (
        <p className="text-white text-sm mt-2 text-center">Submitting...</p>
      )}
      <img
        src={StarWhiteBig}
        alt="A shining star"
        className="absolute left-[340px] top-[430px] lg:left-[600px] lg:top-[550px]"
      />
    </div>
  );
};

export default ContactForm;

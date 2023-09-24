import { useState } from "react";
import { Link } from "react-router-dom";

import { Navbar } from "./components";
import ContactForm from "./components/ContactForm";
import ContactItem from "./components/ContactItem";
import SocialLink from "./components/SocialLink";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function sendContactMessage(inputs) {
    setIsLoading(true);
    const params = {
      email: inputs.email,
      phone_number: inputs.phone,
      first_name: inputs.name,
      message: inputs.message,
    };

    const response = await fetch(
      "https://backend.getlinked.ai/hackathon/contact-form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }
    );

    if (!response.ok) {
      setIsLoading(false);
      alert("An error occurred!");
    }

    if (response.ok) {
      setIsLoading(false);
      alert("Message successfully submitted!");
    }
  }

  return (
    <>
      <div className="bg-blue-900 min-h-screen px-12 lg:h-screen">
        <div className="hidden lg:block">
          <Navbar style={true} />
        </div>
        <div className="lg:hidden pt-8 mb-10">
          <Link to="/">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.5"
                cy="11.5"
                r="11"
                stroke="url(#paint0_linear_177_298)"
              />
              <path
                d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667"
                stroke="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_177_298"
                  x1="11.5"
                  y1="0"
                  x2="11.5"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#FF26B9" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:gap-64 lg:mx-40 lg:mt-16 mb-5">
          <div className="hidden lg:block">
            <ContactItem />
          </div>
          <ContactForm onContact={sendContactMessage} isLoading={isLoading} />
        </div>
        <div className="lg:hidden w-full flex flex-col gap-1 items-center justify-center pb-8">
          <p className="text-blue-600 text-base font-semibold mb-2">Share on</p>
          <SocialLink />
        </div>
      </div>
    </>
  );
};

export default Contact;

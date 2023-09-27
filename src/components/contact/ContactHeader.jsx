import React from "react";

const ContactFormHeader = () => {
  return (
    <>
      <p className="text-blue-600 font-semibold text-2xl lg:text-lg mt-6">
        Questions or need
        <span className="lg:hidden">
          <br />
        </span>{" "}
        assistance?
      </p>
      <div className="flex items-center h-8 mb-8">
        <p className="text-blue-600 font-semibold w-9/12 lg:w-auto lg:text-blue-600 text-2xl lg:text-lg">
          Let us know about it
        </p>
      </div>
      <p className="text-white font-semibold text-lg mb-8">
        Email us below to any question related to the hackathon event.
      </p>
    </>
  );
};

export default ContactFormHeader;

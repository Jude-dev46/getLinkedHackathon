import React from "react";

import Boy from "../../assets/images/boy.png";
import Girl from "../../assets/images/girl.png";

const RegisterFormHeader = () => {
  return (
    <>
      <p className="hidden lg:block text-blue-600 font-semibold text-3xl mb-4">
        Register
      </p>
      <div className="flex items-center h-8 mb-2">
        <p className="text-white w-9/12 lg:w-auto lg:text-blue-600 text-sm">
          Be part of this movement!
        </p>
        <div className="w-9/12 lg:w-28 flex justify-center border-b-2 border-dashed border-b-blue-600">
          <img src={Boy} alt="Boy emoji" />
          <img src={Girl} alt="Girl emoji" />
        </div>
      </div>
      <p className="text-white text-2xl mb-8">CREATE YOUR ACCOUNT</p>
    </>
  );
};

export default RegisterFormHeader;

import React from "react";

const Input = ({ label, placeholder }) => {
  return (
    <div>
      <p className="text-white text-sm mb-2">{label}</p>
      <input
        name="My input"
        placeholder={placeholder}
        className="bg-dark w-full lg:w-64 h-12 p-2 border-2 border-white rounded-md text-base text-white"
      />
    </div>
  );
};

export default Input;

import React from "react";

const Input = ({ label, placeholder, value, type }) => {
  return (
    <div>
      <p className="text-white text-sm mb-2">{label}</p>
      <input
        type={type}
        name="My input"
        placeholder={placeholder}
        className="bg-dark w-full lg:w-64 h-10 p-2 border-2 border-white rounded-md text-base text-white"
        ref={value}
      />
    </div>
  );
};

export default Input;

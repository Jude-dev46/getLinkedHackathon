import React from "react";

const Input = ({ label, placeholder, value, type, style, message }) => {
  return (
    <div>
      <p className="text-white text-sm mb-2">{label}</p>
      <input
        type={type}
        name="My input"
        placeholder={placeholder}
        className={`bg-dark w-full ${
          style ? "lg:w-96" : "lg:w-64"
        } h-10 p-2  border-2 border-white rounded-md text-base text-white ${
          message ? "h-36 -pt-16" : "lg:h-10"
        }`}
        ref={value}
      />
    </div>
  );
};

export default Input;

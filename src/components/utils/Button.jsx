import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <div
      className="bg-button-grad w-full h-14 flex justify-center items-center rounded-md hover:cursor-pointer"
      onClick={onClick}
    >
      <p className="text-white text-base">{children}</p>
    </div>
  );
};

export default Button;

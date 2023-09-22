import React from "react";

const Button = ({ children, onClick, style }) => {
  return (
    <div
      className={`button-gradient-bg ${
        style ? "w-44" : "w-full"
      } h-14 flex justify-center items-center rounded-md hover:cursor-pointer`}
      onClick={onClick}
    >
      <p className="text-white text-base">{children}</p>
    </div>
  );
};

export default Button;

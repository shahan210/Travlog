import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <button className="" {...rest}>
      {children}
    </button>
  );
};

export default Button;

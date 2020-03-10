import React from "react";
import "./custom-button.scss";

const CustomButton = ({ children, classname, onclick, ...otherProps }) => (
  <button
    onClick={onclick}
    className={`btn btn-primary ${classname && classname}`}
  >
    {children}
  </button>
);

export default CustomButton;

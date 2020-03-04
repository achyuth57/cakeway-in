import React from "react";
import "./custom-button.scss";

const CustomButton = ({
  children,
  IsgoogleSignIn,
  IsfbSignIn,
  ...otherProps
}) => (
  <button
    className={`btn btn-primary ${(IsgoogleSignIn && "custom-btn-google") ||
      (IsfbSignIn && "custom-btn-fb")}`}
  >
    {children}
  </button>
);

export default CustomButton;

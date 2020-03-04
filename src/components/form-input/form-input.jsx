import React from "react";
import "./form-input.scss";

const FormInput = ({ handleChnage, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChnage} {...otherProps} />
      {label ? (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} form-input `}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;

import React from "react";
import CustomButton from "../custom-button/custom-button";

import "./CartDropDown.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton classname="customButton">Go to Checkout</CustomButton>
  </div>
);
export default CartDropDown;

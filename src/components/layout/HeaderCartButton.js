import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../cart/CartIcon";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badges}></span>
    </button>
  );
};

export default HeaderCartButton;

import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badges}></span>
    </button>
  );
};

export default HeaderCartButton;

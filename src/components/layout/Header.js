import React from "react";
import restroImg from "../assests/images-restro-header.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Zwiggy Food App</h1>
        <HeaderCartButton onOpen={props.onOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src={restroImg} alt="an image of some delicious food!" />
      </div>
    </>
  );
};

export default Header;

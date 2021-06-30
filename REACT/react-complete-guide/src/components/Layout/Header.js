import React, { Fragment } from "react";

import MealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div>
        <img
          className={classes["main-image"]}
          src={MealsImage}
          alt="A table full of  delicious food!!"
        />
      </div>
    </Fragment>
  );
};

export default Header;

import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, cartRef) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={cartRef} {...props.input} />
    </div>
  );
});

export default Input;

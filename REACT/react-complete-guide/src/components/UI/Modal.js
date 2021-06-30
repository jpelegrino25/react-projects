import classes from "./Modal.module.css";
import ReactDom from "react-dom";
import React, { Fragment } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const OverLays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const element = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, element)}
      {ReactDom.createPortal(<OverLays>{props.children}</OverLays>, element)}
    </Fragment>
  );
};

export default Modal;

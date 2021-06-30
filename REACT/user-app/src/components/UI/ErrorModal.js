import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const AlertModal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>

      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okey</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop className={classes.backdrop} onClick={props.onConfirm} />,
        document.getElementById("backdrop")
      )}

      {ReactDom.createPortal(
        <AlertModal
          title={props.title}
          message={props.message}
          onClick={props.onConfirm}
        />,
        document.getElementById("errorModal")
      )}
    </>
  );
};

export default ErrorModal;

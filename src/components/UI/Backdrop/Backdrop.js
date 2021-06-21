import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  let backdropStyle = classes.backdrop;
  if (props.showBackdrop) {
    backdropStyle = classes.backdropOff;
  }

  return <div className={backdropStyle} />;
};

export default Backdrop;

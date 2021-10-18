import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={` ${classes.backdrop} ${props.className} `}
    />
  );
};

export default Backdrop;

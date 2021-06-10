import React from "react";
import classes from "./DrawerToggleButton.module.css";

const DrawerToggleButton = () => {
  return (
    <button className={classes.toggleButton}>
      <div className={classes.line} />
      <div className={classes.line} />
      <div className={classes.line} />
    </button>
  );
};

export default DrawerToggleButton;

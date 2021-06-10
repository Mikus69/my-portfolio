import React from "react";
import classes from "./Toolbar.module.css";
import DrawerToggleButton from "../UI/DrawerToggleButton/DrawerToggleButton";
import logo from "../../images/Logo.png";

const Toolbar = () => {
  return (
    <div className={classes.container}>
      <img className={classes.logo} src={logo} alt="Nick_Trzpis_Logo" />
      <DrawerToggleButton />
    </div>
  );
};

export default Toolbar;

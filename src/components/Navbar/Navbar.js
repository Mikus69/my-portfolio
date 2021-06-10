import React from "react";
import classes from "./Navbar.module.css";
import Toolbar from "../Toolbar/Toolbar";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Toolbar />
    </div>
  );
};

export default Navbar;

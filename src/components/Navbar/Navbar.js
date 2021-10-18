import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Toolbar from "../Toolbar/Toolbar";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const drawerToggleClickHandler = () => setSidebar(!sidebar);

  return (
    <div className={classes.navbar}>
      <Toolbar clicked={drawerToggleClickHandler} />
      <Sidebar show={sidebar} onClick={drawerToggleClickHandler} />
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Toolbar from "../Toolbar/Toolbar";
import Sidebar from "../Sidebar/Sidebar";
import Backdrop from "../UI/Backdrop/Backdrop";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  const drawerToggleClickHandler = () => setSidebar(!sidebar);

  const backdropHandler = () => setBackdrop(setSidebar);

  return (
    <div className={classes.navbar}>
      <Toolbar clicked={drawerToggleClickHandler} />
      <Sidebar show={sidebar} onClick={drawerToggleClickHandler} />
      <Backdrop showBackdrop={backdrop} onClick={backdropHandler} />
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Sidebar.css";
import CloseButton from "../UI/CloseButton/CloseButton";

const Sidebar = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <CloseButton onClick={props.onClick} />
      <ul>
        <li>Home</li>
        <li>My Work</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Sidebar;

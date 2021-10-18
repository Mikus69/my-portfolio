import React from "react";
import "./Sidebar.css";
import CloseButton from "../UI/CloseButton/CloseButton";
import Backdrop from "../UI/Backdrop/Backdrop";

const Sidebar = (props) => {
  let drawerClasses = "side-drawer";
  let backdropClasses = "backdrop";
  if (props.show) {
    drawerClasses = "side-drawer open";
    backdropClasses = "";
  }

  return (
    <div>
      <nav className={drawerClasses}>
        <CloseButton onClick={props.onClick} />
        <ul>
          <li>Home</li>
          <li>What I Do</li>
          <li>My Work</li>
          <li>Contact</li>
        </ul>
      </nav>
      <Backdrop onClick={props.onClick} className={backdropClasses} />
    </div>
  );
};

export default Sidebar;

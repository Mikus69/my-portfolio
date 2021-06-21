import React from "react";
import "./CloseButton.css";

const CloseButton = (props) => {
  return <div onClick={props.onClick} href="#" class="close" />;
};

export default CloseButton;

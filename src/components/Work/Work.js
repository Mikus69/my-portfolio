import React from "react";
import classes from "./Work.module.css";
import Button from "../UI/Button/Button";
import todo from "../../images/TodoList.png";

const Work = () => {
  return (
    <div className={classes.container}>
      <h1>My Work</h1>
      <img className={classes.todo} src={todo} alt="Todo List" />
      <Button>Show me more!</Button>
    </div>
  );
};

export default Work;

import React from "react";
import classes from "./ProjectCard.module.css";
import Card from "../UI/Card/Card";
import CloseButton from "../UI/CloseButton/CloseButton";

function ProjectCard(props) {
  return (
    <Card className={classes.projectCard}>
      <CloseButton onClick={props.onClick} />
    </Card>
  );
}

export default ProjectCard;

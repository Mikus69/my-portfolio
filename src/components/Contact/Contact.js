import React from "react";
import classes from "./Contact.module.css";
import Button from "../UI/Button/Button";
import LinkedIn from "../../images/LinkedIn.svg";
import Instagram from "../../images/Instagram.svg";
import Github from "../../images/Github.svg";

const Contact = () => {
  return (
    <div className={classes.container}>
      <h1>Let's Talk!</h1>
      <form className={classes.formContainer}>
        <label>Name</label>
        <input className={classes.inputField} placeholder="Name" />
        <label>Email</label>
        <input className={classes.inputField} placeholder="Email" />
        <label>Subject</label>
        <input className={classes.inputField} placeholder="Subject" />
        <label>Message</label>
        <textarea className={classes.messageInput} placeholder="Message" />
      </form>
      <Button>Send</Button>
      <div className={classes.socialMedia}>
        <img alt="LinkedIn" src={LinkedIn} className={classes.socialIcons} />
        <img alt="Instagram" src={Instagram} className={classes.socialIcons} />
        <img alt="Github" src={Github} className={classes.socialIcons} />
      </div>
    </div>
  );
};

export default Contact;

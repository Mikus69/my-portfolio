import React from "react";
import classes from "./LandingPage.module.css";
import logo from "../../images/Logo.png";
import scroll from "../../images/Scroll.png";
import Navbar from "../../components/Navbar/Navbar";
import What from "../../components/What/What";
import Work from "../../components/Work/Work";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.mainContainer}>
        <img className={classes.logo} src={logo} alt="Nick_Trzpis_Logo" />
        <h1>Hi! I am Nick</h1>
        <p>A self-taught junior web developer</p>
        <img className={classes.scroll} src={scroll} alt="scroll" />
      </div>
      <What />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;

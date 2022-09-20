import React from "react";
import Button from "@mui/material/Button";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="aboutId">
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="container">
        <div className="about_content">
          <div className="about-text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              inventore impedit alias. Ab dolor totam cum officiis cumque
              voluptatibus voluptate ullam quisquam dolores laboriosam
              aspernatur sequi, quia animi consequatur debitis!
            </p>
          </div>
          <div className="button">
            <Button color="secondary">Sign Up now!!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

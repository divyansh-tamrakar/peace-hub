import React from "react";
// import Button from "@mui/material/Button";
// import img from "../About/about_img.png";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="aboutId">
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="container">
        <div className="about_content">
          <div className="about-text-1">
            {/* <img className="image" src={img} alt="wait...!!" /> */}
            <h1 className="head_1">Say Hi 👋 to <span className="innerspan_1">World</span></h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              inventore impedit alias. Ab dolor totam cum officiis cumque
              voluptatibus voluptate ullam quisquam dolores laboriosam
              aspernatur sequi, quia animi consequatur debitis!
            </p>
            <div className="btn">
          <button className="button" color="secondary"><span>Sign Up now! </span></button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "../About/About.css";

const About = () => {
  return (
    <div className="about" id="aboutId">
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="container">
        <div className="about_content">
          <div className="about-text-1">
            <h1 className="head_1">
              Say Hi 👋 to <span className="innerspan_1">World</span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              inventore impedit alias. Ab dolor totam cum officiis cumque
              voluptatibus voluptate ullam quisquam dolores laboriosam
              aspernatur sequi, quia animi consequatur debitis!
            </p>
<<<<<<< HEAD
          </div>
          <div className="button">
            <Button color="secondary">Sign Up now!!</Button>
=======
            <div className="btn">
              <button className="button">
                <span>Sign Up now! </span>
              </button>
            </div>
>>>>>>> 1e754c6cb2179f74e2caed030625f9c50ab97fc1
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

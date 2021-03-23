import React from "react";
import "./about.css";
import { Animated } from "react-animated-css";

export const About = () => {
  return (
    <div className="about">
      <Animated
        animationIn="bounceInLeft"
        animateDelay="animate__delay-10s	10s"
        isVisible={true}
      >
        <div className="info">
          <p>Who am i?</p>
          <p>Junior front-end developer</p>
        </div>
      </Animated>
      <Animated
        animationIn="bounceInRight"
        animateDelay="animate__delay-10s	10s"
        isVisible={true}
      >
        <div className="skills">
          <h1>Skills</h1>
        </div>
      </Animated>
    </div>
  );
};

export default About;

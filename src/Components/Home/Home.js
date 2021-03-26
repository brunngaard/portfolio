import React from "react";
import "./start.scss";
import SocialMedia from "./SocialMedia";
import { Animated } from "react-animated-css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        animateDelay="animate__delay-10s	10s"
        isVisible={true}
      >
        <div className="start">
          <p className="para">
            Hello! My name is{" "}
            <span className="name" style={{ color: "#e31b6d" }}>
              Emil Brunngård
            </span>
          </p>
          <p className="infos">
            Im a junior front-end developer with an eye for design and passion
            for functionality
          </p>
        </div>
      </Animated>
      <Animated
        animationIn="bounceInLeft"
        animateDelay="animate__delay-10s	10s"
        isVisible={true}
      >
        <div className="buttons">
          <Link to="/contact">
            {" "}
            <button
              style={{ fontFamily: "Mukta, sans-serif;" }}
              className="btn draw-border btn1"
            >
              I need a Website
            </button>
          </Link>

          <Link to="/contact">
            {" "}
            <button className="btn draw-border btn2">
              Im looking to hire!
            </button>
          </Link>
        </div>
      </Animated>
      <SocialMedia />
    </div>
  );
};

export default Home;

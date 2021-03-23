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
          <p style={{ margin: "0px", fontSize: "36px" }}>
            Hello! My name is{" "}
            <span style={{ color: "#e31b6d" }}>Emil Brunngård</span>
          </p>
          <p style={{ margin: "15px", fontSize: "28px" }}>
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
              className="btn draw-border"
            >
              I need a Website
            </button>
          </Link>

          <Link to="/contact">
            {" "}
            <button className="btn draw-border">Im looking to hire!</button>
          </Link>
        </div>
      </Animated>
      <SocialMedia />
    </div>
  );
};

export default Home;

import React from "react";
import "./about.css";
import { Animated } from "react-animated-css";
import picture from "./emilbild.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import SocialMedia from "../Home/SocialMedia";
import ProgressBar from "react-bootstrap/ProgressBar";
import css from "./css1.png";
import html from "./html.png";
import js from "./javascript.png";
import react from "./atom.png";
import php from "./php.png";

export const About = () => {
  return (
    <div>
      <div className="about">
        <Animated
          animationIn="bounceInLeft"
          animateDelay="animate__delay-10s	10s"
          isVisible={true}
        >
          <div className="info">
            <img className="portrait" src={picture} alt="Logo" />
            <p className="who">Who am i?</p>
            <p className="me-info">
              I am a front-end developer currently situated in Stockholm. Im a
              team player who loves learning new things. My biggest goal at the
              moment is to master React. If this sounds intresting dont hesitate
              to
              <NavLink to="/contact">
                <span className="contact-link">contact me!</span>
              </NavLink>
            </p>
          </div>
          <div className="socialMedia">
            <SocialMedia />
          </div>
        </Animated>
        <div style={{ overflowX: "hidden" }}>
          <Animated
            animationIn="bounceInRight"
            animateDelay="animate__delay-10s	10s"
            isVisible={true}
          >
            <div className="skills">
              <img
                src={css}
                alt="Logo"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginBottom: "10px",
                }}
              />
              <ProgressBar
                variant="info"
                active="true"
                now={70}
                label={`${70}%`}
                width="100%"
              />
              <img
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginBottom: "10px",
                }}
                src={html}
                alt="Logo"
              />
              <ProgressBar
                variant="info"
                active="true"
                now={80}
                label={`${80}%`}
                width="100%"
              />
              <img
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginBottom: "10px",
                }}
                src={js}
                alt="Logo"
              />
              <ProgressBar
                variant="info"
                active="true"
                now={80}
                label={`${80}%`}
                width="100%"
              />
              <img
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  color: "blue",
                  marginBottom: "10px",
                }}
                src={react}
                alt="Logo"
              />
              <ProgressBar
                variant="info"
                active="true"
                now={70}
                label={`${70}%`}
                width="100%"
              />
              <img
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  color: "blue",
                  marginBottom: "10px",
                }}
                src={php}
                alt="Logo"
              />
              <ProgressBar
                variant="info"
                active="true"
                now={50}
                label={`${50}%`}
                width="100%"
              />
            </div>
          </Animated>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./projects.css";
import github from "./github.png";
import lunch from "./enlunch.jpg";
import { Animated } from "react-animated-css";
import css from "./css1.png";
import html from "./html.png";
import js from "./javascript.png";
import atom from "./atom.png";

export const Projects = () => {
  return (
    <div className="animate">
      <Animated
        animationIn="bounceInUp"
        animationOut="fadeOut"
        animateDelay="animate__delay-10s	10s"
        isVisible={true}
      >
        <div className="container">
          <div className="proj1">
            <h2
              style={{
                color: "white",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              En Lunch
            </h2>
            <a href="http://en-lunch.surge.sh/">
              <img className="proImg" alt="website img" src={lunch}></img>
            </a>
            <div className="build">
              <img
                src={css}
                alt="Logo"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "10px",
                  width: "42px",
                  marginBottom: "10px",
                  flexDirection: "column",
                }}
              ></img>
              <img
                src={html}
                alt="Logo"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "10px",
                  width: "42px",
                  marginBottom: "10px",
                }}
              ></img>
              <img
                src={js}
                alt="Logo"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "10px",
                  width: "42px",
                  marginBottom: "10px",
                }}
              ></img>
            </div>
          </div>
          <div>
            <h2
              style={{
                color: "white",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              Github Finder
            </h2>
            <a href="https://githubfinder113344.netlify.app/">
              <img className="proImg" alt="website img" src={github}></img>
            </a>
            <div className="build">
              <img
                src={css}
                alt="Logo"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "10px",
                  width: "42px",
                  marginBottom: "10px",
                  flexDirection: "column",
                }}
              ></img>
              <img
                src={atom}
                alt="Logo"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "10px",
                  width: "42px",
                  marginBottom: "10px",
                }}
              ></img>
            </div>
            <div className="github-repo">
              <a
                className="github-proj"
                href="https://github.com/brunngaard/Github-finder/tree/master"
                className="fa fa-github"
              ></a>
            </div>
          </div>
        </div>
      </Animated>
    </div>
  );
};

export default Projects;

import "./App.css";
import "./Components/Navigation/Nav.css";
import { Animated } from "react-animated-css";
import Particles from "react-particles-js";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Linkn,
  NavLink,
} from "react-router-dom";

const App = () => {
  const particlesOption = {
    particles: {
      number: {
        value: 30,
      },
      size: {
        value: 1.5,
      },
      color: {
        value: "#61dbfb",
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };
  return (
    <Router>
      <div className="header">
        <Particles className="particles" params={particlesOption} />
        <ul className="navigation">
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{
                color: "#e31b6d",
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeStyle={{
                color: "#e31b6d",
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              activeStyle={{
                color: "#e31b6d",
                paddingBottom: "13px",
              }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              activeStyle={{
                color: "#e31b6d",
                paddingBottom: "13px",
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

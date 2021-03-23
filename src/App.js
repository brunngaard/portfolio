import "./App.css";
import "./Components/Navigation/Nav.css";
import { Animated } from "react-animated-css";
import Particles from "react-particles-js";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const particlesOption = {
    particles: {
      number: {
        value: 25,
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
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

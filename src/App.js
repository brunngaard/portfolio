import "./App.css";
import Nav from "./Components/Navigation/Nav";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";

import Skills from "./components/SkillSection/Skills";
import Projects from "./components/ProjectsSection/Projects";
import Nav from "./components/NavBar/Nav";
import Hero from "./components/HeroSection/Hero";
import ContactMe from "./components/ContactMe/ContactMe";
function App() {
  return (
    <div className="App w-[100vw] overflow-x-hidden ">
      <Nav />
      <div className="mx-auto mt-40 md:mt-64">
        <div id="aboutMe">
          <Hero />
        </div>
        <div id="skill">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="hireMe">
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default App;

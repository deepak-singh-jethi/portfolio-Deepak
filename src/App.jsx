import React from "react";
import "./App.css";

import Skills from "./components/SkillSection/Skills";
import Projects from "./components/ProjectsSection/Projects";
import Nav from "./components/NavBar/Nav";
import Hero from "./components/HeroSection/Hero";
function App() {
  return (
    <div className="App w-[100vw] overflow-x-hidden ">
      <Nav />
      <div className="mx-auto mt-40 md:mt-64">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;

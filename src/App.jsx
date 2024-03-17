import React from "react";

import Nav from "./components/NavBar/Nav";
import Hero from "./components/HeroSection/Hero";

import "./App.css";
function App() {
  return (
    <div className="App w-[100vw] overflow-x-hidden ">
      <Nav />
      <div className="mx-auto mt-48 md:mt-64">
        <Hero />
      </div>
    </div>
  );
}

export default App;

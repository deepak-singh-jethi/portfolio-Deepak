import React, { useEffect, useState } from "react";
import AboutMeArea from "./AboutMeArea";
import "./hero.css";
const Hero = () => {
  return (
    <div className="text-white hero w-[100vw] justify-between h-fit">
      <AboutMeArea />
      <div className="image-container mt-10 md:mt-0">
        <div className="liquid-border">
          <img
            src="https://wallpapercave.com/wp/wp7204354.jpg"
            alt="Your Image"
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

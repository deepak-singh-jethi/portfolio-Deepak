import React, { useEffect, useState } from "react";
import AboutMeArea from "./AboutMeArea";
import "./hero.css";
import ScrollBottomToTop from "../animation/ScrollBottomToTop";
const Hero = () => {
  return (
    <ScrollBottomToTop>
      <div className="text-white hero w-[100vw] justify-between h-fit items-center">
        <AboutMeArea />
        <ScrollBottomToTop duration={2}>
          <div className="image-container mt-10 md:mt-0">
            <div className="liquid-border">
              <img
                src="https://wallpapercave.com/wp/wp7204354.jpg"
                alt="Your Image"
                className="image"
              />
            </div>
          </div>
        </ScrollBottomToTop>
      </div>
    </ScrollBottomToTop>
  );
};

export default Hero;

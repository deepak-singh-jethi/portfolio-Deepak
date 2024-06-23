import React from "react";
import AboutMeArea from "./AboutMeArea";
import "./hero.css";
import { motion } from "framer-motion";
import ScrollBottomToTop from "../animation/ScrollBottomToTop";
const Hero = () => {
  return (
    <ScrollBottomToTop>
      <div className="text-white hero w-[100vw] justify-between h-fit items-center">
        <AboutMeArea />

        <motion.div
          initial={{ opacity: 0, scale: 1.4, x: "-100px" }}
          animate={{ opacity: 1, scale: 1, x: "0%" }}
          transition={{ duration: 1 }}
          className="image-container mt-40 md:mt-0">
          <div className="liquid-border">
            <img
              src="https://ibb.co/kJ7ZPSs"
              alt="Your Image"
              className="image"
            />
          </div>
        </motion.div>
      </div>
    </ScrollBottomToTop>
  );
};

export default Hero;

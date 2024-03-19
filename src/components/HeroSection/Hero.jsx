import React from "react";
import AboutMeArea from "./AboutMeArea";
import "./hero.css";
import { motion } from "framer-motion";
import ScrollBottomToTop from "../animation/ScrollBottomToTop";
const Hero = () => {
  return (
    <ScrollBottomToTop>
      <div className="text-white flex flex-wrap hero w-[100vw] md:flex-col justify-between h-fit items-center">
        <AboutMeArea />

        <motion.div
          initial={{ opacity: 0, scale: 1.4, x: "-100px" }}
          animate={{ opacity: 1, scale: 1, x: "0%" }}
          transition={{ duration: 1 }}
          className="image-container mt-32 md:mt-0">
          <div className="liquid-border">
            <img
              src="https://scontent.fblr2-3.fna.fbcdn.net/v/t1.6435-9/52598256_801649820171103_9007665232922804224_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NPRvZqXG2Y0AX-_778I&_nc_ht=scontent.fblr2-3.fna&oh=00_AfAudxPmmDAimf9Z77X323eyd5wYomMsu-EM9zKi2yiIMw&oe=6621262D"
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

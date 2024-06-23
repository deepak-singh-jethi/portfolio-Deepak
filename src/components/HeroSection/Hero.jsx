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
              src="https://scontent.fdel14-1.fna.fbcdn.net/v/t1.6435-9/32332349_811317055726429_5912480176133898240_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3YE9cBs6gZkQ7kNvgHwenMy&_nc_ht=scontent.fdel14-1.fna&oh=00_AYB8em6o2_2CmSeH2sJTv-BJVoir8PeUO0AD0pUkjPOdkg&oe=669FC619"
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

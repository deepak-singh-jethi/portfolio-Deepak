import React from "react";
import ScrollBottomToTop from "../animation/ScrollBottomToTop";
import { motion } from "framer-motion";
import SkillContent from "./SkillContent";

const Skills = () => {
  return (
    <ScrollBottomToTop duration={1.4}>
      <div className="text-white mt-40">
        <h1 className="md:text-5xl text-4xl font-bold text-yellow-400 text-center">
          My Skills
        </h1>
        <SkillContent />
      </div>
    </ScrollBottomToTop>
  );
};

export default Skills;

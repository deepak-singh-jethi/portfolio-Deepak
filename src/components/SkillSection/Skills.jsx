import React from "react";
import ScrollBottomToTop from "../animation/ScrollBottomToTop";
import { motion } from "framer-motion";
import SkillContent from "./SkillContent";

const Skills = () => {
  return (
    <ScrollBottomToTop duration={1.4}>
      <div className="text-white mt-28 md:my-48">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:text-5xl text-4xl font-bold text-yellow-400 text-center font-mono">
          My Skills
        </motion.h1>
        <SkillContent />
      </div>
    </ScrollBottomToTop>
  );
};

export default Skills;

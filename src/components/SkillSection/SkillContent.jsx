import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills } from "../../Data/data";

const SkillContent = () => {
  return (
    <div className="flex flex-col ">
      {skills.map((skill, index) => {
        const ratingWidth = 10 * skill.rating;
        return (
          <div key={skill.name} className="flex ">
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="md:mt-16 mt-10 w-[60%] relative mx-auto">
              <h1 className="text-small md:text-2xl my-1">{skill.name}</h1>
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:h-5 h-3 absolute w-full bg-white rounded-lg "></motion.div>
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: `${ratingWidth}%` }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className={`md:h-5 h-3  absolute  bg-yellow-400 rounded-lg`}></motion.div>
              <div className="absolute left-[-40px] md:left-[-100px] top-[14px] h-8 md:h-14 w-8 md:w-14 overflow-hidden bg-white rounded-full object-center">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillContent;

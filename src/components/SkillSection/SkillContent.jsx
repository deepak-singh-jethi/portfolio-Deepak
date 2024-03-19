import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills } from "../../Data/data";

const SkillContent = () => {
  return (
    <div className="flex flex-col ">
      {skills.map((skill, index) => {
        const ratingWidth = 10 * skill.rating;
        return (
          <div key={skill.name} className="flex w-full ">
            <motion.div
              initial={{ opacity: 0, x: "-20%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="md:mt-10 mt-8 md:w-[60%] w-[70%] relative mx-auto">
              <h1 className="text-small md:text-[24px] font-bold my-2">
                {skill.name}
              </h1>
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="md:h-5 h-3 absolute w-full bg-white rounded-lg "></motion.div>
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: `${ratingWidth}%` }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className={`md:h-5 h-3  absolute  bg-yellow-400 rounded-lg`}></motion.div>
              <div className="absolute left-[-40px] md:left-[-100px] top-[15px] md:top-[15px] h-8 md:h-16 w-8 md:w-16 overflow-hidden bg-white rounded-full object-center">
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

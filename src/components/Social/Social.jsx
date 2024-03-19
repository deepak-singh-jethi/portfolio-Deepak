import React from "react";
import { motion } from "framer-motion";
import github from "../../resource/github.png";
import linkedin from "../../resource/linkedin.png";

const Social = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100, scale: [1.3, 0.5] }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2, ease: "easeInOut" }}
      className="max-w-md">
      <h1 className="text-2xl text-yellow-400 font-bold font-mono my-4">
        Social Links
      </h1>
      <div className="flex justify-start items-center flex-wrap gap-8">
        <motion.div
          initial={{ opacity: 0, scale: [1.3, 0.5] }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}>
          <a href="https://www.linkedin.com/in/deepak-singh-jethi-bb7061228/">
            <img
              src={linkedin}
              alt="github"
              className="w-20 bg-white rounded-full hover:border-2 hover:border-yellow-300"
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: [1.3, 0.5] }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3, ease: "easeInOut" }}>
          <a href="https://github.com/deepak-singh-jethi">
            <img
              src={github}
              alt="github"
              className="w-20 bg-white rounded-full hover:border-2 hover:border-yellow-300"
            />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Social;

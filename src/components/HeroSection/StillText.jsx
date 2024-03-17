import React from "react";
import { motion } from "framer-motion";

const StillText = ({ children, timeDelay }) => {
  return (
    <motion.p
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: timeDelay }}
      exit={{ opacity: 0, x: "-20%" }}
      className="mt-3 text-2xl sm:text-3xl font-thin">
      {children}
    </motion.p>
  );
};

export default StillText;

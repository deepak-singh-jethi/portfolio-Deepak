import React from "react";
import { motion } from "framer-motion";

const StillText = ({ children, timeDelay }) => {
  return (
    <motion.p
      initial={{ opacity: 0, x: "-100px" }}
      animate={{ opacity: 1, x: "0px" }}
      transition={{ duration: 1, delay: timeDelay }}
      className="mt-3 text-2xl sm:text-3xl font-thin">
      {children}
    </motion.p>
  );
};

export default StillText;

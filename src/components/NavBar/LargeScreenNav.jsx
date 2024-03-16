import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../../Data/data";

const LargeScreenNav = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="lg:gap-10 lg:flex hidden">
      {navLinks.map(({ title, href }) => (
        <motion.p
          key={title}
          initial={{ border: "none" }}
          className="text-2xl font-semibold px-3 font-mono"
          style={{ display: "inline-block" }}
          onMouseEnter={() => setSelectedTopic(title)}
          onMouseLeave={() => setSelectedTopic(null)}>
          <a href={href}>{title}</a>
          <AnimatePresence>
            {selectedTopic === title && (
              <motion.div
                initial={{ height: "5px", width: "0px" }}
                animate={{ height: "5px", width: "100%" }}
                transition={{ duration: 0.3 }}
                exit={{ width: "0px" }}
                className="bg-yellow-500"></motion.div>
            )}
          </AnimatePresence>
        </motion.p>
      ))}
    </div>
  );
};

export default LargeScreenNav;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../Data/data";

const SmallScreenNav = ({ isHidden, handleBurger }) => {
  const slideClass = isHidden ? "left-[-100%]" : "left-0 right-0";

  const handleSideBar = () => {
    handleBurger(true);
  };
  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col md:hidden ${slideClass} slide gap-2 text-center z-50`}>
          <motion.p className="text-xl font-semibold ">
            <button onClick={handleBurger}>X</button>
          </motion.p>

          {navLinks.map(({ title, href }, index) => (
            <motion.p
              key={title}
              whileHover={{ borderBottom: "2px solid yellow" }}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              style={{ marginBottom: "10px" }}
              className="text-xl font-semibold pt-6">
              <a href={href} onClick={handleSideBar}>
                {title}
              </a>
            </motion.p>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SmallScreenNav;

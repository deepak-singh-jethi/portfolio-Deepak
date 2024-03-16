import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../../Data/data";
import LargeScreenNav from "./LargeScreenNav";
import SmallScreenNav from "./SmallScreenNav";

const Nav = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleBurger = () => setIsHidden((prev) => !prev);

  return (
    <div className="w-full flex justify-between md:px-14 px-4 py-7 fixed top-0 text-slate-100 ">
      <div>
        <p className="text-3xl md:text-4xl font-bold  text-center text-yellow-400">
          Deepak Singh Jethi
        </p>
      </div>
      <div className="lg:hidden block">
        <button onClick={handleBurger} className="text-3xl">
          ☰
        </button>
      </div>
      {/* larger screens */}
      <LargeScreenNav />
      {/* smaller screens */}
      <SmallScreenNav isHidden={isHidden} handleBurger={handleBurger} />
    </div>
  );
};

export default Nav;

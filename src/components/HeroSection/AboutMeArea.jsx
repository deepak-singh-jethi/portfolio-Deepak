import React, { useState, useEffect } from "react";
import { aboutMeText } from "../../Data/data";
import StillText from "./StillText";
import { motion } from "framer-motion";

const AboutMeArea = () => {
  const [selectedWord, setSelectedWord] = useState({
    word: aboutMeText[0],
    wordIndex: 0,
    wordLength: aboutMeText[0].length,
  });
  const { word, wordIndex, wordLength } = selectedWord;

  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (wordIndex === 0) {
        setDisplayText1(word.substring(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === wordLength) {
          setSelectedWord((prev) => {
            return {
              word: aboutMeText[1],
              wordIndex: 1,
              wordLength: aboutMeText[1].length,
            };
          });
          clearInterval(interval);
          currentIndex = 0;
        }
      }

      if (wordIndex === 1) {
        setDisplayText2(word.substring(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === wordLength) {
          clearInterval(interval);
          return;
        }
      }
    }, 70);

    return () => clearInterval(interval);
  }, [selectedWord]);

  return (
    <div className="h-[500px] md:h-auto text-center md:text-left ml-2 md:ml-14">
      {/* first text */}

      <p className="text-2xl sm:text-5xl font-serif font-bold">
        {displayText1}{" "}
        <span>{displayText1.length < aboutMeText[0].length && "|"}</span>
      </p>

      {/* second text */}
      <p className="text-2xl sm:text-3xl font-serif font-bold mt-8 md:mt-16">
        {displayText2}
        <span>
          {displayText2.length < aboutMeText[1].length &&
            displayText2.length > 0 &&
            "|"}
        </span>
      </p>

      {/* stll text -1 */}

      {displayText2.length === aboutMeText[1].length && (
        <StillText timeDelay={0.9}>{aboutMeText[2]}</StillText>
      )}

      {displayText2.length === aboutMeText[1].length && (
        <div className="flex gap-5 md:flex-row flex-col md:justify-start items-center py-14">
          <motion.button
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" mt:8 px-5 py-3 text-xl hover:bg-yellow-500 text-slate-800 rounded-xl bg-yellow-300 hover:text-slate-700 font-medium">
            <a href="#hireMe">GET IN TOUCH</a>
          </motion.button>
          <motion.button
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className=" mt:8 px-5 py-3 text-xl hover:bg-yellow-500 text-slate-800 rounded-xl bg-yellow-300 hover:text-slate-700 font-medium">
            <a href="https://deepakresume1797.tiiny.site/" target="blank">
              Get Resume
            </a>
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default AboutMeArea;

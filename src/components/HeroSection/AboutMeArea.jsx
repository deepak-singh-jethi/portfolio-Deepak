import React, { useState, useEffect } from "react";
import { aboutMeText } from "../../Data/data";
import StillText from "./StillText";
import ScrollBottomToTop from "../animation/ScrollBottomToTop";

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
    <div className="h-[400px] md:h-auto text-center md:text-left ml-2 md:ml-14">
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
        <StillText timeDelay={0.6}>{aboutMeText[2]}</StillText>
      )}

      {/* stll text -2 */}
      {displayText2.length === aboutMeText[1].length && (
        <StillText timeDelay={1.2}>
          <button className="md:mt-14 mt:8 px-5 py-3 text-xl hover:bg-yellow-500 text-slate-800 rounded-xl bg-yellow-300 hover:text-slate-700 font-medium">
            GET IN TOUCH
          </button>
        </StillText>
      )}
    </div>
  );
};

export default AboutMeArea;

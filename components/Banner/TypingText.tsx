"use client";

import { TypeAnimation } from "react-type-animation";

import { typingItems } from "@/constants";

const TypingText = () => {
  return (
    <TypeAnimation
      preRenderFirstString
      sequence={typingItems}
      wrapper="span"
      speed={10}
      repeat={Infinity}
    />
  );
};

export default TypingText;

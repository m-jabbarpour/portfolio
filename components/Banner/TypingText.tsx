"use client";

import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
    <TypeAnimation
      preRenderFirstString
      sequence={[
        "Details",
        1000,
        "Clean Code",
        1000,
        "Performance",
        1000,
        "Design Patterns",
        1000,
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
    />
  );
};

export default TypingText;

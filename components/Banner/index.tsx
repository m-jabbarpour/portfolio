"use client";

import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="container py-8 flex flex-col sm:flex-row gap-8">
      <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-zinc-200 mx-auto sm:mx-0 shadow">
        <Image
          alt="Mortaza Jabbarpour"
          src="/assets/images/profile.png"
          fill={true}
        />
      </div>

      <div className="text-zinc-200 text-base lg:text-4xl flex flex-col justify-around">
        <h1>
          Hi, I&apos;m <strong>Mortaza Jabbarpour</strong>
        </h1>
        <span>A Front-End Developer Who Cares About</span>
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
      </div>
    </div>
  );
};

export default Banner;

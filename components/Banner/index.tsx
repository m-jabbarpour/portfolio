import Image from "next/image";

import TypingText from "./TypingText";

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

      <div className="text-xl lg:text-3xl text-zinc-200 flex flex-col justify-around">
        <span>
          Hi, I&apos;m&nbsp;
          <strong className="text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Mortaza Jabbarpour
          </strong>
        </span>
        <div className="flex flex-col sm:flex-row">
          <span>A Front-End Developer&nbsp;</span>
          <span>Who Cares About</span>
        </div>

        <TypingText />
      </div>
    </div>
  );
};

export default Banner;

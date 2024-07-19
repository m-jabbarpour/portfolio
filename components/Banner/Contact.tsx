import Image from "next/image";

import { contactItems } from "@/constants";

const Contact = () => {
  return (
    <div className="flex flex-col justify-around h-full">
      {contactItems.map((item, index) => (
        <a key={index} href={item.link} target="_blank">
          <Image
            src={`/assets/logos/${item.imageName}.svg`}
            alt={item.title}
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </a>
      ))}
    </div>
  );
};

export default Contact;

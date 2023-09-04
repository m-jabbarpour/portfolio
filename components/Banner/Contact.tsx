import Image from "next/image";

const items = [
  {
    title: "LinkedIn",
    imageName: "linkedin",
    link: "https://www.linkedin.com/in/mortaza-jabbarpour/",
  },
  {
    title: "GitHub",
    imageName: "github",
    link: "https://github.com/m-jabbarpour",
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col justify-around h-full">
      {items.map((item, index) => (
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

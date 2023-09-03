import Image from "next/image";

interface Props {
  title: string;
  imageName: string;
  link: string;
}

const SkillCard: React.FC<Props> = ({ title, imageName, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group flex flex-col items-center justify-between h-24 w-32 m-auto p-3 card"
    >
      <Image
        src={`/assets/logos/${imageName}.svg`}
        alt={title}
        width={40}
        height={40}
      />
      <span className="text-base text-zinc-200 group-hover:text-zinc-100">
        {title}
      </span>
    </a>
  );
};

export default SkillCard;

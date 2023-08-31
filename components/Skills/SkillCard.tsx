import Image from "next/image";

interface Props {
  title: string;
  imageName: string;
}

const SkillCard: React.FC<Props> = ({ title, imageName }) => {
  return (
    <div>
      <div className="group flex flex-col items-center justify-between h-24 w-24 m-auto p-3 card">
        <Image
          src={`/assets/logos/${imageName}.svg`}
          alt={title}
          width={40}
          height={40}
        />
        <span className="text-xs text-zinc-200 group-hover:text-zinc-100">
          {title}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;

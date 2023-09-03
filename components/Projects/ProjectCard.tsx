import Image from "next/image";

interface Props {
  title: string;
  descriptionItems: string[];
  codeLink: string;
  visitLink: string;
}

const ProjectCard: React.FC<Props> = ({
  title,
  descriptionItems,
  codeLink,
  visitLink,
}) => {
  return (
    <div className="group card px-5 py-3">
      <div className="flex justify-between mb-4">
        <h6 className="text-zinc-200 group-hover:text-zinc-100">{title}</h6>
        <div className="flex gap-4">
          <a href={codeLink} target="_blank" className="icon_button">
            <Image
              src="/assets/logos/code.svg"
              alt="Source Code"
              width={24}
              height={24}
            />
          </a>
          <a href={visitLink} target="_blank" className="icon_button">
            <Image
              src="/assets/logos/link.svg"
              alt="Visit"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
      <ul className="list-disc text-zinc-200 group-hover:text-zinc-100 pl-5">
        {descriptionItems.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;

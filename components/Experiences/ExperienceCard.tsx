import Image from "next/image";

interface Props {
  role: string;
  company: string;
  date: string;
  logoName: string;
  link: string;
  achievements: string[];
}

const ExperienceCard: React.FC<Props> = ({
  role,
  company,
  date,
  logoName,
  link,
  achievements,
}) => {
  return (
    <a href={link} target="_blank" className="group card py-4 px-5">
      <div className="flex gap-2 mb-4">
        <Image
          src={`/assets/logos/${logoName}.svg`}
          alt={company}
          width={60}
          height={60}
        />

        <div className="flex flex-col justify-around">
          <h6 className="text-zinc-200 group-hover:text-zinc-100">{role}</h6>
          <h6 className="text-zinc-200 group-hover:text-zinc-100">{company}</h6>
          <span className="text-zinc-400 group-hover:text-zinc-300 transition-all duration-300">
            {date}
          </span>
        </div>
      </div>

      <ul className="list-disc text-zinc-200 group-hover:text-zinc-100 pl-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="mb-2">
            {achievement}
          </li>
        ))}
      </ul>
    </a>
  );
};

export default ExperienceCard;

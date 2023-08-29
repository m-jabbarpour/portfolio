import SectionTitle from "../common/SectionTitle";
import SkillCard from "./SkillCard";

const skills = [
  { title: "HTML5", imageName: "html" },
  { title: "CSS3", imageName: "css" },
  { title: "JavaScript", imageName: "javascript" },
  { title: "TypeScript", imageName: "typescript" },
  { title: "React.js", imageName: "react" },
  { title: "Next.js", imageName: "next" },
  { title: "Bootstrap", imageName: "bootstrap" },
  { title: "Tailwind CSS", imageName: "tailwind" },
  { title: "Material UI", imageName: "mui" },
  { title: "Axios", imageName: "axios" },
  { title: "Git", imageName: "git" },
  { title: "React Router", imageName: "react router" },
  { title: "Redux", imageName: "redux" },
];

const Skills = () => {
  return (
    <section className="container py-8 flex flex-col gap-8">
      <SectionTitle title="Skills" />
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            imageName={skill.imageName}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;

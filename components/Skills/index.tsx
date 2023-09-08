import SectionTitle from "../common/SectionTitle";
import SkillCard from "./SkillCard";

const skills = [
  {
    title: "HTML5",
    imageName: "html",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS3",
    imageName: "css",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "JavaScript",
    imageName: "javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "TypeScript",
    imageName: "typescript",
    link: "https://www.typescriptlang.org/",
  },
  { title: "React.js", imageName: "react", link: "https://react.dev/" },
  {
    title: "React Query",
    imageName: "react query",
    link: "https://tanstack.com/query/latest/",
  },
  {
    title: "React Router",
    imageName: "react router",
    link: "https://reactrouter.com/en/main",
  },
  { title: "Next.js", imageName: "next", link: "https://nextjs.org/" },
  {
    title: "Redux Toolkit",
    imageName: "redux",
    link: "https://redux-toolkit.js.org/",
  },
  {
    title: "Bootstrap",
    imageName: "bootstrap",
    link: "https://getbootstrap.com/",
  },
  {
    title: "Tailwind CSS",
    imageName: "tailwind",
    link: "https://tailwindcss.com/",
  },
  { title: "Material UI", imageName: "mui", link: "https://mui.com/" },
  { title: "Axios", imageName: "axios", link: "https://axios-http.com/" },
  { title: "Git", imageName: "git", link: "https://git-scm.com/" },
];

const Skills = () => {
  return (
    <section className="container py-8">
      <SectionTitle title="Skills" />
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

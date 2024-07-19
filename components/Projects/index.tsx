import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";

import { projects } from "@/constants";

const Projects = () => {
  return (
    <section className="container py-8">
      <SectionTitle title="Projects" />

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

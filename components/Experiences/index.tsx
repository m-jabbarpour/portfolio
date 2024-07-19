import SectionTitle from "../common/SectionTitle";
import ExperienceCard from "./ExperienceCard";

import { experiences } from "@/constants";

const Experiences = () => {
  return (
    <section className="container py-8">
      <SectionTitle title="Experiences" />
      <div className="flex flex-col gap-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.date} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;

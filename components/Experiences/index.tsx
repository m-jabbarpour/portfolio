import SectionTitle from "../common/SectionTitle";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    role: "Front-End Developer",
    company: "IT Shams",
    logoName: "itshams",
    date: "Oct. 2022 - Present",
    link: "https://www.itshams.ir/",
    achievements: [
      " Working on an enterprise Suggestion System web application (React.js) for large companies and organizations, including Iran Khodro Co. (with 60k+ users) and Tabriz Municipality (with 10k+ users)",
      "Worked with Material UI (for user interface), AG Grid and High-Charts (for representation of large data), SignalR (for web socket connections), Axios (for Rest API connections), Context API (for state management), and React Hook Form and Yup (for form handling and validation)",
      "Implemented reusable components and custom hooks, resulting in a significant reduction of over 90% in redundant code and a streamlined development process, resulting in a time-saving of over 20%",
      "Implemented the client caching system using React Query, leading to a remarkable reduction in repeated API calls",
      "Refactored the code base according to the best practices and design patterns, improving the performance by reducing unnecessary rerenders by more than 80%.",
      "Communicated with the technical lead and the back-end development team to create a user-friendly UI and UX",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "Maktab Sharif",
    logoName: "maktab sharif",
    date: "Feb. 2022, Sep. 2022",
    link: "https://maktabsharif.ir/",
    achievements: [
      "Developed a number of small and large projects, using a variety of Front-End development technologies, from basic ones (HTML, CSS, and vanilla JavaScript) to modern ones (React.js, Next.js)",
    ],
  },
];

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

import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Book Store App",
    codeLink: "https://github.com/m-jabbarpour/book-store-app-2",
    visitLink: "https://book-store-app-2.netlify.app/",
    descriptionItems: [
      "I had developed the first version of the app using Next.js, Tailwind CSS, Redux Toolkit, and Next API Routes.",
      "In the second version, I have converted JavaScript to TypeScript, made some optimizations, and added server-side rendering and dark mode. I am still working on the app to fetch the data from a database, rather than using the local data. A friend of mine is writing the back-end for the app, and once the APIs are ready, I will be able to develop the admin panel and add authentication, as well.",
    ],
  },
  {
    title: "Weather App",
    codeLink: "https://github.com/m-jabbarpour/weather-app",
    visitLink: "https://github.com/m-jabbarpour/weather-app",
    descriptionItems: [
      "A mini-project developed using HTML, SCSS, and vanilla JavaScript",
    ],
  },
];

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

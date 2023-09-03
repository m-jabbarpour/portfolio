import Banner from "@/components/Banner";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Banner />
      <Skills />
      <Experiences />
      <Projects />
    </main>
  );
}

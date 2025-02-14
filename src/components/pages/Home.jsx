import React from "react";
import About from "../Sections/About";
import Contact from "../Sections/Contact";
import Projects from "../Sections/Projects";
import Freelance from "../Sections/freelance";
import SkillsShowcase from "../Sections/Skills";
import Experience from "../Sections/Experience";

function Home() {
  return (
    <>
      <About />
      <Projects />
      <Freelance />
      <SkillsShowcase />
      <Experience />
      <Contact />
    </>
  );
}

export default Home;

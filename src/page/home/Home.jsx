import React from "react";
import Banner from "../../components/banner/Banner";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/project/Projects";
import Education from "../../components/education/Education";
import Achivement from "../../components/achivement/Achivement";
import Container from "../../components/container/Container";
import Contact from "../../components/contact/Contact";
const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <Skills />
        <Projects />
        <Education />
        <Achivement />
        <Contact />
      </Container>
    </>
  );
};

export default Home;

import React from "react";
import Banner from "../../components/banner/Banner";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/project/Projects";
import Education from "../../components/education/Education";
import Achivement from "../../components/achivement/Achivement";
import Container from "../../components/container/Container";
const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <Skills />
        <Projects />
        <div className="flex justify-center mt-20 items-center">
          <div className="flex-1">
            <Education />
          </div>
          <div className="w-[2px] min-h-[150px] bg-slate-900"></div>
          <div className="flex-1">
            <Achivement />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;

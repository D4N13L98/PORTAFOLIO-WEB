import "./Main.css";
import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import Introduction from "./views/Introduction";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
  display: inline-block;

  &.FirstContainer {
    height: 100vh;
    width: 100%;
  }
`;

function Main() {
  const introductionRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToComponent = (componentId) => {
    switch (componentId) {
      case "Introduction":
        introductionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "About":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <NavBar scrollToComponent={scrollToComponent}/>
      <Container className="FirstContainer" ref={introductionRef}>
        <Introduction scrollToComponent={scrollToComponent}/>
      </Container>
      <Container ref={aboutRef}>
        <About scrollToComponent={scrollToComponent}/>
      </Container>
      <Container ref={projectsRef}>
        <Projects scrollToComponent={scrollToComponent}/>
      </Container>
      <Container ref={contactRef}>
        <Contact scrollToComponent={scrollToComponent}/>
      </Container>
      <Container>
        <Footer scrollToComponent={scrollToComponent}/>
      </Container>
    </>
  );
}

export default Main;

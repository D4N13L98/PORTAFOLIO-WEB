import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  background-color: #aaaaaa20;
`;

const Row = styled.div``;

const Col = styled.div`
  display: flex;
  flex-direction: column;

  &.Description {
    height: 250px;
  }
`;

const NameTitle = styled.p`
  font-weight: 700;
  font-size: 2.5em;
  text-align: center;
  padding: 20px;
  padding-top: 0;
  padding-bottom: 0;

  &.Subtitles {
    font-size: 1.8rem;
    text-align: start;
  }

  @media (max-width: 590px) {
    font-size: 2.5rem;
  }
`;

const Buttons = styled(Link)`
  font-size: 1.2rem;
  height: 60px;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #f25709;
  color: white;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 5px 5px 15px 1px #bbb;
  margin: 20px 20px 50px;

  &:hover {
    transform: translateY(3px);
    transition: transform 0.15s ease-in-out;
  }
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  padding: 20px;
  padding-top: 0;
  padding-bottom: 0;

  &.Subtitle {
    color: #555;
  }

  &.Description {
    color: #666666;
    text-align: left;
    margin: 10px auto;
  }

  &.SkillsText {
    font-size: 1rem;
    padding: 10px 15px;
    background-color: #00000015;
    color: #555;
    font-weight: 600;
    border-radius: 5px;
    padding: 2.5%;
  }
`;

const SkillsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0 20px;
`;

const LinkText = styled(Link)`
  font-size: 1.2rem;
  font-weight: 500;
`;

const About = ({ scrollToComponent }) => {
  return (
    <Container>
      <Row className="row">
        <Col className="col-xl-8 col-lg-9 col-11 justify-content-center m-auto Description">
          <NameTitle>ABOUT ME</NameTitle>
          <Text className="Subtitle">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </Text>
        </Col>
      </Row>
      <Row className="row justify-content-evenly">
        <Col className="col-xxl-4 col-lg-5 col-11">
          <NameTitle className="Subtitles">Get to know me!</NameTitle>
          <Text className="Description">
            I'm a <b>Frontend Web Developer</b> building the Front-end of
            Websites and Web Applications that leads to the success of the
            overall product. Check out some of my work in the <b>projects</b>{" "}
            section.
          </Text>
          <Text className="Description">
            I'm passionate about web development and committed to continuous
            professional growth. Actively immersed in programming, I'm dedicated
            to strengthening my skills as a web developer. Seeking opportunities
            to learn, collaborate on innovative projects, and contribute to
            career growth. If you share my passion for tech, let's connect on{" "}
            <LinkText
              to="https://www.linkedin.com/in/daniel-castellanos-gonzalez/"
              target="_blank"
            >
              <b>LinkedIn</b>
            </LinkText>{" "}
            to explore potential collaborations and build the future together!
          </Text>
          <Text className="Description">
            I am actively exploring <b>professional opportunities</b> wherein I
            can make meaningful contributions while continually expanding my
            knowledge and skills. If you have a compelling opportunity aligning
            with my expertise and experience, I welcome you to{" "}
            <b>reach out to me</b> without hesitation.
          </Text>
          <Buttons onClick={() => scrollToComponent("Contact")}>
            CONTACT
          </Buttons>
        </Col>
        <Col className="col-xxl-4 col-lg-5 col-11">
          <NameTitle className="Subtitles">My Skills</NameTitle>
          <SkillsBox>
            <Text className="SkillsText">HTML</Text>
            <Text className="SkillsText">CSS</Text>
            <Text className="SkillsText">JavaScript</Text>
            <Text className="SkillsText">React</Text>
            <Text className="SkillsText">Bootstrap</Text>
            <Text className="SkillsText">NodeJS</Text>
            <Text className="SkillsText">GIT</Text>
            <Text className="SkillsText">GitHub</Text>
            <Text className="SkillsText">Responsive Design</Text>
            <Text className="SkillsText">SCRUM</Text>
            <Text className="SkillsText">MongoDB</Text>
            <Text className="SkillsText">SQL</Text>
          </SkillsBox>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  width: 100vw;
`;

const Row = styled.div`
  width: 100%;
`;

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
    padding-bottom: 50px;
  }

  &.Description {
    color: #666666;
    text-align: left;
    margin: 10px auto;
  }

  &.ProjectTextTitle {
    font-weight: 700;
    font-size: 2rem;
    text-align: left;
  }

  &.ProjectTextSubTitle {
    text-align: left;
  }
`;

const Project = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;

  @media (max-width: 950px) {
    flex-direction: column;
    height: auto;
  }
`;

const ImgBox = styled.div`
  height: 80%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 960px) {
    min-width: 500px;
  }

  @media (max-width: 600px) {
    min-width: 400px;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const DescriptionProject = styled.div`
  height: 400px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;

  @media (max-width: 950px) {
    height: auto;
    width: 90%;
  }
`;

const Buttons = styled(Link)`
  font-size: 1rem;
  height: 50px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #f25709;
  color: white;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 5px 5px 15px 1px #bbb;
  margin: 20px;

  &:hover {
    transform: translateY(-3px);
    transition: transform 0.15s ease-in-out;
  }
`;

const Projects = () => {
  return (
    <Container>
      <Row className="row">
        <Col className="col-xl-8 col-lg-9 col-11 justify-content-center m-auto Description">
          <NameTitle>PROJECTS</NameTitle>
          <Text className="Subtitle">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own link
          </Text>
        </Col>
        <Col className="col-xl-10 col-lg-11 col-12 justify-content-center m-auto">
          <Project>
            <ImgBox>
              <Img
                alt="EDTA Learn"
                src={require("../files/EDTA Learn.png")}
              ></Img>
            </ImgBox>
            <DescriptionProject>
              <Text className="ProjectTextTitle">EDTA Learn</Text>
              <Text className="ProjectTextSubTitle">
                This project is dedicated to a virtual learning object (VLO)
                centered on potentiometric assessments of chelation formation
                with EDTA. As a significant component of an undergraduate
                thesis, it delivers impactful educational content in this
                specialized field.
              </Text>
              <Buttons to="https://edtalearn.netlify.app" target="_blank">
                SEE PROJECT
              </Buttons>
            </DescriptionProject>
          </Project>
          <Project>
            <ImgBox>
              <Img
                alt="Weather App"
                src={require("../files/Weather App.png")}
              ></Img>
            </ImgBox>
            <DescriptionProject>
              <Text className="ProjectTextTitle">Weather App</Text>
              <Text className="ProjectTextSubTitle">
                The Real-Time Weather and Points of Interest Dashboard is a
                React.js web application designed to provide users with
                up-to-date weather information and interesting details about a
                diverse set of cities and towns worldwide. The application
                leverages weather APIs to fetch real-time weather data,
                including temperature, humidity, and wind speed, ensuring users
                have the latest meteorological information.
              </Text>
              <Buttons
                to="https://weatherglobalapp.netlify.app"
                target="_blank"
              >
                SEE PROJECT
              </Buttons>
            </DescriptionProject>
          </Project>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;

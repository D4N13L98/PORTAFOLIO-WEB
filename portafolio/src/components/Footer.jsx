import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px 0px;
  width: 100vw;
  background-color: black;
`;

const Row = styled.div`
  width: 100%;

  &.Principal {
    max-width: 1250px;
    margin: 50px 0px;
  }

  &.Lower {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid white;
    padding: 25px 0;
    width: 75%;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  text-align: start;
  margin: 0;
  padding: 0px;
  padding-bottom: 20px;
  color: white;

  &.Title {
    font-weight: 700;
    font-size: 1.3rem;
  }

  &.Subtitle {
    font-weight: 300;
    font-size: 1.1rem;
  }

  &.SmallText {
    font-size: 0.9rem;
    text-align: center;
    margin: 10px;
    padding: 0;
  }
`;

const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const LinkText = styled(Link)`
  font-size: 0.9rem;
  color: white;

  &.Buttons {
    font-size: 2.1rem;
    margin: 5px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
`;

const Footer = ({ scrollToComponent }) => {
  return (
    <Container>
      <IconContext.Provider value={{ color: "white" }}>
        <Row className="row Principal justify-content-evenly">
          <Col className="col-xl-5 col-md-10 col-10 justify-content-center m-auto">
            <Text className="Title">DANIEL CASTELLANOS</Text>
            <Text className="Subtitle">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </Text>
          </Col>
          <Col
            className="col-xl-4 col-md-10 col-10 justify-content-center m-auto"
            justify-content-center
            m-auto
          >
            <Text className="Title">SOCIAL</Text>
            <ButtonsBox>
              <LinkText className="Buttons" to="https://github.com/D4N13L98" target="_blank">
                <FaIcons.FaGithub />
              </LinkText>
              <LinkText className="Buttons"
                to="https://www.linkedin.com/in/daniel-castellanos-gonzalez/"
                target="_blank"
              >
                <FaIcons.FaLinkedin />
              </LinkText>
              <LinkText className="Buttons" to="https://dev.to/d4l13n" target="_blank">
                <FaIcons.FaDev />
              </LinkText>
            </ButtonsBox>
          </Col>
        </Row>
        <Row className="row Lower">
          <Text className="SmallText">
            © Copyright 2023. Made by{" "}
            <LinkText to="/" onClick={() => scrollToComponent("Introduction")}>
              Daniel Castellanos
            </LinkText>
          </Text>
        </Row>
      </IconContext.Provider>
    </Container>
  );
};

export default Footer;

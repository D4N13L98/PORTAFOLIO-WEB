import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

const Container = styled.div`
  width: 70px;
  position: absolute;
  top: 40%;
  left: 0;
  z-index: 10;
  background-color: white;

  @media (max-width: 960px) {
    display: none;
  }
`;

const Buttons = styled(Link)`
  font-size: 2.1rem;
  margin: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  &:hover {
    background-color: #ddd;
  }
`;

const SocialBar = () => {
  return (
    <Container>
      <IconContext.Provider value={{ color: "black" }}>
        <Buttons to="https://github.com/D4N13L98" target="_blank">
          <FaIcons.FaGithub />
        </Buttons>
        <Buttons
          to="https://www.linkedin.com/in/daniel-castellanos-gonzalez/"
          target="_blank"
        >
          <FaIcons.FaLinkedin />
        </Buttons>
        <Buttons
          to="https://dev.to/d4l13n"
          target="_blank"
        >
          <FaIcons.FaDev />
        </Buttons>
      </IconContext.Provider>
    </Container>
  );
};

export default SocialBar;

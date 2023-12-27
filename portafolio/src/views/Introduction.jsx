import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SocialBar from "../components/SocialBar";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://img.freepik.com/vector-gratis/fondo-abstracto-fondo-diseno-monocromatico-baja-poli_1048-15252.jpg?w=1060&t=st=1703184582~exp=1703185182~hmac=8a0202da708d2cfa01d2ab57da9083f2ccb32c9e3ae98d5f1e2e153657fdf797");
`;

const Row = styled.div`
  height: 50%;

  @media (max-width: 550px) {
    heigth: 844px;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  &.MenuBar {
    @media (max-width: 960px) {
      display: none;
    }
  }
`;

const NameTitle = styled.p`
  font-weight: 900;
  font-size: 3.5em;
  text-align: center;
  padding: 30px;
  padding-top: 0;
  padding-bottom: 0;
  line-height: 3.5rem;

  @media (max-width: 590px) {
    font-size: 2.5rem;
    line-height: 2.2rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  width: 
  padding: 100px;
  padding-top: 0;
  padding-bottom: 20px;
  margin: 0;
`;

const Buttons = styled(Link)`
  font-size: 1.4em;
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
  margin: 20px;

  &:hover {
    transform: translateY(3px);
    transition: transform 0.15s ease-in-out;
  }
`;

const Introduction = ({ scrollToComponent }) => {
  return (
    <Container>
      <Row className="row">
        <Col className="col-1 MenuBar">
          <SocialBar />
        </Col>
        <Col className="col-10 align-self-center Content m-auto">
          <NameTitle>HEY, I'M DANIEL CASTELLANOS</NameTitle>
          <Text>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </Text>
          <Buttons to="/" onClick={() => scrollToComponent('Projects')}>PROJECTS</Buttons>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;

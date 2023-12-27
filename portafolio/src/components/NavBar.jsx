import React, { useState } from "react";
import * as IoIcons from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 90px;
  position: fixed;
  z-index: 10;
  background-color: white;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.MenuBar {
    display: flex;
    justify-content: space-around;

    @media (max-width: 785px) {
      display: none;
    }
  }

  &.IconBar {
    display: none;

    @media (max-width: 785px) {
      display: flex;
      font-size: 1.8rem;
      height: 90px;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }
  }

  &.NameBar {
    gap: 5px;
  }
`;

const MenuSmall = styled.div`
  z-index: 9;
  background-color: #eee;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 90px;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  height: 250px;

  @media (min-width: 785px) {
    display: none;
  }
`;

const NameTitle = styled.p`
  font-weight: 700;
  text-decoration: none;
  font-size: 1.1rem;
  color: #333333;
  margin: 0;
`;

const Text = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  font-size: 1rem;
  color: #333333;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #f25709;
  }

  &.MenuSmall {
    justify-content: end;
    padding-right: 50px;
  }
`;

const Buttons = styled(Link)`
  display: none;

  &.MenuIcon {
    font-size: 20px;
    height: 90%
  }

  @media (max-width: 785px) {
    font-size: 1.8rem;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    &:hover {
      background-color: #f2570950;
    }
  }
`;

const ImgBox = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

const ProfileImage = styled.img`
  border: 3px solid #f25709;
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

const NavBar = ({ scrollToComponent }) => {
  const [sidebar, setsidebar] = useState(false);

  const showsidebar = () => {
    setsidebar(!sidebar);
  };

  const SmallMenuActions = (component) => {
    scrollToComponent(component)
    showsidebar();
  }

  return (
    <Container className="container-fluid text-center">
      <IconContext.Provider value={{ color: "#333333" }}>
        <Row className="row justify-content-between">
          <Col className="col-xxl-3 col-xl-4 col-lg-4 col-md-5 col-sm-6 col-8 NameBar">
            <ImgBox>
              <ProfileImage src={require("../files/photo.jpeg")} alt="img" />
            </ImgBox>
            <NameTitleBox>
              <NameTitle to="/">DANIEL CASTELLANOS</NameTitle>
            </NameTitleBox>
          </Col>
          <MenuSmall sidebar={sidebar}>
            <Text className="MenuSmall" to="/" onClick={() => {SmallMenuActions("Introduction")}}>
              HOME
            </Text>
            <Text className="MenuSmall" to="/" onClick={() => {SmallMenuActions("About")}}>
              ABOUT
            </Text>
            <Text className="MenuSmall" to="/" onClick={() => {SmallMenuActions("Projects")}}>
              PROJECTS
            </Text>
            <Text className="MenuSmall" to="/" onClick={() => {SmallMenuActions("Contact")}}>
              CONTACT
            </Text>
          </MenuSmall>
          <Col className="col-xxl-4 col-xl-5 col-lg-5 col-md-5 col-sm-2 col-4 MenuBar">
            <Text to="/" onClick={() => scrollToComponent("Introduction")}>
              HOME
            </Text>
            <Text to="/" onClick={() => scrollToComponent("About")}>
              ABOUT
            </Text>
            <Text to="/" onClick={() => scrollToComponent("Projects")}>
              PROJECTS
            </Text>
            <Text to="/" onClick={() => scrollToComponent("Contact")}>
              CONTACT
            </Text>
          </Col>
          <Col className="col-xxl-4 col-xl-4 col-lg-5 col-md-5 col-sm-2 col-2 IconBar">
            <Buttons className="MenuIcon">
              <IoIcons.IoMenu onClick={showsidebar} />
            </Buttons>
          </Col>
        </Row>
      </IconContext.Provider>
    </Container>
  );
};

export default NavBar;

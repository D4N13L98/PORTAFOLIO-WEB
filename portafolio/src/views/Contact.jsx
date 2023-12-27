import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0px;
  width: 100vw;
  background-image: url("https://img.freepik.com/vector-gratis/fondo-abstracto-fondo-diseno-monocromatico-baja-poli_1048-15252.jpg?w=1060&t=st=1703184582~exp=1703185182~hmac=8a0202da708d2cfa01d2ab57da9083f2ccb32c9e3ae98d5f1e2e153657fdf797");
`;

const Row = styled.div`
  height: 50%;
  width: 100%;
  margin: auto;

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

  &.Form {
    height: auto;
    padding: 40px;
    background-color: #ffffff;
  }
`;

const NameTitle = styled.p`
  font-weight: 900;
  font-size: 3.5em;
  text-align: center;
  padding: 30px;
  padding-top: 0;
  padding-bottom: 0;

  @media (max-width: 590px) {
    font-size: 2.5rem;
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

  &.TextForm {
    width: 100%;
    text-align: left;
    font-size: 1.1rem;
    font-weight: 600;
    color: #666666;
    padding: 0;
    margin-bottom: 10px;
  }
`;

const Buttons = styled(Link)`
  font-size: 1.4em;
  height: 70px;
  width: 45%;
  max-width: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #f25709;
  color: white;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 5px 5px 15px 1px #bbb;
  align-self: end;

  &:hover {
    transform: translateY(3px);
    transition: transform 0.15s ease-in-out;
  }
`;

const InputForm = styled.input`
  width: 100%;
  font-weight: 300;
  font-size: 1.2rem;
  padding: 20px;
  background-color: #f0f0f0;
  color: #00000090;
  text-align: left;
  border: none;
  outline: none;
  border-radius: 8px;
  margin-bottom: 50px;
`;

const TextArea = styled.textarea`
  width: 100%;
  font-weight: 300;
  font-size: 1.2rem;
  padding: 20px;
  background-color: #f0f0f0;
  color: #00000090;
  text-align: left;
  border: none;
  outline: none;
  border-radius: 8px;
  margin-bottom: 50px;
  height: 100px;
`;

const Contact = () => {
  const SendEmail = async () => {
    const NameInput = document.getElementById("NameInput").value;
    const EmailInput = document.getElementById("EmailInput").value;
    const MessageInput = document.getElementById("MessageInput").value;

    const MySwal = withReactContent(Swal);

    if (NameInput === "" || EmailInput === "" || MessageInput === "") {
      Swal.fire({
        title: "Complete blank spaces!",
        text: "You have to complete all inputs",
        icon: "error"
      });
    } else {
      try {
        let data = {
          name: NameInput,
          email: EmailInput,
          message: MessageInput,
        };
        fetch(
          "https://portafoliobackend-8qf2.onrender.com/portafolio/sendEmail",
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          },
          { timeout: 2147483647 }
        ).then((res) => res.json());
        MySwal.fire({
          title: "Message sent!",
          text: "The message was sent to Daniel Castellanos",
          icon: "success"
        });
        document.getElementById("NameInput").value = "";
        document.getElementById("EmailInput").value = "";
        document.getElementById("MessageInput").value = "";
      } catch {}
    }
  };
  return (
    <Container>
      <Row className="row">
        <Col className="col-xl-8 col-lg-9 col-11 justify-content-center m-auto Description">
          <NameTitle>CONTACT</NameTitle>
          <Text className="Subtitle">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </Text>
        </Col>
        <Row className="row">
          <Col className="col-xl-8 col-lg-9 col-11 justify-content-center m-auto Form">
            <Text className="TextForm">Name</Text>
            <InputForm
              placeholder="Enter your name"
              type="text"
              id="NameInput"
            ></InputForm>
            <Text className="TextForm">Email</Text>
            <InputForm
              placeholder="Enter your email"
              type="email"
              id="EmailInput"
            ></InputForm>
            <Text className="TextForm">Message</Text>
            <TextArea
              placeholder="Enter your message"
              id="MessageInput"
            ></TextArea>
            <Buttons onClick={SendEmail}>SUBMIT</Buttons>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Contact;

import React from "react";
import { Section } from "../LoginPage/LoginPageStyles";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 36px;
  line-height: 42px;
  font-weight: 500;
  margin-bottom: 24px;
  background: linear-gradient(
    to right,
    var(--primary-green-9FBAAE),
    var(--secondary-beige-F8F8F8)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
const Text = styled.h1`
  font-size: 24px;
  line-height: 30px;
`;
const HomePage = () => {
  return (
    <Section>
      <div className="container">
        <Title>Welcome to my transaction app</Title>
        <Text>
          Please, Sign up or Log in to have access to the Transaction App
        </Text>
      </div>
    </Section>
  );
};

export default HomePage;

import React from "react";
import Form from "../../components/Form/Form";
import { Section } from "./LoginPageStyles";

const LoginPage = () => {
  const formData = [
    { name: "email", label: "Email" },
    { name: "password", label: "Password" },
  ];
  const title = "Log In";

  return (
    <Section>
      <div className="container">
        <Form formData={formData} title={title} />
      </div>
    </Section>
  );
};

export default LoginPage;

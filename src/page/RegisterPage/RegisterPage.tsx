import React from "react";
import Form from "../../components/Form/Form";
import { Section } from "../LoginPage/LoginPageStyles";

const RegisterPage = () => {
  const formData = [
    { name: "name", label: " Name " },
    { name: "email", label: "Email" },
    { name: "password", label: "Password" },
  ];
  const title = "Sign Up";

  return (
    <Section>
      <div className="container">
        <Form formData={formData} title={title} />
      </div>
    </Section>
  );
};

export default RegisterPage;

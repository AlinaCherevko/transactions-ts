import Form from "../../components/Form/Form";
import { Section } from "../LoginPage/LoginPageStyles";

//import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";
//import { AxiosError } from "axios";

const RegisterPage = () => {
  //const navigate = useNavigate();
  const formData = [
    { name: "name", label: " Name " },
    { name: "email", label: "Email" },
    { name: "password", label: "Password" },
  ];
  const title = "Sign Up";

  //-------useMutation----------//

  return (
    <Section>
      <div className="container">
        <Form formData={formData} title={title} />
      </div>
    </Section>
  );
};

export default RegisterPage;

import Form from "../../components/Form/Form";
import { Section } from "./LoginPageStyles";

//import { toast } from "react-toastify";
//import { AxiosError } from "axios";

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

// onError: (error: AxiosError) => {
//   if (error.response && error.response.data)
//     toast.error((error.response.data as { message: string }).message);
// },

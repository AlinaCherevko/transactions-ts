import { FieldValues, useForm } from "react-hook-form";
import { FormEl, InputWrapper } from "./FormStyles";
import * as Yup from "yup";
import { Input } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@chakra-ui/react";
import { useAuthZustant } from "../../store/store";
import { IUser, logInUser, registerUser } from "../../servises/servises";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

//import { AxiosError } from "axios";

type Props = {
  title: string;
  formData: FormField[];
};
type FormField = {
  name: string;
  label: string;
};

const Form: React.FC<Props> = ({ formData, title }) => {
  const { login } = useAuthZustant();

  const navigate = useNavigate();

  // Створення схеми валідації
  const createValidationSchema = (formData: FormField[]) => {
    const schemaFields: Record<string, Yup.AnySchema> = {};

    formData.forEach((field) => {
      if (field.name === "name") {
        schemaFields[field.name] = Yup.string()
          .min(2, "Too short")
          .max(32, "Too Long!")
          .required("Required");
      } else if (field.name === "email") {
        schemaFields[field.name] = Yup.string()
          .email("Invalid email")
          .required("Required");
      } else if (field.name === "password") {
        schemaFields[field.name] = Yup.string()
          .min(8, "Password must be at least 8 characters")
          .max(64, "Password must be no more than 64 characters")
          .required("Required");
      } else if (field.name === "phone") {
        schemaFields[field.name] = Yup.string()
          .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Phone number is not valid")
          .required("Required");
      }
    });
    return Yup.object().shape(schemaFields);
  };
  const validationSchema = createValidationSchema(formData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  //---------------onSubmit---------------//
  const onSubmit = async (data: FieldValues) => {
    if (title === "Sign Up") {
      console.log(data);
      try {
        await registerUser(data as IUser);
        toast.success("User was sign up!");
        navigate("/login");

        // Redirect to login or another page
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.data)
          toast.error(
            (axiosError.response.data as { message: string }).message
          );
      }
    }
    if (title === "Log In") {
      try {
        const user = await logInUser(data as Omit<IUser, "name">);
        login(user);
        toast.success("User was logged in!");
        navigate("/transactions");
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.data)
          toast.error(
            (axiosError.response.data as { message: string }).message
          );
      }
    }
    reset();
  };
  return (
    <FormEl onSubmit={handleSubmit(onSubmit)}>
      <div>
        {formData.map(({ name, label }) => {
          return (
            <InputWrapper key={name}>
              <Input
                size="md"
                type={name === "password" ? "password" : "text"}
                {...register(name)}
                placeholder={label}
              />
              <p>{errors[name]?.message as string}</p>
            </InputWrapper>
          );
        })}
      </div>
      <Button size="md" colorScheme="teal" type="submit">
        {title}
      </Button>
    </FormEl>
  );
};

export default Form;

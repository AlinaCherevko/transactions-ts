import { useForm } from "react-hook-form";
import { FormEl, InputWrapper } from "./FormStyles";
import * as Yup from "yup";
import { Input } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@chakra-ui/react";

type Props = {
  title: string;
  formData: FormField[];
};
type FormField = {
  name: string;
  label: string;
};

const Form: React.FC<Props> = ({ formData, title }) => {
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
  } = useForm({ mode: "onChange", resolver: yupResolver(validationSchema) });

  const onSubmit = () => {
    reset();
  };

  return (
    <>
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
                <p>{errors[name]?.message}</p>
              </InputWrapper>
            );
          })}
        </div>
        <Button size="md" colorScheme="teal" type="submit">
          {title}
        </Button>
      </FormEl>
    </>
  );
};

export default Form;

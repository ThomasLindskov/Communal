import * as yup from "yup";

export interface ISignUpFormInput {
  username: string;
  password: string;
  confirmPassword?: string;
  email: string;
  address: {
    street: string;
    zipCode: number;
    city?: string;
  };
  neighborhood: number;
}

export const signUpSchema: yup.SchemaOf<
  Omit<ISignUpFormInput, "neighborhood">
> = yup.object({
  username: yup
    .string()
    .min(5, "Username has to be at least 5 characters")
    .max(10, "Username has to be shorter than 10 characters")
    .required(),
  password: yup
    .string()
    .required("Password is mandatory")
    .min(8, "Password must be at 8 characters long"),
  confirmPassword: yup
    .string()
    .required("Password is mandatory")
    .oneOf([yup.ref("password")], "Passwords does not match"),
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  address: yup.object({
    street: yup
      .string()
      .min(5, "Address has to be at least 5 characters")
      .required(),
    zipCode: yup
      .number()
      .typeError("Zip code is required")
      .required("Zip code is required"),
    city: yup.string(),
  }),
});

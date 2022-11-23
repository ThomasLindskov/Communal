import * as yup from "yup";

export interface IForgotPasswordInput {
  email: string;
}

export const forgotPasswordSchema: yup.SchemaOf<IForgotPasswordInput> = yup.object({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
});

import * as yup from "yup";

export interface ISignInFormInput {
  username: string;
  password: string;
}

export const signInSchema: yup.SchemaOf<ISignInFormInput> = yup.object({
  username: yup
    .string()
    .min(5, "Username is at least 5 characters")
    .max(10, "Username is shorter than 10 characters")
    .required("Insert Username"),
  password: yup
    .string()
    .required("Insert Password")
    .min(8, "Password must be at 8 characters long"),
});

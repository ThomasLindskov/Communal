import * as yup from "yup";

export interface IEditProfileFormInput {
  email: string;
}

export const editProfileSchema: yup.SchemaOf<IEditProfileFormInput> = yup.object({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
});

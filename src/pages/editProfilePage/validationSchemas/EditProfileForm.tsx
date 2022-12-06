import * as yup from "yup";

export interface IEditProfileFormInput {
  email: string;
  username: string;
  address: {
    street: string;
    zipCode: number;
    city: string;
  };
}

export const editProfileSchema: yup.SchemaOf<IEditProfileFormInput> =
  yup.object({
    email: yup
      .string()
      .email("Email must be valid")
      .required("Email is required"),
    username: yup
      .string()
      .min(5, "Username has to be at least 5 characters")
      .max(10, "Username has to be shorter than 10 characters")
      .required(),
    address: yup.object({
      street: yup
        .string()
        .min(5, "Address has to be at least 5 characters")
        .required(),
      zipCode: yup
        .number()
        .typeError("Zip code is required")
        .required("Zip code is required"),
      city: yup.string().required("City is required"),
    }),
  });

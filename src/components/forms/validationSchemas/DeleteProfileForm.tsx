import * as yup from "yup";

export interface IDeleteProfileFormInput {
  deleteCheck: string;
}

export const deleteProfileSchema: yup.SchemaOf<IDeleteProfileFormInput> =
  yup.object({
    deleteCheck: yup
      .string()
      .oneOf(["DELETE"], "Wrong input")
      .required("Wrong input"),
  });

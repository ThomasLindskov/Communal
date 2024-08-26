import * as yup from "yup";

export interface INewChatFormInput {
  userId: string;
}

export const NewChatFormInput: yup.SchemaOf<INewChatFormInput> = yup.object({
  userId: yup
    .string()
    .notOneOf(["0"], "Please select a user")
    .required("Please select a user"),
});

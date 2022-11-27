import * as yup from "yup";

export interface IUploadImageInput {
    image: string;
}

export const uploadImageSchema: yup.SchemaOf<IUploadImageInput> =
  yup.object({
    image: yup
      .mixed()
      .nullable()
      .test(
           "type",
           "Invalid file format",
           (value) => {
             return (
               value &&
               value.type === "image/jpeg" ||
               value.type === "image/jpg" ||
               value.type === "image/png"
             );
           }
         )
        .test(
          "size",
          "File size is too big",
          (value) => value && value.size <= 1024 * 1024 // 5MB
        )
  });

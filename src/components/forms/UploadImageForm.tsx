import React from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { CardTitle } from "../CardTitle";
import { InputField } from "../InputField";
import { theme } from "../../theme";
import toast, { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUploadImageMutation } from "src/hooks/useUploadImageMutation";
import Parse from "parse";
import { useAvatarQuery } from "src/hooks/useAvatarQuery";
import { Avatar } from "src/components/Avatar";

interface IUploadImageInput {
  image: File[];
}

export const UploadImageForm = () => {
  const {
    uploadImage,
    loading: submitLoading,
    error: submitError,
  } = useUploadImageMutation();
  const { data, loading } = useAvatarQuery();
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
  } = useForm<IUploadImageInput>();

  const onSubmit: SubmitHandler<IUploadImageInput> = async (inputData) => {
    if (!isDirty) {
      toast("No image selected");
      return;
    }

    const image = inputData.image[0];
    const sanitizeFilename = (filename: string) => {
      return filename.replace(/[^a-zA-Z0-9._-]/g, '_');
    };
    const sanitizedFilename = sanitizeFilename(image.name);
    const parseFile = new Parse.File(sanitizedFilename, image);
    const responseFile = await parseFile.save();

    const input = {
      id: localStorage.getItem("currentUser"),
      fields: {
        image_url: responseFile._url,
      },
    };
    uploadImage({
      variables: { input },
      onCompleted: () => {
        if (submitError) {
          toast(submitError.message);
        } else {
          toast.success("Profile updated successfully");
        }
      },
    });
  };

  if (loading) {
    return null;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: theme.flexGap.medium,
        alignItems: "center",
      }}
    >
      <Card width="200px" style={{ height: "100%", justifyContent: "space-between" }}>
        <div style={{ width: "100%" }}>
          <CardTitle children="Edit Profile Picture" />
        </div>
        <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center" }}>
          {data && (
            <Avatar
              imageUrl={data.user.image_url}
              altText="user-avatar"
              size={theme.avatarSize.medium}
              large={true}
            />
          )}
        </div>
        <div>
          <img src="" alt="" />
          <InputField
            label="Image"
            id="image"
            type="file"
            placeholder="Image"
            accept="image/*"
            style={{ div: { width: "100%" } }}
            register={register("image")}
            errorMessage={errors.image?.message}
          />
        </div>
        <Button color={theme.colors.cta} type="submit" disabled={submitLoading}>
          Upload Image
        </Button>
      </Card>
      <Toaster position="bottom-center" />
    </form>
  );
};

import React from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardTitle } from "../../components/CardTitle";
import { InputField } from "../../components/InputField";
import { theme } from "../../theme";
import toast, { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUploadImageMutation } from "src/hooks/useUploadImageMutation";
import Parse from "parse";
import { useAvatarQuery } from "src/hooks/useAvatarQuery";
import Avatar from "src/components/Avatar";

interface IUploadImageInput {
  image: File[];
}

export const UploadImageForm = () => {
  //const [images, setImages] = useState([]);

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
    const parseFile = new Parse.File(image.name, image);
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
      <Card width="200px">
        <div style={{ width: "100%" }}>
          <CardTitle children="Edit Profile Picture" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {data && (
            <Avatar
              imageUrl={data.user.image_url}
              altText="user-avatar"
              size={theme.avatarSize.medium}
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

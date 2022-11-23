import React from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardTitle } from "../../components/CardTitle";
import { InputField } from "../../components/InputField";
import { theme } from "../../theme";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editProfileSchema,
  IEditProfileFormInput,
} from "./validationSchemas/EditProfileForm";
import { useEditProfileMutation } from "src/hooks/useEditProfileMutation";
import { useProfileSettingsQuery } from "src/hooks/useProfileSettingsQuery";
import toast, { Toaster } from "react-hot-toast";

export const EditProfileForm = () => {
  const {
    editProfile,
    loading: submitLoading,
    error: submitError,
  } = useEditProfileMutation();
  const {
    register,
    formState: { errors, isDirty },
    setValue,
    handleSubmit,
  } = useForm<IEditProfileFormInput>({
    resolver: yupResolver(editProfileSchema),
  });
  const { loading, error } = useProfileSettingsQuery(setValue);

  const onSubmit: SubmitHandler<IEditProfileFormInput> = (inputData) => {
    if (!isDirty) {
      toast("No changes made");
      return;
    }

    const { username, email, address } = inputData;
    const input = {
      id: localStorage.getItem("currentUser"),
      fields: {
        username,
        email,
        address,
      },
    };
    editProfile({
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error :${error.message}`}(</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card width="300px">
        <div style={{ width: "100%" }}>
          <CardTitle children="Edit Profile" />
        </div>
        <InputField
          label="Edit username"
          id="username"
          type="text"
          register={register("username")}
          errorMessage={errors.username?.message}
        />
        <InputField
          label="Edit email"
          id="email"
          type="text"
          register={register("email")}
          errorMessage={errors.email?.message}
        />
        <InputField
          label="Street name and number"
          id="street"
          type="text"
          placeholder="Street name and number"
          register={register("address.street")}
          errorMessage={errors.address?.street?.message}
        />
        <div
          style={{
            display: "flex",
            gap: theme.flexGap.medium,
            width: "300px",
          }}
        >
          <InputField
            label="Zip code"
            id="zip"
            type="number"
            placeholder="Zip code"
            style={{ div: { width: "30%" } }}
            register={register("address.zipCode")}
            errorMessage={errors.address?.zipCode?.message}
          />
          <InputField
            label="City"
            id="city"
            type="text"
            placeholder="City"
            style={{ div: { width: "100%" } }}
            register={register("address.city")}
            errorMessage={errors.address?.city?.message}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Button
            color={theme.colors.cta}
            type="submit"
            disabled={submitLoading}
          >
            Save changes
          </Button>
        </div>
      </Card>
      <Toaster position="bottom-center" />
    </form>
  );
};

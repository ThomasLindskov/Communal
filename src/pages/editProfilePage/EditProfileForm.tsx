import React, { useEffect } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardTitle } from "../../components/CardTitle";
import { InputField } from "../../components/InputField";
import { theme } from "../../theme";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema, IEditProfileFormInput } from "./validationSchemas/EditProfileForm";
import { useEditProfileMutation } from "src/hooks/useEditProfileMutation";

export const EditProfileForm = () => {
  const { editProfile, data, loading, error } = useEditProfileMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IEditProfileFormInput>({ resolver: yupResolver(editProfileSchema) });

  const onSubmit: SubmitHandler<IEditProfileFormInput> = (inputData) => {
    const input = {
        id: localStorage.getItem('currentUser'),
        fields: {
            email: inputData.email
        }
    };
    editProfile({
      variables: { input },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card width="300px">
        <div style={{ width: "100%" }}>
          <CardTitle children="Edit Profile" />
        </div>
        <InputField
          label="Email"
          id="email"
          type="text"
          placeholder="Email"
          register={register("email")}
          errorMessage={errors.email?.message}
        />
        <div style={{ marginTop: "20px" }}>
          <Button color={theme.colors.cta} type="submit" disabled={loading}>
            Edit Profile
          </Button>
        </div>
      </Card>
    </form>
  );
};

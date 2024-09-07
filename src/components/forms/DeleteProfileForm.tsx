import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components/Button";
import { Card } from "src/components/Card";
import { CardTitle } from "src/components/CardTitle";
import { InputField } from "src/components/InputField";
import { useDeleteUserQuery } from "src/hooks/useDeleteUserQuery";
import {
  deleteProfileSchema,
  IDeleteProfileFormInput,
} from "./validationSchemas/DeleteProfileForm";
import { theme } from "src/theme";

export const DeleteProfileForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IDeleteProfileFormInput>({
    resolver: yupResolver(deleteProfileSchema),
  });
  const { deleteUser, loading } = useDeleteUserQuery();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IDeleteProfileFormInput> = () => {
    const input = { id: localStorage.getItem("currentUser") };
    deleteUser({
      variables: { input },
      onCompleted: () => {
        toast.success("Profile deleted successfully");

        setTimeout(() => {
          localStorage.clear();
          navigate("/");
        }, 1000);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Card>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: theme.flexGap.medium,
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          <CardTitle>Are you sure you want to delete your account?</CardTitle>
        </div>
        <InputField
          label="You have to type DELETE to delete your account"
          id="deleteCheck"
          type="text"
          register={register("deleteCheck")}
          errorMessage={errors.deleteCheck?.message}
        />
        <Button type="submit" color={theme.colors.risk} disabled={loading}>
          Delete Profile
        </Button>
      </form>
    </Card>
  );
};

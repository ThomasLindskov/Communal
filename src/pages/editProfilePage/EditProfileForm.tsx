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
import { useToggle } from "ahooks";
import Modal from "react-modal";
import { DeleteProfileForm } from "src/pages/editProfilePage/DeleteProfileForm";
import { Select } from "src/components/Select";

const zipCodes: { [key: string]: any } = require("src/assets/zipCodes.json");

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
  const [isDeleteModalOpen, { toggle: toggleDeleteModal }] = useToggle();

  const onSubmit: SubmitHandler<IEditProfileFormInput> = (inputData) => {
    if (!isDirty) {
      toast("No changes made");
      return;
    }

    const { username, email, address, neighborhood } = inputData;
    const input = {
      id: localStorage.getItem("currentUser"),
      fields: {
        username,
        email,
        address,
        neighborhood,
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

  if (loading) return null;
  if (error) return <p>{`Error :${error.message}`}</p>;

  return (
    <>
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={toggleDeleteModal}
        contentElement={(props, children) => (
          <div
            {...props}
            style={{
              position: "absolute",
              top: "25%",
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              margin: 0,
            }}
          >
            {children}
          </div>
        )}
      >
        <DeleteProfileForm />
      </Modal>
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
          <Select
            id="neighborhood"
            register={register("neighborhood")}
            label={"Preferred area"}
          >
            <option key={0} value={0}>
              No chosen
            </option>
            {Object.keys(zipCodes).map((key: string) => (
              <option key={key} value={key}>
                {zipCodes[key as any]}
              </option>
            ))}
          </Select>
          <div style={{ marginTop: "20px" }}></div>
          <Button
            color={theme.colors.cta}
            type="submit"
            disabled={submitLoading}
          >
            Save changes
          </Button>
        </form>
        <Button color={theme.colors.risk} onClick={toggleDeleteModal}>
          Delete profile
        </Button>
      </Card>
      <Toaster position="bottom-center" />
    </>
  );
};

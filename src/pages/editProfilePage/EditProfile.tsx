import React from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { theme } from "../../theme";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editProfileSchema,
  IEditProfileFormInput,
} from "../../components/forms/validationSchemas/EditProfileForm";
import { useProfileSettingsQuery } from "src/hooks/useProfileSettingsQuery";
import { Toaster } from "react-hot-toast";
import { useToggle } from "ahooks";
import Modal from "react-modal";
import { DeleteProfileForm } from "src/components/forms/DeleteProfileForm";
import { EditProfileForm } from "src/components/forms/EditProfileForm";

export const EditProfile = () => {
  const {
    setValue,
  } = useForm<IEditProfileFormInput>({
    resolver: yupResolver(editProfileSchema),
  });

  const [isDeleteModalOpen, { toggle: toggleDeleteModal }] = useToggle();

  const modalWidth = 500;

  return (
    <>
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={toggleDeleteModal}
        ariaHideApp={false}
        contentElement={(props, children) => (
          <div
            {...props}
            style={{
              position: "absolute",
              top: "25%",
              left: `calc(50% - ${modalWidth / 2}px - ${theme.padding.large})`,
              right: `calc(50% - ${modalWidth / 2}px - ${theme.padding.large})`,
              width: "fit-content",
            }}
          >
            {children}
          </div>
        )}
      >
      <DeleteProfileForm />
      </Modal>
      <Card>
        <EditProfileForm />
        <Button color={theme.colors.risk} onClick={toggleDeleteModal}>
          Delete profile
        </Button>
      </Card>
      <Toaster position="bottom-center" />
    </>
  );
};


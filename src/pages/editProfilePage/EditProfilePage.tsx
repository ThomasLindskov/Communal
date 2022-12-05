import React from "react";
import { EditProfileForm } from "./EditProfileForm";
import { UploadImageForm } from "./UploadImageForm";
import styled from "styled-components";

export default function EditProfilePage() {
  return (
    <Container>
      <EditProfileForm />
      <UploadImageForm />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.flexGap.medium};
`;

import React from "react";
import { EditProfile } from "./EditProfile";
import { UploadImageForm } from "../../components/forms/UploadImageForm";
import styled from "styled-components";

export default function EditProfilePage() {
  return (
    <Container>
      <UploadImageForm />
      <EditProfile />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: stretch;
  gap: ${({ theme }) => theme.flexGap.large};
  height: fit-content;
`;

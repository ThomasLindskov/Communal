import React from "react";
import { theme } from "src/theme";
import styled from "styled-components";
import { EditProfileForm } from "./EditProfileForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: ${theme.padding.medium};
`;

export default function EditProfilePage() {
  return (
    <Container>
      <EditProfileForm></EditProfileForm>
    </Container>
  );
}

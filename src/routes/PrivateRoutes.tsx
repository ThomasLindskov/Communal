import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "src/components/Navbar";
import { useAuthQuery } from "src/hooks/useAuthQuery";
import { theme } from "src/theme";
import styled from "styled-components";

export const PrivateRoutes = () => {
  const { data, error, loading } = useAuthQuery();
  if (data) {
    localStorage.setItem("currentUser", data.viewer.user.id);
    localStorage.setItem("currentUserObjectId", data.viewer.user.objectId);
    localStorage.setItem("neighborhood", data.viewer.user.neighborhood);
  }

  const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: ${theme.padding.medium};
    gap: ${theme.flexGap.large};
    box-sizing: border-box;
    max-height: calc(100vh - 112px);
    height: 100%;
  `;

  if (loading) {
    return null;
  }

  return !error ? (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  ) : (
    <Navigate to="/" />
  );
};

import { useEffect, useRef, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "src/components/Navbar";
import { useAuthQuery } from "src/hooks/useAuthQuery";
import { theme } from "src/theme";
import styled from "styled-components";

export const PrivateRoutes = () => {
  const { data, error, loading } = useAuthQuery();
  if (data) {
    localStorage.setItem("currentUser", data.viewer.user.id);
  }

  const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: ${theme.padding.medium};
    gap: ${theme.flexGap.large};
    box-sizing: border-box;
    max-height: calc(100vh - 112px);});
  `;

  // TODO: refactor this?

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

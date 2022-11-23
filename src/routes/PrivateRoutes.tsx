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

  if (loading) {
    return null;
  }

  const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: ${theme.padding.medium};
    gap: ${theme.flexGap.large};
  `;

  // TODO: refactor this?
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

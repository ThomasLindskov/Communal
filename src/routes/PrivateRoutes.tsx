import { useRef } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "src/components/Navbar";
import { useAuthQuery } from "src/hooks/useAuthQuery";

export const PrivateRoutes = () => {
  const { data, error, loading } = useAuthQuery();
  const navbar = useRef(0);
  return !error ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

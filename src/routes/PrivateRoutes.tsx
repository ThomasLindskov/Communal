import { Navigate, Outlet } from "react-router-dom";
import { useAuthQuery } from "src/hooks/useAuthQuery";

export const PrivateRoutes = () => {
  const {data, error, loading} = useAuthQuery();
  return !error ? <Outlet /> : <Navigate to="/" />;
};

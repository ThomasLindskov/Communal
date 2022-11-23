import { Navigate, Outlet } from "react-router-dom";
import { useAuthQuery } from "src/hooks/useAuthQuery";
export const PublicRoutes = () => {
  const { data, error, loading } = useAuthQuery();
  if (data) {
    localStorage.setItem("currentUser", data.viewer.user.id);
  }

  if (loading) {
    return null;
  }

  return error ? <Outlet /> : <Navigate to="/chats" />;
};

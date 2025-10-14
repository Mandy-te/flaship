import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function PrivateAdminRoute({ children }) {
  const { user } = useUser();

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
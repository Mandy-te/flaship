import { Navigate } from "react-router-dom";

const PrivateAdminRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  const role = localStorage.getItem("role");

  // Si pa gen token oswa role ≠ admin → redirection login admin
  if (!token || role !== "admin") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default PrivateAdminRoute;
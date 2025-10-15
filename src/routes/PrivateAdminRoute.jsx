import { Navigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";

export default function PrivateAdminRoute({ children }) {
  const { admin } = useAdmin();
  const adminToken = localStorage.getItem("adminToken");

  if (!admin || !adminToken) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
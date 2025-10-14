import { Navigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";

export default function PrivateAdminRoute({ children }) {
  const { admin, token } = useAdmin();

  // Si pa gen admin konekte oswa token pa valide → redireksyon
  if (!admin || !token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Sinon, montre paj admin nan
  return children;
}
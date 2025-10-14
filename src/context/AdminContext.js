import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export function AdminProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(null);

  const loginAdmin = (adminData, adminToken) => {
    setAdmin(adminData);
    setToken(adminToken);
  };

  const logoutAdmin = () => {
    setAdmin(null);
    setToken(null);
  };

  return (
    <AdminContext.Provider value={{ admin, token, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}
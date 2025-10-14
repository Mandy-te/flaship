import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export function AdminProvider({ children }) {
  const [admin, setAdmin] = useState(() => {
    const saved = localStorage.getItem("adminUser");
    return saved ? JSON.parse(saved) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem("adminToken") || null);

  const loginAdmin = (adminData, authToken) => {
    setAdmin(adminData);
    setToken(authToken);
    localStorage.setItem("adminUser", JSON.stringify(adminData));
    localStorage.setItem("adminToken", authToken);
  };

  const logoutAdmin = () => {
    setAdmin(null);
    setToken(null);
    localStorage.removeItem("adminUser");
    localStorage.removeItem("adminToken");
  };

  return (
    <AdminContext.Provider value={{ admin, token, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}
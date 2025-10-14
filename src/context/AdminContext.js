import React, { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export function AdminProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(null);

  const loginAdmin = (user, jwt) => {
    setAdmin(user);
    setToken(jwt);
    localStorage.setItem("adminToken", jwt);
  };

  const logoutAdmin = () => {
    setAdmin(null);
    setToken(null);
    localStorage.removeItem("adminToken");
  };

  return (
    <AdminContext.Provider value={{ admin, token, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}
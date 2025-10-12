// src/context/UserContext.js
import React, { createContext, useContext, useState } from "react";

// Kreye context la
const UserContext = createContext();

// Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => setUser(username);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook pou konsome context la
export const useUser = () => useContext(UserContext);
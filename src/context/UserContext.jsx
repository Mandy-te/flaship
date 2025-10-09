import { createContext, useContext, useState } from "react";

// Kreye Context
const UserContext = createContext();

// Hook pou itilize UserContext fasil
export const useUser = () => useContext(UserContext);

// Provider pou anvlòp app lan
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email) => setUser({ email });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

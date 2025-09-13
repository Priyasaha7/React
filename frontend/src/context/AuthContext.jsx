import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Replace this hardcoded state with real login logic
  const [user, setUser] = useState(null); // e.g. { id: 1, name: "John", role: "student" }

  const login = ({ id, name, role }) => {
    setUser({ id, name, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for easy access
export function useAuth() {
  return useContext(AuthContext);
}

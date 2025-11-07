"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [users, SetUsers] = useState([]);
  const [CurrentUser, setCurrentUser] = useState(null);

  const signup = (user) => {
    SetUsers((prev) => [...prev, user]);
  };

  const login = (email, password) => {
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setCurrentUser(found);
      return true;
    }
    return false;
  };
}

const logout = () => setCurrentUser(null);

return (
  <AuthContext.Provider value={{ users, CurrentUser, signup, login, logout }}>
    {children}
  </AuthContext.Provider>
);

export function useAuth() {
  return useContext(AuthContext);
}

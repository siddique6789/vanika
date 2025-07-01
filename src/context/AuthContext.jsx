import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Create context
const AuthContext = createContext();

// 2. Export custom hook for usage
export const useAuth = () => useContext(AuthContext);

// 3. Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load user from localStorage on refresh
    const savedUser = localStorage.getItem("vanika_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Save user to localStorage on change
  useEffect(() => {
    if (user) {
      localStorage.setItem("vanika_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("vanika_user");
    }
  }, [user]);

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

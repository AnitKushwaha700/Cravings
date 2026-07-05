import React, { useContext, useEffect, useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = sessionStorage.getItem("userData") || sessionStorage.getItem("UserData");
    try {
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      return null;
    }
  });
  const [isLogin, setIsLogin] = useState(() => {
    const stored = sessionStorage.getItem("userData") || sessionStorage.getItem("UserData");
    return !!stored;
  });

  useEffect(() => {
    setIsLogin(!!user);
  }, [user]);

  const value = {
    user,
    setUser,
    isLogin,
    setIsLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);


import React, { useContext, useEffect, useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // if (user) {
    //   setIslogin(true);
    // } else {
    //   setIslogin(false);
    // }

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


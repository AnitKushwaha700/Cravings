import React, { useContext, useEffect, useState } from "react";

export const AuthContext = React.createContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [islogin, setIslogin] = useState(false);

  useEffect(() => {
    // if (user) {
    //   setIslogin(true);
    // } else {
    //   setIslogin(false);
    // }

    setIslogin(!!user);
  }, [user]);

  const value = {
    user,
    setUser,
    islogin,
    setIslogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);


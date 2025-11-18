import React from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const value = {
    name: "Rif",
    email: "rif@gmail.com",
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

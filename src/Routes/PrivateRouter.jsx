import React, { useContext } from "react";
import AuthContext from "../Providers/AuthContext";
import { Navigate, useLocation } from "react-router";
import Spinner from "../Components/Spinner";

const PrivateRouter = ({ children }) => {
  // logic
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return <Navigate to={"/auth/login"} state={{ from: location }}></Navigate>;
  }
  return children;
};

export default PrivateRouter;

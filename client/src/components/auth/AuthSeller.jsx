import React from "react";
import { Navigate } from "react-router-dom";

const AuthSeller = ({ children }) => {
  const seller = localStorage.getItem("role");
  const custommer = localStorage.getItem("role");
  if (seller !== "sellers") {
    alert("Login first");
    return <Navigate to="/login" replace="true" />;
  } else if (custommer !== "custommer") {
    alert("Login first");
    return <Navigate to="/login" replace="true" />;
  }
  return children;
};

export default AuthSeller;

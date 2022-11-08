import React from "react";
import { Navigate } from "react-router-dom";

const AuthCustommer = ({ children }) => {
  const custommer = localStorage.getItem("role");
  if (custommer !== "custommer") {
    alert("Login first");
    return <Navigate to="/login" replace="true" />;
  }
  return children;
};

export default Authcustommer;

import React from "react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  const isAuth = localStorage.getItem("token");

  if (!isAuth) {
    Swal.fire({
      text: "Please login",
      type: "warning",
    });
    return <Navigate to="/login" replace="true" />;
  }
  return children;
};

export default Auth;

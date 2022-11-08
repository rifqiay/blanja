import React from "react";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Profile from "../pages/Profile";
import ResultSearch from "../pages/ResultSearch";
import Auth from "../components/auth/Auth";
import ProfileCustommer from "../components/ProfileCustommer";
import ProfileSeller from "../components/ProfileSeller";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="detail/:id"
          element={
            <Auth>
              <ProductDetail />
            </Auth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/profileseller"
          element={
            <Auth>
              <ProfileSeller />
            </Auth>
          }
        />
        <Route
          path="/profilecustommer"
          element={
            <Auth>
              {" "}
              <ProfileCustommer />
            </Auth>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<ResultSearch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

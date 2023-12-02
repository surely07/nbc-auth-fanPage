import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  isLoggedIn ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;

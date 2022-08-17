import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export function PrivateRoute() {
  const token = localStorage.getItem("access_token");

  if (!token || token === "") {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export function UnPrivateRoute() {
  const token = localStorage.getItem("access_token");

  if (!token || token === "") {
    return <Outlet />;
  }
  return <Navigate to="/" />;
}

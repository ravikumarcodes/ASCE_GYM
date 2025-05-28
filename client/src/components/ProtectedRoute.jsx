// components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/authUtils";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/Auth" />;
  }
  return children;
};

export default ProtectedRoute;

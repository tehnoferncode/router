import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // If not logged in → redirect to Login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If logged in → allow access
  return children;
}

export default ProtectedRoute;

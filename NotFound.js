import React from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

function NotFound() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">404 😵</h2>
        <p className="auth-subtitle">Page not found</p>

        <Link className="link-btn" to="/login">
          Go to Login
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

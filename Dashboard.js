import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Dashboard() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail") || "User";

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">📊 Dashboard</h2>
        <p className="auth-subtitle">
          Welcome, <b>{userEmail}</b>
        </p>

        <div className="dash-box">
          <div className="dash-item">✅ Protected Route Working</div>
          <div className="dash-item">✅ Login State via localStorage</div>
          <div className="dash-item">✅ Redirect if not logged in</div>
        </div>

        <button className="auth-btn danger" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

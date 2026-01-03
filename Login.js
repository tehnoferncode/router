import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setMsg("❌ Please enter email and password");
      return;
    }

    // Demo credentials (you can replace with API/Firebase later)
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);

      setMsg("✅ Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 600);
    } else {
      setMsg("❌ Invalid credentials (try admin@gmail.com / 123456)");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">🔐 Login</h2>
        <p className="auth-subtitle">
          Demo: <b>admin@gmail.com</b> / <b>123456</b>
        </p>

        <form onSubmit={handleLogin} className="auth-form">
          <label className="auth-label">Email</label>
          <input
            className="auth-input"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="auth-label">Password</label>
          <input
            className="auth-input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-btn" type="submit">
            Login
          </button>
        </form>

        {msg && <div className="auth-msg">{msg}</div>}

        <div className="auth-note">
          This project teaches: <b>Routing + Protected Routes</b>
        </div>
      </div>
    </div>
  );
}

export default Login;

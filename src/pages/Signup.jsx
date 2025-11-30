import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");

  const handleSignup = () => {
    setError("");

    if (!name || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    // Save user info in localStorage
    const newUser = { name, email, password, role };
    localStorage.setItem("user", JSON.stringify(newUser));

    // Redirect
    if (role === "admin") navigate("/admin-dashboard");
    else navigate("/student-dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Create Account</h2>

        {error && <p className="auth-error">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          className="auth-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="role-select">
          <label className="role-title">I am a:</label>

          <div className="role-options">
            <label>
              <input
                type="radio"
                value="student"
                checked={role === "student"}
                onChange={() => setRole("student")}
              />
              Student
            </label>

            <label>
              <input
                type="radio"
                value="admin"
                checked={role === "admin"}
                onChange={() => setRole("admin")}
              />
              Admin
            </label>
          </div>
        </div>

        <button className="auth-btn" onClick={handleSignup}>
          Sign Up
        </button>

        <p className="auth-switch">
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Sign In</span>
        </p>
      </div>
    </div>
  );
}

// src/pages/Signup.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

import { registerUser } from "../services/authService";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      setError("");

      if (!name || !email || !password) {
        setError("Please fill out all fields.");
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }

      await registerUser(name, email, password);

      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      setError("Signup failed. Email may already be in use.");
    }
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

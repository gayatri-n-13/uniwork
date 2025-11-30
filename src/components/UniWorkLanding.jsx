import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../UniWorkLanding.css";

export default function UniWorkLanding() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      if (savedUser.role === "admin") navigate("/admin-dashboard");
      else navigate("/student-dashboard");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="uniwork-page">
      <nav className="nav">
        <div className="nav-left">UNIWORK</div>
        <div className="nav-center">
          <a href="/">Home</a>
        </div>
        <div className="nav-right">
          <button className="signout-btn" onClick={() => setShowModal(true)}>
            Sign In
          </button>
        </div>
      </nav>

      <section className="hero-1">
        <div className="hero-overlay">
          <div className="hero-left">
            <h1 className="hero-title">UNIWORK</h1>
            <h2 className="hero-subtitle">Connect talent with opportunity.</h2>

            <p className="hero-text">
              Welcome to your all-in-one Work-Study Portal — where opportunities meet efficiency.
              Students can discover job listings, apply easily, and track progress.
            </p>

            <button className="hero-button" onClick={() => navigate("/signup")}>
              Get Started →
            </button>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Sign In</h2>

            <input
              type="email"
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="signin-submit" onClick={handleLogin}>
              Sign In
            </button>

            <button className="close-modal" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

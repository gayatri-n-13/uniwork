import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../UniWorkLanding.css";

// Firebase login service
import { login } from "../services/authService";

export default function UniWorkLanding() {
  const [showModal, setShowModal] = useState(false);

  // login fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // ==========================
  // REAL FIREBASE LOGIN LOGIC
  // ==========================
  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Please fill all fields.");
        return;
      }

      await login(email, password);

      closeModal();
      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="uniwork-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-brand">UNIWORK🎓</div>

        <div className="nav-links">
          <span onClick={() => navigate("/")}>Home</span>
        </div>

        <div className="nav-right">
          {/* SIGN UP ADDED */}
          <button className="navbar-button" onClick={() => navigate("/signup")}>
            Sign Up
          </button>

          {/* SIGN IN MODAL BUTTON */}
          <button className="navbar-button" onClick={openModal}>
            Sign In
          </button>
        </div>
      </nav>

      {/* HERO SECTION WITH GIF */}
      <section className="hero-1">
        <div className="hero-overlay">
          <div className="hero-left">
            <h1 className="hero-title">UNIWORK</h1>
            <h2 className="hero-subtitle">Connect talent with opportunity.</h2>

            <p className="hero-text">
              Welcome to your all-in-one Work-Study Portal — where opportunities meet efficiency.
              Students can discover exciting job listings, apply with ease, and track progress every
              step of the way. Admins can post jobs, review applications, approve hours, and share
              feedback — all from one seamless dashboard.
            </p>

            {/* GET STARTED → GO TO SIGNUP */}
            <button className="hero-button" onClick={() => navigate("/signup")}>
              Get Started →
            </button>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <h3 className="footer-title">uniwork</h3>
          <p className="footer-text">
            Connecting university students with meaningful work opportunities while streamlining
            administrative processes for campus departments.
          </p>
        </div>

        <div>
          <h3 className="footer-title">Platform</h3>
          <ul className="footer-list">
            <li>Browse Jobs</li>
            <li>Dashboard</li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Support</h3>
          <ul className="footer-list">
            <li>Feedback</li>
            <li>Help Center</li>
          </ul>
        </div>
      </footer>

      <div className="copy">
        © 2024 uniwork. Empowering university work-study programs.
      </div>

      {/* LOGIN MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Sign In</h2>

            <input
              type="text"
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

            <p className="forgot-text">Forgot your password?</p>

            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

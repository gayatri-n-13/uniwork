import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../UniWorkLanding.css";

export default function UniWorkLanding() {
  const [showModal, setShowModal] = useState(false);

  // login fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // <-- required for redirect

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // LOGIN VALIDATION + REDIRECT
  const handleLogin = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernamePattern = /^[a-zA-Z0-9._-]+$/;

    const isEmailValid = emailPattern.test(email);
    const isUsernameValid = usernamePattern.test(email);

    if (!isEmailValid && !isUsernameValid) {
      alert("Please enter a valid email or username.");
      return;
    }

    if (password.length < 4) {
      alert("Password must be at least 4 characters.");
      return;
    }

    // SUCCESS → go to logged-in homepage
    closeModal();
    navigate("/dashboard");
  };

  return (
    <div className="uniwork-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-brand">UNIWORK🎓</div>
        <div className="nav-links">
          <span>Home</span>
        </div>
        <button className="navbar-button" onClick={openModal}>
          Sign In
        </button>
      </nav>

      {/* HERO 1 (GIF background) */}
      <section className="hero-1">
        <div className="hero-overlay">
          <div className="hero-left">
            <h1 className="hero-title">UNIWORK</h1>
            <h2 className="hero-subtitle">Connect talent with opportunity.</h2>

            <p className="hero-text">
              Welcome to your all-in-one Work-Study Portal — where opportunities meet efficiency.
              Students can discover exciting job listings, apply with ease, and track progress every
              step of the way. Admins can post jobs, review applications, approve hours, and share
              feedback — all from one seamless dashboard. Fast. Transparent. Hassle-free.
            </p>

            <button className="hero-button" onClick={openModal}>
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
              placeholder="Email or Username"
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

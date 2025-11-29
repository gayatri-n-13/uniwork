import React from "react";
import { Link } from "react-router-dom";
import "../UniWorkLanding.css";

export default function HomeLoggedIn() {
  return (
    <div className="home-logged">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-brand">UNIWORK</div>

        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <div className="navbar-right">
          <span className="user-name">aprilxsky13</span>
          <Link to="/" className="signout-btn">Sign Out</Link>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <section className="logged-hero">
        <h1 className="hero-title">UNIWORK</h1>
        <h2 className="hero-subtitle">Connect talent with opportunity.</h2>

        <p className="hero-text">
          Welcome to your all-in-one Work-Study Portal — where opportunities meet efficiency.
          Students can discover exciting job listings, apply with ease, and track progress
          every step of the way. Admins can post jobs, review applications, approve hours,
          and share feedback — all from one seamless dashboard.
        </p>

        <h3 className="welcome">Welcome back, aprilxsky13!</h3>

        {/* FIXED BUTTON — now works */}
        <Link to="/dashboard" className="dashboard-btn">
          Go to Dashboard →
        </Link>
      </section>

    </div>
  );
}

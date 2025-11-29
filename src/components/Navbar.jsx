import React from "react";
import "../styles/Navbar.css";

export default function Navbar({ username, onSignOut }) {
  return (
    <nav className="nav">
      <div className="nav-left">UNIWORK</div>

      <div className="nav-center">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/jobs">Jobs</a>
        <a href="/profile">Profile</a>
      </div>

      <div className="nav-right">
        <span className="username">{username}</span>
        <button className="signout-btn" onClick={onSignOut}>Sign Out</button>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ username, onSignOut }) {
  return (
    <nav className="nav">
      <div className="nav-left">UNIWORK</div>

      <div className="nav-center">
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <div className="nav-right">
        <span className="username">{username}</span>
        <button className="signout-btn" onClick={onSignOut}>Sign Out</button>
      </div>
    </nav>
  );
}

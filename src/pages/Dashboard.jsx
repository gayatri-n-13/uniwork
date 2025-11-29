import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <Navbar username="aprilxsky13" />

      <div className="dashboard-container">

        <h1 className="welcome-title">Welcome back, aprilxsky13!</h1>
        <p className="welcome-sub">Track your work-study journey and opportunities</p>

        <div className="stats-row">
          <div className="stat-card">
            <p className="stat-title">Available Jobs</p>
            <h2 className="stat-number">6</h2>
          </div>

          <div className="stat-card">
            <p className="stat-title">My Applications</p>
            <h2 className="stat-number">0</h2>
          </div>

          <div className="stat-card">
            <p className="stat-title">Hours Logged</p>
            <h2 className="stat-number">0</h2>
          </div>

          <div className="stat-card">
            <p className="stat-title">Work Sessions</p>
            <h2 className="stat-number">0</h2>
          </div>
        </div>

        <div className="quick-activity">
          <div>
            <h3>Quick Actions</h3>

            <button className="action-btn brown">Browse Jobs</button>
            <button className="action-btn">Log Work Hours</button>
            <button className="action-btn">Submit Feedback</button>
          </div>

          <div>
            <h3>My Recent Activity</h3>
            <p>No recent activity to display</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [applications, setApplications] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("applications")) || [];
    const profileData = JSON.parse(localStorage.getItem("profile")) || {};
    const saved = JSON.parse(localStorage.getItem("savedJobs")) || [];

    setApplications(apps);
    setProfile(profileData);
    setSavedJobs(saved);

    setLoading(false);
  }, []);

  const profileCompletion = () => {
    let fields = ["name", "email", "address", "phone", "major"];
    let filled = fields.filter((f) => profile[f] && profile[f] !== "").length;
    return Math.round((filled / fields.length) * 100);
  };

  return (
    <div className="dashboard-page">

      {/* Welcome Section */}
      <h1 className="dash-title">Welcome back, {profile.name || "Student"}!</h1>
      <p className="dash-subtitle">
        Track your work-study journey and campus opportunities
      </p>

      {/* Stats Grid */}
      <div className="dash-grid">

        {/* Total Applications */}
        <div className="dash-card">
          <h3>Total Applications</h3>
          <p className="stat-number">{applications.length}</p>
        </div>

        {/* Saved Jobs */}
        <div className="dash-card">
          <h3>Saved Jobs</h3>
          <p className="stat-number">{savedJobs.length}</p>
        </div>

        {/* Profile Completion */}
        <div className="dash-card">
          <h3>Profile Completion</h3>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${profileCompletion()}%` }}
            ></div>
          </div>
          <p className="progress-text">{profileCompletion()}% completed</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button onClick={() => navigate("/jobs")} className="action-btn">
          🔍 Browse Jobs
        </button>

        <button onClick={() => navigate("/profile")} className="action-btn">
          👤 Edit Profile
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="action-btn"
          disabled
        >
          📄 View Applications (coming soon)
        </button>
      </div>

      {/* Recent Applications */}
      <h2 className="section-title">Recent Applications</h2>

      <div className="recent-list">
        {loading ? (
          <p>Loading...</p>
        ) : applications.length === 0 ? (
          <p className="no-apps">No applications submitted yet.</p>
        ) : (
          applications
            .slice(-3)
            .reverse()
            .map((app, index) => (
              <div key={index} className="recent-card">
                <h4>{app.jobTitle}</h4>
                <p><strong>Applied on:</strong> {app.date}</p>
                <p><strong>Status:</strong> Submitted</p>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

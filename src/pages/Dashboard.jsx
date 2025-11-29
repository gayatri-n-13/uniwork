import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

import { auth, db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load user applications from Firestore
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const q = query(
          collection(db, "applications"),
          where("userId", "==", user.uid)
        );

        const snapshot = await getDocs(q);

        const apps = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setApplications(apps);
        setLoading(false);

      } catch (err) {
        console.error("Error loading applications:", err);
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const user = auth.currentUser;

  // 🔥 FIX: Prevent crash while Firebase loads
  if (!user) {
    return (
      <div className="dashboard-page">
        <Navbar username="loading..." />
        <div className="dashboard-container">
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <Navbar username={user.displayName || user.email} />

      <div className="dashboard-container">
        
        <h1 className="welcome-title">
          Welcome back, {user.displayName || user.email}!
        </h1>

        <p className="welcome-sub">
          Track your work-study journey and opportunities
        </p>

        <div className="stats-row">
          <div className="stat-card">
            <p className="stat-title">Total Applications</p>
            <h2 className="stat-number">{applications.length}</h2>
          </div>
        </div>

        <div className="quick-activity">
          <div>
            <h3>Recent Applications</h3>

            {loading ? (
              <p>Loading...</p>
            ) : applications.length === 0 ? (
              <p>You have not applied for any jobs yet.</p>
            ) : (
              <ul>
                {applications.map((app) => (
                  <li key={app.id}>
                    <strong>{app.jobTitle}</strong> —
                    applied on {new Date(app.appliedAt).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

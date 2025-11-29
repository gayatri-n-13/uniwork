import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Profile.css";

export default function Profile() {
  return (
    <div className="profile-page">
      <Navbar username="aprilxsky13" />

      <div className="profile-container">

        <h1 className="profile-title">Profile</h1>
        <p>Manage your personal information and preferences</p>

        <div className="profile-grid">

          <div className="profile-card">
            <div className="profile-circle">G</div>
            <h3 className="profile-name">aprilxsky13</h3>
            <p className="profile-email">aprilxsky13@gmail.com</p>
            <p className="since">Member since 9/23/2025</p>
          </div>

          <div className="profile-info">
            <h3>Personal Information</h3>

            <div className="info-row">
              <div className="info-box">
                <label>First Name</label>
                <div>Gayatri</div>
              </div>

              <div className="info-box">
                <label>Last Name</label>
                <div>Not provided</div>
              </div>
            </div>

            <div className="info-box">
              <label>Nickname</label>
              <div>aprilxsky13</div>
            </div>

            <div className="info-box">
              <label>Title / Position</label>
              <div>Not provided</div>
            </div>

            <div className="info-box">
              <label>Phone Number</label>
              <div>Not provided</div>
            </div>

            <div className="info-box">
              <label>Email Address</label>
              <div>aprilxsky13@gmail.com (Verified)</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

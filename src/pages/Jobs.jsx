import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Jobs.css";

export default function Jobs() {
  return (
    <div className="jobs-page">
      <Navbar username="aprilxsky13" />

      <div className="jobs-container">
        <h1 className="jobs-title">Work-Study Opportunities</h1>
        <p className="jobs-sub">Discover meaningful work opportunities across campus departments</p>

        <div className="filters">
          <input type="text" placeholder="Search jobs..." className="search-box" />
          <select className="filter-box"><option>All Departments</option></select>
          <select className="filter-box"><option>All Locations</option></select>
          <button className="clear-btn">Clear Filters</button>
        </div>

        <div className="jobs-grid">

          {/* JOB CARD 1 */}
          <div className="job-card">
            <img src="/job1.jpg" alt="" className="job-img" />
            <h3 className="job-title">Library Assistant</h3>
            <span className="job-tag">University Library</span>

            <p className="job-desc">
              Assist librarians with shelving books and managing circulation desks.
            </p>

            <ul className="job-details">
              <li>$15.5/hr</li>
              <li>10 hrs/week</li>
              <li>Main Campus Library</li>
              <li>Apply by 11/15/2024</li>
            </ul>
          </div>

          {/* JOB CARD 2 */}
          <div className="job-card">
            <img src="/job2.jpg" alt="" className="job-img" />
            <h3 className="job-title">Research Assistant - Biology</h3>
            <span className="job-tag">Biology Department</span>

            <p className="job-desc">Support faculty research and data analysis in the biology lab.</p>

            <ul className="job-details">
              <li>$17/hr</li>
              <li>15 hrs/week</li>
              <li>Science Building Lab 205</li>
              <li>Apply by 11/20/2024</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

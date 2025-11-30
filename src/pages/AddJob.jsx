import React, { useState } from "react";
import "../styles/AddJob.css";

export default function AddJob() {
  const [title, setTitle] = useState("");
  const [dept, setDept] = useState("");
  const [desc, setDesc] = useState("");
  const [wage, setWage] = useState("");
  const [hours, setHours] = useState("");
  const [location, setLocation] = useState("");
  const [deadline, setDeadline] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!title || !dept || !desc) {
      alert("Please fill all required fields.");
      return;
    }

    // Create job object
    const newJob = {
      id: Date.now(),
      title,
      dept,
      desc,
      wage,
      hours,
      location,
      deadline
    };

    // Load existing jobs
    const existing = JSON.parse(localStorage.getItem("jobs")) || [];

    // Add new job
    const updatedJobs = [...existing, newJob];

    // Save to localStorage
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    setSuccess(true);

    // Redirect back to jobs page
    setTimeout(() => {
      window.location.href = "/jobs";
    }, 800);
  };

  return (
    <div className="addjob-page">
      <h1 className="addjob-title">Create a Job Posting</h1>

      <div className="addjob-container">
        <input className="addjob-input" placeholder="Job Title*" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="addjob-input" placeholder="Department*" value={dept} onChange={(e) => setDept(e.target.value)} />
        <textarea className="addjob-textarea" placeholder="Job Description*" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <input className="addjob-input" placeholder="Wage (e.g., $15/hr)" value={wage} onChange={(e) => setWage(e.target.value)} />
        <input className="addjob-input" placeholder="Hours per week" value={hours} onChange={(e) => setHours(e.target.value)} />
        <input className="addjob-input" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <input className="addjob-input" placeholder="Deadline (MM/DD/YYYY)" value={deadline} onChange={(e) => setDeadline(e.target.value)} />

        <button className="submitjob-btn" onClick={handleSubmit}>
          Submit Job
        </button>

        {success && <p className="success-text">Job posted successfully!</p>}
      </div>
    </div>
  );
}

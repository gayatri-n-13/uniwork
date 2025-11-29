import React, { useState } from "react";
import "../styles/AddJob.css";
import Navbar from "../components/Navbar";

export default function AddJob() {

  const [title, setTitle] = useState("");
  const [dept, setDept] = useState("");
  const [location, setLocation] = useState("");
  const [pay, setPay] = useState("");
  const [hours, setHours] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    if (!title || !dept || !location || !pay || !hours || !desc) {
      alert("Please fill all fields.");
      return;
    }

    // Load existing jobs
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    // Create new job
    const newJob = {
      id: Date.now(),
      title,
      dept,
      location,
      pay,
      hours,
      desc,
    };

    // Save to localStorage
    jobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(jobs));

    alert("Job submitted successfully!");

    // Clear form
    setTitle("");
    setDept("");
    setLocation("");
    setPay("");
    setHours("");
    setDesc("");
  };

  return (
    <div>
      <Navbar />
      <div className="addjob-container">
        <h1>Add New Job</h1>

        <div className="addjob-box">
          <input className="addjob-input" placeholder="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} />

          <input className="addjob-input" placeholder="Department" value={dept} onChange={(e) => setDept(e.target.value)} />

          <input className="addjob-input" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />

          <input className="addjob-input" placeholder="Pay Rate" value={pay} onChange={(e) => setPay(e.target.value)} />

          <input className="addjob-input" placeholder="Hours per Week" value={hours} onChange={(e) => setHours(e.target.value)} />

          <textarea className="addjob-textarea" placeholder="Job Description" value={desc} onChange={(e) => setDesc(e.target.value)} />

          <button className="addjob-btn" onClick={handleSubmit}>Submit Job</button>
        </div>
      </div>
    </div>
  );
}

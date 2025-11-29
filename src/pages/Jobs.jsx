import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Jobs.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Jobs() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  // Default pre-loaded jobs (your original jobs)
  const defaultJobs = [
    {
      title: "Library Assistant",
      department: "University Library",
      description: "Assist librarians with shelving books and managing circulation desks.",
      payRate: "$15.50/hr",
      hours: "10 hrs/week",
      location: "Main Campus Library",
      deadline: "11/15/2024",
    },
    {
      title: "Research Assistant - Biology",
      department: "Biology Department",
      description: "Support faculty research and data analysis.",
      payRate: "$17/hr",
      hours: "15 hrs/week",
      location: "Science Lab 205",
      deadline: "11/20/2024",
    },
  ];

  // Fetch jobs from Firestore
  useEffect(() => {
    const fetchJobs = async () => {
      const jobSnap = await getDocs(collection(db, "jobs"));
      const jobList = jobSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setJobs(jobList);
    };

    fetchJobs();
  }, []);

  return (
    <div className="jobs-page">
      <Navbar />

      <div className="jobs-container">

        <div className="jobs-header">
          <h1 className="jobs-title">Work-Study Opportunities</h1>
          <button className="addjob-btn" onClick={() => navigate("/addjob")}>
            + Add Job
          </button>
        </div>

        <div className="jobs-grid">

          {/* Default Jobs */}
          {defaultJobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3 className="job-title">{job.title}</h3>
              <span className="job-tag">{job.department}</span>
              <p className="job-desc">{job.description}</p>
              <ul className="job-details">
                <li>{job.payRate}</li>
                <li>{job.hours}</li>
                <li>{job.location}</li>
                <li>Apply by {job.deadline}</li>
              </ul>
              <button className="apply-btn">Apply</button>
            </div>
          ))}

          {/* Firebase Jobs */}
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3 className="job-title">{job.title}</h3>
              <span className="job-tag">{job.department}</span>
              <p className="job-desc">{job.description}</p>
              <ul className="job-details">
                <li>${job.payRate}/hr</li>
                <li>{job.hoursPerWeek} hrs/week</li>
                <li>{job.location}</li>
              </ul>
              <button className="apply-btn">Apply</button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Jobs.css";

export default function Jobs() {
  // =========================
  // JOB DATA
  // =========================
  const jobsData = [
    {
      id: 1,
      title: "Library Assistant",
      department: "University Library",
      location: "Main Campus Library",
      rate: "$15.50/hr",
      hours: "10 hrs/week",
      deadline: "11/15/2024",
      desc: "Assist librarians with shelving books and managing circulation desks.",
      img: "/job1.jpg"
    },
    {
      id: 2,
      title: "Research Assistant - Biology",
      department: "Biology Department",
      location: "Science Building Lab 205",
      rate: "$17/hr",
      hours: "15 hrs/week",
      deadline: "11/20/2024",
      desc: "Support faculty research and data analysis in the biology lab.",
      img: "/job2.jpg"
    },
    {
      id: 3,
      title: "IT Help Desk Student Worker",
      department: "IT Department",
      location: "Tech Hall",
      rate: "$16/hr",
      hours: "12 hrs/week",
      deadline: "12/01/2024",
      desc: "Assist with basic troubleshooting, ticket support, and device setup.",
      img: "/job3.jpg"
    },
    {
      id: 4,
      title: "Student Office Assistant",
      department: "Admissions Office",
      location: "Admin Building A",
      rate: "$14/hr",
      hours: "8 hrs/week",
      deadline: "12/10/2024",
      desc: "Help staff with data entry, filing, and visitor check-in.",
      img: "/job4.jpg"
    },
    {
      id: 5,
      title: "Chemistry Lab Assistant",
      department: "Chemistry Department",
      location: "Science Center 112",
      rate: "$17.50/hr",
      hours: "10 hrs/week",
      deadline: "11/28/2024",
      desc: "Prepare equipment, assist lab instructors, and maintain safety logs.",
      img: "/job5.jpg"
    },
    {
      id: 6,
      title: "Graphic Design Student Worker",
      department: "Marketing Department",
      location: "Creative Studio Room 18",
      rate: "$18/hr",
      hours: "8–12 hrs/week",
      deadline: "12/05/2024",
      desc: "Help design posters, event materials, and social graphics.",
      img: "/job6.jpg"
    }
  ];

  // =========================
  // FILTERS + SEARCH STATES
  // =========================
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [location, setLocation] = useState("All Locations");

  // =========================
  // APPLY MODAL STATES
  // =========================
  const [selectedJob, setSelectedJob] = useState(null);
  const [resume, setResume] = useState(null);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const openApply = (job) => setSelectedJob(job);
  const closeApply = () => setSelectedJob(null);

  const handleSubmit = () => {
    alert(`Application submitted for: ${selectedJob.title}`);
    closeApply();
  };

  // =========================
  // FILTERING LOGIC
  // =========================
  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchesDept = department === "All Departments" || job.department === department;
    const matchesLocation = location === "All Locations" || job.location === location;

    return matchesSearch && matchesDept && matchesLocation;
  });

  const departments = ["All Departments", ...new Set(jobsData.map(j => j.department))];
  const locations = ["All Locations", ...new Set(jobsData.map(j => j.location))];

  return (
    <div className="jobs-page">
      <Navbar username="aprilxsky13" />

      <div className="jobs-container">
        <h1 className="jobs-title">Work-Study Opportunities</h1>
        <p className="jobs-sub">
          Discover meaningful work opportunities across campus departments
        </p>

        {/* FILTERS */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search jobs..."
            className="search-box"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="filter-box"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            {departments.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>

          <select
            className="filter-box"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {locations.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>

          <button
            className="clear-btn"
            onClick={() => {
              setSearch("");
              setDepartment("All Departments");
              setLocation("All Locations");
            }}
          >
            Clear Filters
          </button>
        </div>

        {/* JOB GRID */}
        <div className="jobs-grid">
          {filteredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <img src={job.img} alt="" className="job-img" />
              <h3 className="job-title">{job.title}</h3>
              <span className="job-tag">{job.department}</span>

              <p className="job-desc">{job.desc}</p>

              <ul className="job-details">
                <li>{job.rate}</li>
                <li>{job.hours}</li>
                <li>{job.location}</li>
                <li>Apply by {job.deadline}</li>
              </ul>

              <button className="apply-btn" onClick={() => openApply(job)}>
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* APPLY MODAL */}
      {selectedJob && (
        <div className="apply-overlay" onClick={closeApply}>
          <div className="apply-box" onClick={(e) => e.stopPropagation()}>
            <h2>Apply for {selectedJob.title}</h2>

            <input
              type="text"
              placeholder="Full Name"
              className="apply-input"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="apply-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="resume-label">Upload Resume:</label>
            <input
              type="file"
              className="resume-upload"
              onChange={(e) => setResume(e.target.files[0])}
            />

            <button className="submit-btn" onClick={handleSubmit}>
              Submit Application
            </button>

            <button className="close-apply" onClick={closeApply}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

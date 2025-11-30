import React, { useState } from "react";
import "../styles/Jobs.css";
import { useNavigate } from "react-router-dom";

export default function Jobs() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  // APPLY form state
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  const [applyForm, setApplyForm] = useState({
    name: "",
    email: "",
    coverLetter: "",
  });

  // EDIT job state
  const [showEditForm, setShowEditForm] = useState(false);
  const [editJobData, setEditJobData] = useState(null);

  // Default + added jobs
  const defaultJobs = [
    {
      id: "1",
      title: "Library Assistant",
      dept: "University Library",
      wage: "$15.50/hr",
      hours: "10 hrs/week",
      location: "Main Campus Library",
      deadline: "11/15/2024",
      desc: "Assist librarians with shelving books and managing circulation desks."
    },
    {
      id: "2",
      title: "Research Assistant - Biology",
      dept: "Biology Department",
      wage: "$17/hr",
      hours: "15 hrs/week",
      location: "Science Building Lab 205",
      deadline: "11/20/2024",
      desc: "Support faculty research and data analysis in the biology lab."
    }
  ];

  const addedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
  const allJobs = [...defaultJobs, ...addedJobs];

  const filteredJobs = allJobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  // ---------------- APPLY FORM ----------------

  const openApplyForm = (job) => {
    setSelectedJob(job);

    const savedUser = JSON.parse(localStorage.getItem("user"));
    setApplyForm({
      name: savedUser?.name || "",
      email: savedUser?.email || "",
      coverLetter: "",
    });

    setShowApplyForm(true);
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setResumeFile(reader.result);
    reader.readAsDataURL(file);
  };

  const submitApplication = () => {
    if (!applyForm.name || !applyForm.email || !resumeFile) {
      alert("Please fill all required fields.");
      return;
    }

    const newApp = {
      jobId: selectedJob.id,
      jobTitle: selectedJob.title,
      name: applyForm.name,
      email: applyForm.email,
      coverLetter: applyForm.coverLetter,
      resume: resumeFile,
      date: new Date().toLocaleDateString(),
    };

    const existing = JSON.parse(localStorage.getItem("applications")) || [];
    localStorage.setItem("applications", JSON.stringify([...existing, newApp]));

    alert("Application submitted!");
    setShowApplyForm(false);
  };

  // ---------------- EDIT JOB FORM ----------------
  const openEdit = (job) => {
    setEditJobData(job);
    setShowEditForm(true);
  };

  const saveEditedJob = () => {
    const updated = addedJobs.map((j) =>
      j.id === editJobData.id ? editJobData : j
    );

    localStorage.setItem("jobs", JSON.stringify(updated));
    setShowEditForm(false);
    window.location.reload();
  };

  const deleteJob = (id) => {
    const filtered = addedJobs.filter((j) => j.id !== id);
    localStorage.setItem("jobs", JSON.stringify(filtered));
    window.location.reload();
  };

  return (
    <div className="jobs-page">

      {/* HEADER */}
      <div className="jobs-header-bar">
        <h1 className="jobs-title">Work-Study Opportunities</h1>
        <button className="addjob-btn" onClick={() => navigate("/addjob")}>
          + Add Job
        </button>
      </div>

      <p className="jobs-subtitle">Discover meaningful work opportunities across campus departments</p>

      <input
        className="jobs-search"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* JOB CARDS */}
      <div className="jobs-grid">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3 className="job-title">{job.title}</h3>
            <p className="job-dept">{job.dept}</p>
            <p className="job-desc">{job.desc}</p>

            <div className="job-details">
              <p><strong>{job.wage}</strong></p>
              <p>{job.hours}</p>
              <p>{job.location}</p>
              <p>Apply by <strong>{job.deadline}</strong></p>
            </div>

            {/* APPLY BUTTON */}
            <button className="apply-btn" onClick={() => openApplyForm(job)}>
              Apply
            </button>

            {/* ONLY show edit/delete for added jobs */}
            {addedJobs.find((j) => j.id === job.id) && (
              <div className="job-admin-controls">
                <button className="edit-btn-small" onClick={() => openEdit(job)}>✏️ Edit</button>
                <button className="delete-btn-small" onClick={() => deleteJob(job.id)}>🗑 Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ---------------- APPLY MODAL ---------------- */}
      {showApplyForm && (
        <div className="modal-overlay" onClick={() => setShowApplyForm(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>Apply for {selectedJob?.title}</h2>

            <input
              className="modal-input"
              placeholder="Full Name"
              value={applyForm.name}
              onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
            />

            <input
              className="modal-input"
              placeholder="Email"
              value={applyForm.email}
              onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
            />

            <input
              className="modal-input"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
            />

            <textarea
              className="modal-textarea"
              placeholder="Cover Letter"
              value={applyForm.coverLetter}
              onChange={(e) =>
                setApplyForm({ ...applyForm, coverLetter: e.target.value })
              }
            />

            <button className="submit-app-btn" onClick={submitApplication}>
              Submit Application
            </button>

            <button className="close-modal-btn" onClick={() => setShowApplyForm(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ---------------- EDIT JOB MODAL ---------------- */}
      {showEditForm && (
        <div className="modal-overlay" onClick={() => setShowEditForm(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Job</h2>

            <input
              className="modal-input"
              value={editJobData.title}
              onChange={(e) => setEditJobData({ ...editJobData, title: e.target.value })}
            />

            <input
              className="modal-input"
              value={editJobData.dept}
              onChange={(e) => setEditJobData({ ...editJobData, dept: e.target.value })}
            />

            <input
              className="modal-input"
              value={editJobData.wage}
              onChange={(e) => setEditJobData({ ...editJobData, wage: e.target.value })}
            />

            <input
              className="modal-input"
              value={editJobData.hours}
              onChange={(e) => setEditJobData({ ...editJobData, hours: e.target.value })}
            />

            <input
              className="modal-input"
              value={editJobData.location}
              onChange={(e) => setEditJobData({ ...editJobData, location: e.target.value })}
            />

            <input
              className="modal-input"
              value={editJobData.deadline}
              onChange={(e) => setEditJobData({ ...editJobData, deadline: e.target.value })}
            />

            <textarea
              className="modal-textarea"
              value={editJobData.desc}
              onChange={(e) => setEditJobData({ ...editJobData, desc: e.target.value })}
            />

            <button className="submit-app-btn" onClick={saveEditedJob}>
              Save Changes
            </button>
            <button className="close-modal-btn" onClick={() => setShowEditForm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

import React, { useState, useEffect } from "react";
import "../styles/Profile.css";

export default function Profile() {
  const [editMode, setEditMode] = useState(false);

  const [profile, setProfile] = useState({
    photo: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    major: "",
    role: "",
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedProfile = JSON.parse(localStorage.getItem("profile"));

    if (savedProfile) {
      setProfile(savedProfile);
    } else if (savedUser) {
      setProfile((prev) => ({
        ...prev,
        name: savedUser.name,
        email: savedUser.email,
        role: savedUser.role,
      }));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setEditMode(false);
  };

  return (
    <div className="profile-page">

      <div className="profile-card">

        {/* Profile Photo */}
        <div className="profile-photo-wrapper">
          {profile.photo ? (
            <img src={profile.photo} alt="Profile" className="profile-photo" />
          ) : (
            <div className="profile-photo placeholder">No Photo</div>
          )}

          {editMode && (
            <input
              type="text"
              placeholder="Photo URL"
              value={profile.photo}
              onChange={(e) =>
                setProfile({ ...profile, photo: e.target.value })
              }
              className="profile-input"
            />
          )}
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          {!editMode ? (
            <>
              <p><strong>Name:</strong> {profile.name || "—"}</p>
              <p><strong>Email:</strong> {profile.email || "—"}</p>
              <p><strong>Address:</strong> {profile.address || "—"}</p>
              <p><strong>Phone:</strong> {profile.phone || "—"}</p>
              <p><strong>Major / Department:</strong> {profile.major || "—"}</p>
              <p><strong>Role:</strong> {profile.role || "—"}</p>

              <button className="edit-btn" onClick={() => setEditMode(true)}>
                Edit Profile
              </button>
            </>
          ) : (
            <>
              <input
                className="profile-input"
                placeholder="Full Name"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
              />
              <input
                className="profile-input"
                placeholder="Address"
                value={profile.address}
                onChange={(e) =>
                  setProfile({ ...profile, address: e.target.value })
                }
              />
              <input
                className="profile-input"
                placeholder="Phone Number"
                value={profile.phone}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
              />
              <input
                className="profile-input"
                placeholder="Major / Department"
                value={profile.major}
                onChange={(e) =>
                  setProfile({ ...profile, major: e.target.value })
                }
              />

              <button className="save-btn" onClick={handleSave}>
                Save Changes
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Profile.css";

import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);          // Firebase user object
  const [profile, setProfile] = useState(null);    // Firestore profile data
  const [loading, setLoading] = useState(true);    // Loader

  // Step 1 — Wait for Firebase Auth to load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        // user not logged in → redirect
        navigate("/");
        return;
      }

      setUser(u);

      // Step 2 — Get Firestore profile
      const ref = doc(db, "users", u.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setProfile(snap.data());
      } else {
        setProfile({ name: u.displayName, email: u.email });
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p className="profile-loading">Loading profile...</p>;
  }

  return (
    <div className="profile-page">
      <Navbar username={user.displayName || user.email} />

      <div className="profile-container">

        <h1 className="profile-title">My Profile</h1>
        <p className="profile-sub">Manage your personal and account details</p>

        <div className="profile-card">
          <p><strong>Name:</strong> {profile?.name || user.displayName}</p>
          <p><strong>Email:</strong> {profile?.email || user.email}</p>
          <p><strong>Account Created:</strong> 
            {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString() : "N/A"}
          </p>
        </div>

      </div>
    </div>
  );
}

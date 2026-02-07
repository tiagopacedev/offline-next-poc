"use client";

import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

export default function Profile() {
  const [isOnline, setIsOnline] = useState(true);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
    preferences: {
      notifications: true,
      newsletter: false,
      darkMode: false,
    },
  });

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleSave = () => {
    if (isOnline) {
      alert("Profile saved successfully!");
    } else {
      alert("Profile will be saved when you reconnect to internet.");
    }
  };

  return (
    <>
      <Navigation />
      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "1.5rem",
            marginBottom: "2rem",
            fontWeight: "500",
          }}
        >
          Profile
        </h1>

        <div
          style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #e5e5e5",
            padding: "1rem",
            borderRadius: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
            {isOnline
              ? "Changes will be saved immediately."
              : "Changes will be queued for sync when online."}
          </p>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              border: "1px solid #e5e5e5",
              borderRadius: "0.5rem",
              padding: "1.5rem",
            }}
          >
            <h2
              style={{
                margin: "0 0 1rem 0",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Personal Information
            </h2>

            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #e5e5e5",
                  borderRadius: "0.25rem",
                  fontSize: "0.875rem",
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Email
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #e5e5e5",
                  borderRadius: "0.25rem",
                  fontSize: "0.875rem",
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Phone
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #e5e5e5",
                  borderRadius: "0.25rem",
                  fontSize: "0.875rem",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Address
              </label>
              <textarea
                value={profile.address}
                onChange={(e) =>
                  setProfile({ ...profile, address: e.target.value })
                }
                rows={3}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #e5e5e5",
                  borderRadius: "0.25rem",
                  resize: "vertical",
                  fontSize: "0.875rem",
                }}
              />
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              border: "1px solid #e5e5e5",
              borderRadius: "0.5rem",
              padding: "1.5rem",
            }}
          >
            <h2
              style={{
                margin: "0 0 1rem 0",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Preferences
            </h2>

            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                }}
              >
                <input
                  type="checkbox"
                  checked={profile.preferences.notifications}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      preferences: {
                        ...profile.preferences,
                        notifications: e.target.checked,
                      },
                    })
                  }
                  style={{ marginRight: "0.5rem" }}
                />
                Email Notifications
              </label>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                }}
              >
                <input
                  type="checkbox"
                  checked={profile.preferences.newsletter}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      preferences: {
                        ...profile.preferences,
                        newsletter: e.target.checked,
                      },
                    })
                  }
                  style={{ marginRight: "0.5rem" }}
                />
                Newsletter Subscription
              </label>
            </div>

            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                }}
              >
                <input
                  type="checkbox"
                  checked={profile.preferences.darkMode}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      preferences: {
                        ...profile.preferences,
                        darkMode: e.target.checked,
                      },
                    })
                  }
                  style={{ marginRight: "0.5rem" }}
                />
                Dark Mode
              </label>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={handleSave}
            style={{
              backgroundColor: isOnline ? "#333" : "#666",
              color: "white",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.25rem",
              cursor: "pointer",
              fontSize: "0.875rem",
              marginRight: "1rem",
            }}
          >
            {isOnline ? "Save Changes" : "Queue for Sync"}
          </button>
        </div>
      </main>
    </>
  );
}

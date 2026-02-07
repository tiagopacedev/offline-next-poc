"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const mockUsers = [
  {
    id: "1",
    email: "john@example.com",
    password: "password123",
    name: "John Doe",
  },
  {
    id: "2",
    email: "jane@example.com",
    password: "password123",
    name: "Jane Smith",
  },
];

function LoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.email === email && u.password === password,
      );

      if (user) {
        const token = btoa(
          JSON.stringify({ id: user.id, email: user.email, name: user.name }),
        );
        document.cookie = `auth-token=${token}; path=/; max-age=86400`;
        localStorage.setItem("user", JSON.stringify(user));
        router.push(redirect);
      } else {
        setError("Invalid email or password");
      }

      setIsLoading(false);
    }, 1000);
  };

  const handleOfflineLogin = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      const token = btoa(
        JSON.stringify({ id: user.id, email: user.email, name: user.name }),
      );
      document.cookie = `auth-token=${token}; path=/; max-age=86400`;
      router.push(redirect);
    } else {
      setError("No cached credentials found.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fafafa",
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "0.5rem",
          border: "1px solid #e5e5e5",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "500",
              marginBottom: "0.5rem",
            }}
          >
            Offline POC
          </h1>
          <p style={{ color: "#666", fontSize: "0.875rem" }}>
            {isOnline ? "Sign in to continue" : "Offline mode"}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #e5e5e5",
            padding: "0.75rem",
            borderRadius: "0.25rem",
            marginBottom: "1.5rem",
            fontSize: "0.875rem",
            color: "#666",
          }}
        >
          {isOnline
            ? "Online authentication available"
            : "Using cached credentials only"}
        </div>

        {error && (
          <div
            style={{
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#991b1b",
              padding: "0.75rem",
              borderRadius: "0.25rem",
              marginBottom: "1rem",
              fontSize: "0.875rem",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={!isOnline}
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #e5e5e5",
                borderRadius: "0.25rem",
                fontSize: "0.875rem",
                backgroundColor: isOnline ? "#fff" : "#f8f9fa",
                opacity: isOnline ? 1 : 0.6,
              }}
              placeholder={
                isOnline ? "Enter your email" : "Login disabled offline"
              }
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={!isOnline}
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #e5e5e5",
                borderRadius: "0.25rem",
                fontSize: "0.875rem",
                backgroundColor: isOnline ? "#fff" : "#f8f9fa",
                opacity: isOnline ? 1 : 0.6,
              }}
              placeholder={
                isOnline ? "Enter your password" : "Login disabled offline"
              }
            />
          </div>

          <button
            type="submit"
            disabled={!isOnline || isLoading}
            style={{
              width: "100%",
              backgroundColor: isOnline ? "#333" : "#666",
              color: "white",
              border: "none",
              padding: "0.75rem",
              borderRadius: "0.25rem",
              cursor: isOnline ? "pointer" : "not-allowed",
              fontSize: "0.875rem",
              fontWeight: "500",
              opacity: isOnline && !isLoading ? 1 : 0.6,
            }}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {!isOnline && (
          <div style={{ marginTop: "1rem" }}>
            <div
              style={{
                textAlign: "center",
                margin: "1rem 0",
                color: "#666",
                fontSize: "0.875rem",
              }}
            >
              — or —
            </div>
            <button
              onClick={handleOfflineLogin}
              style={{
                width: "100%",
                backgroundColor: "#fff",
                color: "#333",
                border: "1px solid #e5e5e5",
                padding: "0.75rem",
                borderRadius: "0.25rem",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              Use Cached Credentials
            </button>
          </div>
        )}

        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "0.25rem",
            fontSize: "0.75rem",
            color: "#666",
          }}
        >
          <strong>Demo Accounts:</strong>
          <br />
          john@example.com / password123
          <br />
          jane@example.com / password123
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fafafa",
          }}
        >
          <div style={{ color: "#666" }}>Loading...</div>
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}

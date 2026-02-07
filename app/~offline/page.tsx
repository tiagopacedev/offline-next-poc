"use client";

export default function OfflineFallback() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📱</div>
      <h1
        style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#1f2937" }}
      >
        You're Offline
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#6b7280", marginBottom: "2rem" }}>
        No internet connection detected. Some features may be limited.
      </p>

      <div
        style={{
          backgroundColor: "#f3f4f6",
          padding: "2rem",
          borderRadius: "1rem",
          textAlign: "left",
          marginBottom: "2rem",
        }}
      >
        <h2 style={{ color: "#374151", marginBottom: "1rem" }}>
          Available Offline Features:
        </h2>
        <ul style={{ color: "#4b5563", lineHeight: "1.6" }}>
          <li>✅ Navigate between previously visited pages</li>
          <li>✅ View cached product catalog</li>
          <li>✅ Access order history</li>
          <li>✅ Edit profile (changes will sync when online)</li>
        </ul>

        <h2
          style={{
            color: "#374151",
            marginTop: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          What to do:
        </h2>
        <ol style={{ color: "#4b5563", lineHeight: "1.6" }}>
          <li>Try navigating to a page you've visited before</li>
          <li>Check your internet connection</li>
          <li>Refresh this page when back online</li>
        </ol>
      </div>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          🏠 Go Home
        </button>

        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "white",
            color: "#2563eb",
            border: "1px solid #2563eb",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          🔄 Try Again
        </button>
      </div>
    </div>
  );
}

import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            marginBottom: "3rem",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              fontWeight: "500",
            }}
          >
            Offline POC
          </h1>
          <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.5" }}>
            Demonstrating offline-first capabilities with authentication and
            data persistence.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              border: "1px solid #e5e5e5",
              borderRadius: "0.5rem",
            }}
          >
            <h3
              style={{
                margin: "0 0 0.5rem 0",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Products
            </h3>
            <p style={{ margin: 0, color: "#666", fontSize: "0.875rem" }}>
              Browse catalog offline
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              border: "1px solid #e5e5e5",
              borderRadius: "0.5rem",
            }}
          >
            <h3
              style={{
                margin: "0 0 0.5rem 0",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Orders
            </h3>
            <p style={{ margin: 0, color: "#666", fontSize: "0.875rem" }}>
              View order history
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              border: "1px solid #e5e5e5",
              borderRadius: "0.5rem",
            }}
          >
            <h3
              style={{
                margin: "0 0 0.5rem 0",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Profile
            </h3>
            <p style={{ margin: 0, color: "#666", fontSize: "0.875rem" }}>
              Manage settings
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid #e5e5e5",
            padding: "1.5rem",
            borderRadius: "0.5rem",
          }}
        >
          <h4
            style={{
              margin: "0 0 1rem 0",
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            Offline Test
          </h4>
          <ol
            style={{
              margin: 0,
              paddingLeft: "1.5rem",
              fontSize: "0.875rem",
              color: "#666",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              Navigate to all pages while online
            </li>
            <li style={{ marginBottom: "0.5rem" }}>Disconnect from internet</li>
            <li style={{ marginBottom: "0.5rem" }}>
              Try navigating between pages
            </li>
            <li>Notice the offline indicator</li>
          </ol>
        </div>
      </main>
    </>
  );
}

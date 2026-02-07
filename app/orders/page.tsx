import Navigation from "../components/Navigation";

const orders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "Delivered",
    total: "$149.99",
    items: 3,
    trackingNumber: "TRK123456789",
  },
  {
    id: "ORD-002",
    date: "2024-01-18",
    status: "In Transit",
    total: "$89.99",
    items: 2,
    trackingNumber: "TRK987654321",
  },
  {
    id: "ORD-003",
    date: "2024-01-20",
    status: "Processing",
    total: "$299.99",
    items: 5,
    trackingNumber: "TRK456789123",
  },
];

export default function Orders() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "#059669";
      case "In Transit":
        return "#2563eb";
      case "Processing":
        return "#d97706";
      default:
        return "#6b7280";
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
          Orders
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
            Order history is cached and accessible offline.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {orders.map((order) => (
            <div
              key={order.id}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "0.5rem",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: "0 0 0.5rem 0",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    {order.id}
                  </h3>
                  <p style={{ margin: 0, color: "#666", fontSize: "0.875rem" }}>
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "#333",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "0.25rem",
                    fontSize: "0.75rem",
                    fontWeight: "500",
                    border: "1px solid #e5e5e5",
                  }}
                >
                  {order.status}
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                  gap: "1rem",
                  padding: "1rem 0",
                  borderTop: "1px solid #f8f9fa",
                  borderBottom: "1px solid #f8f9fa",
                }}
              >
                <div>
                  <p
                    style={{
                      margin: "0 0 0.25rem 0",
                      color: "#666",
                      fontSize: "0.75rem",
                    }}
                  >
                    Items
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontWeight: "500",
                      fontSize: "0.875rem",
                    }}
                  >
                    {order.items} products
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      margin: "0 0 0.25rem 0",
                      color: "#666",
                      fontSize: "0.75rem",
                    }}
                  >
                    Total
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontWeight: "500",
                      fontSize: "0.875rem",
                    }}
                  >
                    {order.total}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      margin: "0 0 0.25rem 0",
                      color: "#666",
                      fontSize: "0.75rem",
                    }}
                  >
                    Tracking
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                    }}
                  >
                    {order.trackingNumber}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

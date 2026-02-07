import Navigation from "../components/Navigation";

const products = [
  {
    id: 1,
    name: "Laptop Pro",
    price: "$999",
    category: "Electronics",
    stock: 15,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: "$29",
    category: "Electronics",
    stock: 45,
  },
  { id: 3, name: "Coffee Maker", price: "$79", category: "Home", stock: 8 },
  { id: 4, name: "Running Shoes", price: "$89", category: "Sports", stock: 22 },
  { id: 5, name: "Backpack", price: "$49", category: "Accessories", stock: 31 },
  {
    id: 6,
    name: "Smartphone",
    price: "$699",
    category: "Electronics",
    stock: 12,
  },
];

export default function Products() {
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
          Products
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
            Product data is cached and available offline.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "0.5rem",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  height: "80px",
                  borderRadius: "0.25rem",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                }}
              >
                {product.category === "Electronics"
                  ? "💻"
                  : product.category === "Home"
                    ? "☕"
                    : product.category === "Sports"
                      ? "👟"
                      : "🎒"}
              </div>

              <h3
                style={{
                  margin: "0 0 0.5rem 0",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                {product.name}
              </h3>

              <p
                style={{
                  margin: "0 0 1rem 0",
                  color: "#666",
                  fontSize: "0.875rem",
                }}
              >
                {product.category}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    color: "#333",
                  }}
                >
                  {product.price}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: product.stock > 10 ? "#666" : "#999",
                  }}
                >
                  {product.stock > 10
                    ? `${product.stock} in stock`
                    : `${product.stock} left`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

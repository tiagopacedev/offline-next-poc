"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(true);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null,
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    setIsMobile(window.innerWidth < 768);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("resize", handleResize);

    // Get user info from localStorage for offline display
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    document.cookie =
      "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: "#fafafa",
        borderBottom: "1px solid #e5e5e5",
        padding: isMobile ? "0.75rem 1rem" : "1rem",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: isMobile ? "wrap" : "nowrap",
          gap: isMobile ? "0.5rem" : "0",
        }}
      >
        <div
          style={{
            fontSize: isMobile ? "0.875rem" : "1rem",
            fontWeight: "500",
            color: "#333",
            order: isMobile ? 1 : 1,
          }}
        >
          Offline POC
        </div>

        {isMobile ? (
          // Mobile navigation - centered links
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              order: 3,
              width: "100%",
              justifyContent: "center",
              marginTop: "0.5rem",
              paddingTop: "0.5rem",
              borderTop: "1px solid #e5e5e5",
            }}
          >
            <Link
              href="/"
              style={{
                color: pathname === "/" ? "#000" : "#666",
                textDecoration: "none",
                fontSize: "0.75rem",
              }}
            >
              Home
            </Link>
            <Link
              href="/products"
              style={{
                color: pathname === "/products" ? "#000" : "#666",
                textDecoration: "none",
                fontSize: "0.75rem",
              }}
            >
              Products
            </Link>
            <Link
              href="/orders"
              style={{
                color: pathname === "/orders" ? "#000" : "#666",
                textDecoration: "none",
                fontSize: "0.75rem",
              }}
            >
              Orders
            </Link>
            <Link
              href="/profile"
              style={{
                color: pathname === "/profile" ? "#000" : "#666",
                textDecoration: "none",
                fontSize: "0.75rem",
              }}
            >
              Profile
            </Link>
          </div>
        ) : (
          // Desktop navigation - horizontal links
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              order: 2,
            }}
          >
            <Link
              href="/"
              style={{
                color: pathname === "/" ? "#000" : "#666",
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              Home
            </Link>
            <Link
              href="/products"
              style={{
                color: pathname === "/products" ? "#000" : "#666",
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              Products
            </Link>
            <Link
              href="/orders"
              style={{
                color: pathname === "/orders" ? "#000" : "#666",
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              Orders
            </Link>
            <Link
              href="/profile"
              style={{
                color: pathname === "/profile" ? "#000" : "#666",
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              Profile
            </Link>
          </div>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "0.5rem" : "1rem",
            order: isMobile ? 2 : 3,
          }}
        >
          <div
            style={{
              fontSize: isMobile ? "0.625rem" : "0.75rem",
              color: isOnline ? "#059669" : "#dc2626",
              fontWeight: "500",
            }}
          >
            {isOnline ? "● Online" : "○ Offline"}
          </div>

          {user && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  fontSize: isMobile ? "0.75rem" : "0.875rem",
                  color: "#666",
                }}
              >
                {user.name.split(" ")[0]}
              </span>
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: "transparent",
                  color: "#999",
                  border: "1px solid #ddd",
                  padding: isMobile ? "0.125rem 0.375rem" : "0.25rem 0.5rem",
                  borderRadius: "0.25rem",
                  cursor: "pointer",
                  fontSize: isMobile ? "0.625rem" : "0.75rem",
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

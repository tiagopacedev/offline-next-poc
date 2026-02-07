import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simulate user session - in real app, this would come from a database or auth service
const mockUsers = [
  { id: "1", email: "john@example.com", name: "John Doe" },
  { id: "2", email: "jane@example.com", name: "Jane Smith" },
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get auth token from cookies or headers
  const authToken = request.cookies.get("auth-token")?.value;

  // Public routes that don't require authentication
  const publicRoutes = ["/", "/login", "/~offline"];
  const isPublicRoute =
    publicRoutes.includes(pathname) ||
    pathname.startsWith("/_next") ||
    pathname.includes("/sw.js");

  // API routes
  const isApiRoute = pathname.startsWith("/api");

  // Allow public routes and static assets
  if (isPublicRoute && !isApiRoute) {
    return NextResponse.next();
  }

  // For API routes, check if we have a valid session (offline or online)
  if (isApiRoute) {
    // Allow API calls if we have a token or if it's a public API
    if (authToken || pathname.includes("/public")) {
      return NextResponse.next();
    }

    // Return 401 for protected API routes without token
    return new NextResponse(
      JSON.stringify({ error: "Authentication required" }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  // For protected routes, check authentication
  if (!authToken) {
    // Store the attempted URL for redirect after login
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  // Validate token (in real app, this would verify with your auth service)
  try {
    const user = JSON.parse(atob(authToken));
    const isValidUser = mockUsers.some((u) => u.id === user.id);

    if (!isValidUser) {
      // Token is invalid, redirect to login
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);

      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete("auth-token");
      return response;
    }

    // User is authenticated, continue
    const response = NextResponse.next();

    // Add user info to headers for client-side usage
    response.headers.set("x-user-id", user.id);
    response.headers.set("x-user-name", user.name);

    return response;
  } catch (error) {
    // Token is malformed, redirect to login
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);

    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete("auth-token");
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - manifest.webmanifest
     * - icons folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public|manifest.webmanifest|icons).*)",
  ],
};

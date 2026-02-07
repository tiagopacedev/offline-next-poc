import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Offline POC",
    short_name: "Offline POC",
    description: "A progressive web app demonstrating offline capabilities",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#333333",
    scope: "/",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "NJS App";
const APP_DESCRIPTION = "Next.js + Serwist PWA";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s - NJS App",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={inter.className}>
      <head>
        <style>{`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            html, body {
              height: 100%;
              background-color: #fafafa;
            }
            body {
              font-family: 'Inter', system-ui, -apple-system, sans-serif;
              line-height: 1.5;
              color: #333;
            }
            `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}

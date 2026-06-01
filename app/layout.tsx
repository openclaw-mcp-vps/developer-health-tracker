import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer Health Tracker — Track Coding Posture & Break Reminders",
  description: "Monitor coding sessions, get break notifications, and improve posture with Developer Health Tracker. Built for individual developers and teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="933a4cc4-70a1-4330-a9de-87fb9f7cf465"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">{children}</body>
    </html>
  );
}

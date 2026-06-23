import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life360 Mapbox",
  description: "Next.js + Mapbox demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

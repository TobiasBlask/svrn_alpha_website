import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premise",
  description: "Institutional-grade research for retail.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" data-direction="precision">
      <head>
        <link rel="stylesheet" href="/styles/tokens.css" />
        <link rel="stylesheet" href="/styles/base.css" />
        <link rel="stylesheet" href="/styles/premise.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}

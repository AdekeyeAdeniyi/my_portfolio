import type { Metadata } from "next";
import { DM_Serif_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CursorInvertGlow from "@/components/CursorInvertGlow";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

const serif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Adekeye | Portfolio",
  description: "Welcome to the official portfolio of Adekeye – a showcase of modern web development projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} ${serif.variable}  antialiased isolate`}>
        {children}
        <CursorInvertGlow />
      </body>
    </html>
  );
}

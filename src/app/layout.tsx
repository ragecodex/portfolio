import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { getPersonSchema, getProfilePageSchema } from "@/lib/structuredData";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Ragib Smajic - Senior Software Engineer | Full-Stack Developer",
    template: "%s | Ragib Smajic",
  },
  description:
    "Portfolio of Ragib Smajic, Senior Software Engineer with 8 years of experience building scalable web applications. Specializing in React, Node.js, AWS, and cloud architecture.",
  keywords: [
    "Ragib Smajic",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "AWS Cloud Engineer",
    "Software Engineer Portfolio",
    "Tech Lead",
  ],
  authors: [{ name: "Ragib Smajic" }],
  creator: "Ragib Smajic",
  publisher: "Ragib Smajic",
  alternates: {
    canonical: "https://ragibsmajic.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ragibsmajic.com",
    siteName: "Ragib Smajic Portfolio",
    title: "Ragib Smajic - Senior Software Engineer",
    description:
      "Senior Software Engineer with 8 years of experience building scalable web applications",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ragib Smajic - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ragib Smajic - Senior Software Engineer",
    description:
      "Senior Software Engineer with 8 years of experience building scalable web applications",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = getPersonSchema();
  const profilePageSchema = getProfilePageSchema();

  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

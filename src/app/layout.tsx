import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import {
  getPersonSchema,
  getProfilePageSchema,
  getWorkExperienceSchema,
  getEducationalOccupationalCredentialSchema,
} from "./seo";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.CF_PAGES_URL ||
      "http://localhost:3000"
  ),
  title: {
    default: "Ragib Smajic - AI-Enabled Software Engineer",
    template: "%s | Ragib Smajic",
  },
  description:
    "Portfolio of Ragib Smajic, AI-enabled Senior Software Engineer building multimodal AI agents, RAG systems, and scalable cloud applications with Python, AWS Bedrock, .NET, and Next.js.",
  keywords: [
    "Ragib Smajic",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "AWS Cloud Engineer",
    "AI Engineer",
    "RAG Engineer",
    "AWS Bedrock",
    "Python Developer",
    "FastAPI Developer",
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
    title: "Ragib Smajic - AI-Enabled Software Engineer",
    description:
      "AI-enabled Senior Software Engineer building multimodal AI agents, RAG systems, and scalable cloud applications",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ragib Smajic - AI-Enabled Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ragib Smajic - AI-Enabled Software Engineer",
    description:
      "AI-enabled Senior Software Engineer building multimodal AI agents, RAG systems, and scalable cloud applications",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getProfilePageSchema()) }}
        />
        {getWorkExperienceSchema().map((schema, i) => (
          <script
            key={`work-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {getEducationalOccupationalCredentialSchema().map((schema, i) => (
          <script
            key={`edu-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

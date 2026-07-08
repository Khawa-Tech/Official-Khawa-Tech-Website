import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khawatech.com"),

  title: {
    default: "Khawa Tech",
    template: "%s | Khawa Tech",
  },

  description:
    "Software Development Agency based on algeria",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  keywords: [
    "software",
    "nextjs",
    "erp",
    "saas",
    "inventory",
    "algeria",
    "dz",
    "landing page",
    "e-commerce",
    "store",
    "web development",
    "mobile development",
    "application development",
    "software development",
    "digital solutions",
    "business solutions",
    "tech"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="google-site-verification" content="4KrJpa4CBaKZ0SLqSs8h6x-RjSjxEGShhTETylxDQUk" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

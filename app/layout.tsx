import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from '@/components/JsonLd';

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Hellobubul - Platform Terpercaya untuk Anabul Indonesia",
    template: "%s | Hellobubul"
  },
  description: "Temukan vet terbaik, obat original, dan komunitas pecinta anabul dalam satu platform. Join 500+ pet parents Indonesia di waitlist Hellobubul!",
  keywords: [
    "kucing",
    "anjing", 
    "vet Indonesia",
    "dokter hewan",
    "adopsi kucing",
    "adopsi anjing",
    "obat hewan original",
    "telekonsultasi hewan",
    "pet care Indonesia",
    "klinik hewan terdekat",
    "vaksin kucing",
    "makanan kucing",
    "komunitas pecinta hewan"
  ],
  authors: [{ name: "Hellobubul Team" }],
  creator: "Hellobubul",
  publisher: "Hellobubul",
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
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: "Hellobubul - Platform Terpercaya untuk Anabul Indonesia",
    description: "Temukan vet terbaik, obat original, dan komunitas pecinta anabul dalam satu platform.",
    type: "website",
    locale: "id_ID",
    siteName: "Hellobubul",
    url: "https://hellobubul.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hellobubul - Platform untuk Pet Parents Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hellobubul - Platform Terpercaya untuk Anabul Indonesia",
    description: "Temukan vet terbaik, obat original, dan komunitas pecinta anabul",
    creator: "@hellobubul.id",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://hellobubul.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
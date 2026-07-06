import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Hellobubul - Platform Terpercaya untuk Anabul Indonesia",
  description: "Temukan vet terbaik, obat original, dan komunitas pecinta anabul dalam satu platform.",
  keywords: ["kucing", "anjing", "vet", "hewan", "adopsi", "obat hewan", "indonesia"],
  authors: [{ name: "Hellobubul Team" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: "Hellobubul - Platform Terpercaya untuk Anabul Indonesia",
    description: "Temukan vet terbaik, obat original, dan komunitas pecinta anabul",
    type: "website",
    locale: "id_ID",
    siteName: "Hellobubul",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hellobubul - Platform Terpercaya untuk Anabul Indonesia",
    description: "Temukan vet terbaik, obat original, dan komunitas pecinta anabul",
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
        {children}
      </body>
    </html>
  );
}
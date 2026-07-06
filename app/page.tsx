import Hero from '@/components/Hero';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hellobubul - Platform Terpercaya untuk Anabul Indonesia",
  description: "Temukan vet terbaik, obat original, dan komunitas pecinta anabul dalam satu platform. Join 500+ pet parents Indonesia di waitlist Hellobubul!",
  openGraph: {
    title: "Hellobubul - Platform Terpercaya untuk Anabul Indonesia",
    description: "Temukan vet terbaik, obat original, dan komunitas pecinta anabul dalam satu platform.",
    type: "website",
    locale: "id_ID",
    siteName: "Hellobubul",
    url: "https://hellobubul.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hellobubul - Platform Terpercaya untuk Anabul Indonesia",
    description: "Temukan vet terbaik, obat original, dan komunitas pecinta anabul",
    creator: "@hellobubul.id",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WaitlistForm />
      <Footer />
    </div>
  );
}
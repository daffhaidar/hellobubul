import Hero from '@/components/Hero';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WaitlistForm />
      <Footer />
    </div>
  );
}
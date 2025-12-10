import { KoshitsuNavbar } from '@/components/Navbar';
import Hero  from '@/components/Hero';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Spotlight } from '@/components/ui/Spotlight-new';
import TestimonialsSection from '@/components/TestimonialCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Spotlight/>
      <KoshitsuNavbar />

      <main>
 
        <Hero />
        <Features />
        <TestimonialsSection />

      </main>

      <Footer />
    </div>
  );
}

import { KoshitsuNavbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Spotlight } from '@/components/ui/Spotlight';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Spotlight
        className="top-30 left-0 md:-top-20 md:left-60"
        fill="blue"
      />
      <KoshitsuNavbar />

      <main>
        

        <Hero />
        <Features />


      </main>

      <Footer />
    </div>
  );
}

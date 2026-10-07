import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientProviders from '@/components/ClientProviders';
import HeroSection from '@/sections/HeroSection';
import MarqueeSection from '@/sections/MarqueeSection';
import AboutSection from '@/sections/AboutSection';
import ServicesSection from '@/sections/ServicesSection';
import ProcessSection from '@/sections/ProcessSection';
import PlatformSection from '@/sections/PlatformSection';
import IndustriesSection from '@/sections/IndustriesSection';
import CaseStudiesSection from '@/sections/CaseStudiesSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import PricingSection from '@/sections/PricingSection';
import FAQSection from '@/sections/FAQSection';
import FinalCTASection from '@/sections/FinalCTASection';

export default function Home() {
  return (
    <>
      <ClientProviders />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PlatformSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricMarquee from "@/components/MetricMarquee";
import ServicesSection from "@/components/ServicesSection";
import OurWorkSection from "@/components/OurWorkSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MetricMarquee />
      <ServicesSection />
      <OurWorkSection />
      <ResultsSection />
      <TestimonialsSection />
      <ClientLogosMarquee />
      <FAQSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

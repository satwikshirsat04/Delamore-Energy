
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Services as ServicesSection } from "@/components/Services";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageBanner } from "@/components/PageBanner";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { FadeUp } from "@/components/animations/FadeUp";
import { Technology } from "@/components/Technology";
const Services = () => {
  useDocumentTitle({
    title: 'Services',
    description: 'India\'s leading renewable solutions - Carbon-negative technology for agriculture, industry, and environmental applications. Based in Pune.',
    keywords: 'Biorefining and Processing,Environmental Stewardship,Green Energy Production,Carbon Sequestration,Super Food & Nutraceuticals'
  });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageBanner 
        title="Our Services" 
        subtitle="Comprehensive bioenergy solutions that meet the evolving needs of the global market through cutting-edge technology and sustainable practices."
        // backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <ServicesSection />
      <FadeUp>
        <div className="bg-gradient-to-l from-cyan-50 to-blue-100 py-20">
          <Technology />
        </div>
      </FadeUp>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Services;

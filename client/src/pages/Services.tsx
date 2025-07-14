
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Services as ServicesSection } from "@/components/Services";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageBanner } from "@/components/PageBanner";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageBanner 
        title="Our Services" 
        subtitle="Comprehensive bioenergy solutions that meet the evolving needs of the global market through cutting-edge technology and sustainable practices."
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <ServicesSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Services;

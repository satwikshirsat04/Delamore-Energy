
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { About as AboutSection } from "@/components/About";
import { Team } from "@/components/Team";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageBanner } from "@/components/PageBanner";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageBanner 
        title="About Us" 
        subtitle="Delamore Renewable Energy is committed to offering practical, economical, and environmentally sustainable solutions in bioenergy through cutting-edge technology."
        backgroundImage="https://images.unsplash.com/photo-1497436072909-f5e4be853fb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <AboutSection />
      <Team />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;

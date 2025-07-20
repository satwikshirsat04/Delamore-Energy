
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { About as AboutSection } from "@/components/About";
import { Team } from "@/components/Team";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageBanner } from "@/components/PageBanner";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Technology } from "@/components/Technology";

const About = () => {
  useDocumentTitle({
  title: 'About Us',
  description: 'Delamore Energy Private Limited | Your trusted partner in renewable energy solutions.',
  keywords: 'renewable energy, cbg, Green Energy Production, Waste Reduction, clean energy, Bio Refinery'
});
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
    
      <PageBanner 
        title="About Us" 
        subtitle="Delamore Renewable Energy is committed to offering practical, economical, and environmentally sustainable solutions in bioenergy through cutting-edge technology."
        backgroundImage="/images/banner/windmill.webp" // Custom image
      />
      <AboutSection />
      {/* <Team /> */}
      <Technology />
      <Footer />
      {/* <WhatsAppFloat /> */}
    </div>
  );
};

export default About;

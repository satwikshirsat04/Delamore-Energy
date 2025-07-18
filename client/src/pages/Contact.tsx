
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact as ContactSection } from "@/components/Contact";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageBanner } from "@/components/PageBanner";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Contact = () => {
  useDocumentTitle({
  title: 'Contact Us',
  description: 'Reach Delamore Energy',
  keywords: 'clean energy, contact, waste to wealth'
});


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageBanner 
        title="Contact Us" 
        subtitle="Get in touch with our team to discuss your sustainable energy needs and explore partnership opportunities."
        // backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <ContactSection />
      <Footer />
      {/* <WhatsAppFloat /> */}
    </div>
  );
};

export default Contact;

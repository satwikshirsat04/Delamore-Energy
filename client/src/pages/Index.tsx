
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Technology } from "@/components/Technology";
import { Products } from "@/components/Products";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FadeUp } from "@/components/animations/FadeUp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FadeUp>
      <About />
      </FadeUp>
      <FadeUp>
      <Services />
      </FadeUp>
      <FadeUp>
      <Technology />
      </FadeUp>
      <FadeUp>
      <Products />
      </FadeUp>
      <FadeUp>
      <Team />
      </FadeUp>
      <FadeUp>
      <Contact />
      </FadeUp>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;

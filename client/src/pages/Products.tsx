import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageBanner } from "@/components/PageBanner";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Products as ProductsSection } from "@/components/Products";

const Products = () => {
  useDocumentTitle({
    title: 'Products',
    description: 'Explore our innovative products designed to transform biomass into sustainable solutions for energy, agriculture, and industry.',
    keywords: 'Biomass Products, Renewable Energy Solutions, Sustainable Agriculture Products'
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageBanner 
        title="Our Products" 
        subtitle="Innovative solutions derived from biomass to power a sustainable future."
      />
      <ProductsSection />
      <Footer />
      {/* <WhatsAppFloat /> */}
    </div>
  );
};

export default Products;
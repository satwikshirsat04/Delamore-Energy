
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageBanner } from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const FAQs = () => {
  useDocumentTitle({
  title: 'FAQs',
  description: 'Frequently asked questions about renewable and environmental benefits answered by Indian experts',
  keywords: 'carbon removal FAQ, clean energy'
});

  const faqs = [
    {
      question: "What is Sustainable Circular Biomass Economy (SCBE)?",
      answer: "SCBE is our innovative approach that transforms biomass waste into valuable products through a zero-waste circular economy model. It maximizes resource utilization while minimizing environmental impact, creating economic value from what was previously considered waste."
    },
    {
      question: "What types of biomass do you process?",
      answer: "We process various types of agricultural and organic waste materials including crop residues, food processing waste, municipal organic waste, and other biomass sources. Our technology can adapt to different feedstock types to maximize value extraction."
    },
    {
      question: "What products do you create from biomass?",
      answer: "Our biorefinery technology produces multiple high-value products including CBG (Compressed Biogas), proteins, superfoods, nutraceuticals, and other valuable materials. This multi-product approach ensures maximum value extraction from each biomass input."
    },
    {
      question: "How does your technology contribute to carbon reduction?",
      answer: "Our technology captures and sequesters carbon during the biomass processing, effectively reducing carbon footprint by up to 85%. We also generate carbon credits through our sustainable practices and help clients achieve their decarbonization goals."
    },
    {
      question: "Do you provide consulting services?",
      answer: "Yes, we offer comprehensive consulting services including feasibility studies, technology implementation, process optimization, and ongoing support for biomass-to-energy projects. Our team provides expertise across the entire value chain."
    },
    {
      question: "What is your approach to environmental stewardship?",
      answer: "Environmental stewardship is at the core of our operations. We ensure zero waste generation, promote circular economy principles, and implement sustainable practices throughout our processes. Our goal is to create positive environmental impact while generating economic value."
    },
    {
      question: "How can I partner with Delamore Energy?",
      answer: "We welcome partnerships with research institutions, technology providers, investors, and industry players. You can contact us through our website, email, or phone to discuss potential collaboration opportunities that align with our mission of sustainable energy solutions."
    },
    {
      question: "What geographic regions do you serve?",
      answer: "While our headquarters is in Pune, India, we serve clients globally. Our technology and expertise can be adapted to different regional requirements and biomass availability, making our solutions applicable worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageBanner 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about our biomass technology and sustainable energy solutions."
        backgroundImage="https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Common Questions</h2>
                <p className="text-muted-foreground">
                  Can't find the answer you're looking for? Feel free to contact us directly.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-12 p-6 bg-primary/5 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-2">Still have questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Our team is here to help. Get in touch with us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:info@delamoreenergy.com" 
                    className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-sm font-medium transition-colors"
                  >
                    Email Us
                  </a>
                  <a 
                    href="tel:18008905180" 
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-medium transition-colors"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      {/* <WhatsAppFloat /> */}
    </div>
  );
};

export default FAQs;

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Handshake } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Partners = () => {
  const technologyPartners = [
    {
      name: "CSIR - NCL",
      description: "Council of Scientific and Industrial Research - National Chemical Laboratory",
      type: "Research Institution"
    },
    {
      name: "ARI",
      description: "Agricultural Research Institute",
      type: "Research Institution"
    },
    {
      name: "CMCIR",
      description: "Chemical and Materials Chemistry Industrial Research",
      type: "Research Institution"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageBanner 
        title="Our Partners" 
        subtitle="We collaborate with leading research institutions and industry partners to drive innovation in sustainable biomass technology."
        // backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Technology Partners</h2>
              <p className="text-lg text-muted-foreground">
                Strategic partnerships with premier research institutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {technologyPartners.map((partner, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                    <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {partner.type}
                    </span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-2xl">Partnership Benefits</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Access to cutting-edge research and development capabilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Collaborative innovation in biotechnology and biorefinery processes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Knowledge sharing and technology transfer opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Enhanced credibility and scientific validation of our processes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <div className="flex items-center mb-4">
                  <Handshake className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-2xl">Partnership Opportunities</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Joint research and development projects</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Technology licensing and commercialization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Strategic alliances for market expansion</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Investment and funding partnerships</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Card className="p-8 max-w-2xl mx-auto">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl mb-4">Interested in Partnership?</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We are always looking for new partners who share our vision of creating a sustainable future through innovative biomass solutions. Join us in transforming the global energy landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:info@delamoreenergy.com" 
                    className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-sm font-medium transition-colors w-full sm:w-auto"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="tel:18008905180" 
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-medium transition-colors w-full sm:w-auto"
                  >
                    Call Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Partners;

import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Building,
  Users,
  Handshake,
  Mail,
  Phone
} from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/animations/FadeUp";

const Partners = () => {
  const navigate = useNavigate();

  const technologyPartners = [
    {
      name: "CSIR - NCL",
      description:
        "Council of Scientific and Industrial Research - National Chemical Laboratory",
      type: "Research Institution"
    },
    {
      name: "ARI",
      description: "Agricultural Research Institute",
      type: "Research Institution"
    },
    {
      name: "CMCIR",
      description:
        "Chemical and Materials Chemistry Industrial Research",
      type: "Research Institution"
    }
  ];

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleCallClick = () => {
    window.location.href = "tel:18008905180";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PageBanner
        title="Our Partners"
        subtitle="We collaborate with leading research institutions and industry partners to drive innovation in sustainable biomass technology."
      />

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Technology Partners */}

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technology Partners</h2>
              <p className="text-lg text-muted-foreground">
                Strategic partnerships with premier research institutions
              </p>
            </div>
            <FadeUp>
              <div className="grid md:grid-cols-3 gap-6">
                {technologyPartners.map((partner, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
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
            </FadeUp>
          </section>


          {/* Benefits & Opportunities */}
          <FadeUp>
            <section className="grid lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-primary mr-3" />
                    <CardTitle className="text-2xl">Partnership Benefits</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <ul className="space-y-4 text-muted-foreground">
                    {[
                      "Access to cutting-edge research and development capabilities",
                      "Collaborative innovation in biotechnology and biorefinery processes",
                      "Knowledge sharing and technology transfer opportunities",
                      "Enhanced credibility and scientific validation of our processes"
                    ].map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Opportunities */}
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <div className="flex items-center mb-4">
                    <Handshake className="h-8 w-8 text-primary mr-3" />
                    <CardTitle className="text-2xl">Partnership Opportunities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <ul className="space-y-4 text-muted-foreground">
                    {[
                      "Joint research and development projects",
                      "Technology licensing and commercialization",
                      "Strategic alliances for market expansion",
                      "Investment and funding partnerships"
                    ].map((opportunity, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
          </FadeUp>

          {/* CTA Section */}
          <FadeUp>
            <section className="text-center mt-20">
              <Card className="p-8 max-w-2xl mx-auto">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl mb-4">Interested in Partnership?</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We are always looking for new partners who share our vision of creating a
                    sustainable future through innovative biomass solutions. Join us in
                    transforming the global energy landscape.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <FadeUp>
                      <Button
                        onClick={handleContactClick}
                        className="flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        Contact Us
                      </Button>
                    </FadeUp>
                    <FadeUp>
                      <Button
                        variant="outline"
                        onClick={handleCallClick}
                        className="flex items-center gap-2"
                      >
                        <Phone className="h-4 w-4" />
                        Call Us
                      </Button>
                    </FadeUp>
                  </div>
                </CardContent>
              </Card>
            </section>
          </FadeUp>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Partners;

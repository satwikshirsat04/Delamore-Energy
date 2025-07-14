
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Recycle, Zap, Leaf, Factory } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FadeUp } from "@/components/animations/FadeUp";

const Process = () => {
  const processSteps = [
    {
      step: "01",
      icon: Leaf,
      title: "Biomass Collection",
      description: "Sustainable sourcing of agricultural and organic waste materials from various sources including farms, food processing units, and urban waste."
    },
    {
      step: "02",
      icon: Factory,
      title: "Biorefinery Processing",
      description: "Advanced biotechnology processes break down biomass into valuable components using our proprietary zero-waste technology platform."
    },
    {
      step: "03",
      icon: Zap,
      title: "Value Extraction",
      description: "Multiple high-value products are extracted simultaneously including CBG, proteins, superfoods, and nutraceuticals from the same biomass input."
    },
    {
      step: "04",
      icon: Recycle,
      title: "Circular Economy",
      description: "Complete utilization with zero waste generation, creating a sustainable circular economy model that converts waste into wealth."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageBanner
        title="Our Process"
        subtitle="Our innovative biorefinery process transforms biomass waste into valuable products through sustainable circular economy principles."
      // backgroundImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="space-y-8 mb-16">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <FadeUp>
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <step.icon className="h-8 w-8 text-primary" />
                            </div>
                          </div>
                        </FadeUp>

                        <FadeUp>
                          <div className="flex-grow">
                            <div className="flex items-center mb-4">
                              <span className="text-4xl font-bold text-primary/40 mr-4">{step.step}</span>
                              <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </FadeUp>
                      </div>
                    </CardContent>
                  </Card>

                  {index < processSteps.length - 1 && (
                    <div className="flex justify-center my-6">
                      <ArrowDown className="h-8 w-8 text-primary/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp>
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl mb-4">Technology Highlights</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Zero Waste Generation</h4>
                        <p className="text-muted-foreground text-sm">Complete utilization of all biomass components with no waste output</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Recycle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Circular Economy Model</h4>
                        <p className="text-muted-foreground text-sm">Sustainable closed-loop system that maximizes resource efficiency</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Factory className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Advanced Biorefinery</h4>
                        <p className="text-muted-foreground text-sm">Cutting-edge biotechnology for optimal value extraction</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl mb-4">Key Benefits</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">Environmental sustainability and carbon footprint reduction</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">Economic value creation from waste materials</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">Multiple revenue streams from single biomass input</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">Social and economic upliftment of communities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">Carbon sequestration and credits generation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeUp>
        </div>
      </div>


      <Footer />
      <WhatsAppFloat />
    </div >
  );
};

export default Process;

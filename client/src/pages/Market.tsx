
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Globe, Leaf, Zap, Users, Building } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Market = () => {
  const marketData = [
    {
      icon: Globe,
      title: "Global Biomass Market",
      value: "₹68.4B",
      description: "Expected to reach by 2025",
      growth: "+8.5% CAGR"
    },
    {
      icon: Leaf,
      title: "Carbon Credits Market",
      value: "₹1T",
      description: "Projected market size by 2037",
      growth: "+15% CAGR"
    },
    {
      icon: Zap,
      title: "Bioenergy Capacity",
      value: "130 GW",
      description: "Global installed capacity",
      growth: "+7% Annual"
    }
  ];

  const opportunities = [
    {
      icon: Users,
      title: "Rural Employment",
      description: "Creating sustainable livelihoods in rural communities through biomass collection and processing."
    },
    {
      icon: Building,
      title: "Industrial Partnerships",
      description: "Collaborating with industries to convert their waste streams into valuable products."
    },
    {
      icon: TrendingUp,
      title: "Market Expansion",
      description: "Growing demand for sustainable energy solutions and circular economy models."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageBanner 
        title="Market Opportunities" 
        subtitle="Exploring the growing global market for sustainable biomass solutions and circular economy innovations."
        // backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Market Statistics */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Market Statistics</h2>
              <p className="text-lg text-muted-foreground">
                The biomass and renewable energy market is experiencing unprecedented growth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {marketData.map((item, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                    <p className="text-muted-foreground mb-2">{item.description}</p>
                    <span className="text-sm text-green-600 font-semibold">{item.growth}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Market Opportunities */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Market Opportunities</h2>
              <p className="text-lg text-muted-foreground">
                Strategic opportunities in the evolving biomass economy
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {opportunities.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Market Insights */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl mb-4">Global Trends</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">Increasing focus on circular economy and waste reduction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">Growing demand for sustainable energy alternatives</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">Government incentives for renewable energy projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">Corporate sustainability commitments driving demand</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl mb-4">Our Advantage</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">Zero-waste technology platform</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">Multiple revenue streams from single input</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">Proven track record and expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">Strong research and development partnerships</span>
                  </div>
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

export default Market;

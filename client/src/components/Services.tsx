
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, Leaf, Zap, Cog, Truck, Users, TreePine, Apple } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Factory,
      title: "Biorefining and Processing",
      description: "Advanced biomass processing technology for maximum value extraction"
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Responsible environmental practices and sustainable solutions"
    },
    {
      icon: Zap,
      title: "Green Energy Production",
      description: "Clean, renewable energy generation from biomass resources"
    },
    {
      icon: Cog,
      title: "Technology and Innovation",
      description: "Cutting-edge biotechnology and innovative processing methods"
    },
    {
      icon: Truck,
      title: "Distribution and Logistics",
      description: "Efficient supply chain and distribution network management"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Social and economic upliftment through sustainable practices"
    },
    {
      icon: TreePine,
      title: "Carbon Sequestration",
      description: "Carbon capture and storage for environmental decarbonization"
    },
    {
      icon: Apple,
      title: "Super Food & Nutraceuticals",
      description: "Production of high-value nutritional and health products"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive bioenergy solutions that meet the evolving needs of the global market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

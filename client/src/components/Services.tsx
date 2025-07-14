import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, Leaf, Zap, Cog, Truck, Users, TreePine, Apple } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Factory,
      title: "Biorefining and Processing",
      description: "Advanced biomass processing technology for maximum value extraction",
      gradient: "from-gray-800 to-gray-900"
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Responsible environmental practices and sustainable solutions",
      gradient: "from-green-900 to-green-800"
    },
    {
      icon: Zap,
      title: "Green Energy Production",
      description: "Clean, renewable energy generation from biomass resources",
      gradient: "from-yellow-800 to-yellow-900"
    },
    {
      icon: Cog,
      title: "Technology and Innovation",
      description: "Cutting-edge biotechnology and innovative processing methods",
      gradient: "from-blue-900 to-blue-800"
    },
    {
      icon: Truck,
      title: "Distribution and Logistics",
      description: "Efficient supply chain and distribution network management",
      gradient: "from-orange-900 to-orange-800"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Social and economic upliftment through sustainable practices",
      gradient: "from-purple-900 to-purple-800"
    },
    {
      icon: TreePine,
      title: "Carbon Sequestration",
      description: "Carbon capture and storage for environmental decarbonization",
      gradient: "from-teal-900 to-teal-800"
    },
    {
      icon: Apple,
      title: "Super Food & Nutraceuticals",
      description: "Production of high-value nutritional and health products",
      gradient: "from-red-900 to-red-800"
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
            <Card 
              key={index} 
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${service.gradient} border border-gray-700/50`}
            >
              <div className="p-6 h-full flex flex-col">
                <CardHeader className="text-center pb-4 px-0">
                  <div className={`w-16 h-16 bg-black/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-black/30 transition-colors backdrop-blur-sm border border-gray-700/30`}>
                    <service.icon className={`h-8 w-8 ${service.icon === Zap ? 'text-yellow-400' : 'text-white'}`} />
                  </div>
                  <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0 flex-grow">
                  <p className="text-white/80 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
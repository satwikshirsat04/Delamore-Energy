import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, Leaf, Zap, Cog, Truck, Users, TreePine, Apple } from 'lucide-react';
import { FadeUp } from './animations/FadeUp';

export const Services = () => {
  const services = [
    {
      icon: Factory,
      title: "Biorefining and Processing",
      description: "Advanced biomass processing technology for maximum value extraction",
      image: "/images/services/biorefining.webp"
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Responsible environmental practices and sustainable solutions",
      image: "/images/services/env.webp"
    },
    {
      icon: Zap,
      title: "Green Energy Production",
      description: "Clean, renewable energy generation from biomass resources",
      image: "/images/services/greenenergy.webp"
    },
    {
      icon: Cog,
      title: "Technology and Innovation",
      description: "Cutting-edge biotechnology and innovative processing methods",
      image: "/images/services/tech.webp"
    },
    {
      icon: Truck,
      title: "Distribution and Logistics",
      description: "Efficient supply chain and distribution network management",
      image: "/images/services/distribution.webp"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Social and economic upliftment through sustainable practices",
      image: "/images/services/community2.jpg"
    },
    {
      icon: TreePine,
      title: "Carbon Sequestration",
      description: "Carbon capture and storage for environmental decarbonization",
      image: "/images/services/carbonseq.webp"
    },
    {
      icon: Apple,
      title: "Super Food & Nutraceuticals",
      description: "Production of high-value nutritional and health products",
      image: "/images/services/superfood.webp"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2> */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive bioenergy solutions that meet the evolving needs of the global market
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-700/50 relative overflow-hidden"
            >
              {/* Image background with overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
              </div>
              
              <FadeUp>
                <div className="p-6 h-full flex flex-col relative z-10">
                  <CardHeader className="text-center pb-4 px-0">
                    <div className="w-16 h-16 bg-black/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-black/30 transition-colors backdrop-blur-sm border border-gray-700/30">
                      <service.icon className={`h-8 w-8 ${service.icon === Zap ? 'text-yellow-400' : 'text-white'}`} />
                    </div>
                    <FadeUp>
                      <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                    </FadeUp>
                  </CardHeader>

                  <CardContent className="px-0 pb-0 flex-grow">
                    <p className="text-white/80 text-center text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </div>
              </FadeUp>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
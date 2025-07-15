import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Droplets, Apple, Zap, Pill, Award, Recycle, Sprout } from 'lucide-react';
import { FadeUp } from './animations/FadeUp';

export const Products = () => {
  const products = [
    {
      icon: Leaf,
      title: "CBG",
      description: "High-quality compressed biogas for clean energy applications",
      category: "Energy",
      gradient: "from-gray-800 to-gray-900"
    },
    {
      icon: Droplets,
      title: "Protein",
      description: "Plant-based protein for nutritional and industrial applications",
      category: "Nutrition",
      gradient: "from-green-900 to-green-800"
    },
    {
      icon: Apple,
      title: "Superfood",
      description: "Nutrient-rich superfood products for enhanced health benefits",
      category: "Health",
      gradient: "from-red-900 to-red-800"
    },
    {
      icon: Zap,
      title: "Prom",
      description: "Specialized bio-materials for various industrial applications",
      category: "Materials",
      gradient: "from-yellow-900 to-yellow-800"
    },
    {
      icon: Pill,
      title: "Nutraceuticals",
      description: "Health-promoting compounds with therapeutic benefits",
      category: "Health",
      gradient: "from-purple-900 to-purple-800"
    }
  ];

  const services = [
    {
      icon: Award,
      title: "Carbon Credits",
      description: "Environmental credits through carbon sequestration",
      gradient: "from-teal-900 to-teal-800",
      bgImage: "/images/products/carboncredits.webp"
    },
    {
      icon: Recycle,
      title: "Waste to Wealth",
      description: "Converting waste materials into valuable products",
      gradient: "from-blue-900 to-blue-800",
      bgImage: "/images/products/wtw.webp"
    },
    {
      icon: Sprout,
      title: "Carbon Sequestration",
      description: "Capturing and storing carbon for environmental benefit",
      gradient: "from-emerald-900 to-emerald-800",
      bgImage: "/images/products/carbonseq.webp"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Products & Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative biomass-derived products that contribute to a sustainable future
          </p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${product.gradient} border border-gray-700/50`}
              >
                <FadeUp>
                <div className="p-6 h-full flex flex-col">
                  <CardHeader className="text-center pb-4 px-0">
                    <div className="w-16 h-16 bg-black/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-black/30 transition-colors backdrop-blur-sm border border-gray-700/30">
                      <product.icon className={`h-8 w-8 ${product.icon === Zap ? 'text-yellow-400' : 'text-white'}`} />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <FadeUp>
                      <CardTitle className="text-lg text-white">{product.title}</CardTitle>
                      </FadeUp>
                      <Badge variant="secondary" className="text-xs bg-black/20 text-white/90 border-gray-600">
                        {product.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="px-0 pb-0 flex-grow">
                    <p className="text-white/80 text-center text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </div>
                </FadeUp>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Environmental Solutions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-700/50 relative overflow-hidden`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0 opacity-95"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} z-0 opacity-60`} />
                
                <FadeUp>
                  <div className="p-6 h-full flex flex-col relative z-10">
                    <CardHeader className="text-center pb-4 px-0">
                      <div className="w-16 h-16 bg-black/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-black/30 transition-colors backdrop-blur-sm border border-gray-700/30">
                        <service.icon className="h-8 w-8 text-white" />
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
      </div>
    </section>
  );
};

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Droplets, Apple, Zap, Pill, Award, Recycle, Sprout } from 'lucide-react';

export const Products = () => {
  const products = [
    {
      icon: Leaf,
      title: "CBG",
      description: "High-quality compressed biogas for clean energy applications",
      category: "Energy"
    },
    {
      icon: Droplets,
      title: "Protein",
      description: "Plant-based protein for nutritional and industrial applications",
      category: "Nutrition"
    },
    {
      icon: Apple,
      title: "Superfood",
      description: "Nutrient-rich superfood products for enhanced health benefits",
      category: "Health"
    },
    {
      icon: Zap,
      title: "Prom",
      description: "Specialized bio-materials for various industrial applications",
      category: "Materials"
    },
    {
      icon: Pill,
      title: "Nutraceuticals",
      description: "Health-promoting compounds with therapeutic benefits",
      category: "Health"
    }
  ];

  const services = [
    {
      icon: Award,
      title: "Carbon Credits",
      description: "Environmental credits through carbon sequestration",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Recycle,
      title: "Waste to Wealth",
      description: "Converting waste materials into valuable products",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Sprout,
      title: "Carbon Sequestration",
      description: "Capturing and storing carbon for environmental benefit",
      color: "bg-purple-500/10 text-purple-600"
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
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Products</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <product.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Environmental Solutions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${service.color} group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8" />
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
      </div>
    </section>
  );
};

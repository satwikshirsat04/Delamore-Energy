
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Delamore Energy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We utilize our cutting-edge technology and wide industrial expertise to responsibly address the increasing global demand for green energy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">What We Do</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As a company we are dedicated to develop & implement SCBE - (Sustainable Circular Biomass Economy). At Delamore, we are passionate in providing comprehensive bioenergy solutions that meet the evolving needs of the global market.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our expertise covers food, energy and water sectors stretching our ability and strength to generate resource and wealth from biomass. Our technology produces valuable super food by carbon capture & sequestration, thus providing economic decarbonization solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Biorefining</h4>
              <p className="text-sm text-muted-foreground">Advanced processing technology</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Green Energy</h4>
              <p className="text-sm text-muted-foreground">Sustainable production</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Carbon Capture</h4>
              <p className="text-sm text-muted-foreground">Environmental stewardship</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Super Food</h4>
              <p className="text-sm text-muted-foreground">Nutraceuticals production</p>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-bold text-foreground">Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be instrument of change and innovation in the global persuade of green energy. Driving progress and sustainability through our cutting-edge technology and responsible practices. We envision a future where our endeavours contribute to a cleaner, more efficient, self-sufficient biotransformation frontier fostering economic, social, sustainable growth of mankind.
            </p>
          </Card>

          <Card className="p-8">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-bold text-foreground">Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to develop a comprehensive platform for biotransformation of waste to wealth by encapsulating our indigenous technologies for social and economic upliftment of mankind. By embracing a circular economy, we strive to valorize biomass into valuable end products that enhance quality of life and livelihood inching towards green economy.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

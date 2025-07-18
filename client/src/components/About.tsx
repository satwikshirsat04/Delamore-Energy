import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';
import { FadeUp } from '@/components/animations/FadeUp';

export const About = () => {
  const featureCards = [
    {
      icon: Target,
      title: "Biorefining",
      description: "Advanced processing technology",
      image: "/images/about/biorefining.webp"
    },
    {
      icon: Eye,
      title: "Green Energy",
      description: "Sustainable production",
      image: "/images/about/greenenergy.webp"
    },
    {
      icon: Heart,
      title: "Carbon Capture",
      description: "Environmental stewardship",
      image: "/images/about/carbonseq.webp"
    },
    {
      icon: Target,
      title: "Super Food",
      description: "Nutraceuticals production",
      image: "/images/about/superfood.webp"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Delamore Energy
          </h2> */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We utilize our cutting-edge technology and wide industrial expertise to responsibly address the increasing global demand for green energy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 ">What We Do</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
              As a company we are dedicated to develop & implement SCBE - (Sustainable Circular Biomass Economy). At Delamore, we are passionate in providing comprehensive bioenergy solutions that meet the evolving needs of the global market.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Our expertise covers food, energy and water sectors stretching our ability and strength to generate resource and wealth from biomass. Our technology produces valuable super food by carbon capture & sequestration, thus providing economic decarbonization solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {featureCards.map((card, index) => (
              <FadeUp key={index}>
                <Card className="p-6 text-center relative overflow-hidden h-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${card.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/50" />
                  </div>
                  <FadeUp>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 text-white">{card.title}</h4>
                    <p className="text-sm text-white">{card.description}</p>
                  </div>
                  </FadeUp>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* <div className="grid md:grid-cols-2 gap-8">
          <FadeUp>
          <Card className="p-8">
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-bold text-foreground">Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-justify">
              To be instrument of change and innovation in the global persuade of green energy. Driving progress and sustainability through our cutting-edge technology and responsible practices. We envision a future where our endeavours contribute to a cleaner, more efficient, self-sufficient biotransformation frontier fostering economic, social, sustainable growth of mankind.
            </p>
          </Card>
          </FadeUp>

          <FadeUp>
          <Card className="p-8">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-bold text-foreground">Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Our mission is to develop a comprehensive platform for biotransformation of waste to wealth by encapsulating our indigenous technologies for social and economic upliftment of mankind. By embracing a circular economy, we strive to valorize biomass into valuable end products that enhance quality of life and livelihood inching towards green economy.
            </p>
          </Card>
          </FadeUp>

        </div> */}
      </div>
    </section>
  );
};
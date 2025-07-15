import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Recycle, Zap, Droplets } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Technology = () => {
  // Animation counters for the numbers
  const [biomassUtilization, setBiomassUtilization] = useState(0);
  const [wasteGeneration, setWasteGeneration] = useState(0);
  const [valueProducts, setValueProducts] = useState(0);

  useEffect(() => {
    // Animation duration in milliseconds
    const duration = 2000;
    const startTime = Date.now();

    const animateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Animate to 100%
      setBiomassUtilization(Math.floor(progress * 100));
      
      // Animate to 0% (already starts at 0, but this ensures it stays at 0)
      setWasteGeneration(0);
      
      // Animate to 5 (for "Multiple" products - adjust this number as needed)
      setValueProducts(Math.floor(progress * 5));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    // Start the animation
    const animationFrame = requestAnimationFrame(animateCounters);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Technology - Bio Refinery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our biorefinery technology valorizes biomass into a variety of useful products, including food, biofuels, nutraceuticals, energy materials and more.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Zero Waste Technology
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our technology maximizes the production of value added products with zero waste generation contributing to more sustainable and circular green economy, reducing reliance on fossil fuels and eliminating waste, converting it into wealth.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Recycle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Circular Economy</h4>
                  <p className="text-muted-foreground text-sm">Complete utilization of biomass with zero waste generation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Value Addition</h4>
                  <p className="text-muted-foreground text-sm">Maximum value extraction from every component of biomass</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Droplets className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Sustainable Process</h4>
                  <p className="text-muted-foreground text-sm">Environmentally friendly processing methods</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl text-center">Technology Benefits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{biomassUtilization}%</div>
                <div className="text-sm text-muted-foreground">Biomass Utilization</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{wasteGeneration}%</div>
                <div className="text-sm text-muted-foreground">Waste Generation</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{valueProducts > 0 ? valueProducts : 'Multiple'}</div>
                <div className="text-sm text-muted-foreground">Value Products</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
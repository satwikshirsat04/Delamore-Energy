
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startCount = 0;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (end - startCount) + startCount);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-background"
        poster="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      >
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6 floating-animation">
            <Leaf className="h-12 w-12 text-white mr-3" />
            <span className="text-sm font-semibold text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              World's 1st Sustainable Circular Biomass Economy
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight hero-title">
            Harnessing the Power of <span className="text-primary">Biomass</span>
          </h1>
          
          {/* Animated Counters Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 backdrop-blur-sm bg-black/30 p-8 rounded-lg border border-white/10">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <p className="text-white/90 text-lg">Sustainable Solutions Delivered</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={85} suffix="%" />
              </div>
              <p className="text-white/90 text-lg">Carbon Footprint Reduction</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <p className="text-white/90 text-lg">Tons of Waste Converted to Wealth</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center floating-animation">
            <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-white shadow-lg">
              <Link to="/about">
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/20 backdrop-blur-sm">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/20 rounded-full blur-xl floating-animation" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

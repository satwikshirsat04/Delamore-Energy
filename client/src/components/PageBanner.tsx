import { FadeUp } from "./animations/FadeUp";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const PageBanner = ({ 
  title, 
  subtitle, 
  backgroundImage = "/images/plant.jpg" 
}: PageBannerProps) => {
  return (
    <section className="relative h-80 flex items-center justify-center overflow-hidden">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-black" />
        )}
        {/* Stronger dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
      {/* Subtle green accent gradient (matches your logo) */}
      <div className="absolute bg-gradient-to-r from-green-900/20 via-black to-green-900/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-green-500">"</span> {title} <span className="text-green-500">"</span>
          </h1>
          <FadeUp>
          {subtitle && (
            <p className="text-xl md:text-xl text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
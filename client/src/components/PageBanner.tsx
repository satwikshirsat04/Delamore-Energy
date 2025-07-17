import { FadeUp } from "./animations/FadeUp";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const PageBanner = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
}: PageBannerProps) => {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Gradient overlay - light at top, darker at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-black/30 to-black/50"></div>
        {/* Color accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {title}
            </h1>
          </FadeUp>
          <FadeUp>
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium drop-shadow-md">
                {subtitle}
              </p>
            )}
          </FadeUp>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
    </section>
  );
};
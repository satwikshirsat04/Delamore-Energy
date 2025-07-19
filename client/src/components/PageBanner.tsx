import { FadeUp } from "./animations/FadeUp";
import { useEffect, useRef } from "react"; // Add useEffect and useRef

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const PageBanner = ({ 
  title, 
  subtitle, 
  backgroundImage = "/images/windmill.webp" 
}: PageBannerProps) => {
  const bgRef = useRef<HTMLDivElement>(null);

  // Trigger animation on component mount
  useEffect(() => {
    if (bgRef.current) {
      bgRef.current.style.animation = "zoomPan 15s ease-out forwards";
    }
  }, []);

  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image with Animation */}
      <div className="absolute inset-0" ref={bgRef}>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            transform: "scale(1.1)", // Start slightly zoomed in
          }}
        />
        {/* Gradient overlays (unchanged) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
      </div>
      
      {/* Content (unchanged) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <FadeUp>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium drop-shadow-md">
                {subtitle}
              </p>
            </FadeUp>
          )}
        </div>
      </div>
      
      {/* Bottom border (unchanged) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>

      {/* Add CSS for animation (or place in global CSS) */}
      <style jsx>{`
        @keyframes zoomPan {
          0% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(2);
          }
        }
      `}</style>
    </section>
  );
};
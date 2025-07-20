// components/PageBanner.tsx
import { FadeUp } from "./animations/FadeUp";
import { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlayOpacity?: number;
}

export const PageBanner = ({ 
  title, 
  subtitle, 
  backgroundImage = "/images/banner/windmill.webp",
  overlayOpacity = 0.5
}: PageBannerProps) => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      bgRef.current.style.animation = "zoomPan 20s ease-in-out infinite alternate";
    }
  }, []);

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom/Pan Effect */}
      <motion.div 
        className="absolute inset-0"
        ref={bgRef}
        initial={{ opacity: 1 }}
        animate={{ opacity: 5 }}
        transition={{ duration: 1.5 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            transform: "scale(1.2)",
          }}
        />
        {/* Gradient Overlays */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/30 to-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: overlayOpacity }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-green-600/15 to-blue-600/15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </motion.div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <Fade direction="down" triggerOnce damping={0.2} duration={1000}>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {title}
            </motion.h1>
          </Fade>
          
          {subtitle && (
            <Fade direction="up" triggerOnce delay={300} duration={800}>
              <motion.p 
                className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-medium drop-shadow-md"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {subtitle}
              </motion.p>
            </Fade>
          )}
        </div>
      </div>

      {/* Bottom border with fade-in */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />

      <style>{`
        @keyframes zoomPan {
          0% { 
            transform: scale(1.1) translateY(0);
          }
          50% {
            transform: scale(1.15) translateY(-5%);
          }
          100% { 
            transform: scale(1.2) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
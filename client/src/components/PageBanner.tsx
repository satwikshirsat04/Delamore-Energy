
interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const PageBanner = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1497436072909-f5e4be853fb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
}: PageBannerProps) => {
  return (
    <section className="relative h-80 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-black/80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

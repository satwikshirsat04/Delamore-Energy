import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-24 right-8 z-50 flex flex-col gap-3">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-8 h-8 rounded-full bg-black hover:bg-green-700 flex items-center justify-center shadow-lg transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </button>
      )}
      
    </div>
  );
};
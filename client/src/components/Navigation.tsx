import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    // { name: 'Process', href: '/process' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blogs & Podcasts', href: '/blogs-and-podcasts' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-background sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            {/* Logo Image */}
            {/* corner rounded only */}
            <div className="w-10 h-10 rounded overflow-hidden">
              <img 
                src="/images/delamore.jpg" 
                alt="Delamore Energy Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold">
              <span className="text-green-800 dark:text-green-600">Dela</span>
              <span className="text-foreground">more Energy</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  item.name === 'Contact'
                    ? 'bg-primary text-primary-foreground hover:bg-black/100'
                    : isActive(item.href) 
                      ? 'text-primary dark:text-primary-foreground bg-gray-100 dark:bg-gray-800 font-semibold' 
                      : 'text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 dark:border-gray-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-3 text-base font-medium transition-colors rounded-md ${
                    item.name === 'Contact'
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : isActive(item.href) 
                        ? 'text-primary dark:text-primary-foreground bg-gray-100 dark:bg-gray-800'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
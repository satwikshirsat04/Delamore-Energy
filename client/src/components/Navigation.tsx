import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

// Mock components for demonstration
const Link = ({ to, children, className, onClick }) => (
  <a href={to} className={className} onClick={onClick}>
    {children}
  </a>
);

const Button = ({ variant, size, className, onClick, children }) => (
  <button 
    className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${
      variant === 'outline' 
        ? 'border border-input hover:bg-accent hover:text-accent-foreground' 
        : 'bg-primary text-primary-foreground hover:bg-primary/90'
    } ${
      size === 'sm' ? 'h-9 px-3 text-sm' : 'h-10 py-2 px-4'
    } ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => 
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      subItems: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Projects', href: '/projects' }
      ]
    },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Products', href: '/products' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blogs & Podcasts', href: '/blogs-and-podcasts' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => currentPath === href;
  const isSubItemActive = (subItems = []) => 
    subItems.some(item => isActive(item.href));

  // Handle browser history navigation and close dropdowns when clicking outside
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    const handleClickOutside = (event) => {
      const target = event.target;
      if (!target.closest('.about-dropdown')) {
        setIsAboutOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsAboutOpen(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsAboutOpen(false);
    // Update currentPath after a slight delay to ensure the URL has changed
    setTimeout(() => {
      setCurrentPath(window.location.pathname);
    }, 50);
  };

  const handleAboutClick = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo and company name */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0" onClick={handleLinkClick}>
            <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
              <img 
                src="/images/delamore.jpg"
                alt="Delamore Energy Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col sm:block">
              <span className="text-sm sm:text-lg md:text-xl font-bold leading-tight">
                <span className="text-green-800 dark:text-green-400">Dela</span>
                <span className="text-gray-900 dark:text-white">more</span>
              </span>
              <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 sm:ml-1">
                Renewable Energy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative about-dropdown">
                {item.subItems ? (
                  <>
                    <button
                      onClick={handleAboutClick}
                      className={`flex items-center px-2 xl:px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md whitespace-nowrap ${
                        isActive(item.href) || isSubItemActive(item.subItems)
                          ? 'text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 font-semibold' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {item.name}
                      {isAboutOpen ? (
                        <ChevronUp className="ml-1 h-4 w-4 transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                      )}
                    </button>
                    {isAboutOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700 overflow-hidden">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                              isActive(subItem.href)
                                ? 'bg-green-600 text-white'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                            }`}
                            onClick={handleLinkClick}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-2 xl:px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md whitespace-nowrap ${
                      item.name === 'Contact'
                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-sm'
                        : isActive(item.href) 
                          ? 'text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 font-semibold' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Tablet Navigation - Simplified */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            <Link
              to="/"
              className={`px-2 py-2 text-sm font-medium transition-colors rounded-md ${
                isActive('/') ? 'text-green-700 bg-green-50 font-semibold' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <div className="relative about-dropdown">
              <button
                onClick={handleAboutClick}
                className="flex items-center px-2 py-2 text-sm font-medium transition-colors rounded-md text-gray-700 hover:bg-gray-100"
              >
                More
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isAboutOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700 overflow-hidden">
                  {navItems.slice(1).map((item) => (
                    <div key={item.name}>
                      {item.subItems ? (
                        item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`block px-4 py-2 text-sm ${
                              isActive(subItem.href)
                                ? 'bg-green-600 text-white'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                            onClick={handleLinkClick}
                          >
                            {subItem.name}
                          </Link>
                        ))
                      ) : (
                        <Link
                          to={item.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            item.name === 'Contact'
                              ? 'bg-green-600 text-white hover:bg-green-700'
                              : isActive(item.href)
                                ? 'bg-green-100 dark:bg-green-900/20'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          onClick={handleLinkClick}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 dark:border-gray-600 h-10 w-10 p-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="about-dropdown">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={handleAboutClick}
                        className={`flex items-center justify-between w-full px-4 py-3 text-left text-base font-medium transition-colors rounded-lg ${
                          isActive(item.href) || isSubItemActive(item.subItems)
                            ? 'text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {item.name}
                        {isAboutOpen ? (
                          <ChevronUp className="h-5 w-5 transition-transform duration-200" />
                        ) : (
                          <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                        )}
                      </button>
                      <div className={`transition-all duration-300 ease-in-out ${
                        isAboutOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}>
                        <div className="pl-4 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                                isActive(subItem.href)
                                  ? 'text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                              }`}
                              onClick={handleLinkClick}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                        item.name === 'Contact'
                          ? 'bg-green-600 text-white hover:bg-green-700 text-center'
                          : isActive(item.href) 
                            ? 'text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                      }`}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
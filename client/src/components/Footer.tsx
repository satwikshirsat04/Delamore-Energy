import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded overflow-hidden">
                <img 
                  src="/images/delamore white.jpg" 
                  alt="Delamore Energy Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-white">Delamore Renewable Energy Pvt Ltd</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              World's 1st sustainable circular biomass economy, transforming waste into wealth through innovative biotechnology.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com/anuurag997" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/9115100007" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors block py-1">- Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors block py-1">- About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors block py-1">- Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-primary transition-colors block py-1">- Products</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-primary transition-colors block py-1">- Partners</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors block py-1">- Contact</Link></li>
              <li><Link to="/faqs" className="text-gray-400 hover:text-primary transition-colors block py-1">- FAQs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-gray-400 hover:text-primary transition-colors block py-1">- Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors block py-1">- Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-400">
                  Kant Helix, Bhoir Colony, Chinchwad, Pune 411033
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <a href="mailto:info@delamoreenergy.com" className="text-gray-400 hover:text-primary transition-colors">
                  info@delamoreenergy.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <a href="mailto:info@delamoreenergy.com" className="text-gray-400 hover:text-primary transition-colors">
                  admin@delamoreenergy.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <a href="tel:9115100007" className="text-gray-400 hover:text-primary transition-colors">
                  +91 9115100007
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Delamore Energy Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src="images/delamore.jpg" 
                alt="Delamore Energy Logo"
                className="w-full h-full object-cover"
              />
            </div>
              <span className="text-lg font-bold text-white">Delamore Energy Pvt Ltd</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              World's 1st sustainable circular biomass economy, transforming waste into wealth through innovative biotechnology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary text-sm transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary text-sm transition-colors">Services</Link></li>
              {/* <li><Link to="/market" className="text-gray-300 hover:text-primary text-sm transition-colors">Market</Link></li> */}
              <li><Link to="/process" className="text-gray-400 hover:text-primary text-sm transition-colors">Process</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-primary text-sm transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/faqs" className="text-gray-400 hover:text-primary text-sm transition-colors">FAQs</Link></li>
              {/* <li><span className="text-gray-400 text-sm">Biorefining</span></li>
              <li><span className="text-gray-400 text-sm">Carbon Credits</span></li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Kant Helix, Bhoir Colony, Chinchwad, Pune 411033
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@delamoreenergy.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-gray-400 text-sm">18008905180</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Delamore Energy Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

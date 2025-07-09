import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/images/Logo_Simple.png" 
              alt="R&Co Events - Luxury Balloon Decor Toronto" 
              className="h-16 w-auto filter brightness-0 invert"
              width="64"
              height="64"
            />
            <p className="text-gray-300 font-sans leading-relaxed">
              Creating unforgettable moments with luxury balloon decor and bespoke event design throughout the Greater Toronto Area.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/randco.events" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                aria-label="Follow R&Co Events on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                aria-label="Follow R&Co Events on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2 font-sans">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">Portfolio</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200">Packages</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold-400">Services</h3>
            <ul className="space-y-2 font-sans">
              <li><Link to="/services/bridal-showers" className="text-gray-300 hover:text-white transition-colors duration-200">Bridal Showers</Link></li>
              <li><Link to="/services/baby-showers" className="text-gray-300 hover:text-white transition-colors duration-200">Baby Showers</Link></li>
              <li><Link to="/services/corporate" className="text-gray-300 hover:text-white transition-colors duration-200">Corporate Events</Link></li>
              <li><Link to="/services/birthdays" className="text-gray-300 hover:text-white transition-colors duration-200">Birthdays</Link></li>
              <li><Link to="/services/holidays" className="text-gray-300 hover:text-white transition-colors duration-200">Holidays</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold-400">Contact</h3>
            <div className="space-y-3 font-sans">
              <a 
                href="tel:+16479381555" 
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Call R&Co Events at (647) 938-1555"
              >
                <Phone className="h-4 w-4 mr-3 text-gold-400" />
                (647) 938-1555
              </a>
              <a 
                href="mailto:info@randcoevents.ca" 
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Email R&Co Events"
              >
                <Mail className="h-4 w-4 mr-3 text-gold-400" />
                info@randcoevents.ca
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-gold-400 mt-1 flex-shrink-0" />
                <span>Serving the Greater Toronto Area</span>
              </div>
              <a 
                href="https://instagram.com/randco.events" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Follow R&Co Events on Instagram @randco.events"
              >
                <Instagram className="h-4 w-4 mr-3 text-gold-400" />
                @randco.events
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-sans text-sm">
              © 2025 R&Co Events. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy-policy" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
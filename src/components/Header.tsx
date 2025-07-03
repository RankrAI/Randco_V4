import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'Baby Showers', href: '/services/baby-showers' },
        { name: 'Birthdays', href: '/services/birthdays' },
        { name: 'Bridal Showers', href: '/services/bridal-showers' },
        { name: 'Corporate Events', href: '/services/corporate' },
        { name: 'Holidays', href: '/services/holidays' },
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Packages', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/Logo_Simple.png" 
              alt="R&Co Events - Luxury Balloon Decor Toronto" 
              className="h-12 w-auto"
              width="48"
              height="48"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <Link
                      to={item.href}
                      className={`font-sans font-medium transition-colors duration-200 flex items-center ${
                        location.pathname === item.href || location.pathname.startsWith('/services')
                          ? 'text-gold-600'
                          : 'text-charcoal-800 hover:text-gold-600'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Link>
                    <div 
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-charcoal-700 hover:bg-gold-50 hover:text-gold-600 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-sans font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-gold-600'
                        : 'text-charcoal-800 hover:text-gold-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+16479381555" 
              className="flex items-center font-sans font-medium text-charcoal-800 hover:text-gold-600 transition-colors duration-200"
              aria-label="Call R&Co Events at (647) 938-1555"
            >
              <Phone className="h-4 w-4 mr-2" />
              (647) 938-1555
            </a>
            <Link
              to="/contact"
              className="bg-gold-600 text-white px-6 py-2 rounded-full font-sans font-medium hover:bg-gold-700 transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-charcoal-800 hover:bg-gold-50 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white rounded-lg shadow-xl mt-2 py-4 mb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-2 font-sans font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-gold-600 bg-gold-50'
                        : 'text-charcoal-800 hover:text-gold-600 hover:bg-gold-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-1 text-sm text-charcoal-600 hover:text-gold-600 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <a 
                  href="tel:+16479381555" 
                  className="flex items-center px-4 py-2 text-charcoal-800 hover:text-gold-600 font-sans font-medium"
                  aria-label="Call R&Co Events at (647) 938-1555"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (647) 938-1555
                </a>
                <Link
                  to="/contact"
                  className="block mx-4 mt-2 bg-gold-600 text-white px-6 py-2 rounded-full font-sans font-medium text-center hover:bg-gold-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
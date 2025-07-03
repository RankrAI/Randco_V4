import React from 'react';
import { TreePine, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import ContactForm from '../../components/ContactForm';

const Holidays = () => {
  // Updated holiday images with verified paths
  const holidayImages = [
    {
      id: 1,
      src: '/images/holidays/49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg',
      alt: 'Festive holiday party balloon arrangement',
      category: 'party'
    },
    {
      id: 2,
      src: '/images/holidays/339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg',
      alt: 'Festive Christmas holiday balloon decor',
      category: 'christmas'
    },
    {
      id: 3,
      src: '/images/holidays/20210511_193336.jpg',
      alt: 'Beautiful holiday balloon installation with elegant styling',
      category: 'installation'
    },
    {
      id: 4,
      src: '/images/holidays/20210509_113246.jpg',
      alt: 'Festive holiday balloon decor setup',
      category: 'setup'
    }
  ];

  const holidayTypes = [
    {
      icon: TreePine,
      title: 'Christmas & Winter',
      description: 'Magical winter wonderland balloon decor that captures the warmth and joy of the holiday season.',
      features: ['Christmas trees', 'Winter wonderland', 'Festive colors', 'Cozy atmospheres'],
      holidays: ['Christmas', 'New Year\'s Eve', 'Winter Solstice', 'Holiday Parties']
    },
    {
      icon: Heart,
      title: 'Spring & Love',
      description: 'Romantic and fresh balloon designs perfect for celebrating love and new beginnings.',
      features: ['Romantic themes', 'Pastel colors', 'Floral accents', 'Love celebrations'],
      holidays: ['Valentine\'s Day', 'Easter', 'Mother\'s Day', 'Spring Celebrations']
    },
    {
      icon: Sparkles,
      title: 'Summer & Fall',
      description: 'Vibrant and warm balloon decor that celebrates the beauty of changing seasons.',
      features: ['Seasonal colors', 'Harvest themes', 'Outdoor settings', 'Family gatherings'],
      holidays: ['Canada Day', 'Thanksgiving', 'Halloween', 'Harvest Festivals']
    }
  ];

  const seasonalThemes = [
    {
      name: 'Winter Wonderland',
      description: 'Elegant white, silver, and blue balloon arrangements that create a magical winter atmosphere.',
      colors: ['White', 'Silver', 'Ice Blue', 'Champagne'],
      image: '/images/holidays/339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg'
    },
    {
      name: 'Autumn Harvest',
      description: 'Warm and cozy designs featuring rich autumn colors and harvest-inspired elements.',
      colors: ['Burgundy', 'Gold', 'Orange', 'Deep Red'],
      image: '/images/holidays/49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg'
    },
    {
      name: 'Spring Bloom',
      description: 'Fresh and vibrant balloon decor that celebrates renewal and new beginnings.',
      colors: ['Soft Pink', 'Lavender', 'Sage Green', 'Cream'],
      image: '/images/holidays/20210511_193336.jpg'
    },
    {
      name: 'Summer Celebration',
      description: 'Bright and cheerful designs perfect for outdoor gatherings and summer festivities.',
      colors: ['Coral', 'Turquoise', 'Sunny Yellow', 'White'],
      image: '/images/holidays/20210509_113246.jpg'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cream-100 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <TreePine className="h-8 w-8 text-gold-600 mr-3" />
                <span className="font-sans text-gold-600 font-semibold">Holiday Celebrations</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">
                Celebrate Every Season
              </h1>
              <p className="font-sans text-xl text-charcoal-600 leading-relaxed mb-8">
                Transform your holiday gatherings into magical family moments with our festive balloon decor. From cozy Christmas celebrations to vibrant summer parties, we create seasonal designs that capture the spirit of every holiday with warmth and joy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gold-600 text-white px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Plan Holiday Event
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-600 hover:text-white transition-colors duration-200 text-center"
                >
                  View Holiday Gallery
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/holidays/49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg"
                alt="Festive holiday balloon decor by R&Co Events"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                style={{ objectPosition: 'center center' }}
                width="600"
                height="384"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="font-serif text-2xl font-bold text-gold-600">50+</p>
                <p className="font-sans text-sm text-charcoal-600">Holiday Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Celebrations for Every Season
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              From intimate family gatherings to grand holiday parties, we create balloon decor that captures the magic of every season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {holidayTypes.map((holiday, index) => (
              <div key={index} className="bg-cream-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <holiday.icon className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-4">{holiday.title}</h3>
                <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">{holiday.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-sans font-semibold text-charcoal-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {holiday.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="font-sans text-charcoal-700 flex items-center">
                        <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans font-semibold text-charcoal-900 mb-3">Perfect For:</h4>
                  <div className="space-y-1">
                    {holiday.holidays.map((hol, holIndex) => (
                      <span key={holIndex} className="block font-sans text-sm text-charcoal-600">
                        • {hol}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Themes */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Seasonal Themes
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Choose from our curated seasonal themes or let us create something completely custom for your holiday celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasonalThemes.map((theme, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={theme.image}
                  alt={`${theme.name} holiday balloon decor theme`}
                  className="w-full h-64 object-cover"
                  style={{ objectPosition: 'center center' }}
                  width="400"
                  height="256"
                />
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-4">{theme.name}</h3>
                  <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">{theme.description}</p>
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900 mb-3">Color Palette:</h4>
                    <div className="flex flex-wrap gap-2">
                      {theme.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-sans">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Holiday Portfolio
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Browse our collection of festive holiday decor that has brought seasonal magic to family celebrations.
            </p>
          </div>

          <Gallery images={holidayImages} columns={2} className="mb-12" />

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-gold-600 text-white px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-700 transition-colors duration-200"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Create Holiday Magic Together"
            subtitle="Let's design festive balloon decor that brings your family's holiday celebration to life with warmth and joy"
          />
        </div>
      </section>
    </div>
  );
};

export default Holidays;
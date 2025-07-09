import React from 'react';
import { Heart, Camera, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import ContactForm from '../../components/ContactForm';

const BridalShowers = () => {
  const bridalShowerImages = [
    {
      id: 1,
      src: '/images/bridal-showers/LandingPage.webp',
      alt: 'Romantic bridal shower balloon arch with elegant pink and gold design',
      category: 'arch'
    },
    {
      id: 2,
      src: '/images/bridal-showers/20230716_105259.webp',
      alt: 'Elegant bridal shower balloon centerpiece',
      category: 'centerpiece'
    },
    {
      id: 3,
      src: '/images/bridal-showers/DSC_2863.webp',
      alt: 'Elegant bridal shower welcome sign with balloon accents',
      category: 'welcome'
    },
    {
      id: 4,
      src: '/images/bridal-showers/20230716_105259.webp',
      alt: 'Elegant bridal shower balloon centerpiece with romantic styling',
      category: 'centerpiece'
    }
  ];

  const services = [
    {
      icon: Heart,
      title: 'Romantic Archways & Focal Points',
      description: 'Transform your bridal shower venue with stunning balloon arches that create the perfect romantic atmosphere and serve as breathtaking centerpieces for your celebration.',
      features: ['Custom-designed archways for gift-opening areas and ceremony spaces', 'Elegant entrance arches that welcome guests in style', 'Photo-worthy focal points that complement your wedding theme', 'Various sizes and styles from intimate accents to grand installations']
    },
    {
      icon: Sparkles,
      title: 'Personalized Backdrops & Complete Welcome Experience',
      description: 'Create a cohesive, Instagram-worthy experience from the moment guests arrive with our comprehensive backdrop and signage solutions.',
      features: ['Custom balloon backdrops featuring the bride\'s name or initials', 'Personalized welcome signs with elegant balloon accents', 'Stunning entrance archways that set the tone for your celebration', 'Sophisticated helium centerpieces for dining and lounge areas', 'Themed photo walls that tell your unique love story']
    },
    {
      icon: Camera,
      title: 'Seamless Color & Theme Integration',
      description: 'Your bridal shower should feel like a preview of your wedding day magic, with every detail perfectly coordinated to your vision.',
      features: ['Expert color matching to your exact wedding palette', 'Theme incorporation from garden party to modern minimalism', 'Cohesive design elements that tie all decorations together', 'Sophisticated styling that reflects your personal aesthetic', 'Harmonious atmosphere creation for your special milestone moment']
    }
  ];

  const themes = [
    {
      name: 'Garden Party',
      description: 'Soft pastels with floral accents for an outdoor or garden-inspired celebration.',
      colors: ['Blush Pink', 'Sage Green', 'Cream', 'Gold'],
      image: '/images/bridal-showers/LandingPage.webp'
    },
    {
      name: 'Elegant Romance',
      description: 'Classic romantic colors with sophisticated balloon arrangements.',
      colors: ['Rose Gold', 'Burgundy', 'Ivory', 'Champagne'],
      image: '/images/bridal-showers/20230716_105259.webp'
    },
    {
      name: 'Modern Chic',
      description: 'Contemporary designs with clean lines and trendy color combinations.',
      colors: ['White', 'Gold', 'Marble', 'Nude'],
      image: '/images/bridal-showers/20230716_105259.webp'
    },
    {
      name: 'Welcome Signs and Arches',
      description: 'Personalized welcome displays with elegant signage and coordinated balloon arches that greet guests in style.',
      colors: ['Champagne', 'Ivory', 'Rose Gold', 'Soft Blush'],
      image: '/images/bridal-showers/DSC_2863.webp'
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
                <Heart className="h-8 w-8 text-gold-600 mr-3" />
                <span className="font-sans text-gold-600 font-semibold">Bridal Shower Services</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">
                Celebrate the Bride-to-Be
              </h1>
              <p className="font-sans text-xl text-charcoal-600 leading-relaxed mb-8">
                Create the perfect romantic atmosphere for the bride's special celebration with our elegant balloon decor. From intimate gatherings to grand parties, we design sophisticated decor that honors this beautiful milestone moment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gold-600 text-white px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Plan Bridal Shower
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-600 hover:text-white transition-colors duration-200 text-center"
                >
                  View Gallery
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/bridal-showers/LandingPage.webp"
                alt="Elegant bridal shower balloon decor by R&Co Events"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                style={{ objectPosition: 'center center' }}
                width="600"
                height="384"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="font-serif text-2xl font-bold text-gold-600">75+</p>
                <p className="font-sans text-sm text-charcoal-600">Bridal Showers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Bridal Shower Services
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Comprehensive balloon decor solutions for every aspect of the bridal shower celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-cream-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-4">{service.title}</h3>
                <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="font-sans text-charcoal-700 flex items-start">
                      <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Popular Themes
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Choose from our curated themes or let us create something completely custom for the bride's style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {themes.map((theme, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={theme.image}
                  alt={`${theme.name} bridal shower theme by R&Co Events`}
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
              Bridal Shower Portfolio
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Browse our collection of romantic bridal shower decor that has celebrated brides-to-be.
            </p>
          </div>

          <Gallery images={bridalShowerImages} columns={4} className="mb-12" />

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

      {/* Planning Tips */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Planning Your Bridal Shower
            </h2>
            <p className="font-sans text-xl text-charcoal-600">
              Tips to help you create the perfect celebration for the bride-to-be.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-6">Design Considerations</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Bride's Style</h4>
                    <p className="font-sans text-charcoal-600">Consider the bride's personal style and theme for cohesive design.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Venue Space</h4>
                    <p className="font-sans text-charcoal-600">Work with your venue's layout to maximize visual impact.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Photo Moments</h4>
                    <p className="font-sans text-charcoal-600">Plan decor that creates beautiful photo opportunities.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-6">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3" />
                  <span className="font-sans text-charcoal-700">Design consultation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3" />
                  <span className="font-sans text-charcoal-700">Custom color matching</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3" />
                  <span className="font-sans text-charcoal-700">Professional setup</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3" />
                  <span className="font-sans text-charcoal-700">Setup and takedown</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3" />
                  <span className="font-sans text-charcoal-700">Photography assistance</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3" />
                  <span className="font-sans text-charcoal-700">Quality guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Plan the Perfect Bridal Shower"
            subtitle="Let's create a beautiful celebration that honors the bride-to-be in style"
          />
        </div>
      </section>
    </div>
  );
};

export default BridalShowers;
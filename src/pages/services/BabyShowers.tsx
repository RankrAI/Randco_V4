import React from 'react';
import { Baby, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import ContactForm from '../../components/ContactForm';

const BabyShowers = () => {
  const babyShowerImages = [
    {
      id: 1,
      src: '/images/baby-showers/IMG_0796.webp',
      alt: 'Sweet baby shower balloon centerpiece with pastel colors',
      category: 'setup'
    },
    {
      id: 2,
      src: '/images/baby-showers/C47AB584-B5E7-4C9A-98BB-521B34F10F71.webp',
      alt: 'Baby shower balloon backdrop with soft colors',
      category: 'backdrop'
    },
    {
      id: 3,
      src: '/images/baby-showers/20221015_175737 (1).webp',
      alt: 'Over the moon baby shower balloon display with celestial theme',
      category: 'celestial'
    },
    {
      id: 4,
      src: '/images/baby-showers/BabyShower.webp',
      alt: 'Beautiful baby shower balloon display with elegant styling',
      category: 'display'
    }
  ];

  const services = [
    {
      icon: Baby,
      title: 'Gender Reveals',
      description: 'Create magical moments with surprise balloon reveals that announce the baby\'s gender in style.',
      features: ['Pop reveals', 'Color-coordinated displays', 'Interactive elements', 'Photo-worthy moments']
    },
    {
      icon: Heart,
      title: 'Themed Displays',
      description: 'Custom balloon decor that matches your chosen baby shower theme and nursery colors.',
      features: ['Animal themes', 'Storybook characters', 'Nursery rhymes', 'Custom color schemes']
    },
    {
      icon: Sparkles,
      title: 'Welcome Baby',
      description: 'Sweet and whimsical designs that celebrate the upcoming arrival with joy and anticipation.',
      features: ['Welcome banners', 'Cloud displays', 'Star arrangements', 'Angel themes']
    }
  ];

  const themes = [
    {
      name: 'Teddy Bear Picnic',
      description: 'Adorable teddy bear-inspired designs with warm, cozy colors perfect for welcoming your little cub.',
      colors: ['Honey Brown', 'Cream', 'Soft Pink', 'Sage Green'],
      image: '/images/baby-showers/IMG_0796.webp'
    },
    {
      name: 'Little Explorer',
      description: 'Adventure-themed decorations perfect for families who love to explore the world together.',
      colors: ['Forest Green', 'Adventure Blue', 'Compass Gold', 'Earth Brown'],
      image: '/images/baby-showers/C47AB584-B5E7-4C9A-98BB-521B34F10F71.webp'
    },
    {
      name: 'Over The Moon',
      description: 'Celestial-inspired designs with stars, moons, and dreamy elements that reach for the sky.',
      colors: ['Midnight Blue', 'Silver', 'Gold', 'Soft White'],
      image: '/images/baby-showers/20221015_175737 (1).webp'
    },
    {
      name: 'Sweet Simplicity',
      description: 'Clean, minimalist designs with soft colors and elegant balloon arrangements.',
      colors: ['Blush Pink', 'Sage Green', 'Cream', 'White'],
      image: '/images/baby-showers/BabyShower.webp'
    }
  ];

  const genderOptions = [
    {
      type: 'Boy',
      colors: ['Soft Blue', 'Navy', 'White', 'Silver'],
      themes: ['Little Prince', 'Nautical', 'Elephant', 'Stars & Moon']
    },
    {
      type: 'Girl',
      colors: ['Blush Pink', 'Rose Gold', 'White', 'Lavender'],
      themes: ['Little Princess', 'Butterfly Garden', 'Swan Lake', 'Floral Dreams']
    },
    {
      type: 'Neutral',
      colors: ['Yellow', 'Green', 'White', 'Gold'],
      themes: ['Sunshine', 'Garden Party', 'Rainbow', 'Woodland']
    },
    {
      type: 'Surprise',
      colors: ['White', 'Gold', 'Silver', 'Surprise Inside'],
      themes: ['Gender Reveal', 'Mystery Box', 'Pop Surprise', 'Big Reveal']
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
                <Baby className="h-8 w-8 text-gold-600 mr-3" />
                <span className="font-sans text-gold-600 font-semibold">Baby Shower Services</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">
                Welcome Baby with Joy
              </h1>
              <p className="font-sans text-xl text-charcoal-600 leading-relaxed mb-8">
                Celebrate the upcoming arrival with sweet and whimsical balloon decor that captures the excitement of welcoming a new baby. From gender reveals to themed celebrations, we create magical moments that honor this special milestone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gold-600 text-white px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Plan Baby Shower
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
                src="/images/baby-showers/BabyShower.webp"
                alt="Sweet baby shower balloon decor by R&Co Events"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                style={{ objectPosition: 'center center' }}
                width="600"
                height="384"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="font-serif text-2xl font-bold text-gold-600">100+</p>
                <p className="font-sans text-sm text-charcoal-600">Baby Showers</p>
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
              Baby Shower Services
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Comprehensive balloon decor solutions for every type of baby celebration.
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
                    <li key={featureIndex} className="font-sans text-charcoal-700 flex items-center">
                      <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gender Options */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              For Every Baby
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Whether you know the gender or want to keep it a surprise, we have beautiful options for every celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {genderOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4 text-center">{option.type}</h3>
                
                <div className="mb-6">
                  <h4 className="font-sans font-semibold text-charcoal-900 mb-3">Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {option.colors.map((color, colorIndex) => (
                      <span key={colorIndex} className="bg-gold-100 text-gold-700 px-2 py-1 rounded-full text-xs font-sans">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-sans font-semibold text-charcoal-900 mb-3">Themes:</h4>
                  <ul className="space-y-1">
                    {option.themes.map((theme, themeIndex) => (
                      <li key={themeIndex} className="font-sans text-sm text-charcoal-600">
                        • {theme}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Popular Themes
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Choose from our curated themes or let us create something completely custom for your baby shower.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {themes.map((theme, index) => (
              <div key={index} className="bg-cream-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={theme.image}
                  alt={`${theme.name} baby shower theme by R&Co Events`}
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
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Baby Shower Portfolio
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Browse our collection of sweet baby shower decor that has welcomed new arrivals.
            </p>
          </div>

          <Gallery images={babyShowerImages} columns={3} className="mb-12" />

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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Plan the Perfect Baby Shower"
            subtitle="Let's create a sweet celebration that welcomes your little one with love and joy"
          />
        </div>
      </section>
    </div>
  );
};

export default BabyShowers;
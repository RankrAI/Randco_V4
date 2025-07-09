import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Building, Gift, Users, Baby, TreePine } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Baby Showers',
      description: 'Sweet and whimsical balloon designs that welcome the new arrival with joy, love, and celebration.',
      image: '/images/baby-showers/BabyShower.webp',
      icon: Baby,
      link: '/services/baby-showers',
      features: ['Gender Reveals', 'Themed Displays', 'Nursery Colors', 'Interactive Elements']
    },
    {
      title: 'Birthdays',
      description: 'Make birthdays unforgettable with custom balloon designs that bring joy and wonder to celebrations of any age.',
      image: '/images/birthdays/IMG_5429.webp',
      icon: Gift,
      link: '/services/birthdays',
      features: ['Themed Designs', 'Number Displays', 'Interactive Elements', 'Photo Opportunities']
    },
    {
      title: 'Bridal Showers',
      description: 'Elegant and romantic balloon decor that celebrates the bride-to-be with sophisticated charm and luxury styling.',
      image: '/images/bridal-showers/LandingPage.webp',
      icon: Heart,
      link: '/services/bridal-showers',
      features: ['Romantic Arches', 'Photo Backdrops', 'Table Centerpieces', 'Gift Table Decor']
    },
    {
      title: 'Corporate Events',
      description: 'Professional balloon decor that elevates your corporate gatherings with luxury and sophistication.',
      image: '/images/corporate/20240617_192834.webp',
      icon: Building,
      link: '/services/corporate',
      features: ['Brand Integration', 'Conference Decor', 'Product Launches', 'Networking Events']
    },
    {
      title: 'Holidays',
      description: 'Festive balloon decor for seasonal celebrations, bringing holiday magic to your special gatherings.',
      image: '/images/holidays/49C24FD0-D7BB-4870-ACA3-32B6C2476B29.webp',
      icon: TreePine,
      link: '/services/holidays',
      features: ['Seasonal Themes', 'Holiday Colors', 'Festive Displays', 'Family Gatherings']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-100 to-gold-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">
            Bespoke Celebrations
          </h1>
          <p className="font-sans text-xl md:text-2xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            From intimate family gatherings to grand celebrations, we create luxury balloon decor that transforms any event into an extraordinary experience. Each design is crafted with love, as if we were planning for our own family.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={service.image}
                    alt={`${service.title} balloon decor by R&Co Events`}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    width="600"
                    height="320"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <service.icon className="h-8 w-8 text-gold-400 mr-3" />
                      <h3 className="font-serif text-3xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="font-sans text-lg mb-6 text-gray-200">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="inline-flex items-center bg-gold-600 text-white px-6 py-3 rounded-full font-sans font-semibold hover:bg-gold-700 transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="mt-8 bg-cream-50 rounded-xl p-6">
                  <h4 className="font-serif text-xl font-semibold text-charcoal-900 mb-4">What's Included:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="font-sans text-charcoal-600 flex items-center">
                        <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Family Process */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Our Family Process
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              How three sisters work together to bring your vision to life with love, luxury, and attention to every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gold-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-2xl font-bold">
                1
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4">Heart-to-Heart</h3>
              <p className="font-sans text-charcoal-600 leading-relaxed">
                We start with a real conversation about your dreams, not just logistics. Understanding your vision is our first priority.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-2xl font-bold">
                2
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4">Bespoke Design</h3>
              <p className="font-sans text-charcoal-600 leading-relaxed">
                Our team creates detailed, custom designs tailored specifically to your celebration and family story.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-2xl font-bold">
                3
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4">Family Craftsmanship</h3>
              <p className="font-sans text-charcoal-600 leading-relaxed">
                We craft each element with love and precision, using premium materials and treating your event as our own.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-2xl font-bold">
                4
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4">Your Wow Moment</h3>
              <p className="font-sans text-charcoal-600 leading-relaxed">
                Experience the magic when you walk in and see your vision brought to life with family love and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="font-sans text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your upcoming celebration and create something truly extraordinary together. We can't wait to welcome you into our family and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-600 text-white px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-700 transition-colors duration-200 flex items-center justify-center"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-600 hover:text-white transition-colors duration-200"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
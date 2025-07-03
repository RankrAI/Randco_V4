import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Reduced portfolio images - only essential ones
  const portfolioImages = [
    // Baby Showers - reduced to 3
    {
      id: 1,
      src: '/images/baby-showers/IMG_0796.JPEG',
      alt: 'Sweet baby shower balloon centerpiece with pastel colors',
      category: 'baby'
    },
    {
      id: 2,
      src: '/images/baby-showers/BabyShower.jpg',
      alt: 'Beautiful baby shower balloon display with elegant styling',
      category: 'baby'
    },
    {
      id: 3,
      src: '/images/baby-showers/20220731_185900.jpg',
      alt: 'Baby shower balloon decor setup',
      category: 'baby'
    },
    // Birthdays - reduced to 4
    {
      id: 4,
      src: '/images/birthdays/IMG_5429.JPG',
      alt: 'Stunning birthday party balloon arch with vibrant colors',
      category: 'birthday'
    },
    {
      id: 5,
      src: '/images/birthdays/IMG_2972.jpg',
      alt: 'Colorful birthday party balloon decoration',
      category: 'birthday'
    },
    {
      id: 6,
      src: '/images/birthdays/IMG_2705.JPG',
      alt: 'Elegant birthday celebration balloon garland',
      category: 'birthday'
    },
    {
      id: 7,
      src: '/images/birthdays/IMG_2939.JPG',
      alt: 'Vibrant birthday party balloon setup',
      category: 'birthday'
    },
    // Bridal Showers - reduced to 3
    {
      id: 8,
      src: '/images/bridal-showers/LandingPage.jpg',
      alt: 'Elegant bridal shower balloon arch with romantic pink and gold colors',
      category: 'bridal'
    },
    {
      id: 9,
      src: '/images/bridal-showers/20220731_130944.jpg',
      alt: 'Elegant bridal shower balloon centerpiece',
      category: 'bridal'
    },
    {
      id: 10,
      src: '/images/bridal-showers/20240811_105747.jpg',
      alt: 'Beautiful bridal shower balloon display with romantic styling',
      category: 'bridal'
    },
    // Corporate - reduced to 3
    {
      id: 11,
      src: '/images/corporate/20210721_155342.jpg',
      alt: 'Professional corporate event balloon decor',
      category: 'corporate'
    },
    {
      id: 12,
      src: '/images/corporate/20210816_183032.jpg',
      alt: 'Corporate brand activation balloon display',
      category: 'corporate'
    },
    {
      id: 13,
      src: '/images/corporate/IMG_1428.JPEG',
      alt: 'Corporate event balloon entrance',
      category: 'corporate'
    },
    // Holidays - reduced to 3
    {
      id: 14,
      src: '/images/holidays/49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg',
      alt: 'Festive holiday party balloon arrangement',
      category: 'holidays'
    },
    {
      id: 15,
      src: '/images/holidays/339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg',
      alt: 'Festive holiday balloon wall decoration',
      category: 'holidays'
    },
    {
      id: 16,
      src: '/images/holidays/20210511_193336.jpg',
      alt: 'Beautiful holiday balloon installation with elegant styling',
      category: 'holidays'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'baby', label: 'Baby Showers' },
    { key: 'birthday', label: 'Birthdays' },
    { key: 'bridal', label: 'Bridal Showers' },
    { key: 'corporate', label: 'Corporate' },
    { key: 'holidays', label: 'Holidays' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(image => image.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-100 to-gold-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">
            Our Portfolio
          </h1>
          <p className="font-sans text-xl md:text-2xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of luxury balloon decor that has transformed events across the Greater Toronto Area.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-sans font-medium transition-colors duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-gold-600 text-white'
                    : 'bg-gray-100 text-charcoal-700 hover:bg-gold-100 hover:text-gold-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery images={filteredImages} columns={3} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-gold-600 mb-2">500+</p>
              <p className="font-sans text-charcoal-600">Events Created</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-gold-600 mb-2">100+</p>
              <p className="font-sans text-charcoal-600">Happy Couples</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-gold-600 mb-2">50+</p>
              <p className="font-sans text-charcoal-600">Corporate Clients</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-gold-600 mb-2">5+</p>
              <p className="font-sans text-charcoal-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Inspired by What You See?"
            subtitle="Let's create something equally stunning for your event"
          />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
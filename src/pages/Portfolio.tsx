import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioImages = [
    // Baby Showers
    {
      id: 1,
      src: '/baby-showers/IMG_0796.JPEG',
      alt: 'Sweet baby shower balloon centerpiece with pastel colors',
      category: 'baby'
    },
    {
      id: 2,
      src: '/baby-showers/C47AB584-B5E7-4C9A-98BB-521B34F10F71.jpg',
      alt: 'Baby shower balloon backdrop with soft colors',
      category: 'baby'
    },
    {
      id: 3,
      src: '/baby-showers/20221015_175734.jpg',
      alt: 'Elegant baby shower balloon arrangement',
      category: 'baby'
    },
    {
      id: 4,
      src: '/baby-showers/20220731_185900.jpg',
      alt: 'Baby shower balloon decor setup',
      category: 'baby'
    },
    {
      id: 5,
      src: '/baby-showers/BabyShower.jpg',
      alt: 'Beautiful baby shower balloon display with elegant styling',
      category: 'baby'
    },
    // Birthdays
    {
      id: 6,
      src: '/Birthdays/IMG_5429.JPG',
      alt: 'Stunning birthday party balloon arch with vibrant colors',
      category: 'birthday'
    },
    {
      id: 7,
      src: '/Birthdays/IMG_2972.jpg',
      alt: 'Colorful birthday party balloon decoration',
      category: 'birthday'
    },
    {
      id: 8,
      src: '/Birthdays/IMG_2705.JPG',
      alt: 'Elegant birthday celebration balloon garland',
      category: 'birthday'
    },
    {
      id: 9,
      src: '/Birthdays/IMG_2939.JPG',
      alt: 'Vibrant birthday party balloon setup',
      category: 'birthday'
    },
    {
      id: 10,
      src: '/Birthdays/IMG_2862.JPG',
      alt: 'Birthday milestone celebration balloons',
      category: 'birthday'
    },
    {
      id: 11,
      src: '/Birthdays/IMG_2854.JPG',
      alt: 'First birthday celebration balloons',
      category: 'birthday'
    },
    {
      id: 12,
      src: '/Birthdays/20210905_143754.jpg',
      alt: 'Elegant adult birthday balloon display',
      category: 'birthday'
    },
    {
      id: 13,
      src: '/Birthdays/IMG_4644.JPG',
      alt: 'Birthday celebration balloon centerpiece',
      category: 'birthday'
    },
    {
      id: 14,
      src: '/Birthdays/IMG_2583.JPG',
      alt: 'Birthday party balloon garland',
      category: 'birthday'
    },
    {
      id: 15,
      src: '/Birthdays/IMG_2669.JPG',
      alt: 'Birthday balloon backdrop',
      category: 'birthday'
    },
    {
      id: 16,
      src: '/Birthdays/IMG_2710.JPG',
      alt: 'Birthday celebration balloon installation',
      category: 'birthday'
    },
    {
      id: 17,
      src: '/Birthdays/IMG_2908.JPG',
      alt: 'Birthday party balloon arrangement',
      category: 'birthday'
    },
    {
      id: 18,
      src: '/Birthdays/20231103_171244.jpg',
      alt: 'Spectacular birthday celebration balloon display',
      category: 'birthday'
    },
    // Bridal Showers
    {
      id: 19,
      src: '/bridal-showers/LandingPage.jpg',
      alt: 'Elegant bridal shower balloon arch with romantic pink and gold colors',
      category: 'bridal'
    },
    {
      id: 20,
      src: '/bridal-showers/20220731_130944.jpg',
      alt: 'Elegant bridal shower balloon centerpiece',
      category: 'bridal'
    },
    {
      id: 21,
      src: '/bridal-showers/20240811_105747.jpg',
      alt: 'Beautiful bridal shower balloon display with romantic styling',
      category: 'bridal'
    },
    {
      id: 22,
      src: '/bridal-showers/DSC_2863.jpg',
      alt: 'Elegant bridal shower welcome sign with balloon accents',
      category: 'bridal'
    },
    // Corporate
    {
      id: 23,
      src: '/Corporate/20210721_155342.jpg',
      alt: 'Professional corporate event balloon decor',
      category: 'corporate'
    },
    {
      id: 24,
      src: '/Corporate/20210816_183032.jpg',
      alt: 'Corporate brand activation balloon display',
      category: 'corporate'
    },
    {
      id: 25,
      src: '/Corporate/IMG_1428.JPEG',
      alt: 'Corporate event balloon entrance',
      category: 'corporate'
    },
    {
      id: 26,
      src: '/Corporate/IMG_2609.JPG',
      alt: 'Corporate product launch balloon decor',
      category: 'corporate'
    },
    {
      id: 27,
      src: '/Corporate/EIVQ6040.JPG',
      alt: 'Corporate networking event balloon decoration',
      category: 'corporate'
    },
    {
      id: 28,
      src: '/Corporate/20240617_192834.jpg',
      alt: 'Corporate gala balloon setup',
      category: 'corporate'
    },
    {
      id: 29,
      src: '/Corporate/20210512_115014.jpg',
      alt: 'Professional corporate balloon installation',
      category: 'corporate'
    },
    // Holidays
    {
      id: 30,
      src: '/Holidays/49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg',
      alt: 'Festive holiday party balloon arrangement',
      category: 'holidays'
    },
    {
      id: 31,
      src: '/Holidays/339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg',
      alt: 'Festive holiday balloon wall decoration',
      category: 'holidays'
    },
    {
      id: 32,
      src: '/Holidays/IMG_0232.JPEG',
      alt: 'Holiday celebration balloon display',
      category: 'holidays'
    },
    {
      id: 33,
      src: '/Holidays/20210511_193336.jpg',
      alt: 'Beautiful holiday balloon installation with elegant styling',
      category: 'holidays'
    },
    {
      id: 34,
      src: '/Holidays/20210509_113246.jpg',
      alt: 'Festive holiday balloon decor setup',
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

      {/* Social Sharing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal-900 mb-6">
            Share the Magic
          </h2>
          <p className="font-sans text-lg text-charcoal-600 mb-8">
            Love what you see? Share our work with friends and family planning their special events.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-sans font-medium hover:bg-blue-700 transition-colors duration-200">
              Share on Facebook
            </button>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-sans font-medium hover:bg-pink-700 transition-colors duration-200">
              Share on Instagram
            </button>
            <button className="bg-blue-400 text-white px-6 py-3 rounded-full font-sans font-medium hover:bg-blue-500 transition-colors duration-200">
              Share on Twitter
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-cream-50">
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
import { useState } from 'react';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Updated portfolio images with verified paths
  const portfolioImages = [
    // Baby Showers
    {
      id: 1,
      src: '/images/baby-showers/20220731_185900.jpg',
      alt: 'Baby shower balloon decor setup',
      category: 'baby'
    },
    {
      id: 2,
      src: '/images/baby-showers/20221015_175734.jpg',
      alt: 'Elegant baby shower balloon arrangement',
      category: 'baby'
    },
    {
      id: 3,
      src: '/images/baby-showers/BabyShower.jpg',
      alt: 'Beautiful baby shower balloon display with elegant styling',
      category: 'baby'
    },
    {
      id: 4,
      src: '/images/baby-showers/C47AB584-B5E7-4C9A-98BB-521B34F10F71.jpg',
      alt: 'Baby shower balloon backdrop with soft colors',
      category: 'baby'
    },
    {
      id: 5,
      src: '/images/baby-showers/IMG_0796.JPEG',
      alt: 'Sweet baby shower balloon centerpiece with pastel colors',
      category: 'baby'
    },

    // Birthdays - verified existing images
    {
      id: 6,
      src: '/images/birthdays/0D617243-2B95-4F80-876D-148EF5266664.jpg',
      alt: 'Vibrant birthday party balloon setup',
      category: 'birthday'
    },
    {
      id: 7,
      src: '/images/birthdays/20210905_143754.jpg',
      alt: 'Colorful children birthday party balloon setup',
      category: 'birthday'
    },
    {
      id: 8,
      src: '/images/birthdays/20250519_160529.jpg',
      alt: 'Modern birthday celebration balloon display',
      category: 'birthday'
    },
    {
      id: 9,
      src: '/images/birthdays/4E39CAB8-F5BA-49DA-AD59-2E7AF800C045.jpg',
      alt: 'Birthday celebration balloon decor',
      category: 'birthday'
    },
    {
      id: 10,
      src: '/images/birthdays/4E4B437F-48E3-4169-9335-C8A235E90DD8.jpg',
      alt: 'Spectacular birthday balloon installation',
      category: 'birthday'
    },
    {
      id: 11,
      src: '/images/birthdays/4E67466A-2F9A-4BEF-8275-59611D0D6679.JPEG',
      alt: 'Birthday party balloon decoration',
      category: 'birthday'
    },
    {
      id: 12,
      src: '/images/birthdays/77E0D959-4DDB-4D6C-89FB-8D65667C40F1.jpg',
      alt: 'Grand birthday celebration balloon setup',
      category: 'birthday'
    },
    {
      id: 13,
      src: '/images/birthdays/8BAEF93C-FA38-4525-AC5C-2AB46D1CF355.jpg',
      alt: 'Colorful birthday balloon arrangement',
      category: 'birthday'
    },
    {
      id: 14,
      src: '/images/birthdays/9E3BD036-9995-4285-885A-76C705C38329.jpg',
      alt: 'Birthday party balloon display',
      category: 'birthday'
    },
    {
      id: 15,
      src: '/images/birthdays/AJYE6187.JPG',
      alt: 'Professional birthday balloon setup',
      category: 'birthday'
    },
    {
      id: 16,
      src: '/images/birthdays/IMG_0259.JPEG',
      alt: 'Birthday party balloon centerpiece',
      category: 'birthday'
    },
    {
      id: 17,
      src: '/images/birthdays/IMG_1326.JPEG',
      alt: 'Birthday celebration balloon display',
      category: 'birthday'
    },
    {
      id: 18,
      src: '/images/birthdays/IMG_2705.JPG',
      alt: 'Elegant birthday celebration balloon garland',
      category: 'birthday'
    },
    {
      id: 19,
      src: '/images/birthdays/IMG_2939.JPG',
      alt: 'Vibrant birthday party balloon setup',
      category: 'birthday'
    },
    {
      id: 20,
      src: '/images/birthdays/IMG_2972.jpg',
      alt: 'Colorful birthday party balloon decoration',
      category: 'birthday'
    },
    {
      id: 21,
      src: '/images/birthdays/IMG_5429.JPG',
      alt: 'Stunning birthday party balloon arch with vibrant colors',
      category: 'birthday'
    },

    // Bridal Showers
    {
      id: 22,
      src: '/images/bridal-showers/20220731_130944.jpg',
      alt: 'Elegant bridal shower balloon centerpiece',
      category: 'bridal'
    },
    {
      id: 23,
      src: '/images/bridal-showers/20221015_175737.jpg',
      alt: 'Bridal shower balloon arrangement',
      category: 'bridal'
    },
    {
      id: 24,
      src: '/images/bridal-showers/20240811_105747.jpg',
      alt: 'Beautiful bridal shower balloon display with romantic styling',
      category: 'bridal'
    },
    {
      id: 25,
      src: '/images/bridal-showers/DSC_2863.jpg',
      alt: 'Elegant bridal shower welcome sign with balloon accents',
      category: 'bridal'
    },
    {
      id: 26,
      src: '/images/bridal-showers/LandingPage.jpg',
      alt: 'Romantic bridal shower balloon arch with elegant pink and gold design',
      category: 'bridal'
    },

    // Corporate
    {
      id: 27,
      src: '/images/corporate/20210721_155342.jpg',
      alt: 'Professional corporate event balloon decor entrance',
      category: 'corporate'
    },
    {
      id: 28,
      src: '/images/corporate/20210816_183032.jpg',
      alt: 'Corporate brand activation balloon display',
      category: 'corporate'
    },
    {
      id: 29,
      src: '/images/corporate/IMG_1428.JPEG',
      alt: 'Corporate conference stage backdrop with balloons',
      category: 'corporate'
    },
    {
      id: 30,
      src: '/images/corporate/EIVQ6040.JPG',
      alt: 'Corporate networking event balloon decoration',
      category: 'corporate'
    },
    {
      id: 31,
      src: '/images/corporate/20240617_192834.jpg',
      alt: 'Corporate gala balloon setup',
      category: 'corporate'
    },

    // Holidays
    {
      id: 32,
      src: '/images/holidays/20210509_113246.jpg',
      alt: 'Festive holiday balloon decor setup',
      category: 'holidays'
    },
    {
      id: 33,
      src: '/images/holidays/20210511_193336.jpg',
      alt: 'Beautiful holiday balloon installation with elegant styling',
      category: 'holidays'
    },
    {
      id: 34,
      src: '/images/holidays/339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg',
      alt: 'Festive Christmas holiday balloon decor',
      category: 'holidays'
    },
    {
      id: 35,
      src: '/images/holidays/49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg',
      alt: 'Festive holiday party balloon arrangement',
      category: 'holidays'
    },
    {
      id: 36,
      src: '/images/holidays/IMG_0232.JPEG',
      alt: 'Holiday celebration balloon display',
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
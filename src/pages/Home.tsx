import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Instagram, Heart, Sparkles } from 'lucide-react';
import LazyImage from '../components/LazyImage';

// Lazy load components that are below the fold
const Gallery = lazy(() => import('../components/Gallery'));
const ContactForm = lazy(() => import('../components/ContactForm'));
const InstagramFeed = lazy(() => import('../components/InstagramFeed'));

const Home = () => {
  // Updated portfolio images with verified paths
  const portfolioImages = [
    {
      id: 1,
      src: '/images/bridal-showers/LandingPage.jpg',
      alt: 'Elegant bridal shower balloon arch with romantic pink and gold colors',
      category: 'bridal'
    },
    {
      id: 2,
      src: '/images/corporate/20210721_155342.jpg',
      alt: 'Professional corporate event balloon decor installation',
      category: 'corporate'
    },
    {
      id: 3,
      src: '/images/birthdays/IMG_5429.JPG',
      alt: 'Spectacular birthday celebration balloon display',
      category: 'birthday'
    },
    {
      id: 4,
      src: '/images/baby-showers/IMG_0796.JPEG',
      alt: 'Sweet baby shower balloon centerpiece with pastel colors',
      category: 'baby'
    },
    {
      id: 5,
      src: '/images/holidays/339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg',
      alt: 'Festive holiday party balloon wall decoration',
      category: 'holiday'
    },
    {
      id: 6,
      src: '/images/birthdays/IMG_2705.JPG',
      alt: 'Elegant birthday celebration balloon garland',
      category: 'birthday'
    },
    {
      id: 7,
      src: '/images/bridal-showers/DSC_2863.jpg',
      alt: 'Elegant bridal shower welcome display',
      category: 'bridal'
    },
    {
      id: 8,
      src: '/images/corporate/EIVQ6040.JPG',
      alt: 'Corporate networking event balloon decoration',
      category: 'corporate'
    },
    {
      id: 9,
      src: '/images/birthdays/IMG_2939.JPG',
      alt: 'Stunning birthday celebration balloon installation',
      category: 'birthday'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Michael',
      event: 'Bridal Shower',
      rating: 5,
      text: 'R&Co Events made us feel like family from day one. The luxury balloon decor was absolutely stunning and exceeded all our expectations!',
      image: '/images/bridal-showers/LandingPage.jpg'
    },
    {
      id: 2,
      name: 'Jennifer Chen',
      event: 'Corporate Gala',
      rating: 5,
      text: 'The premium quality and attention to detail was exceptional. Our corporate gala was elevated beyond expectations with their sophisticated designs.',
      image: '/images/corporate/20210721_155342.jpg'
    },
    {
      id: 3,
      name: 'David Rodriguez',
      event: 'Baby Shower',
      rating: 5,
      text: 'From concept to execution, R&Co Events delivered pure magic. The luxury balloon decor created the perfect atmosphere for our celebration.',
      image: '/images/baby-showers/IMG_0796.JPEG'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Critical above-the-fold content */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden hero-section">
        <div className="absolute inset-0">
          <img 
            src="/images/bridal-showers/LandingPage.jpg"
            alt="Luxury balloon decor by R&Co Events - Premium event design in Toronto"
            className="w-full h-full object-cover img-optimized"
            style={{ objectPosition: 'center center' }}
            width="1920"
            height="1080"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Luxury Balloon Decor
            <span className="block text-gold-400">Redefined</span>
          </h1>
          <p className="font-sans text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up">
            Premium balloon artistry and bespoke event design that transforms celebrations into extraordinary experiences throughout the Greater Toronto Area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="/contact"
              className="bg-gold-600 text-white px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-700 transition-colors duration-200 flex items-center justify-center"
            >
              Experience Luxury
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-white hover:text-charcoal-900 transition-colors duration-200"
            >
              View Our Artistry
            </Link>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 text-gold-400 animate-float">
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute bottom-32 right-16 text-gold-400 animate-float" style={{ animationDelay: '2s' }}>
          <Heart className="h-6 w-6" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Where Luxury Meets Artistry
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              At R&Co Events, we elevate balloon decor to an art form. Our premium designs and meticulous attention to detail create sophisticated atmospheres that transform any celebration into an extraordinary experience. Each creation is crafted with luxury materials and executed with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gold-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors duration-200">
                <Sparkles className="h-10 w-10 text-gold-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-4">Premium Quality</h3>
              <p className="font-sans text-charcoal-600 leading-relaxed">
                Only the finest materials and premium balloons are used in our luxury designs, ensuring lasting beauty and sophisticated elegance.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gold-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors duration-200">
                <Heart className="h-10 w-10 text-gold-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-4">Bespoke Design</h3>
              <p className="font-sans text-charcoal-600 leading-relaxed">
                Every design is custom-created to reflect your unique vision, ensuring no two celebrations are ever the same.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gold-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors duration-200">
                <Star className="h-10 w-10 text-gold-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-4">Exceptional Service</h3>
              <p className="font-sans text-charcoal-600 leading-relaxed">
                White-glove service from consultation to execution, ensuring every detail exceeds expectations with professional excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery - Lazy loaded */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Our Latest Luxury Creations
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Explore our curated collection of premium balloon decor that has transformed celebrations across the GTA into unforgettable experiences.
            </p>
          </div>

          <Suspense fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
              ))}
            </div>
          }>
            <Gallery images={portfolioImages} columns={3} className="mb-12" />
          </Suspense>

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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Client Experiences
            </h2>
            <p className="font-sans text-xl text-charcoal-600">
              Hear from clients who have experienced our luxury balloon decor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-cream-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <LazyImage
                    src={testimonial.image}
                    alt={`${testimonial.name} - ${testimonial.event} testimonial`}
                    className="w-16 h-16 rounded-full mr-4"
                    width="64"
                    height="64"
                  />
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-charcoal-900">{testimonial.name}</h4>
                    <p className="font-sans text-charcoal-600 text-sm">{testimonial.event}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                  ))}
                </div>
                
                <p className="font-sans text-charcoal-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed - Lazy loaded */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Instagram className="h-8 w-8 text-gold-600 mr-3" />
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900">
                Behind the Luxury
              </h2>
            </div>
            <p className="font-sans text-xl text-charcoal-600 mb-8">
              See our premium balloon artistry and the craftsmanship that goes into every luxury creation @randco.events
            </p>
          </div>

          <Suspense fallback={
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
              ))}
            </div>
          }>
            <InstagramFeed limit={6} columns={6} className="mb-12" />
          </Suspense>

          <div className="text-center">
            <a
              href="https://instagram.com/randco.events"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gold-600 font-sans font-semibold text-lg hover:text-gold-700 transition-colors duration-200"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Follow @randco.events
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Lazy loaded */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-8"></div>
                <div className="space-y-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-12 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          }>
            <ContactForm 
              title="Experience Luxury Balloon Decor"
              subtitle="Let's create something extraordinary together with premium materials, bespoke design, and exceptional service"
            />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default Home;
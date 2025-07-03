import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Pricing = () => {
  const packages = [
    {
      name: 'Essential',
      price: 'Starting at $825',
      description: 'Perfect for intimate gatherings and smaller celebrations',
      features: [
        'Standard balloon arch',
        '1 backdrop',
        'Custom colours',
        '1 cake stand',
        'Setup and takedown',
        'Consultation included'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: 'Starting at $1,575',
      description: 'Our most popular package for special events',
      features: [
        '3 backdrops',
        'Custom balloon arch',
        '1 cake stand',
        '1 name sign',
        'Setup and takedown',
        'Premium consultation'
      ],
      popular: true
    },
    {
      name: 'Luxury',
      price: 'Starting at $3,500',
      description: 'The ultimate experience for grand celebrations',
      features: [
        'Bespoke experience',
        'Multiple setups (Main, Welcome Sign, Photo Ops setup)',
        'Custom colours',
        'Venue coordination',
        'Marquee letters/numbers',
        'Bespoke consultation',
        'Setup and takedown',
        'Delivery included'
      ],
      popular: false
    }
  ];

  const addOns = [
    { name: 'Specialty Balloons', price: '$100-200' },
    { name: 'Welcome Sign and Balloons', price: 'Starting at $350' },
    { name: 'Entryway Arch', price: 'Starting at $800' },
    { name: 'Centerpiece Balloons', price: '$25-$200 per table' },
    { name: 'Florals', price: '$150-$1,000' },
    { name: 'Customized Backdrops', price: 'Starting at $200' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-100 to-gold-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">
            Our Packages
          </h1>
          <p className="font-sans text-xl md:text-2xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing for luxury balloon decor that transforms your event into an unforgettable celebration.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  pkg.popular ? 'ring-2 ring-gold-600 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gold-600 text-white px-6 py-2 rounded-full font-sans font-semibold text-sm flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-2">{pkg.name}</h3>
                  <p className="font-serif text-3xl font-bold text-gold-600 mb-4">{pkg.price}</p>
                  <p className="font-sans text-charcoal-600 mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-gold-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-charcoal-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-full font-sans font-semibold transition-colors duration-200 ${
                      pkg.popular
                        ? 'bg-gold-600 text-white hover:bg-gold-700'
                        : 'border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white'
                    }`}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Popular Add-Ons
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Enhance your balloon decor with these premium additions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-lg font-semibold text-charcoal-900">{addon.name}</h3>
                  <span className="font-sans font-bold text-gold-600">{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              What Influences Pricing
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Several factors contribute to the final cost for your balloon decor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-6">Key Factors</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Event Size & Scope</h4>
                    <p className="font-sans text-charcoal-600">Larger venues and more complex designs require additional materials and time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Design Complexity</h4>
                    <p className="font-sans text-charcoal-600">Intricate designs and custom shapes require more planning and skilled craftsmanship.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Specialty or Unique Add-ons</h4>
                    <p className="font-sans text-charcoal-600">Special balloons, custom elements, and unique features add to the overall cost.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Timeline & Urgency</h4>
                    <p className="font-sans text-charcoal-600">Rush orders and tight timelines may require additional resources.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-cream-50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-6">What's Always Included</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold-600 mr-3" />
                  <span className="font-sans text-charcoal-700">Initial consultation & design</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold-600 mr-3" />
                  <span className="font-sans text-charcoal-700">Professional setup</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold-600 mr-3" />
                  <span className="font-sans text-charcoal-700">Setup and takedown</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold-600 mr-3" />
                  <span className="font-sans text-charcoal-700">Quality guarantee</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold-600 mr-3" />
                  <span className="font-sans text-charcoal-700">Liability insurance</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-gold-600 mr-3" />
                  <span className="font-sans text-charcoal-700">Dedicated support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Pricing & Service Questions
            </h2>
            <p className="font-sans text-xl text-charcoal-600">
              Common questions about our packages and services.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-3">
                How far in advance should I book?
              </h3>
              <p className="font-sans text-charcoal-600">
                We recommend booking at least 4-6 weeks in advance for most events, and 8-12 weeks for peak seasons (spring/summer weddings, holiday parties, and graduation season). Popular dates like weekends and holidays fill up quickly, so the earlier you book, the better we can accommodate your preferred date and ensure we have ample time to plan your perfect design.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-3">
                Do you offer payment plans?
              </h3>
              <p className="font-sans text-charcoal-600">
                Yes, we offer flexible payment options including a 50% deposit to secure your date and the remainder due before setup. We understand that events can be a significant investment, so we work with you to create a payment schedule that fits your budget.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-3">
                What happens if balloons deflate during the event?
              </h3>
              <p className="font-sans text-charcoal-600">
                While rare with our professional-grade materials and installation techniques, we always come prepared. We bring extra balloons and supplies to every event for quick repairs if needed. For longer events, we can arrange midway touch-ups. Our goal is to ensure your decorations look flawless throughout your entire celebration.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-3">
                Do you travel outside the GTA?
              </h3>
              <p className="font-sans text-charcoal-600">
                We primarily serve the Greater Toronto Area, but we can accommodate special requests for events outside our standard service area with additional travel fees. Contact us to discuss your specific location and we'll work out the details.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-3">
                Can you match specific colors or themes?
              </h3>
              <p className="font-sans text-charcoal-600">
                Yes! We specialize in custom color matching and themed designs. Whether you have specific brand colors, wedding palette swatches, or a detailed theme in mind, we can source balloons to match perfectly. We work with a wide range of colors and specialty balloons including metallics, pearls, and custom prints to bring your exact vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
            Ready to Create Magic?
          </h2>
          <p className="font-sans text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Get a personalized quote for your event and discover how we can transform your celebration.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gold-600 text-white px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-700 transition-colors duration-200"
          >
            Get Your Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Request a Detailed Quote"
            subtitle="Tell us about your event and we'll provide a comprehensive proposal"
          />
        </div>
      </section>
    </div>
  );
};

export default Pricing;
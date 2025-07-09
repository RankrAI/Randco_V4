import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-100 to-gold-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">
            Let's Create Magic Together
          </h1>
          <p className="font-sans text-xl md:text-2xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your event with luxury balloon decor? We'd love to hear about your vision and bring it to life.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-gold-100 p-3 rounded-full mr-6 flex-shrink-0">
                    <Phone className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-2">Phone</h3>
                    <a 
                      href="tel:+16479381555" 
                      className="font-sans text-lg text-charcoal-600 hover:text-gold-600 transition-colors duration-200"
                    >
                      (647) 938-1555
                    </a>
                    <p className="font-sans text-charcoal-500 mt-1">Call or text for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-100 p-3 rounded-full mr-6 flex-shrink-0">
                    <Mail className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-2">Email</h3>
                    <a 
                      href="mailto:info@randcoevents.ca" 
                      className="font-sans text-lg text-charcoal-600 hover:text-gold-600 transition-colors duration-200"
                    >
                      info@randcoevents.ca
                    </a>
                    <p className="font-sans text-charcoal-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-100 p-3 rounded-full mr-6 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-2">Service Area</h3>
                    <p className="font-sans text-lg text-charcoal-600">Greater Toronto Area</p>
                    <p className="font-sans text-charcoal-500 mt-1">Including Toronto, Mississauga, Brampton, Markham, and surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-100 p-3 rounded-full mr-6 flex-shrink-0">
                    <Clock className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-2">Business Hours</h3>
                    <div className="font-sans text-charcoal-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4">Follow Our Work</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/randco.events" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold-100 p-3 rounded-full hover:bg-gold-200 transition-colors duration-200"
                    aria-label="Follow R&Co Events on Instagram"
                  >
                    <Instagram className="h-6 w-6 text-gold-600" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gold-100 p-3 rounded-full hover:bg-gold-200 transition-colors duration-200"
                    aria-label="Follow R&Co Events on Facebook"
                  >
                    <Facebook className="h-6 w-6 text-gold-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Area Map */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal-900 mb-6">
              Our Service Area
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              We proudly serve the Greater Toronto Area and surrounding communities with luxury balloon decor.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Interactive Google Map */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gold-100 to-cream-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gold-600 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-2">
                    Greater Toronto Area
                  </h3>
                  <p className="font-sans text-charcoal-600 max-w-md">
                    We proudly serve Toronto, Mississauga, Brampton, Markham, Richmond Hill, Vaughan, Oakville, Burlington, and surrounding communities.
                  </p>
                  <div className="mt-6">
                    <a 
                      href="https://www.google.com/maps/search/Greater+Toronto+Area,+ON,+Canada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gold-600 text-white px-6 py-3 rounded-full font-sans font-semibold hover:bg-gold-700 transition-colors duration-200"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Map Overlay with Service Info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs hidden md:block">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-gold-600 mr-2" />
                  <h3 className="font-serif font-semibold text-charcoal-900">Service Coverage</h3>
                </div>
                <p className="font-sans text-sm text-charcoal-600">
                  We provide luxury balloon decor throughout the Greater Toronto Area, including all major cities and surrounding communities.
                </p>
              </div>
            </div>
            
            {/* Service Area Cities */}
            <div className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-6 text-center">
                Cities We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-cream-50 rounded-lg text-center">
                  <h4 className="font-serif font-semibold text-charcoal-900">Toronto</h4>
                  <p className="font-sans text-sm text-charcoal-600">Complete coverage</p>
                </div>
                <div className="p-4 bg-cream-50 rounded-lg text-center">
                  <h4 className="font-serif font-semibold text-charcoal-900">Mississauga</h4>
                  <p className="font-sans text-sm text-charcoal-600">Full service</p>
                </div>
                <div className="p-4 bg-cream-50 rounded-lg text-center">
                  <h4 className="font-serif font-semibold text-charcoal-900">Brampton</h4>
                  <p className="font-sans text-sm text-charcoal-600">Complete coverage</p>
                </div>
                <div className="p-4 bg-cream-50 rounded-lg text-center">
                  <h4 className="font-serif font-semibold text-charcoal-900">Markham</h4>
                  <p className="font-sans text-sm text-charcoal-600">Full service</p>
                </div>
                <div className="p-4 bg-cream-50 rounded-lg text-center">
                  <h4 className="font-serif font-semibold text-charcoal-900">Richmond Hill</h4>
                  <p className="font-sans text-sm text-charcoal-600">Complete coverage</p>
                </div>
                <div className="p-4 bg-cream-50 rounded-lg text-center">
                  <h4 className="font-serif font-semibold text-charcoal-900">Vaughan</h4>
                  <p className="font-sans text-sm text-charcoal-600">Full service</p>
                </div>
                <div className="p-4 bg-cream-50 rounded-lg text-center">
                  <h4 className="font-serif font-semibold text-charcoal-900">Oakville</h4>
                  <p className="font-sans text-sm text-charcoal-600">Complete coverage</p>
                </div>
                <div className="p-4 bg-cream-50 rounded-lg text-center">
                  <h4 className="font-serif font-semibold text-charcoal-900">Burlington</h4>
                  <p className="font-sans text-sm text-charcoal-600">Full service</p>
                </div>
                <div className="p-4 bg-cream-50 rounded-lg text-center">
                  <h4 className="font-serif font-semibold text-charcoal-900">Ajax</h4>
                  <p className="font-sans text-sm text-charcoal-600">Complete coverage</p>
                </div>
                <div className="p-4 bg-cream-50 rounded-lg text-center">
                  <h4 className="font-serif font-semibold text-charcoal-900">Pickering</h4>
                  <p className="font-sans text-sm text-charcoal-600">Full service</p>
                </div>
                <div className="p-4 bg-cream-50 rounded-lg text-center">
                  <h4 className="font-serif font-semibold text-charcoal-900">Whitby</h4>
                  <p className="font-sans text-sm text-charcoal-600">Complete coverage</p>
                </div>
                <div className="p-4 bg-cream-50 rounded-lg text-center">
                  <h4 className="font-serif font-semibold text-charcoal-900">Oshawa</h4>
                  <p className="font-sans text-sm text-charcoal-600">Extended service</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="font-sans text-charcoal-600 mb-4">
                  Don't see your city listed? We may still be able to serve your area.
                </p>
                <a 
                  href="tel:+16479381555"
                  className="inline-flex items-center bg-gold-600 text-white px-6 py-3 rounded-full font-sans font-semibold hover:bg-gold-700 transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call to Confirm Coverage
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-xl text-charcoal-600">
              Everything you need to know about our balloon decor services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-cream-50 rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-3">
                How far in advance should I book my balloon decor?
              </h3>
              <p className="font-sans text-charcoal-600">
                We recommend booking at least 4-6 weeks in advance for most events, and 8-12 weeks for peak seasons (spring/summer weddings, holiday parties, and graduation season). Popular dates like weekends and holidays fill up quickly, so the earlier you book, the better we can accommodate your preferred date and ensure we have ample time to plan your perfect design.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-3">
                How long do balloon decorations last?
              </h3>
              <p className="font-sans text-charcoal-600">
                Our high-quality latex balloons typically last 12-24 hours indoors, while foil/mylar balloons can last several days to a week. Environmental factors like temperature, humidity, and direct sunlight can affect longevity. We use professional-grade balloons and treatments to maximize their lifespan. For multi-day events, we can discuss refresh options to keep your decor looking perfect throughout.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-3">
                Do you provide setup and takedown services?
              </h3>
              <p className="font-sans text-charcoal-600">
                Absolutely! Setup and takedown are included in all our packages. We arrive early to complete installation before your guests arrive, ensuring everything is picture-perfect for your event. After your celebration, we return to remove all decorations, leaving your venue spotless. You can focus entirely on enjoying your special day while we handle all the logistics.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-3">
                What's included in your balloon decor packages?
              </h3>
              <p className="font-sans text-charcoal-600">
                Our packages typically include design consultation, all balloon materials, professional installation, and takedown service. Depending on your chosen package, we may also include delivery, custom color matching, specialty balloons (chrome, confetti-filled, etc.), and additional decorative elements. Each package is customized to your specific needs and budget.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-3">
                Can you match specific colors or themes?
              </h3>
              <p className="font-sans text-charcoal-600">
                Yes! We specialize in custom color matching and themed designs. Whether you have specific brand colors, wedding palette swatches, or a detailed theme in mind, we can source balloons to match perfectly. We work with a wide range of colors and specialty balloons including metallics, pearls, and custom prints to bring your exact vision to life.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-3">
                What are your pricing ranges?
              </h3>
              <p className="font-sans text-charcoal-600">
                Our pricing varies based on the size, complexity, and specific requirements of your event. Basic room decorations start around $550, while elaborate large-scale installations can range into the thousands. During our consultation, we'll discuss your budget and create a custom package that maximizes impact within your price range. We believe luxury should be accessible and work with various budgets.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-3">
                Do you work at all types of venues?
              </h3>
              <p className="font-sans text-charcoal-600">
                Yes, we work at a wide variety of venues throughout the Greater Toronto Area including hotels, banquet halls, private homes, outdoor spaces, corporate offices, and unique event locations. We're experienced in working with different venue requirements, ceiling heights, and space limitations. We'll coordinate with your venue beforehand to ensure smooth setup and compliance with any restrictions.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-3">
                What happens if balloons pop or decorations are damaged during the event?
              </h3>
              <p className="font-sans text-charcoal-600">
                While rare with our professional-grade materials and installation techniques, we always come prepared. We bring extra balloons and supplies to every event for quick repairs if needed. For longer events, we can arrange midway touch-ups. Our goal is to ensure your decorations look flawless throughout your entire celebration, and we stand behind our work with prompt problem resolution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
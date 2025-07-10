import { Building, Target, Users, ArrowRight, Star, ShoppingBag, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import ContactForm from '../../components/ContactForm';

const Corporate = () => {
  const corporateImages = [
    {
      id: 1,
      src: '/images/corporate/20210721_155342.jpg',
      alt: 'Professional corporate event balloon decor entrance',
      category: 'entrance'
    },
    {
      id: 2,
      src: '/images/corporate/20210816_183032.jpg',
      alt: 'Corporate brand activation balloon display',
      category: 'branding'
    },
    {
      id: 3,
      src: '/images/corporate/IMG_1428.JPEG',
      alt: 'Corporate conference stage backdrop with balloons',
      category: 'conference'
    },
    {
      id: 4,
      src: '/images/corporate/EIVQ6040.JPG',
      alt: 'Corporate networking event balloon decoration',
      category: 'networking'
    },
    {
      id: 5,
      src: '/images/corporate/20240617_192834.jpg',
      alt: 'Corporate gala balloon setup',
      category: 'gala'
    }
  ];

  const services = [
    {
      icon: Building,
      title: 'Brand Integration',
      description: 'Seamlessly incorporate your brand colors, logos, and messaging into stunning balloon decor that reinforces your corporate identity.',
      features: ['Custom brand colors', 'Logo integration', 'Corporate messaging', 'Brand guideline compliance']
    },
    {
      icon: Target,
      title: 'Product Launches',
      description: 'Create buzz and excitement around your new products with eye-catching balloon displays that capture attention and generate engagement.',
      features: ['Product reveal moments', 'Interactive displays', 'Photo opportunities', 'Social media worthy setups']
    },
    {
      icon: Users,
      title: 'Conference & Events',
      description: 'Professional balloon decor that enhances your corporate gatherings, from intimate meetings to large-scale conferences.',
      features: ['Stage backdrops', 'Registration areas', 'Networking spaces', 'Award ceremonies']
    }
  ];

  const clientTypes = [
    {
      title: 'Fortune 500 Companies',
      description: 'Large-scale corporate events and brand activations',
      image: '/images/corporate/20210721_155342.jpg',
      icon: Building
    },
    {
      title: 'Influencers & VIP Celebrities',
      description: 'Instagram-worthy setups for content creation, brand partnerships, and exclusive events',
      image: '/images/corporate/20210816_183032.jpg',
      icon: Star
    },
    {
      title: 'Retail & Professional Services',
      description: 'Grand openings, launches, and client appreciation events for dentists, optometrists, retail stores, and professional practices',
      image: '/images/corporate/IMG_1428.JPEG',
      icon: ShoppingBag
    },
    {
      title: 'Non-Profits',
      description: 'Uplifting decor for fundraisers, galas, and community events',
      image: '/images/corporate/EIVQ6040.JPG',
      icon: Heart
    }
  ];

  const specialtyServices = [
    {
      title: 'Influencer Content Creation',
      description: 'Custom balloon backdrops designed specifically for social media content, brand partnerships, and influencer collaborations.',
      features: [
        'Instagram-optimized designs',
        'Brand collaboration setups',
        'Content creation backdrops',
        'Trending color palettes',
        'Ring light compatible designs'
      ]
    },
    {
      title: 'Celebrity & VIP Events',
      description: 'Exclusive, luxury balloon decor for high-profile events, red carpet occasions, and private celebrity celebrations.',
      features: [
        'Confidential service',
        'Premium materials only',
        'Custom security protocols',
        'Last-minute availability',
        'Exclusive design concepts'
      ]
    },
    {
      title: 'Retail Launch Specialists',
      description: 'Grand opening celebrations and launch events for retail stores, dental practices, optometry clinics, and professional services.',
      features: [
        'Grand opening packages',
        'Professional practice launches',
        'Retail store openings',
        'Client appreciation events',
        'Community engagement setups'
      ]
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
                <Building className="h-8 w-8 text-gold-600 mr-3" />
                <span className="font-sans text-gold-600 font-semibold">Corporate & VIP Services</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">
                Elevate Your Brand Experience
              </h1>
              <p className="font-sans text-xl text-charcoal-600 leading-relaxed mb-8">
                Make a lasting impression with professional balloon decor that enhances your brand and creates memorable experiences. From Fortune 500 companies to influencers, celebrities, and retail launches, we deliver sophisticated designs that align with your objectives and exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gold-600 text-white px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Get Corporate Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-600 hover:text-white transition-colors duration-200 text-center"
                >
                  View Corporate Work
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/corporate/20210721_155342.jpg"
                alt="Professional corporate event balloon decor by R&Co Events"
                className="rounded-2xl shadow-2xl"
                width="600"
                height="400"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="font-serif text-2xl font-bold text-gold-600">50+</p>
                <p className="font-sans text-sm text-charcoal-600">Corporate Clients</p>
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
              Corporate Solutions
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Professional balloon decor designed to enhance your brand and create impactful experiences for any audience.
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

      {/* Client Types */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Clients We Serve
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              From corporate giants to social media stars and retail businesses, we create memorable experiences for diverse clientele across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((client, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={client.image}
                    alt={`${client.title} corporate event balloon decor`}
                    className="w-full h-48 object-cover"
                    width="300"
                    height="192"
                  />
                  <div className="absolute top-4 right-4 bg-gold-600 p-2 rounded-full">
                    <client.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-2">{client.title}</h3>
                  <p className="font-sans text-charcoal-600">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Specialty Services
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Tailored solutions for unique client needs, from social media content creation to exclusive VIP events and retail launches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => (
              <div key={index} className="bg-cream-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
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

      {/* Gallery Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Corporate Portfolio
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Explore our professional decor that has enhanced corporate events, influencer content, VIP celebrations, and retail launches across the GTA.
            </p>
          </div>

          <Gallery images={corporateImages} columns={3} className="mb-12" />

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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Why Choose R&Co for Corporate Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-6">Professional Excellence</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Brand Compliance</h4>
                    <p className="font-sans text-charcoal-600">Strict adherence to your brand guidelines and corporate standards.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Reliable Execution</h4>
                    <p className="font-sans text-charcoal-600">On-time delivery and flawless setup for your important events.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Scalable Solutions</h4>
                    <p className="font-sans text-charcoal-600">From intimate boardroom meetings to large conference halls and VIP events.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Confidential Service</h4>
                    <p className="font-sans text-charcoal-600">Discretion and privacy for high-profile clients and sensitive events.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-6">Added Value</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Enhanced Engagement</h4>
                    <p className="font-sans text-charcoal-600">Create memorable experiences that increase attendee engagement and brand recall.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Social Media Impact</h4>
                    <p className="font-sans text-charcoal-600">Instagram-worthy decor that extends your event's reach and creates viral moments.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Cost-Effective Branding</h4>
                    <p className="font-sans text-charcoal-600">Maximum visual impact at a fraction of traditional decor costs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans font-semibold text-charcoal-900">Content Creation Ready</h4>
                    <p className="font-sans text-charcoal-600">Designs optimized for photography, videography, and social media content.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Elevate Your Next Corporate Event"
            subtitle="Let's discuss how we can enhance your brand presence and create a memorable experience for your attendees, influencers, VIP guests, or retail launch"
          />
        </div>
      </section>
    </div>
  );
};

export default Corporate;
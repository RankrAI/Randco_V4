import React from 'react';
import { Gift, Cake, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import ContactForm from '../../components/ContactForm';

const Birthdays = () => {
  // Updated birthday images with verified paths
  const birthdayImages = [
    {
      id: 1,
      src: '/images/birthdays/IMG_5429.JPG',
      alt: 'Stunning birthday party balloon arch with vibrant colors',
      category: 'arch'
    },
    {
      id: 2,
      src: '/images/birthdays/IMG_2972.jpg',
      alt: 'Colorful children birthday party balloon setup',
      category: 'children'
    },
    {
      id: 3,
      src: '/images/birthdays/IMG_2705.JPG',
      alt: 'Elegant adult birthday celebration balloons',
      category: 'adult'
    },
    {
      id: 4,
      src: '/images/birthdays/IMG_2939.JPG',
      alt: 'Milestone birthday balloon decor',
      category: 'milestone'
    },
    {
      id: 5,
      src: '/images/birthdays/IMG_2669.JPG',
      alt: 'Sweet sixteen party balloon arrangement',
      category: 'teen'
    },
    {
      id: 6,
      src: '/images/birthdays/20210905_143754.jpg',
      alt: 'Elegant adult birthday balloon display',
      category: 'elegant'
    }
  ];

  const ageGroups = [
    {
      icon: Gift,
      title: 'Children (1-12)',
      description: 'Magical, colorful designs that spark imagination and create wonder for your little ones.',
      features: ['Themed characters', 'Bright colors', 'Interactive elements', 'Safe materials'],
      themes: ['Princess & Unicorns', 'Superheroes', 'Animals & Safari', 'Rainbow & Clouds']
    },
    {
      icon: Star,
      title: 'Teens (13-17)',
      description: 'Trendy, Instagram-worthy decor that reflects their personality and style.',
      features: ['Modern aesthetics', 'Photo opportunities', 'Trendy colors', 'Social media ready'],
      themes: ['Boho Chic', 'Neon & Glow', 'Minimalist Modern', 'Vintage Glam']
    },
    {
      icon: Cake,
      title: 'Adults (18+)',
      description: 'Sophisticated balloon designs that celebrate milestones with elegance and style.',
      features: ['Elegant styling', 'Premium materials', 'Custom messaging', 'Refined aesthetics'],
      themes: ['Elegant Metallics', 'Garden Party', 'Black & Gold Glam', 'Vintage Romance']
    }
  ];

  const milestones = [
    { age: '1st', description: 'First birthday magic' },
    { age: '16th', description: 'Sweet sixteen celebration' },
    { age: '18th', description: 'Coming of age party' },
    { age: '21st', description: 'Legal milestone celebration' },
    { age: '30th', description: 'Dirty thirty bash' },
    { age: '40th', description: 'Fabulous forty celebration' },
    { age: '50th', description: 'Fifty and fabulous' },
    { age: '60th+', description: 'Diamond years celebration' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cream-100 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Gift className="h-8 w-8 text-gold-600 mr-3" />
                <span className="font-sans text-gold-600 font-semibold">Birthday Celebrations</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">
                Make Every Birthday Unforgettable
              </h1>
              <p className="font-sans text-xl text-charcoal-600 leading-relaxed mb-8">
                From first birthdays to milestone celebrations, we create magical balloon decor that brings joy and wonder to birthday parties of all ages. Our custom designs reflect the birthday person's personality and make their special day truly memorable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gold-600 text-white px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Plan Birthday Party
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-600 hover:text-white transition-colors duration-200 text-center"
                >
                  View Birthday Gallery
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/birthdays/IMG_5429.JPG"
                alt="Colorful birthday party balloon decor by R&Co Events"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                style={{ objectPosition: 'center center' }}
                width="600"
                height="384"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="font-serif text-2xl font-bold text-gold-600">300+</p>
                <p className="font-sans text-sm text-charcoal-600">Birthday Parties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Celebrations for Every Age
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Tailored balloon designs that perfectly match the birthday person's age, interests, and style preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-cream-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <group.icon className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-4">{group.title}</h3>
                <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">{group.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-sans font-semibold text-charcoal-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {group.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="font-sans text-charcoal-700 flex items-center">
                        <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans font-semibold text-charcoal-900 mb-3">Popular Themes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.themes.map((theme, themeIndex) => (
                      <span key={themeIndex} className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-sans">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Birthdays */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Milestone Birthday Specialists
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Celebrating life's special milestones with balloon decor that marks these important moments in style.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="font-serif text-3xl font-bold text-gold-600 mb-2">{milestone.age}</div>
                <p className="font-sans text-sm text-charcoal-600">{milestone.description}</p>
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
              Birthday Portfolio
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Browse our collection of joyful birthday celebrations that have brought smiles to faces of all ages.
            </p>
          </div>

          <Gallery images={birthdayImages} columns={3} className="mb-12" />

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
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Plan the Perfect Birthday Celebration"
            subtitle="Tell us about the birthday person and let's create a magical celebration they'll never forget"
          />
        </div>
      </section>
    </div>
  );
};

export default Birthdays;
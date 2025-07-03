import React from 'react';
import { Heart, Award, Users, Sparkles } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import InstagramFeed from '../components/InstagramFeed';

const About = () => {
  const stats = [
    { number: '500+', label: 'Events Created', icon: Sparkles },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Client Satisfaction', icon: Heart },
    { number: '50+', label: 'Repeat Clients', icon: Users }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cream-100 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">
                Welcome to Our Story
              </h1>
              <p className="font-sans text-xl text-charcoal-600 leading-relaxed mb-8">
                R&Co Events was born from a passion for creating extraordinary moments through luxury balloon decor. What started as a love for transforming spaces has blossomed into our commitment to bringing that same magic to your most important celebrations.
              </p>
              <p className="font-sans text-lg text-charcoal-600 leading-relaxed">
                When you choose R&Co Events, you're not just hiring event decorators—you're partnering with a team genuinely invested in making your day perfect with premium quality and exceptional service.
              </p>
            </div>
            <div className="relative">
              <img
                src="/bridal-showers/LandingPage.jpg"
                alt="R&Co Events creating beautiful luxury balloon decor with elegant romantic styling"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                style={{ objectPosition: 'center center' }}
                width="600"
                height="384"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold-600 text-white p-6 rounded-xl">
                <p className="font-serif text-2xl font-bold">500+</p>
                <p className="font-sans text-sm">Luxury Celebrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Our Passion for Excellence
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              We believe that every celebration deserves to be extraordinary. Our journey began with a simple vision: to elevate balloon decor to an art form, creating sophisticated atmospheres that transform ordinary spaces into magical experiences.
            </p>
          </div>

          <div className="bg-cream-50 rounded-2xl p-8 text-center">
            <p className="font-sans text-lg text-charcoal-700 leading-relaxed italic">
              "Our greatest strength is our ability to make every client feel valued and understood. We don't just plan events; we create experiences, treating your celebration with the same care and attention we would give our own special moments."
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-200 transition-colors duration-200">
                  <stat.icon className="h-8 w-8 text-gold-600" />
                </div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-2">{stat.number}</p>
                <p className="font-sans text-charcoal-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Luxury Means */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              What Luxury Means to Us
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Luxury isn't just about premium materials or flawless execution—though we deliver both. True luxury is the feeling of being completely understood and cared for throughout your entire experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream-50 rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-4">Premium Quality</h3>
              <p className="font-sans text-charcoal-600 leading-relaxed">
                Every detail considered with precision, ensuring your vision is realized with the finest materials and expert craftsmanship.
              </p>
            </div>

            <div className="bg-cream-50 rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-4">Exceptional Service</h3>
              <p className="font-sans text-charcoal-600 leading-relaxed">
                White-glove service from consultation to execution, ensuring every aspect exceeds expectations with professional excellence.
              </p>
            </div>

            <div className="bg-cream-50 rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-4">Personal Touch</h3>
              <p className="font-sans text-charcoal-600 leading-relaxed">
                In every interaction, treating each client with care and every celebration as if it were our own special occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Vision, Our Expertise */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
                Your Vision, Our Expertise
              </h2>
              <p className="font-sans text-lg text-charcoal-600 leading-relaxed mb-6">
                Every client journey begins with a comprehensive consultation—not just a meeting, but a real conversation about your dreams. We take the time to understand not just your vision, budget, and venue, but the feeling you want to create and the memories you're hoping to make.
              </p>
              <p className="font-sans text-lg text-charcoal-600 leading-relaxed">
                Each project is unique because each celebration is unique, and every experience becomes memorable to us because we truly invest ourselves in bringing your vision to life with luxury and precision.
              </p>
            </div>
            <div className="relative">
              <img
                src="/Holidays/49C24FD0-D7BB-4870-ACA3-32B6C2476B29.jpg"
                alt="Personal consultation and luxury balloon decor planning with R&Co Events team"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
                style={{ objectPosition: 'center center' }}
                width="600"
                height="384"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creating Your Wow Moment */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Creating Your Wow Moment
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Our greatest reward is that moment when you walk through the door and see your vision brought to life. We want you to feel a sense of wonder and amazement, but more than that—we want you to feel the care and expertise that went into every balloon, every arch, every carefully placed detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gold-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl font-bold">
                1
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4">Consultation</h3>
              <p className="font-sans text-charcoal-600">
                We start with a comprehensive conversation about your dreams and vision.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl font-bold">
                2
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4">Bespoke Design</h3>
              <p className="font-sans text-charcoal-600">
                Every design is created uniquely for your celebration and style preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl font-bold">
                3
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4">Expert Execution</h3>
              <p className="font-sans text-charcoal-600">
                We bring precision and artistry to every detail, ensuring flawless results.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl font-bold">
                4
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4">Your Wow Moment</h3>
              <p className="font-sans text-charcoal-600">
                Experience the magic when your vision comes to life perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
              Behind the Scenes
            </h2>
            <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto">
              Follow our creative process and see the expertise that goes into every luxury setup on Instagram @randco.events
            </p>
          </div>

          <InstagramFeed limit={6} columns={3} showCaption={true} className="mb-12" />

          <div className="text-center">
            <a
              href="https://instagram.com/randco.events"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gold-600 text-white px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-gold-700 transition-colors duration-200"
            >
              Follow Our Journey
            </a>
          </div>
        </div>
      </section>

      {/* Welcome CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-900 mb-6">
            Experience R&Co Events
          </h2>
          <p className="font-sans text-xl text-charcoal-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            When you choose R&Co Events, you're choosing more than luxury balloon decor for the Greater Toronto Area. You're choosing a team who will care for your celebration with expertise and precision, who will listen to your dreams with genuine interest, and who will work tirelessly to ensure your special moment is nothing short of extraordinary.
          </p>
          <p className="font-sans text-lg text-charcoal-600 mb-8 italic">
            Because at R&Co Events, every client receives our full attention, and every celebration becomes a masterpiece we're proud to create.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Ready to Experience Luxury?"
            subtitle="We can't wait to welcome you and bring your vision to life with premium quality, expert craftsmanship, and exceptional service"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
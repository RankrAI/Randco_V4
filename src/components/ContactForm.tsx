import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  title = "Join Our Family", 
  subtitle = "Let's create something extraordinary together with love and luxury",
  className = ""
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    guestCount: '',
    venue: '',
    budget: '',
    hearAboutUs: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-2">{title}</h2>
        <p className="text-charcoal-600 font-sans">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-charcoal-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
              placeholder="First name"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-charcoal-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
              placeholder="Last name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
              placeholder="(647) 555-1234"
            />
          </div>

          <div>
            <label htmlFor="eventType" className="block text-sm font-medium text-charcoal-700 mb-2">
              Event Type *
            </label>
            <select
              id="eventType"
              name="eventType"
              required
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
            >
              <option value="">Select event type</option>
              <option value="bridal-shower">Bridal Shower</option>
              <option value="baby-shower">Baby Shower</option>
              <option value="corporate">Corporate Event</option>
              <option value="birthday">Birthday Party</option>
              <option value="private">Private Party</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="eventDate" className="block text-sm font-medium text-charcoal-700 mb-2">
              Event Date *
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              required
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="eventTime" className="block text-sm font-medium text-charcoal-700 mb-2">
              Event Time
            </label>
            <input
              type="time"
              id="eventTime"
              name="eventTime"
              value={formData.eventTime}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="guestCount" className="block text-sm font-medium text-charcoal-700 mb-2">
              Guest Count *
            </label>
            <select
              id="guestCount"
              name="guestCount"
              required
              value={formData.guestCount}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
            >
              <option value="">Select guest count</option>
              <option value="1-25">1-25 guests</option>
              <option value="26-50">26-50 guests</option>
              <option value="51-100">51-100 guests</option>
              <option value="101-200">101-200 guests</option>
              <option value="200+">200+ guests</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="venue" className="block text-sm font-medium text-charcoal-700 mb-2">
            Venue/Location
          </label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
            placeholder="Event venue or location"
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-charcoal-700 mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="">Select budget range</option>
            <option value="500-1000">$500 - $1,000</option>
            <option value="1000-2500">$1,000 - $2,500</option>
            <option value="2500-5000">$2,500 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000+">$10,000+</option>
          </select>
        </div>

        <div>
          <label htmlFor="hearAboutUs" className="block text-sm font-medium text-charcoal-700 mb-2">
            How did you hear about us?
          </label>
          <select
            id="hearAboutUs"
            name="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="">Please select</option>
            <option value="google">Google Search</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="referral">Referral from friend/family</option>
            <option value="vendor">Vendor referral</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
            Tell us about your vision
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
            placeholder="Describe your celebration vision, color preferences, style, and any special family touches you'd love to include..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gold-600 text-white py-4 px-6 rounded-lg font-sans font-semibold hover:bg-gold-700 transition-colors duration-200 flex items-center justify-center"
        >
          <Send className="h-5 w-5 mr-2" />
          Join Our Family
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
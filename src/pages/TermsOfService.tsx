import React from 'react';
import { FileText, Mail, Phone, Scale } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-100 to-gold-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Scale className="h-12 w-12 text-gold-600 mr-4" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal-900">
              Terms of Service
            </h1>
          </div>
          <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            These terms govern your use of R&Co Events' website and services. Please read them carefully to understand your rights and obligations.
          </p>
          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="font-sans text-charcoal-700">
              <strong>Effective Date:</strong> July 2, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="font-sans text-lg text-charcoal-600 leading-relaxed">
                Welcome to R&Co Events! These Terms of Service (the "Terms") govern your access to and use of the R&Co Events website (the "Website") and all services provided by R&Co Events (the "Services"), including but not limited to balloon decor design, installation, and related event services. By accessing or using the Website or Services, you agree to be bound by these Terms, as well as our Privacy Policy. If you do not agree to these Terms, you may not access or use the Website or Services.
              </p>
            </div>

            {/* Section 1: Acceptance of Terms */}
            <div className="mb-12 bg-cream-50 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">1</div>
                Acceptance of Terms
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                By accessing and using the R&Co Events Website and Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. These Terms constitute a legally binding agreement between you and R&Co Events. Your continued use of the Website or Services after any modifications to these Terms signifies your acceptance of the revised Terms.
              </p>
            </div>

            {/* Section 2: Description of Services */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">2</div>
                Description of Services
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                R&Co Events specializes in providing luxury balloon decor services for various events, including weddings, corporate events, birthdays, and private parties. Our Services include, but are not limited to, consultation, custom design, delivery, installation, and breakdown of balloon arrangements. Specific details regarding the scope of services, pricing, and timelines will be outlined in a separate service agreement or quote provided to you.
              </p>
            </div>

            {/* Section 3: User Obligations */}
            <div className="mb-12 bg-cream-50 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">3</div>
                User Obligations
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed mb-4">
                As a user of our Website and Services, you agree to:
              </p>
              <ul className="space-y-3 font-sans text-charcoal-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  Provide accurate, current, and complete information when making inquiries or booking services.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  Use the Website and Services only for lawful purposes and in accordance with these Terms.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  Not engage in any activity that interferes with or disrupts the Website or Services.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  Not reproduce, duplicate, copy, sell, resell, or exploit any portion of the Website or Services without express written permission from R&Co Events.
                </li>
              </ul>
            </div>

            {/* Section 4: Intellectual Property */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">4</div>
                Intellectual Property
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                All content on the R&Co Events Website, including but not limited to text, graphics, logos, images, photographs, designs, and software, is the property of R&Co Events or its content suppliers and is protected by Canadian and international copyright, trademark, and other intellectual property laws. You may not use, reproduce, distribute, modify, or create derivative works of any content without the express written consent of R&Co Events.
              </p>
            </div>

            {/* Section 5: Pricing and Payment */}
            <div className="mb-12 bg-cream-50 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">5</div>
                Pricing and Payment
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                Pricing for R&Co Events' services will be provided through a custom quote based on your specific event requirements. All quotes are valid for a specified period. Payment terms, including deposit requirements, payment schedules, and accepted payment methods, will be clearly outlined in your service agreement. All prices are in Canadian Dollars (CAD) unless otherwise stated. Applicable taxes will be added to the total cost.
              </p>
            </div>

            {/* Section 6: Cancellation and Refunds */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">6</div>
                Cancellation and Refunds
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                Cancellation policies and refund eligibility will be detailed in your specific service agreement. Generally, deposits are non-refundable, and cancellation fees may apply depending on the timing of the cancellation relative to the event date. We encourage you to review your service agreement carefully regarding cancellation terms.
              </p>
            </div>

            {/* Section 7: Limitation of Liability */}
            <div className="mb-12 bg-cream-50 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">7</div>
                Limitation of Liability
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                To the fullest extent permitted by applicable law, R&Co Events shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Website or Services; (ii) any conduct or content of any third party on the Website; (iii) any content obtained from the Website; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
              </p>
            </div>

            {/* Section 8: Indemnification */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">8</div>
                Indemnification
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless R&Co Events, its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from your violation of these Terms or your use of the Website or Services.
              </p>
            </div>

            {/* Section 9: Governing Law */}
            <div className="mb-12 bg-cream-50 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">9</div>
                Governing Law and Jurisdiction
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Ontario for the resolution of any disputes arising out of or relating to these Terms or the Website/Services.
              </p>
            </div>

            {/* Section 10: Changes to Terms */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">10</div>
                Changes to Terms
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                R&Co Events reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Website or Services after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            {/* Section 11: Severability */}
            <div className="mb-12 bg-cream-50 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">11</div>
                Severability
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-charcoal-900 text-white rounded-xl p-8">
              <h2 className="font-serif text-3xl font-semibold mb-6 text-center flex items-center justify-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">12</div>
                Contact Information
              </h2>
              <p className="font-sans text-gray-300 leading-relaxed mb-8 text-center">
                If you have any questions about these Terms, please contact us at:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-gold-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Email</h3>
                  <a 
                    href="mailto:info@randcoevents.ca" 
                    className="font-sans text-gold-400 hover:text-gold-300 transition-colors duration-200"
                  >
                    info@randcoevents.ca
                  </a>
                </div>

                <div className="text-center">
                  <div className="bg-gold-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Phone</h3>
                  <a 
                    href="tel:+16479381555" 
                    className="font-sans text-gold-400 hover:text-gold-300 transition-colors duration-200"
                  >
                    (647) 938-1555
                  </a>
                </div>

                <div className="text-center">
                  <div className="bg-gold-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Legal Questions</h3>
                  <p className="font-sans text-gray-300">
                    Available via email or phone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
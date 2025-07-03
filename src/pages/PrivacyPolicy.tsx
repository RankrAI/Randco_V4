import React from 'react';
import { Shield, Mail, Phone, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-100 to-gold-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-gold-600 mr-4" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal-900">
              Privacy Policy
            </h1>
          </div>
          <p className="font-sans text-xl text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how R&Co Events collects, uses, and protects your personal information.
          </p>
          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="font-sans text-charcoal-700">
              <strong>Effective Date:</strong> July 2, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="font-sans text-lg text-charcoal-600 leading-relaxed">
                At R&Co Events, we are committed to protecting the privacy and confidentiality of the personal information of our clients, website visitors, and all individuals with whom we interact. This Privacy Policy outlines how R&Co Events collects, uses, discloses, and protects your personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada, and other applicable provincial laws, including those of Ontario.
              </p>
              <p className="font-sans text-lg text-charcoal-600 leading-relaxed mt-4">
                By using our website, services, or otherwise providing us with your personal information, you agree to the terms of this Privacy Policy. We encourage you to read this policy carefully to understand our practices regarding your personal information.
              </p>
            </div>

            {/* Section 1: Accountability */}
            <div className="mb-12 bg-cream-50 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">1</div>
                Accountability
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                R&Co Events is responsible for all personal information under its control. We have designated a Privacy Officer who is accountable for our compliance with the principles described in this Privacy Policy and with applicable privacy laws. Our Privacy Officer can be reached at <a href="mailto:info@randcoevents.ca" className="text-gold-600 hover:text-gold-700">info@randcoevents.ca</a>. We are committed to protecting your personal information and have implemented various measures to ensure its safeguarding.
              </p>
            </div>

            {/* Section 2: Identifying Purposes */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">2</div>
                Identifying Purposes for Collection
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed mb-4">
                R&Co Events collects personal information for specific, identified purposes. We will identify the purposes for which personal information is collected at or before the time of collection. The primary purposes for collecting personal information include, but are not limited to:
              </p>
              <ul className="space-y-3 font-sans text-charcoal-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  To provide and deliver our event decor services, including balloon installations, consultations, and related offerings.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  To respond to inquiries, requests for quotes, and other communications.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  To process payments for services rendered.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  To manage client relationships and provide customer support.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  To send marketing and promotional communications, where consent has been provided.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  To improve our website, services, and overall client experience.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  To comply with legal and regulatory requirements.
                </li>
              </ul>
              <p className="font-sans text-charcoal-700 leading-relaxed mt-4">
                We will not use your personal information for any purpose other than those for which it was collected, except with your consent or as required by law.
              </p>
            </div>

            {/* Section 3: Consent */}
            <div className="mb-12 bg-cream-50 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">3</div>
                Consent
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                Your knowledge and consent are required for the collection, use, or disclosure of your personal information, except where inappropriate or legally required without consent. Consent can be express or implied, and may be given orally, in writing, or electronically. You may withdraw your consent at any time, subject to legal or contractual restrictions and reasonable notice. Withdrawal of consent may limit our ability to provide certain services to you.
              </p>
            </div>

            {/* Section 4: Limiting Collection */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">4</div>
                Limiting Collection
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                R&Co Events limits the collection of personal information to that which is necessary for the purposes identified. We collect personal information by fair and lawful means. We will not collect excessive amounts of information or information that is not relevant to the stated purposes.
              </p>
            </div>

            {/* Section 5: Limiting Use, Disclosure, and Retention */}
            <div className="mb-12 bg-cream-50 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">5</div>
                Limiting Use, Disclosure, and Retention
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed mb-4">
                Personal information collected by R&Co Events will not be used or disclosed for purposes other than those for which it was collected, except with your consent or as required or permitted by law. We retain personal information only for as long as necessary to fulfill the identified purposes or as required by law. Once personal information is no longer needed, it will be securely destroyed or anonymized.
              </p>
              <p className="font-sans text-charcoal-700 leading-relaxed mb-4">
                We may disclose your personal information to third parties in the following circumstances:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-sans font-semibold text-charcoal-900 mb-2">Service Providers:</h4>
                  <p className="font-sans text-charcoal-700">
                    We may share information with third-party service providers who perform functions on our behalf, such as payment processing, website hosting, marketing, and analytics. These service providers are contractually obligated to protect your information and use it only for the purposes for which it was disclosed.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-charcoal-900 mb-2">Legal Requirements:</h4>
                  <p className="font-sans text-charcoal-700">
                    We may disclose personal information if required to do so by law, court order, or governmental regulation, or if we believe in good faith that such action is necessary to comply with legal obligations, protect our rights or property, or ensure the safety of our clients or the public.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-charcoal-900 mb-2">Business Transfers:</h4>
                  <p className="font-sans text-charcoal-700">
                    In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of the transaction. We will notify you via email or a prominent notice on our website of any such change in ownership or control of your personal information.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Accuracy */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">6</div>
                Accuracy
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                R&Co Events strives to ensure that the personal information we collect and maintain is accurate, complete, and up-to-date as is necessary for the purposes for which it is to be used. We rely on you to provide us with accurate and complete information and to inform us of any changes.
              </p>
            </div>

            {/* Section 7: Safeguards */}
            <div className="mb-12 bg-cream-50 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6 flex items-center">
                <div className="bg-gold-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-lg">7</div>
                Safeguards
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed mb-4">
                R&Co Events employs various physical, administrative, and technical safeguards to protect your personal information against loss, theft, unauthorized access, disclosure, copying, use, or modification. These measures include, but are not limited to:
              </p>
              <ul className="space-y-3 font-sans text-charcoal-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  Secure servers and data encryption.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  Restricted access to personal information for authorized personnel only.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  Regular security assessments and updates.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                  Employee training on privacy and data protection.
                </li>
              </ul>
              <p className="font-sans text-charcoal-700 leading-relaxed mt-4">
                While we implement robust security measures, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Sections 8-10 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4 flex items-center">
                  <div className="bg-gold-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 font-bold text-sm">8</div>
                  Openness
                </h3>
                <p className="font-sans text-charcoal-700 text-sm leading-relaxed">
                  R&Co Events is committed to being open about its privacy practices. This Privacy Policy is readily available on our website. We will provide additional information about our privacy practices upon request.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4 flex items-center">
                  <div className="bg-gold-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 font-bold text-sm">9</div>
                  Individual Access
                </h3>
                <p className="font-sans text-charcoal-700 text-sm leading-relaxed">
                  You have the right to access your personal information held by R&Co Events and to request corrections to any inaccuracies. To request access, please contact our Privacy Officer in writing.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-4 flex items-center">
                  <div className="bg-gold-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 font-bold text-sm">10</div>
                  Challenging Compliance
                </h3>
                <p className="font-sans text-charcoal-700 text-sm leading-relaxed">
                  If you have concerns about our compliance with this Privacy Policy, you may contact our Privacy Officer. We will investigate all complaints and take appropriate measures to resolve them.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12 bg-cream-50 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-6">
                Changes to this Privacy Policy
              </h2>
              <p className="font-sans text-charcoal-700 leading-relaxed">
                R&Co Events reserves the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-charcoal-900 text-white rounded-xl p-8">
              <h2 className="font-serif text-3xl font-semibold mb-6 text-center">
                Contact Us
              </h2>
              <p className="font-sans text-gray-300 leading-relaxed mb-8 text-center">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact our Privacy Officer:
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
                  <h3 className="font-serif text-lg font-semibold mb-2">Privacy Officer</h3>
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

export default PrivacyPolicy;
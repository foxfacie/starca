import React from 'react';
import { Handshake, FileText, Clock, CheckCircle, Shield, Target, Users, Building } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const PartnershipRegistration: React.FC = () => {
  const processSteps = [
    {
      step: 1,
      title: "Partnership Deed Drafting",
      description: "Prepare comprehensive partnership deed with all terms and conditions"
    },
    {
      step: 2,
      title: "PAN Application",
      description: "Apply for PAN card for the partnership firm"
    },
    {
      step: 3,
      title: "Registration Certificate",
      description: "Obtain registration certificate from Registrar of Firms"
    },
    {
      step: 4,
      title: "Bank Account Opening",
      description: "Open current account in the name of partnership firm"
    },
    {
      step: 5,
      title: "GST Registration",
      description: "Register for GST if annual turnover exceeds threshold"
    },
    {
      step: 6,
      title: "Other Licenses",
      description: "Obtain necessary business licenses and permits"
    }
  ];

  const benefits = [
    "Easy formation and dissolution",
    "Shared responsibility and workload",
    "Combined skills and expertise",
    "Shared financial resources",
    "Tax benefits and deductions",
    "Flexibility in operations",
    "Personal relationship and trust",
    "Lower compliance requirements"
  ];

  const documents = [
    "PAN Card of all partners",
    "Aadhaar Card of all partners",
    "Address proof of all partners",
    "Passport size photographs",
    "Address proof of business premises",
    "Rent agreement or NOC from owner",
    "Bank statements of partners",
    "Partnership deed (if already prepared)"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-warning-100 to-warning-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <Handshake className="w-10 h-10 text-warning-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-6">
            Partnership Registration
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Professional partnership firm registration services with comprehensive legal documentation. 
            Establish your business partnership with proper legal framework and compliance support.
          </p>
        </div>

        {/* Service Overview */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
                  Partnership Firm Registration
                </h2>
                <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                  Partnership is a popular business structure where two or more persons come together 
                  to carry on business with shared profits and losses. It's governed by the Indian 
                  Partnership Act, 1932 and offers flexibility in operations.
                </p>
                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  Our comprehensive partnership registration services include drafting partnership deed, 
                  obtaining necessary registrations, and ensuring compliance with all legal requirements 
                  for smooth business operations.
                </p>
                <CTAButton to="/contact" variant="primary" size="lg" glow={true}>
                  Register Partnership
                </CTAButton>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl text-center">
                  <Building className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-600 mb-2">300+</div>
                  <div className="text-secondary-700 text-sm">Partnerships Registered</div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl text-center">
                  <Clock className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-600 mb-2">5-7</div>
                  <div className="text-secondary-700 text-sm">Days Process</div>
                </div>
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-2xl text-center">
                  <CheckCircle className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-accent-600 mb-2">100%</div>
                  <div className="text-secondary-700 text-sm">Success Rate</div>
                </div>
                <div className="bg-gradient-to-br from-trust-50 to-trust-100 p-6 rounded-2xl text-center">
                  <Target className="w-8 h-8 text-trust-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-trust-600 mb-2">24/7</div>
                  <div className="text-secondary-700 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Process */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Partnership Registration Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Step-by-step process for registering your partnership firm with legal compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-glass-100 backdrop-blur-xl rounded-3xl p-6 shadow-glass border border-white/20 group-hover:shadow-glass-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-warning-600 to-warning-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-3">{step.title}</h3>
                  <p className="text-secondary-700 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-warning-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
                Required Documents
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Essential documents needed for partnership registration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((document, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-warning-100 to-warning-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-warning-600" />
                  </div>
                  <div>
                    <p className="text-secondary-800 font-medium">{document}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Benefits of Partnership Registration
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Advantages of registering your partnership firm for business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-glass-100 backdrop-blur-xl rounded-2xl p-6 shadow-glass border border-white/20">
                <div className="w-8 h-8 bg-gradient-to-br from-trust-100 to-trust-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-trust-600" />
                </div>
                <div>
                  <p className="text-secondary-800 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-warning-600 to-warning-800 rounded-3xl text-white text-center">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Register Your Partnership?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Start your business partnership with proper legal documentation and compliance. 
              Get expert assistance for smooth registration process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                to="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-warning-600 hover:bg-gray-100 font-bold"
              >
                Start Registration
              </CTAButton>
              <CTAButton 
                href="tel:+91-11-XXXX-XXXX" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-warning-600 font-bold"
              >
                Call: +91-11-XXXX-XXXX
              </CTAButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnershipRegistration;
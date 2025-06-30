import React from 'react';
import { User, FileText, Clock, CheckCircle, Shield, Target, Globe, Building } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const OPCRegistration: React.FC = () => {
  const processSteps = [
    {
      step: 1,
      title: "Name Reservation",
      description: "Reserve company name through MCA portal with SPICe+ form"
    },
    {
      step: 2,
      title: "Digital Signature",
      description: "Obtain Digital Signature Certificate for the sole member"
    },
    {
      step: 3,
      title: "Director Identification",
      description: "Apply for Director Identification Number (DIN)"
    },
    {
      step: 4,
      title: "Document Preparation",
      description: "Draft MOA, AOA, and other incorporation documents"
    },
    {
      step: 5,
      title: "SPICe+ Filing",
      description: "File incorporation application with integrated services"
    },
    {
      step: 6,
      title: "Certificate & PAN",
      description: "Receive incorporation certificate, PAN, and TAN"
    }
  ];

  const benefits = [
    "Single person ownership and control",
    "Limited liability protection",
    "Separate legal entity status",
    "Perpetual succession",
    "Easy compliance requirements",
    "Professional credibility",
    "Access to funding opportunities",
    "Tax benefits and deductions"
  ];

  const eligibility = [
    "Only Indian citizens and residents can form OPC",
    "One person can be member of only one OPC",
    "Minimum one director required (can be the same person)",
    "Nominee must be appointed for the sole member",
    "Paid-up capital should not exceed ₹50 lakhs",
    "Annual turnover should not exceed ₹2 crores"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <User className="w-10 h-10 text-accent-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-6">
            One Person Company Registration
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Perfect for solo entrepreneurs who want the benefits of a company structure with single ownership. 
            Get limited liability protection while maintaining complete control over your business.
          </p>
        </div>

        {/* Service Overview */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
                  What is One Person Company?
                </h2>
                <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                  One Person Company (OPC) is a unique business structure introduced under the Companies Act 2013, 
                  designed specifically for solo entrepreneurs. It combines the benefits of a company with the 
                  simplicity of sole proprietorship.
                </p>
                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  OPC provides limited liability protection, separate legal entity status, and professional 
                  credibility while allowing complete control by a single person. It's ideal for small businesses, 
                  startups, and professional services.
                </p>
                <CTAButton to="/contact" variant="primary" size="lg" glow={true}>
                  Register Your OPC
                </CTAButton>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl text-center">
                  <Building className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-600 mb-2">150+</div>
                  <div className="text-secondary-700 text-sm">OPCs Registered</div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl text-center">
                  <Clock className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-600 mb-2">10-15</div>
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
              OPC Registration Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Simplified registration process designed for solo entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-glass-100 backdrop-blur-xl rounded-3xl p-6 shadow-glass border border-white/20 group-hover:shadow-glass-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-3">{step.title}</h3>
                  <p className="text-secondary-700 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
                Eligibility Criteria
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Important requirements for One Person Company registration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eligibility.map((criteria, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-secondary-800 font-medium">{criteria}</p>
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
              Benefits of OPC Registration
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Advantages of choosing One Person Company structure for your business.
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

        {/* Comparison Table */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
                OPC vs Other Business Structures
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-glass-200 rounded-xl">
                    <th className="px-6 py-4 text-left rounded-l-xl">Feature</th>
                    <th className="px-6 py-4 text-center">OPC</th>
                    <th className="px-6 py-4 text-center">Private Ltd</th>
                    <th className="px-6 py-4 text-center">LLP</th>
                    <th className="px-6 py-4 text-center rounded-r-xl">Sole Proprietorship</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 font-medium">Members</td>
                    <td className="px-6 py-4 text-center">1</td>
                    <td className="px-6 py-4 text-center">2-200</td>
                    <td className="px-6 py-4 text-center">2+</td>
                    <td className="px-6 py-4 text-center">1</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 font-medium">Limited Liability</td>
                    <td className="px-6 py-4 text-center text-green-600">✓</td>
                    <td className="px-6 py-4 text-center text-green-600">✓</td>
                    <td className="px-6 py-4 text-center text-green-600">✓</td>
                    <td className="px-6 py-4 text-center text-red-600">✗</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 font-medium">Separate Legal Entity</td>
                    <td className="px-6 py-4 text-center text-green-600">✓</td>
                    <td className="px-6 py-4 text-center text-green-600">✓</td>
                    <td className="px-6 py-4 text-center text-green-600">✓</td>
                    <td className="px-6 py-4 text-center text-red-600">✗</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 font-medium">Compliance</td>
                    <td className="px-6 py-4 text-center text-yellow-600">Medium</td>
                    <td className="px-6 py-4 text-center text-red-600">High</td>
                    <td className="px-6 py-4 text-center text-green-600">Low</td>
                    <td className="px-6 py-4 text-center text-green-600">Very Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-accent-600 to-accent-800 rounded-3xl text-white text-center">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your One Person Company?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Perfect for solo entrepreneurs who want professional credibility with complete control. 
              Let us help you register your OPC with full compliance support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                to="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-accent-600 hover:bg-gray-100 font-bold"
              >
                Register Your OPC
              </CTAButton>
              <CTAButton 
                href="tel:+91-11-XXXX-XXXX" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent-600 font-bold"
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

export default OPCRegistration;
import React from 'react';
import { FileText, Building2, Users, Clock, CheckCircle, Shield, Target, Globe } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const CompanyFormation: React.FC = () => {
  const companyTypes = [
    {
      title: "Private Limited Company",
      description: "Most popular business structure with limited liability and separate legal entity",
      icon: Building2,
      features: ["2-200 shareholders", "Minimum 2 directors", "Limited liability", "Separate legal entity"]
    },
    {
      title: "Public Limited Company",
      description: "For businesses planning to raise capital from public and list on stock exchanges",
      icon: Globe,
      features: ["Minimum 7 shareholders", "Minimum 3 directors", "Can raise public funds", "Stock exchange listing eligible"]
    },
    {
      title: "One Person Company (OPC)",
      description: "Perfect for solo entrepreneurs with benefits of company structure",
      icon: Users,
      features: ["Single shareholder", "One director", "Limited liability", "Separate legal entity"]
    },
    {
      title: "Limited Liability Partnership",
      description: "Combines benefits of partnership flexibility with company's limited liability",
      icon: Shield,
      features: ["Minimum 2 partners", "No maximum limit", "Limited liability", "Flexible management"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Name Reservation",
      description: "Check availability and reserve company name with MCA"
    },
    {
      step: 2,
      title: "Digital Signatures",
      description: "Obtain Digital Signature Certificates (DSC) for directors"
    },
    {
      step: 3,
      title: "Director Identification",
      description: "Apply for Director Identification Numbers (DIN)"
    },
    {
      step: 4,
      title: "Document Preparation",
      description: "Draft MOA, AOA, and other incorporation documents"
    },
    {
      step: 5,
      title: "MCA Filing",
      description: "File incorporation application with Registrar of Companies"
    },
    {
      step: 6,
      title: "Certificate & Compliance",
      description: "Receive incorporation certificate and complete post-incorporation compliance"
    }
  ];

  const documents = [
    "PAN Card of all directors/shareholders",
    "Aadhaar Card of all directors/shareholders",
    "Passport size photographs",
    "Address proof of registered office",
    "Utility bills (electricity/telephone)",
    "No Objection Certificate from property owner",
    "Bank statements of directors",
    "Professional qualification certificates (if applicable)"
  ];

  const benefits = [
    "Limited liability protection for shareholders",
    "Separate legal entity status",
    "Perpetual succession",
    "Easy transfer of ownership",
    "Better credibility with customers and vendors",
    "Access to funding and investment opportunities",
    "Tax benefits and deductions",
    "Professional management structure"
  ];

  const faqs = [
    {
      question: "What is the minimum capital required to start a company?",
      answer: "There is no minimum capital requirement for private limited companies in India. You can start with as low as ₹1,000 as authorized capital. However, you need to pay stamp duty and registration fees based on the authorized capital."
    },
    {
      question: "How long does company registration take?",
      answer: "Typically, company registration takes 10-15 working days if all documents are in order. The process can be expedited to 7-10 days with proper preparation and quick response to any MCA queries."
    },
    {
      question: "Can foreign nationals be directors in Indian companies?",
      answer: "Yes, foreign nationals can be directors in Indian companies. However, at least one director must be an Indian resident. Foreign directors need to obtain Director Identification Number (DIN) from MCA."
    },
    {
      question: "What are the ongoing compliance requirements?",
      answer: "Companies must file annual returns, financial statements, conduct board meetings, maintain statutory registers, and comply with various ROC filings. We provide comprehensive compliance support to ensure all requirements are met."
    },
    {
      question: "Can I change company name after incorporation?",
      answer: "Yes, company name can be changed after incorporation by passing a special resolution and obtaining approval from MCA. The process involves checking name availability, board resolution, and filing necessary forms with ROC."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Company Formation Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Complete business incorporation services for Private Limited, Public Limited, 
              One Person Company, and LLP registrations. Start your business journey with expert guidance.
            </p>
            <CTAButton to="/contact" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Start Your Company
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Company Registration
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Starting a business in India requires proper legal structure and compliance with regulatory 
                requirements. Our company formation services ensure smooth incorporation process with all 
                necessary approvals and documentation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We handle the entire incorporation process from name reservation to obtaining incorporation 
                certificate, ensuring your business is legally compliant from day one. Our experienced team 
                guides you through choosing the right business structure based on your specific needs.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With deep understanding of MCA procedures and requirements, we ensure quick turnaround 
                times and hassle-free incorporation experience for entrepreneurs and businesses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
                <Building2 className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-700 text-sm">Companies Incorporated</div>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl text-center">
                <Clock className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary-600 mb-2">10-15</div>
                <div className="text-gray-700 text-sm">Days Average Time</div>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl text-center">
                <CheckCircle className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent-600 mb-2">100%</div>
                <div className="text-gray-700 text-sm">Success Rate</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
                <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Companies */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Business Entities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right business structure that aligns with your goals, funding requirements, and growth plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyTypes.map((type, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                    <type.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Company Registration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures quick and hassle-free company incorporation with full compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Required Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential documents needed for company registration process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((document, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">{document}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Company Registration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Incorporating your business provides numerous advantages for growth and protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-xl p-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose STARCA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose STARCA for Company Formation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise and comprehensive support ensure smooth business incorporation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">Experienced CAs and CS professionals guide you through the entire incorporation process with personalized advice.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Turnaround</h3>
              <p className="text-gray-600">Efficient process management ensures company registration within 10-15 working days with all compliances.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Compliance</h3>
              <p className="text-gray-600">Ensure all regulatory requirements are met from incorporation to ongoing compliance support.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Preparation</h3>
              <p className="text-gray-600">Professional drafting of MOA, AOA, and all incorporation documents tailored to your business needs.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Post-Incorporation Support</h3>
              <p className="text-gray-600">Ongoing support for statutory compliances, annual filings, and business advisory services.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">Clear, upfront pricing with no hidden costs. Competitive rates for all incorporation services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about company formation and registration
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let our experts handle your company registration process. Get started today with 
            professional incorporation services and ongoing compliance support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              to="/contact" 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Start Company Registration
            </CTAButton>
            <CTAButton 
              href="tel:+91-11-XXXX-XXXX" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Call: +91-11-XXXX-XXXX
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyFormation;
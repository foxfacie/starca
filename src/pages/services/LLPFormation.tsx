import React from 'react';
import { Users, FileText, Clock, CheckCircle, Shield, Target, Globe, Building2 } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const LLPFormation: React.FC = () => {
  const processSteps = [
    {
      step: 1,
      title: "Name Reservation",
      description: "Reserve LLP name with MCA through RUN-LLP portal"
    },
    {
      step: 2,
      title: "Digital Signatures",
      description: "Obtain Digital Signature Certificates for designated partners"
    },
    {
      step: 3,
      title: "Document Preparation",
      description: "Draft LLP Agreement and prepare incorporation documents"
    },
    {
      step: 4,
      title: "FiLLiP Filing",
      description: "File incorporation application through FiLLiP portal"
    },
    {
      step: 5,
      title: "Certificate Issuance",
      description: "Receive Certificate of Incorporation from ROC"
    },
    {
      step: 6,
      title: "Post-Incorporation",
      description: "Complete bank account opening and compliance setup"
    }
  ];

  const benefits = [
    "Limited liability protection for partners",
    "Separate legal entity status",
    "Perpetual succession",
    "No minimum capital requirement",
    "Flexible management structure",
    "Tax benefits and deductions",
    "Easy compliance requirements",
    "Professional credibility"
  ];

  const documents = [
    "PAN Card of all partners",
    "Aadhaar Card of all partners",
    "Passport size photographs",
    "Address proof of registered office",
    "Utility bills for office address",
    "No Objection Certificate from property owner",
    "Bank statements of partners",
    "Professional qualification certificates (if applicable)"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <Users className="w-10 h-10 text-secondary-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-6">
            LLP Formation Services
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Professional Limited Liability Partnership registration services with complete compliance support. 
            Combine the benefits of partnership flexibility with company-like limited liability protection.
          </p>
        </div>

        {/* Service Overview */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
                  Professional LLP Registration
                </h2>
                <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                  Limited Liability Partnership (LLP) is an ideal business structure that combines the 
                  operational flexibility of a partnership with the limited liability benefits of a company. 
                  It's perfect for professional services and small to medium businesses.
                </p>
                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  Our comprehensive LLP formation services ensure smooth registration process with all 
                  necessary approvals and documentation, helping you establish your business with proper 
                  legal structure and compliance framework.
                </p>
                <CTAButton to="/contact" variant="primary" size="lg" glow={true}>
                  Start LLP Registration
                </CTAButton>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl text-center">
                  <Building2 className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-600 mb-2">200+</div>
                  <div className="text-secondary-700 text-sm">LLPs Registered</div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl text-center">
                  <Clock className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-600 mb-2">7-10</div>
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
              LLP Registration Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our streamlined process ensures quick and hassle-free LLP registration with full compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-glass-100 backdrop-blur-xl rounded-3xl p-6 shadow-glass border border-white/20 group-hover:shadow-glass-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-3">{step.title}</h3>
                  <p className="text-secondary-700 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
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
                Essential documents needed for LLP registration process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((document, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
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
              Benefits of LLP Registration
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              LLP structure provides numerous advantages for professional services and businesses.
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
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl text-white text-center">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Register Your LLP?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Let our experts handle your LLP registration process. Get started today with 
              professional incorporation services and ongoing compliance support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                to="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold"
              >
                Start LLP Registration
              </CTAButton>
              <CTAButton 
                href="tel:+91-11-XXXX-XXXX" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600 font-bold"
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

export default LLPFormation;
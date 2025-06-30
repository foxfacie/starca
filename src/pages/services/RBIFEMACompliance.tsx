import React from 'react';
import { Globe, FileText, Clock, CheckCircle, Shield, Target, Users, Building } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const RBIFEMACompliance: React.FC = () => {
  const services = [
    {
      title: "Foreign Direct Investment (FDI)",
      description: "Complete FDI compliance and reporting services",
      icon: Building,
      features: ["FDI Policy Compliance", "Sectoral Cap Verification", "Pricing Guidelines", "Reporting Requirements"]
    },
    {
      title: "External Commercial Borrowings (ECB)",
      description: "ECB structuring and compliance management",
      icon: Globe,
      features: ["ECB Guidelines", "End-use Compliance", "Hedging Requirements", "Reporting to RBI"]
    },
    {
      title: "Overseas Direct Investment (ODI)",
      description: "Indian company investments abroad",
      icon: Target,
      features: ["ODI Approval", "Compliance Monitoring", "Annual Performance Reports", "Liquidation Procedures"]
    },
    {
      title: "Trade Finance",
      description: "Import-export trade compliance",
      icon: Users,
      features: ["Export-Import Procedures", "Trade Credits", "Advance Remittances", "Documentary Compliance"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Compliance Assessment",
      description: "Evaluate current FEMA compliance status and identify gaps"
    },
    {
      step: 2,
      title: "Documentation Review",
      description: "Review existing documentation and prepare required forms"
    },
    {
      step: 3,
      title: "RBI Filings",
      description: "File necessary forms and applications with RBI"
    },
    {
      step: 4,
      title: "Approval Process",
      description: "Follow up on approvals and address RBI queries"
    },
    {
      step: 5,
      title: "Ongoing Compliance",
      description: "Ensure continuous compliance with reporting requirements"
    },
    {
      step: 6,
      title: "Periodic Reviews",
      description: "Regular compliance reviews and updates"
    }
  ];

  const complianceAreas = [
    "Foreign Exchange Management Act (FEMA) compliance",
    "RBI master directions and circulars",
    "Liberalized Remittance Scheme (LRS)",
    "Foreign Portfolio Investment (FPI) regulations",
    "Current account transactions",
    "Capital account transactions",
    "Foreign exchange risk management",
    "Cross-border merger and acquisition compliance"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <Globe className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-6">
            RBI/FEMA Compliance Services
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive FEMA compliance and RBI regulatory services for foreign exchange transactions. 
            Expert guidance for FDI, ECB, ODI, and cross-border business operations.
          </p>
        </div>

        {/* Service Overview */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
                  FEMA & RBI Compliance Expertise
                </h2>
                <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                  Foreign Exchange Management Act (FEMA) governs foreign exchange transactions in India. 
                  Our expert team provides comprehensive compliance services to ensure your business 
                  operations align with RBI regulations and FEMA provisions.
                </p>
                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  From FDI structuring to ECB compliance, we handle all aspects of foreign exchange 
                  regulations, helping businesses navigate complex regulatory requirements while 
                  maximizing opportunities for international growth.
                </p>
                <CTAButton to="/contact" variant="primary" size="lg" glow={true}>
                  Get FEMA Consultation
                </CTAButton>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl text-center">
                  <Building className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-600 mb-2">150+</div>
                  <div className="text-secondary-700 text-sm">FEMA Compliances</div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl text-center">
                  <Clock className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-600 mb-2">15-30</div>
                  <div className="text-secondary-700 text-sm">Days Processing</div>
                </div>
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-2xl text-center">
                  <CheckCircle className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-accent-600 mb-2">100%</div>
                  <div className="text-secondary-700 text-sm">Compliance Rate</div>
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

        {/* Services */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Our FEMA Compliance Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive foreign exchange compliance solutions for all business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-glass-100 backdrop-blur-xl rounded-3xl p-8 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800">{service.title}</h3>
                </div>
                <p className="text-secondary-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-secondary-700">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
                Key Compliance Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Comprehensive coverage of all FEMA and RBI compliance requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceAreas.map((area, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-secondary-800 font-medium">{area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Our Compliance Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Systematic approach ensuring complete FEMA compliance and RBI regulatory adherence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-glass-100 backdrop-blur-xl rounded-3xl p-6 shadow-glass border border-white/20 group-hover:shadow-glass-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-3">{step.title}</h3>
                  <p className="text-secondary-700 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-indigo-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-3xl text-white text-center">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need FEMA Compliance Support?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Ensure complete compliance with FEMA regulations and RBI guidelines. 
              Get expert assistance for all your foreign exchange compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                to="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 font-bold"
              >
                Get FEMA Consultation
              </CTAButton>
              <CTAButton 
                href="tel:+91-11-XXXX-XXXX" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-indigo-600 font-bold"
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

export default RBIFEMACompliance;
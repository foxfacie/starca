import React from 'react';
import { Truck, FileText, Clock, CheckCircle, Shield, Target, Globe, Calculator } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const CustomAdvisory: React.FC = () => {
  const services = [
    {
      title: "Import-Export Compliance",
      description: "Complete customs compliance for international trade",
      icon: Globe,
      features: ["Import Procedures", "Export Documentation", "Duty Optimization", "Compliance Audit"]
    },
    {
      title: "Customs Valuation",
      description: "Accurate valuation for customs duty assessment",
      icon: Calculator,
      features: ["Transaction Value", "Deductive Value", "Computed Value", "Valuation Appeals"]
    },
    {
      title: "Duty Drawback",
      description: "Maximize duty drawback benefits and refunds",
      icon: Target,
      features: ["All Industry Rate", "Brand Rate", "Special Brand Rate", "Claim Processing"]
    },
    {
      title: "Trade Facilitation",
      description: "Streamline trade processes and reduce costs",
      icon: Truck,
      features: ["AEO Certification", "Trade Agreements", "FTA Benefits", "Origin Certification"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Trade Analysis",
      description: "Analyze current trade operations and identify optimization opportunities"
    },
    {
      step: 2,
      title: "Compliance Review",
      description: "Review customs compliance and documentation requirements"
    },
    {
      step: 3,
      title: "Strategy Development",
      description: "Develop customs optimization strategies and procedures"
    },
    {
      step: 4,
      title: "Implementation",
      description: "Implement customs procedures and compliance systems"
    },
    {
      step: 5,
      title: "Documentation",
      description: "Prepare and maintain all required customs documentation"
    },
    {
      step: 6,
      title: "Ongoing Support",
      description: "Continuous support and updates on customs regulations"
    }
  ];

  const expertise = [
    "Customs Act 1962 and related rules",
    "Foreign Trade Policy (FTP) compliance",
    "Special Economic Zone (SEZ) regulations",
    "Export Promotion Capital Goods (EPCG)",
    "Advance Authorization schemes",
    "Duty Free Import Authorization (DFIA)",
    "Export Oriented Units (EOU) compliance",
    "Customs audit and investigation support"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <Truck className="w-10 h-10 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-6">
            Custom Advisory Services
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Expert customs and international trade advisory services for import-export businesses. 
            Optimize duty costs, ensure compliance, and streamline trade operations.
          </p>
        </div>

        {/* Service Overview */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
                  Customs & Trade Expertise
                </h2>
                <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                  Customs advisory services are essential for businesses engaged in international 
                  trade. Our expert team provides comprehensive support for customs compliance, 
                  duty optimization, and trade facilitation across all import-export operations.
                </p>
                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  From customs valuation to duty drawback claims, we help businesses navigate 
                  complex customs regulations while minimizing costs and ensuring full compliance 
                  with Indian customs laws and international trade agreements.
                </p>
                <CTAButton to="/contact" variant="primary" size="lg" glow={true}>
                  Get Customs Advisory
                </CTAButton>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl text-center">
                  <Globe className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-600 mb-2">100+</div>
                  <div className="text-secondary-700 text-sm">Trade Clients</div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl text-center">
                  <Clock className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-600 mb-2">₹50Cr+</div>
                  <div className="text-secondary-700 text-sm">Duty Saved</div>
                </div>
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-2xl text-center">
                  <CheckCircle className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-accent-600 mb-2">500+</div>
                  <div className="text-secondary-700 text-sm">Shipments Cleared</div>
                </div>
                <div className="bg-gradient-to-br from-trust-50 to-trust-100 p-6 rounded-2xl text-center">
                  <Target className="w-8 h-8 text-trust-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-trust-600 mb-2">98%</div>
                  <div className="text-secondary-700 text-sm">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Our Customs Advisory Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive customs solutions for all international trade requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-glass-100 backdrop-blur-xl rounded-3xl p-8 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800">{service.title}</h3>
                </div>
                <p className="text-secondary-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-secondary-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
                Our Expertise Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Comprehensive knowledge across all aspects of customs and trade regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((area, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
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
              Our Advisory Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Systematic approach to customs optimization and trade compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-glass-100 backdrop-blur-xl rounded-3xl p-6 shadow-glass border border-white/20 group-hover:shadow-glass-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-3">{step.title}</h3>
                  <p className="text-secondary-700 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-800 rounded-3xl text-white text-center">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Customs Advisory Support?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Optimize your international trade operations with expert customs advisory. 
              Reduce duty costs and ensure seamless compliance with trade regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                to="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold"
              >
                Get Customs Advisory
              </CTAButton>
              <CTAButton 
                href="tel:+91-11-XXXX-XXXX" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600 font-bold"
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

export default CustomAdvisory;
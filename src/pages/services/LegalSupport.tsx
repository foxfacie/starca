import React from 'react';
import { Scale, FileText, Clock, CheckCircle, Shield, Target, Users, Building } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const LegalSupport: React.FC = () => {
  const services = [
    {
      title: "Corporate Litigation",
      description: "Comprehensive litigation support for corporate disputes",
      icon: Scale,
      features: ["Commercial Disputes", "Contract Litigation", "Shareholder Disputes", "Regulatory Matters"]
    },
    {
      title: "Legal Documentation",
      description: "Professional drafting of legal documents and agreements",
      icon: FileText,
      features: ["Contracts & Agreements", "Legal Opinions", "Due Diligence", "Compliance Documentation"]
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure compliance with applicable laws and regulations",
      icon: Shield,
      features: ["Regulatory Filings", "Compliance Audits", "Policy Development", "Risk Assessment"]
    },
    {
      title: "Advisory Services",
      description: "Strategic legal advisory for business operations",
      icon: Users,
      features: ["Legal Strategy", "Risk Management", "Regulatory Updates", "Business Advisory"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Legal Assessment",
      description: "Comprehensive assessment of legal requirements and risks"
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Develop legal strategy and action plan"
    },
    {
      step: 3,
      title: "Documentation",
      description: "Prepare and review all legal documentation"
    },
    {
      step: 4,
      title: "Implementation",
      description: "Execute legal strategy and ensure compliance"
    },
    {
      step: 5,
      title: "Monitoring",
      description: "Ongoing monitoring and compliance management"
    },
    {
      step: 6,
      title: "Support & Updates",
      description: "Continuous legal support and regulatory updates"
    }
  ];

  const expertise = [
    "Corporate and commercial law",
    "Contract law and commercial agreements",
    "Employment and labor law",
    "Intellectual property rights",
    "Real estate and property law",
    "Banking and finance law",
    "Regulatory and compliance matters",
    "Dispute resolution and arbitration"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <Scale className="w-10 h-10 text-slate-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-6">
            Legal Support Services
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive legal support and advisory services for businesses. 
            Expert legal guidance for corporate matters, compliance, and dispute resolution.
          </p>
        </div>

        {/* Service Overview */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
                  Professional Legal Advisory
                </h2>
                <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                  Legal support is crucial for business operations and compliance. Our experienced 
                  legal team provides comprehensive advisory services covering corporate law, 
                  commercial disputes, regulatory compliance, and strategic legal planning.
                </p>
                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  From contract drafting to litigation support, we ensure your business operates 
                  within legal frameworks while protecting your interests and minimizing legal 
                  risks across all business activities.
                </p>
                <CTAButton to="/contact" variant="primary" size="lg" glow={true}>
                  Get Legal Support
                </CTAButton>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl text-center">
                  <Building className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-600 mb-2">200+</div>
                  <div className="text-secondary-700 text-sm">Legal Matters</div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl text-center">
                  <Clock className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-600 mb-2">90%</div>
                  <div className="text-secondary-700 text-sm">Success Rate</div>
                </div>
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-2xl text-center">
                  <CheckCircle className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-accent-600 mb-2">150+</div>
                  <div className="text-secondary-700 text-sm">Contracts Drafted</div>
                </div>
                <div className="bg-gradient-to-br from-trust-50 to-trust-100 p-6 rounded-2xl text-center">
                  <Target className="w-8 h-8 text-trust-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-trust-600 mb-2">24/7</div>
                  <div className="text-secondary-700 text-sm">Legal Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Our Legal Support Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive legal solutions for all business and compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-glass-100 backdrop-blur-xl rounded-3xl p-8 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800">{service.title}</h3>
                </div>
                <p className="text-secondary-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-secondary-700">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
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
                Our Legal Expertise
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Comprehensive legal knowledge across multiple practice areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((area, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-slate-600" />
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
              Our Legal Support Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Systematic approach to legal advisory and support services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-glass-100 backdrop-blur-xl rounded-3xl p-6 shadow-glass border border-white/20 group-hover:shadow-glass-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-3">{step.title}</h3>
                  <p className="text-secondary-700 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-slate-600 to-slate-800 rounded-3xl text-white text-center">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Professional Legal Support?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Protect your business interests with expert legal advisory and support. 
              Get comprehensive legal solutions for all your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                to="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-slate-600 hover:bg-gray-100 font-bold"
              >
                Get Legal Support
              </CTAButton>
              <CTAButton 
                href="tel:+91-11-XXXX-XXXX" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-600 font-bold"
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

export default LegalSupport;
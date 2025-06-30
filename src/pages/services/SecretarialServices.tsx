import React from 'react';
import { FileText, Users, Clock, CheckCircle, Shield, Target, Building, Scale } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const SecretarialServices: React.FC = () => {
  const services = [
    {
      title: "Board Meeting Management",
      description: "Complete board meeting support and documentation",
      icon: Users,
      features: ["Meeting Planning", "Agenda Preparation", "Minutes Recording", "Resolution Drafting"]
    },
    {
      title: "Statutory Compliance",
      description: "Comprehensive company law compliance services",
      icon: Shield,
      features: ["ROC Filings", "Annual Returns", "Compliance Calendar", "Regulatory Updates"]
    },
    {
      title: "Corporate Governance",
      description: "Governance framework and policy implementation",
      icon: Scale,
      features: ["Policy Development", "Governance Reviews", "Risk Management", "Compliance Monitoring"]
    },
    {
      title: "Share Capital Management",
      description: "Share capital and securities related services",
      icon: Building,
      features: ["Share Transfers", "Dividend Processing", "Rights Issues", "Buyback Support"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Compliance Assessment",
      description: "Evaluate current compliance status and identify requirements"
    },
    {
      step: 2,
      title: "Documentation Setup",
      description: "Prepare and organize all statutory books and records"
    },
    {
      step: 3,
      title: "Meeting Management",
      description: "Conduct board and shareholder meetings with proper documentation"
    },
    {
      step: 4,
      title: "Regulatory Filings",
      description: "File all required forms and returns with ROC and other authorities"
    },
    {
      step: 5,
      title: "Ongoing Monitoring",
      description: "Continuous monitoring of compliance requirements and deadlines"
    },
    {
      step: 6,
      title: "Advisory Support",
      description: "Provide ongoing advisory on corporate law matters"
    }
  ];

  const complianceAreas = [
    "Companies Act 2013 compliance",
    "SEBI regulations and guidelines",
    "Listing agreement requirements",
    "Foreign exchange regulations",
    "Environmental and labor law compliance",
    "Data protection and privacy laws",
    "Competition law compliance",
    "Industry-specific regulations"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <FileText className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-6">
            Secretarial Services
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Professional company secretarial services ensuring complete compliance with corporate laws. 
            Expert CS support for board meetings, statutory filings, and corporate governance.
          </p>
        </div>

        {/* Service Overview */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
                  Professional Secretarial Support
                </h2>
                <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                  Company secretarial services are essential for maintaining corporate compliance 
                  and governance standards. Our qualified Company Secretaries provide comprehensive 
                  support for all statutory requirements under the Companies Act 2013.
                </p>
                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  From board meeting management to regulatory filings, we ensure your company 
                  maintains the highest standards of corporate governance while staying compliant 
                  with all applicable laws and regulations.
                </p>
                <CTAButton to="/contact" variant="primary" size="lg" glow={true}>
                  Get CS Support
                </CTAButton>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl text-center">
                  <Building className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-600 mb-2">100+</div>
                  <div className="text-secondary-700 text-sm">Companies Served</div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl text-center">
                  <Clock className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-600 mb-2">500+</div>
                  <div className="text-secondary-700 text-sm">Meetings Conducted</div>
                </div>
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-2xl text-center">
                  <CheckCircle className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-accent-600 mb-2">100%</div>
                  <div className="text-secondary-700 text-sm">Compliance Rate</div>
                </div>
                <div className="bg-gradient-to-br from-trust-50 to-trust-100 p-6 rounded-2xl text-center">
                  <Target className="w-8 h-8 text-trust-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-trust-600 mb-2">10+</div>
                  <div className="text-secondary-700 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Our Secretarial Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive company secretarial solutions for all corporate compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-glass-100 backdrop-blur-xl rounded-3xl p-8 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800">{service.title}</h3>
                </div>
                <p className="text-secondary-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-secondary-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
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
                Compliance Coverage
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Comprehensive compliance support across all applicable laws and regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceAreas.map((area, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
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
              Our Service Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Systematic approach ensuring comprehensive secretarial support and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-glass-100 backdrop-blur-xl rounded-3xl p-6 shadow-glass border border-white/20 group-hover:shadow-glass-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-3">{step.title}</h3>
                  <p className="text-secondary-700 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl text-white text-center">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Professional Secretarial Support?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Ensure complete corporate compliance with our expert secretarial services. 
              Get qualified CS support for all your company law requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                to="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold"
              >
                Get CS Support
              </CTAButton>
              <CTAButton 
                href="tel:+91-11-XXXX-XXXX" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600 font-bold"
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

export default SecretarialServices;
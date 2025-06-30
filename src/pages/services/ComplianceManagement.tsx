import React from 'react';
import { CheckCircle, FileText, Clock, Shield, Target, Users, Building, AlertTriangle } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const ComplianceManagement: React.FC = () => {
  const services = [
    {
      title: "Regulatory Compliance",
      description: "Comprehensive compliance management across all regulations",
      icon: Shield,
      features: ["Compliance Audits", "Risk Assessment", "Policy Development", "Training Programs"]
    },
    {
      title: "Compliance Monitoring",
      description: "Continuous monitoring and reporting of compliance status",
      icon: AlertTriangle,
      features: ["Real-time Monitoring", "Compliance Dashboard", "Alert Systems", "Regular Reports"]
    },
    {
      title: "Documentation Management",
      description: "Systematic management of compliance documentation",
      icon: FileText,
      features: ["Document Control", "Version Management", "Audit Trails", "Digital Archives"]
    },
    {
      title: "Training & Awareness",
      description: "Compliance training and awareness programs",
      icon: Users,
      features: ["Staff Training", "Awareness Programs", "Compliance Workshops", "Knowledge Updates"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Compliance Assessment",
      description: "Comprehensive assessment of current compliance status and gaps"
    },
    {
      step: 2,
      title: "Framework Development",
      description: "Develop comprehensive compliance framework and policies"
    },
    {
      step: 3,
      title: "Implementation",
      description: "Implement compliance systems and procedures"
    },
    {
      step: 4,
      title: "Training & Awareness",
      description: "Conduct training programs and awareness sessions"
    },
    {
      step: 5,
      title: "Monitoring & Review",
      description: "Continuous monitoring and periodic review of compliance"
    },
    {
      step: 6,
      title: "Improvement & Updates",
      description: "Continuous improvement and regulatory updates"
    }
  ];

  const complianceAreas = [
    "Corporate governance and board compliance",
    "Financial reporting and disclosure requirements",
    "Tax compliance and regulatory filings",
    "Environmental and safety regulations",
    "Data protection and privacy laws",
    "Employment and labor law compliance",
    "Industry-specific regulatory requirements",
    "Anti-money laundering (AML) compliance"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-6">
            Compliance Management
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive compliance management services to ensure adherence to all applicable regulations. 
            Systematic approach to risk management and regulatory compliance across your organization.
          </p>
        </div>

        {/* Service Overview */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
                  Strategic Compliance Management
                </h2>
                <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                  Compliance management is critical for business sustainability and risk mitigation. 
                  Our comprehensive approach ensures your organization meets all regulatory requirements 
                  while maintaining operational efficiency and minimizing compliance risks.
                </p>
                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  From policy development to implementation and monitoring, we provide end-to-end 
                  compliance management solutions that protect your business and enhance stakeholder 
                  confidence through systematic compliance frameworks.
                </p>
                <CTAButton to="/contact" variant="primary" size="lg" glow={true}>
                  Get Compliance Support
                </CTAButton>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl text-center">
                  <Building className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-600 mb-2">150+</div>
                  <div className="text-secondary-700 text-sm">Compliance Projects</div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl text-center">
                  <Clock className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-600 mb-2">99%</div>
                  <div className="text-secondary-700 text-sm">Compliance Rate</div>
                </div>
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-2xl text-center">
                  <CheckCircle className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-accent-600 mb-2">50+</div>
                  <div className="text-secondary-700 text-sm">Regulations Covered</div>
                </div>
                <div className="bg-gradient-to-br from-trust-50 to-trust-100 p-6 rounded-2xl text-center">
                  <Target className="w-8 h-8 text-trust-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-trust-600 mb-2">24/7</div>
                  <div className="text-secondary-700 text-sm">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Our Compliance Management Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive compliance solutions for systematic risk management and regulatory adherence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-glass-100 backdrop-blur-xl rounded-3xl p-8 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800">{service.title}</h3>
                </div>
                <p className="text-secondary-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-secondary-700">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
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
                Compliance Coverage Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Comprehensive compliance management across all regulatory domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceAreas.map((area, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
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
              Our Compliance Management Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Systematic approach to building and maintaining effective compliance frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-glass-100 backdrop-blur-xl rounded-3xl p-6 shadow-glass border border-white/20 group-hover:shadow-glass-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-3">{step.title}</h3>
                  <p className="text-secondary-700 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-3xl text-white text-center">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Comprehensive Compliance Management?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Ensure systematic compliance across all regulations with our expert management services. 
              Protect your business with comprehensive compliance frameworks and monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                to="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 font-bold"
              >
                Get Compliance Support
              </CTAButton>
              <CTAButton 
                href="tel:+91-11-XXXX-XXXX" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-600 font-bold"
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

export default ComplianceManagement;
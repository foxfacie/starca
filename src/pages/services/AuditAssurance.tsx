import React from 'react';
import { Shield, FileText, Clock, CheckCircle, Search, Target, Users, BarChart } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const AuditAssurance: React.FC = () => {
  const auditTypes = [
    {
      title: "Statutory Audit",
      description: "Mandatory audit for companies as per Companies Act",
      icon: Shield,
      features: ["Annual Financial Statements", "Compliance Verification", "Audit Report", "Board Presentation"]
    },
    {
      title: "Internal Audit",
      description: "Independent assessment of internal controls and processes",
      icon: Search,
      features: ["Risk Assessment", "Process Review", "Control Testing", "Recommendations"]
    },
    {
      title: "Tax Audit",
      description: "Audit under Section 44AB of Income Tax Act",
      icon: FileText,
      features: ["Tax Compliance Review", "Form 3CD Preparation", "Tax Computation", "Documentation"]
    },
    {
      title: "Management Audit",
      description: "Evaluation of management effectiveness and efficiency",
      icon: Users,
      features: ["Performance Review", "Operational Efficiency", "Strategic Assessment", "Improvement Plans"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Planning & Risk Assessment",
      description: "Understanding business, identifying risks, and planning audit approach"
    },
    {
      step: 2,
      title: "Internal Control Evaluation",
      description: "Testing and evaluating internal controls and systems"
    },
    {
      step: 3,
      title: "Substantive Testing",
      description: "Detailed testing of transactions and account balances"
    },
    {
      step: 4,
      title: "Review & Analysis",
      description: "Analytical review and evaluation of audit findings"
    },
    {
      step: 5,
      title: "Reporting",
      description: "Preparation of audit report with observations and recommendations"
    },
    {
      step: 6,
      title: "Management Letter",
      description: "Detailed management letter with improvement suggestions"
    }
  ];

  const benefits = [
    "Enhanced credibility with stakeholders",
    "Improved internal controls and processes",
    "Compliance with regulatory requirements",
    "Risk identification and mitigation",
    "Better financial management",
    "Investor confidence and trust",
    "Operational efficiency improvements",
    "Strategic decision support"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <Shield className="w-10 h-10 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-6">
            Audit & Assurance Services
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive audit and assurance services to enhance credibility, ensure compliance, 
            and improve business processes. Professional auditing by qualified chartered accountants.
          </p>
        </div>

        {/* Service Overview */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
                  Professional Audit Services
                </h2>
                <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                  Our audit and assurance services provide independent verification of financial 
                  statements, internal controls, and business processes. We help organizations 
                  maintain transparency, ensure compliance, and build stakeholder confidence.
                </p>
                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  With extensive experience across various industries, our qualified team delivers 
                  high-quality audit services that add value to your business while meeting all 
                  regulatory requirements and professional standards.
                </p>
                <CTAButton to="/contact" variant="primary" size="lg" glow={true}>
                  Schedule Audit
                </CTAButton>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl text-center">
                  <BarChart className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-600 mb-2">200+</div>
                  <div className="text-secondary-700 text-sm">Audits Completed</div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl text-center">
                  <Clock className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-600 mb-2">30-45</div>
                  <div className="text-secondary-700 text-sm">Days Completion</div>
                </div>
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-2xl text-center">
                  <CheckCircle className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-accent-600 mb-2">100%</div>
                  <div className="text-secondary-700 text-sm">Quality Assurance</div>
                </div>
                <div className="bg-gradient-to-br from-trust-50 to-trust-100 p-6 rounded-2xl text-center">
                  <Target className="w-8 h-8 text-trust-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-trust-600 mb-2">15+</div>
                  <div className="text-secondary-700 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Types */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Types of Audit Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive audit solutions covering all aspects of business verification and assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auditTypes.map((type, index) => (
              <div key={index} className="bg-glass-100 backdrop-blur-xl rounded-3xl p-8 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                    <type.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800">{type.title}</h3>
                </div>
                <p className="text-secondary-700 mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-secondary-700">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Audit Process */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
                Our Audit Process
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Systematic and thorough audit methodology ensuring comprehensive coverage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/30 group-hover:shadow-xl transition-all duration-300">
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
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Benefits of Professional Audit
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              How professional audit services add value to your business operations.
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
              Need Professional Audit Services?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Ensure compliance and build stakeholder confidence with our comprehensive audit services. 
              Get expert auditing by qualified chartered accountants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                to="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold"
              >
                Schedule Audit
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

export default AuditAssurance;
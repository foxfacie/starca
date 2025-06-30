import React from 'react';
import { Globe, Calculator, FileText, Clock, CheckCircle, Shield, Target, TrendingUp } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const InternationalTax: React.FC = () => {
  const services = [
    {
      title: "Transfer Pricing",
      description: "Comprehensive transfer pricing documentation and compliance",
      icon: Calculator,
      features: ["Benchmarking Studies", "Documentation Preparation", "APA Services", "Dispute Resolution"]
    },
    {
      title: "Cross-Border Transactions",
      description: "Tax structuring for international business operations",
      icon: Globe,
      features: ["Tax Treaty Benefits", "Withholding Tax", "DTAA Analysis", "Tax Optimization"]
    },
    {
      title: "Foreign Tax Credit",
      description: "Optimization of foreign tax credits and compliance",
      icon: Shield,
      features: ["FTC Calculations", "Form 67 Filing", "Tax Credit Planning", "Compliance Support"]
    },
    {
      title: "International Compliance",
      description: "Global tax compliance and reporting requirements",
      icon: FileText,
      features: ["CbCR Filing", "Master File", "Local File", "BEPS Compliance"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Tax Structure Analysis",
      description: "Analyze current international tax structure and identify optimization opportunities"
    },
    {
      step: 2,
      title: "Compliance Assessment",
      description: "Review compliance requirements across multiple jurisdictions"
    },
    {
      step: 3,
      title: "Documentation Preparation",
      description: "Prepare transfer pricing documentation and compliance reports"
    },
    {
      step: 4,
      title: "Tax Planning",
      description: "Develop tax-efficient structures for international operations"
    },
    {
      step: 5,
      title: "Implementation",
      description: "Implement tax strategies and ensure ongoing compliance"
    },
    {
      step: 6,
      title: "Monitoring & Updates",
      description: "Continuous monitoring and updates based on regulatory changes"
    }
  ];

  const expertise = [
    "Double Taxation Avoidance Agreements (DTAA)",
    "Base Erosion and Profit Shifting (BEPS)",
    "Advance Pricing Agreements (APA)",
    "Mutual Agreement Procedures (MAP)",
    "Country-by-Country Reporting (CbCR)",
    "Master File and Local File documentation",
    "International tax structuring",
    "Cross-border merger and acquisition tax"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <Globe className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-6">
            International Tax Services
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Expert international tax advisory and transfer pricing services for multinational corporations. 
            Navigate complex cross-border tax regulations with strategic planning and compliance support.
          </p>
        </div>

        {/* Service Overview */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
                  International Tax Expertise
                </h2>
                <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                  International taxation involves complex regulations across multiple jurisdictions. 
                  Our expert team provides comprehensive advisory services for transfer pricing, 
                  cross-border transactions, and global tax compliance.
                </p>
                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  From BEPS compliance to tax treaty optimization, we help multinational corporations 
                  navigate international tax complexities while ensuring compliance and maximizing 
                  tax efficiency across global operations.
                </p>
                <CTAButton to="/contact" variant="primary" size="lg" glow={true}>
                  Get International Tax Advisory
                </CTAButton>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl text-center">
                  <TrendingUp className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-secondary-700 text-sm">MNC Clients</div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl text-center">
                  <Clock className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-600 mb-2">30-45</div>
                  <div className="text-secondary-700 text-sm">Days Completion</div>
                </div>
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-2xl text-center">
                  <CheckCircle className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-accent-600 mb-2">100+</div>
                  <div className="text-secondary-700 text-sm">TP Studies</div>
                </div>
                <div className="bg-gradient-to-br from-trust-50 to-trust-100 p-6 rounded-2xl text-center">
                  <Target className="w-8 h-8 text-trust-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-trust-600 mb-2">95%</div>
                  <div className="text-secondary-700 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Our International Tax Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive international tax solutions for global business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-glass-100 backdrop-blur-xl rounded-3xl p-8 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800">{service.title}</h3>
                </div>
                <p className="text-secondary-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-secondary-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
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
                Specialized knowledge across all aspects of international taxation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((area, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
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
              Systematic approach to international tax planning and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-glass-100 backdrop-blur-xl rounded-3xl p-6 shadow-glass border border-white/20 group-hover:shadow-glass-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-3">{step.title}</h3>
                  <p className="text-secondary-700 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl text-white text-center">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need International Tax Advisory?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Navigate complex international tax regulations with expert guidance. 
              Get comprehensive transfer pricing and cross-border tax solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                to="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold"
              >
                Get International Tax Advisory
              </CTAButton>
              <CTAButton 
                href="tel:+91-11-XXXX-XXXX" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-bold"
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

export default InternationalTax;
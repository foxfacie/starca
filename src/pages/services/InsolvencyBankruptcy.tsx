import React from 'react';
import { Shield, FileText, Users, Clock, CheckCircle, AlertTriangle, Scale, Building2 } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const InsolvencyBankruptcy: React.FC = () => {
  const processSteps = [
    {
      step: 1,
      title: "Initial Assessment",
      description: "Evaluation of financial distress and viability for IBC proceedings"
    },
    {
      step: 2,
      title: "Application Filing",
      description: "Preparation and filing of application with NCLT under appropriate IBC sections"
    },
    {
      step: 3,
      title: "Admission & Moratorium",
      description: "NCLT admission and commencement of Corporate Insolvency Resolution Process (CIRP)"
    },
    {
      step: 4,
      title: "Resolution Planning",
      description: "Development and evaluation of resolution plans by Committee of Creditors"
    },
    {
      step: 5,
      title: "Plan Approval",
      description: "NCLT approval of resolution plan and implementation monitoring"
    },
    {
      step: 6,
      title: "Liquidation (if needed)",
      description: "Asset liquidation process if resolution fails within prescribed timeline"
    }
  ];

  const services = [
    "Corporate Insolvency Resolution Process (CIRP)",
    "Individual Insolvency Resolution Process",
    "Liquidation proceedings under IBC",
    "Voluntary liquidation of companies",
    "Pre-packaged insolvency resolution",
    "Fast track corporate insolvency resolution",
    "Cross-border insolvency matters",
    "NCLT representation and advocacy"
  ];

  const faqs = [
    {
      question: "What is the Insolvency and Bankruptcy Code (IBC)?",
      answer: "The IBC, 2016 is a comprehensive law that consolidates and amends laws relating to reorganization and insolvency resolution of corporate persons, partnership firms, and individuals. It provides a time-bound process for resolving insolvency and maximizing asset value."
    },
    {
      question: "Who can initiate insolvency proceedings under IBC?",
      answer: "Insolvency proceedings can be initiated by financial creditors, operational creditors, or the corporate debtor itself. The threshold for financial creditors is ₹1 crore, while for operational creditors it's ₹1 lakh (recently reduced from ₹1 crore)."
    },
    {
      question: "What is the timeline for Corporate Insolvency Resolution Process?",
      answer: "The CIRP must be completed within 180 days from the insolvency commencement date, with a possible extension of 90 days. If no resolution plan is approved within this period, the company goes into liquidation."
    },
    {
      question: "What are the costs involved in IBC proceedings?",
      answer: "Costs include NCLT filing fees, Insolvency Professional fees, legal fees, and other procedural costs. The exact amount depends on the complexity of the case and the value of assets involved. We provide transparent cost estimates after initial assessment."
    },
    {
      question: "Can IBC proceedings be withdrawn?",
      answer: "Yes, IBC proceedings can be withdrawn before admission by NCLT if the parties reach a settlement. After admission, withdrawal requires approval of 90% of the Committee of Creditors and NCLT approval."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insolvency & Bankruptcy Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Expert IBC advisory and representation services for creditors and debtors. 
              Navigate complex insolvency proceedings with our experienced legal and financial team.
            </p>
            <CTAButton to="/contact" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Consult IBC Expert
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
                Understanding IBC & Insolvency Law
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Insolvency and Bankruptcy Code (IBC), 2016 revolutionized India's approach to 
                insolvency resolution. It provides a unified framework for timely resolution of 
                insolvency and bankruptcy proceedings for companies, limited liability partnerships, 
                and individuals.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team of qualified Insolvency Professionals (IPs), chartered accountants, and 
                legal experts provide comprehensive support throughout the IBC process. We represent 
                both creditors and debtors in NCLT proceedings and ensure compliance with all 
                regulatory requirements.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With deep understanding of the IBC framework and extensive experience in insolvency 
                matters, we help maximize recovery for creditors and provide viable resolution 
                options for distressed companies.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
                <Scale className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-700 text-sm">IBC Cases Handled</div>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl text-center">
                <Building2 className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary-600 mb-2">₹500Cr+</div>
                <div className="text-gray-700 text-sm">Assets Under Resolution</div>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl text-center">
                <Users className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent-600 mb-2">85%</div>
                <div className="text-gray-700 text-sm">Success Rate</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600 mb-2">180</div>
                <div className="text-gray-700 text-sm">Days Average Resolution</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IBC Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive insolvency and bankruptcy services covering all aspects of the IBC framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IBC Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IBC Resolution Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to managing insolvency proceedings under the IBC framework.
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

      {/* Why Choose STARCA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose STARCA for IBC Matters?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise in insolvency law and practical experience in NCLT proceedings sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualified IPs</h3>
              <p className="text-gray-600">Team of registered Insolvency Professionals with extensive experience in corporate insolvency resolution.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">NCLT Expertise</h3>
              <p className="text-gray-600">Extensive experience in NCLT proceedings and deep understanding of tribunal procedures and requirements.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Documentation</h3>
              <p className="text-gray-600">Meticulous preparation of all required documents and compliance with IBC timelines and procedures.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Asset Maximization</h3>
              <p className="text-gray-600">Strategic approach to maximize asset value and recovery for creditors through effective resolution planning.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Time-Bound Process</h3>
              <p className="text-gray-600">Strict adherence to IBC timelines ensuring efficient resolution within prescribed periods.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Stakeholder Protection</h3>
              <p className="text-gray-600">Balanced approach protecting interests of all stakeholders including creditors, employees, and shareholders.</p>
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
              Common questions about IBC and insolvency proceedings
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
            Need Expert IBC Advisory?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Navigate complex insolvency proceedings with confidence. Our experienced team provides 
            comprehensive support for all IBC matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              to="/contact" 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Schedule IBC Consultation
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

export default InsolvencyBankruptcy;
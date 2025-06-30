import React from 'react';
import { Building2, TrendingUp, Users, FileText, Clock, CheckCircle, Target, Shield } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const CorporateRestructuring: React.FC = () => {
  const restructuringTypes = [
    {
      title: "Mergers & Acquisitions",
      description: "Strategic consolidation of businesses to achieve synergies and growth",
      icon: Building2
    },
    {
      title: "Demergers & Spin-offs",
      description: "Separation of business units to unlock value and improve focus",
      icon: TrendingUp
    },
    {
      title: "Amalgamations",
      description: "Combining two or more companies into a single entity",
      icon: Users
    },
    {
      title: "Capital Restructuring",
      description: "Optimizing debt-equity mix and capital structure",
      icon: FileText
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Strategic Assessment",
      description: "Evaluate business objectives and restructuring options"
    },
    {
      step: 2,
      title: "Due Diligence",
      description: "Comprehensive financial, legal, and operational review"
    },
    {
      step: 3,
      title: "Valuation & Structuring",
      description: "Determine fair value and optimal transaction structure"
    },
    {
      step: 4,
      title: "Regulatory Approvals",
      description: "Obtain necessary approvals from NCLT, SEBI, and other authorities"
    },
    {
      step: 5,
      title: "Documentation",
      description: "Prepare scheme documents, board resolutions, and legal agreements"
    },
    {
      step: 6,
      title: "Implementation",
      description: "Execute the restructuring plan and ensure smooth transition"
    }
  ];

  const benefits = [
    "Enhanced operational efficiency and cost synergies",
    "Improved market position and competitive advantage",
    "Better capital allocation and resource utilization",
    "Tax optimization and regulatory compliance",
    "Increased shareholder value and returns",
    "Risk diversification and business focus"
  ];

  const faqs = [
    {
      question: "What is corporate restructuring and why is it needed?",
      answer: "Corporate restructuring involves reorganizing a company's structure, operations, or finances to improve efficiency, profitability, or strategic position. It's needed during business expansion, financial distress, market changes, or to unlock shareholder value."
    },
    {
      question: "How long does a typical restructuring process take?",
      answer: "The timeline varies based on complexity, but typically ranges from 6-18 months. Simple internal restructuring may take 3-6 months, while complex mergers or acquisitions can take 12-24 months including regulatory approvals."
    },
    {
      question: "What regulatory approvals are required for restructuring?",
      answer: "Depending on the type and size, approvals may be required from NCLT, SEBI, CCI, RBI, sectoral regulators, and stock exchanges. We handle all regulatory compliance and approval processes."
    },
    {
      question: "How do you determine the valuation in M&A transactions?",
      answer: "We use multiple valuation methods including DCF analysis, comparable company analysis, precedent transactions, and asset-based approaches. The final valuation considers market conditions, synergies, and strategic value."
    },
    {
      question: "What are the tax implications of corporate restructuring?",
      answer: "Tax implications vary by structure but may include capital gains, stamp duty, and transfer pricing considerations. We provide comprehensive tax planning to optimize the overall tax burden while ensuring compliance."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Corporate Restructuring
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Strategic mergers, acquisitions, and business restructuring to optimize performance, 
              unlock value, and achieve sustainable growth. Expert advisory for complex corporate transactions.
            </p>
            <CTAButton to="/contact" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Discuss Your Restructuring
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
                Strategic Business Transformation
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Corporate restructuring involves reorganizing a company's structure, operations, or finances 
                to improve efficiency, competitiveness, and shareholder value. It encompasses various strategic 
                initiatives from mergers and acquisitions to demergers and capital restructuring.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our experienced team provides end-to-end advisory services for complex corporate transactions, 
                ensuring regulatory compliance, optimal structuring, and successful implementation. We combine 
                financial expertise with strategic insights to deliver value-driven outcomes.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're looking to expand through acquisitions, divest non-core assets, or optimize 
                your capital structure, STARCA provides comprehensive support throughout the restructuring journey.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
                <Target className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-700 text-sm">Successful Restructuring</div>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl text-center">
                <TrendingUp className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary-600 mb-2">₹500Cr+</div>
                <div className="text-gray-700 text-sm">Transaction Value</div>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl text-center">
                <Users className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent-600 mb-2">15+</div>
                <div className="text-gray-700 text-sm">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-700 text-sm">Regulatory Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Restructuring */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Corporate Restructuring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive restructuring solutions tailored to your business objectives and market conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restructuringTypes.map((type, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                    <type.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Restructuring Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring successful execution of complex corporate transactions.
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

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Corporate Restructuring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic restructuring delivers tangible benefits that drive long-term business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
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

      {/* STARCA's Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose STARCA for Corporate Restructuring?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive expertise and proven track record ensure successful restructuring outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">Experienced CAs, CS, and legal professionals with deep M&A expertise across industries.</p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Expertise</h3>
              <p className="text-gray-600">Complete knowledge of NCLT, SEBI, CCI, and other regulatory requirements for smooth approvals.</p>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Value Creation</h3>
              <p className="text-gray-600">Focus on maximizing shareholder value through optimal structuring and strategic planning.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Timely Execution</h3>
              <p className="text-gray-600">Efficient project management ensuring timely completion within regulatory deadlines.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Documentation</h3>
              <p className="text-gray-600">Meticulous preparation of all legal documents, schemes, and regulatory filings.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Advisory</h3>
              <p className="text-gray-600">End-to-end strategic guidance from initial planning to post-transaction integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about corporate restructuring services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let our corporate restructuring experts help you unlock value and achieve your strategic objectives. 
            Schedule a consultation to discuss your restructuring needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              to="/contact" 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Schedule Strategy Session
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

export default CorporateRestructuring;
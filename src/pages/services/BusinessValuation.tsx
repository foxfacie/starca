import React from 'react';
import { TrendingUp, Calculator, FileText, Clock, CheckCircle, Shield, Target, BarChart } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const BusinessValuation: React.FC = () => {
  const valuationMethods = [
    {
      title: "Asset-Based Approach",
      description: "Valuation based on company's assets and liabilities",
      icon: BarChart,
      methods: ["Book Value Method", "Liquidation Value", "Replacement Cost"]
    },
    {
      title: "Income Approach",
      description: "Valuation based on future earning capacity",
      icon: TrendingUp,
      methods: ["DCF Method", "Capitalization Method", "Dividend Yield Method"]
    },
    {
      title: "Market Approach",
      description: "Valuation based on comparable market transactions",
      icon: Calculator,
      methods: ["Comparable Company Analysis", "Precedent Transactions", "Market Multiples"]
    }
  ];

  const useCases = [
    "Mergers and Acquisitions",
    "Initial Public Offerings (IPO)",
    "Private Equity Investments",
    "Employee Stock Option Plans",
    "Insurance Claims Settlement",
    "Matrimonial Disputes",
    "Tax Planning and Compliance",
    "Financial Reporting (Ind AS)"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Engagement & Planning",
      description: "Understanding purpose, scope, and valuation standards"
    },
    {
      step: 2,
      title: "Data Collection",
      description: "Gathering financial statements, market data, and business information"
    },
    {
      step: 3,
      title: "Financial Analysis",
      description: "Analyzing historical performance and financial trends"
    },
    {
      step: 4,
      title: "Valuation Methods",
      description: "Applying appropriate valuation methodologies"
    },
    {
      step: 5,
      title: "Report Preparation",
      description: "Comprehensive valuation report with detailed analysis"
    },
    {
      step: 6,
      title: "Review & Finalization",
      description: "Quality review and final report delivery"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-trust-100 to-trust-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glass">
            <TrendingUp className="w-10 h-10 text-trust-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-6">
            Business Valuation Services
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Professional business and asset valuation services by certified valuers. 
            Get accurate valuations for M&A, IPO, tax compliance, and strategic decision making.
          </p>
        </div>

        {/* Service Overview */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
                  Professional Business Valuation
                </h2>
                <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                  Business valuation is the process of determining the economic value of a business 
                  or company. Our certified valuers use internationally accepted methodologies to 
                  provide accurate and reliable valuations for various purposes.
                </p>
                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  Whether you need valuation for M&A transactions, IPO, tax compliance, or strategic 
                  planning, our team provides comprehensive valuation services with detailed analysis 
                  and professional reports.
                </p>
                <CTAButton to="/contact" variant="primary" size="lg" glow={true}>
                  Get Valuation Quote
                </CTAButton>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl text-center">
                  <BarChart className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-600 mb-2">100+</div>
                  <div className="text-secondary-700 text-sm">Valuations Completed</div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl text-center">
                  <Clock className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary-600 mb-2">15-20</div>
                  <div className="text-secondary-700 text-sm">Days Turnaround</div>
                </div>
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-2xl text-center">
                  <CheckCircle className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-accent-600 mb-2">₹500Cr+</div>
                  <div className="text-secondary-700 text-sm">Assets Valued</div>
                </div>
                <div className="bg-gradient-to-br from-trust-50 to-trust-100 p-6 rounded-2xl text-center">
                  <Target className="w-8 h-8 text-trust-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-trust-600 mb-2">95%</div>
                  <div className="text-secondary-700 text-sm">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valuation Methods */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Valuation Methodologies
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We use internationally accepted valuation approaches and methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuationMethods.map((method, index) => (
              <div key={index} className="bg-glass-100 backdrop-blur-xl rounded-3xl p-8 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-trust-100 to-trust-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-trust-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-4 text-center">{method.title}</h3>
                <p className="text-secondary-700 mb-6 text-center leading-relaxed">{method.description}</p>
                <ul className="space-y-2">
                  {method.methods.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-sm text-secondary-700">
                      <div className="w-1.5 h-1.5 bg-trust-500 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-glass-100 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
                When Do You Need Business Valuation?
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Various scenarios where professional business valuation is essential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30">
                  <div className="w-8 h-8 bg-gradient-to-br from-trust-100 to-trust-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-trust-600" />
                  </div>
                  <div>
                    <p className="text-secondary-800 font-medium">{useCase}</p>
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
              Our Valuation Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Systematic approach ensuring accurate and reliable valuation results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-glass-100 backdrop-blur-xl rounded-3xl p-6 shadow-glass border border-white/20 group-hover:shadow-glass-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-trust-600 to-trust-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-3">{step.title}</h3>
                  <p className="text-secondary-700 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-trust-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-trust-600 to-trust-800 rounded-3xl text-white text-center">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Professional Business Valuation?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Get accurate and reliable business valuation from certified professionals. 
              Contact us for detailed consultation and customized valuation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                to="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-trust-600 hover:bg-gray-100 font-bold"
              >
                Get Valuation Quote
              </CTAButton>
              <CTAButton 
                href="tel:+91-11-XXXX-XXXX" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-trust-600 font-bold"
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

export default BusinessValuation;
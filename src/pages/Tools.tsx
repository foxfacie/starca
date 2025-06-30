import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Home, CreditCard, Receipt, TrendingUp, PiggyBank, Car, Building } from 'lucide-react';

const Tools: React.FC = () => {
  const calculatorTools = [
    {
      title: "Income Tax Calculator",
      description: "Calculate your income tax liability for different financial years with latest tax slabs",
      icon: Calculator,
      path: "/tools/income-tax-calculator",
      color: "from-primary-100 to-primary-200",
      iconColor: "text-primary-600"
    },
    {
      title: "HRA Calculator",
      description: "Determine your House Rent Allowance exemption under Section 10(13A)",
      icon: Home,
      path: "/tools/hra-calculator",
      color: "from-secondary-100 to-secondary-200",
      iconColor: "text-secondary-600"
    },
    {
      title: "EMI Calculator",
      description: "Calculate Equated Monthly Installments for loans with detailed amortization schedule",
      icon: CreditCard,
      path: "/tools/emi-calculator",
      color: "from-accent-100 to-accent-200",
      iconColor: "text-accent-600"
    },
    {
      title: "GST Calculator",
      description: "Calculate GST with CGST, SGST, and IGST breakdowns for your transactions",
      icon: Receipt,
      path: "/tools/gst-calculator",
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600"
    },
    {
      title: "SIP Calculator",
      description: "Calculate returns on Systematic Investment Plans with compound growth",
      icon: TrendingUp,
      path: "/tools/sip-calculator",
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      title: "NSC Calculator",
      description: "Calculate National Savings Certificate returns and tax benefits",
      icon: PiggyBank,
      path: "/tools/nsc-calculator",
      color: "from-indigo-100 to-indigo-200",
      iconColor: "text-indigo-600"
    },
    {
      title: "Auto Loan Calculator",
      description: "Calculate car loan EMI with insurance and processing fee considerations",
      icon: Car,
      path: "/tools/auto-loan-calculator",
      color: "from-red-100 to-red-200",
      iconColor: "text-red-600"
    },
    {
      title: "Home Loan Calculator",
      description: "Calculate home loan EMI with prepayment options and tax benefits",
      icon: Building,
      path: "/tools/home-loan-calculator",
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    }
  ];

  const categories = [
    {
      title: "Tax Calculators",
      tools: ["Income Tax Calculator", "HRA Calculator", "GST Calculator"],
      description: "Essential tools for tax planning and compliance"
    },
    {
      title: "Loan Calculators",
      tools: ["EMI Calculator", "Home Loan Calculator", "Auto Loan Calculator"],
      description: "Plan your loans and understand repayment schedules"
    },
    {
      title: "Investment Calculators",
      tools: ["SIP Calculator", "NSC Calculator"],
      description: "Calculate returns on various investment options"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Financial Calculators & Tools
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive collection of calculators and tools to help you make informed financial decisions. 
            All tools are updated with latest rates and regulations.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-1">
                {category.tools.map((tool, toolIndex) => (
                  <li key={toolIndex} className="text-sm text-primary-600">• {tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* All Tools Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {calculatorTools.map((tool, index) => (
              <Link
                key={index}
                to={tool.path}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className={`w-8 h-8 ${tool.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Use Our Calculators?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Accurate Calculations</h3>
              <p className="text-sm text-gray-600">Updated with latest tax rates and regulations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real-time Results</h3>
              <p className="text-sm text-gray-600">Instant calculations with detailed breakdowns</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Receipt className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Downloadable Reports</h3>
              <p className="text-sm text-gray-600">Generate PDF reports for your records</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free to Use</h3>
              <p className="text-sm text-gray-600">All calculators are completely free with no limits</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Advice?</h2>
          <p className="text-xl mb-6 opacity-90">
            While our calculators provide accurate estimates, every financial situation is unique. 
            Get personalized advice from our expert team.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tools;
import React from 'react';
import { TrendingUp, FileText, Users, Clock, CheckCircle, Calculator, Scale, Globe } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const IncomeTaxAdvisory: React.FC = () => {
  const services = [
    "Income Tax Return Filing (ITR-1 to ITR-7)",
    "Tax Planning and Advisory",
    "Assessment and Scrutiny Support",
    "Appeals and Litigation",
    "Transfer Pricing Documentation",
    "International Tax Structuring",
    "Tax Audit under Section 44AB",
    "Advance Ruling Applications"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize liability and optimize savings"
    },
    {
      step: 2,
      title: "Documentation",
      description: "Proper maintenance of books and supporting documents"
    },
    {
      step: 3,
      title: "Return Filing",
      description: "Accurate and timely filing of income tax returns"
    },
    {
      step: 4,
      title: "Compliance",
      description: "Ongoing compliance with advance tax and TDS requirements"
    },
    {
      step: 5,
      title: "Assessment Support",
      description: "Representation during assessment and scrutiny proceedings"
    },
    {
      step: 6,
      title: "Appeal & Litigation",
      description: "Appeals before CIT(A), ITAT, and higher courts"
    }
  ];

  const faqs = [
    {
      question: "What are the due dates for income tax return filing?",
      answer: "For individuals and HUFs: July 31st. For companies and those requiring audit: October 31st. For international transactions or transfer pricing: November 30th. Late filing attracts penalty of ₹5,000 (₹1,000 for income up to ₹5 lakhs)."
    },
    {
      question: "When is tax audit mandatory?",
      answer: "Tax audit is mandatory for businesses with turnover exceeding ₹1 crore, professionals with gross receipts over ₹50 lakhs, or when profit is less than 8%/6% of turnover. Digital transactions can increase the turnover limit to ₹10 crores."
    },
    {
      question: "How do you handle income tax assessments?",
      answer: "We provide complete support during assessment proceedings including notice responses, document submission, personal hearings representation, and negotiation with tax officers to achieve favorable outcomes."
    },
    {
      question: "What is transfer pricing and when does it apply?",
      answer: "Transfer pricing applies to international transactions between related entities. Documentation is required for transactions exceeding ₹1 crore. We help with benchmarking studies, documentation, and compliance with transfer pricing regulations."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Income Tax Advisory
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Comprehensive income tax planning, compliance, and litigation support for individuals and businesses. 
              Optimize your tax strategy with expert guidance and professional representation.
            </p>
            <CTAButton to="/contact" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Get Tax Advisory
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
                Expert Income Tax Services
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Income tax compliance and planning require deep understanding of complex tax laws, 
                frequent amendments, and strategic thinking. Our income tax advisory services help 
                individuals and businesses navigate these complexities while optimizing tax efficiency.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From basic return filing to complex international tax structuring, we provide 
                comprehensive solutions tailored to your specific needs. Our team stays updated 
                with latest tax developments to ensure optimal compliance and planning strategies.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you need routine compliance support or representation in complex litigation, 
                our experienced tax professionals provide reliable guidance and effective solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
                <FileText className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-gray-700 text-sm">Returns Filed</div>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl text-center">
                <Calculator className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary-600 mb-2">₹10Cr+</div>
                <div className="text-gray-700 text-sm">Tax Savings</div>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl text-center">
                <Scale className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent-600 mb-2">200+</div>
                <div className="text-gray-700 text-sm">Litigation Cases</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-700 text-sm">Success Rate</div>
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
              Our Income Tax Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tax solutions covering all aspects of income tax compliance and planning.
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

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Tax Advisory Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to tax planning and compliance for optimal outcomes.
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about income tax advisory services
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
            Need Expert Tax Advisory?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Optimize your tax strategy and ensure compliance with our comprehensive income tax services. 
            Get personalized solutions for your tax planning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              to="/contact" 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Schedule Tax Consultation
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

export default IncomeTaxAdvisory;
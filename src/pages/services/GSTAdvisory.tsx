import React from 'react';
import { Calculator, FileText, Users, Clock, CheckCircle, AlertTriangle, Scale, TrendingUp } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const GSTAdvisory: React.FC = () => {
  const processSteps = [
    {
      step: 1,
      title: "GST Registration",
      description: "Complete GST registration process with proper classification and documentation"
    },
    {
      step: 2,
      title: "Compliance Setup",
      description: "Establish systems for regular GST return filing and record maintenance"
    },
    {
      step: 3,
      title: "Return Filing",
      description: "Timely filing of GSTR-1, GSTR-3B, and other applicable GST returns"
    },
    {
      step: 4,
      title: "Input Tax Credit",
      description: "Optimization of input tax credit claims and reconciliation processes"
    },
    {
      step: 5,
      title: "Audit & Assessment",
      description: "GST audit support and assistance during assessment proceedings"
    },
    {
      step: 6,
      title: "Litigation Support",
      description: "Representation in GST disputes, appeals, and tribunal proceedings"
    }
  ];

  const services = [
    "GST Registration and Migration",
    "Monthly/Quarterly Return Filing",
    "Input Tax Credit Optimization",
    "GST Compliance Audit",
    "Refund Claims and Processing",
    "GST Litigation and Appeals",
    "E-way Bill and E-invoice Setup",
    "GST Advisory and Consultation"
  ];

  const gstReturns = [
    { form: "GSTR-1", description: "Outward supplies details", frequency: "Monthly/Quarterly" },
    { form: "GSTR-3B", description: "Summary return with tax payment", frequency: "Monthly" },
    { form: "GSTR-2A", description: "Auto-populated purchase details", frequency: "Monthly" },
    { form: "GSTR-9", description: "Annual return", frequency: "Annually" },
    { form: "GSTR-9C", description: "Reconciliation statement", frequency: "Annually" },
    { form: "GSTR-4", description: "Composition scheme return", frequency: "Quarterly" }
  ];

  const faqs = [
    {
      question: "What is the GST registration threshold?",
      answer: "GST registration is mandatory for businesses with annual turnover exceeding ₹20 lakhs (₹10 lakhs for special category states). For service providers, the threshold is ₹20 lakhs across India. Inter-state suppliers must register regardless of turnover."
    },
    {
      question: "What are the penalties for late GST return filing?",
      answer: "Late filing of GSTR-1 attracts ₹200 per day penalty. GSTR-3B late filing penalty is ₹200 per day (₹100 each for CGST and SGST). Maximum penalty is 0.25% of turnover for the month. Additional interest at 18% per annum applies on delayed tax payments."
    },
    {
      question: "How can I claim Input Tax Credit (ITC)?",
      answer: "ITC can be claimed on goods and services used for business purposes. The supplier must have filed their returns, and you must have received the goods/services. ITC must be claimed within the due date of filing annual return for the year or by 30th November following the end of financial year, whichever is earlier."
    },
    {
      question: "What is the composition scheme under GST?",
      answer: "Composition scheme is available for small taxpayers with turnover up to ₹1.5 crores. Under this scheme, businesses pay tax at reduced rates (1-5%) but cannot claim ITC or make inter-state supplies. It's suitable for businesses with minimal input tax credit."
    },
    {
      question: "How do you handle GST litigation and disputes?",
      answer: "We provide comprehensive litigation support including notice responses, assessment proceedings representation, appeal filing before appellate authorities, and tribunal proceedings. Our team has extensive experience in GST law interpretation and dispute resolution."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              GST Advisory & Litigation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Comprehensive GST compliance, advisory, and litigation support. Navigate complex GST regulations 
              with expert guidance and ensure seamless compliance for your business.
            </p>
            <CTAButton to="/contact" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Get GST Advisory
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
                Expert GST Compliance & Advisory
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Goods and Services Tax (GST) has revolutionized India's indirect tax system. With complex 
                regulations, multiple return formats, and frequent updates, businesses need expert guidance 
                to ensure compliance and optimize tax efficiency.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our GST advisory team provides end-to-end support from registration to litigation. We help 
                businesses navigate GST complexities, ensure timely compliance, optimize input tax credits, 
                and represent clients in disputes and appeals.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With deep understanding of GST law and extensive experience in handling complex cases, 
                we ensure your business stays compliant while maximizing tax benefits and minimizing risks.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
                <FileText className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-700 text-sm">GST Registrations</div>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl text-center">
                <TrendingUp className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary-600 mb-2">₹50Cr+</div>
                <div className="text-gray-700 text-sm">ITC Optimized</div>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl text-center">
                <Scale className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent-600 mb-2">100+</div>
                <div className="text-gray-700 text-sm">Litigation Cases</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600 mb-2">99%</div>
                <div className="text-gray-700 text-sm">Compliance Rate</div>
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
              Our GST Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive GST solutions covering all aspects of compliance, optimization, and dispute resolution.
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

      {/* GST Returns */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              GST Returns We Handle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert filing of all GST return formats with accuracy and timeliness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gstReturns.map((returnForm, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary-600 mb-2">{returnForm.form}</h3>
                <p className="text-gray-700 mb-3">{returnForm.description}</p>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary-600" />
                  <span className="text-sm text-gray-600">{returnForm.frequency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our GST Advisory Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to GST compliance and optimization for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose STARCA for GST Advisory?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise, technology, and client-focused approach ensure optimal GST compliance and outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">Qualified CAs with specialized GST expertise and extensive experience in complex compliance matters.</p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Driven</h3>
              <p className="text-gray-600">Advanced GST software and automation tools for accurate return filing and compliance management.</p>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Litigation Support</h3>
              <p className="text-gray-600">Strong track record in GST disputes, appeals, and tribunal proceedings with favorable outcomes.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Timely Compliance</h3>
              <p className="text-gray-600">Systematic processes ensuring all GST returns and compliances are filed within due dates.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ITC Optimization</h3>
              <p className="text-gray-600">Strategic input tax credit planning and optimization to maximize cash flow benefits.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proactive Advisory</h3>
              <p className="text-gray-600">Regular updates on GST law changes and proactive advisory to minimize compliance risks.</p>
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
              Common questions about GST compliance and advisory services
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
            Need Expert GST Advisory?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Ensure GST compliance and optimize your tax strategy with our expert advisory services. 
            Get personalized solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              to="/contact" 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Schedule GST Consultation
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

export default GSTAdvisory;
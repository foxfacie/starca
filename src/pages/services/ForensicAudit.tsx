import React from 'react';
import { Search, Shield, FileText, Users, Clock, CheckCircle, AlertTriangle, Eye } from 'lucide-react';
import CTAButton from '../../components/UI/CTAButton';

const ForensicAudit: React.FC = () => {
  const processSteps = [
    {
      step: 1,
      title: "Initial Assessment",
      description: "Comprehensive evaluation of the situation and preliminary evidence gathering"
    },
    {
      step: 2,
      title: "Data Collection",
      description: "Systematic collection and preservation of financial records and digital evidence"
    },
    {
      step: 3,
      title: "Analysis & Investigation",
      description: "Detailed examination using forensic accounting techniques and tools"
    },
    {
      step: 4,
      title: "Evidence Documentation",
      description: "Proper documentation and preservation of findings for legal proceedings"
    },
    {
      step: 5,
      title: "Report Preparation",
      description: "Comprehensive report with findings, evidence, and recommendations"
    },
    {
      step: 6,
      title: "Expert Testimony",
      description: "Court representation and expert witness testimony when required"
    }
  ];

  const useCases = [
    "Suspected employee fraud or embezzlement",
    "Financial statement manipulation",
    "Asset misappropriation investigations",
    "Insurance claim verification",
    "Due diligence for acquisitions",
    "Regulatory compliance investigations",
    "Matrimonial disputes involving business assets",
    "Partnership or shareholder disputes"
  ];

  const faqs = [
    {
      question: "What is forensic audit and when is it needed?",
      answer: "Forensic audit is a specialized examination of financial records to detect fraud, embezzlement, or financial irregularities. It's needed when there are suspicions of financial misconduct, unexplained losses, or when legal evidence is required for court proceedings."
    },
    {
      question: "How long does a forensic audit take?",
      answer: "The duration varies based on the complexity of the case, volume of data, and scope of investigation. Simple cases may take 2-4 weeks, while complex investigations can extend to several months. We provide estimated timelines after initial assessment."
    },
    {
      question: "Can forensic audit findings be used in court?",
      answer: "Yes, our forensic audit reports are prepared to legal standards and can be used as evidence in court proceedings. Our team can also provide expert witness testimony when required."
    },
    {
      question: "How much does a forensic audit cost?",
      answer: "Costs vary based on the scope, complexity, and duration of the investigation. We provide transparent pricing after initial consultation and assessment of your specific requirements."
    },
    {
      question: "Is confidentiality maintained during forensic audits?",
      answer: "Absolutely. We maintain strict confidentiality throughout the investigation process. All team members sign non-disclosure agreements, and we follow professional standards for information security."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Forensic Audit & Investigation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Professional forensic accounting services to detect, investigate, and prevent financial fraud. 
              Our expert team provides thorough examination and reliable evidence collection for legal proceedings.
            </p>
            <CTAButton to="/contact" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Schedule Investigation
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
                What is Forensic Audit?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Forensic audit is a specialized examination of financial records and transactions to detect 
                fraud, embezzlement, or other financial irregularities. It combines accounting expertise 
                with investigative skills to provide evidence that can be used in legal proceedings.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our forensic audit services go beyond traditional auditing by focusing on areas where 
                fraud is suspected or likely to occur. We use advanced analytical techniques, data mining, 
                and investigative procedures to uncover financial misconduct and provide actionable insights.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're dealing with suspected employee fraud, need due diligence for acquisitions, 
                or require evidence for legal disputes, our forensic audit team provides thorough, 
                professional investigation services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
                <Shield className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-700 text-sm">Fraud Cases Investigated</div>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl text-center">
                <FileText className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary-600 mb-2">95%</div>
                <div className="text-gray-700 text-sm">Success Rate</div>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl text-center">
                <Users className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent-600 mb-2">50+</div>
                <div className="text-gray-700 text-sm">Expert Testimonies</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700 text-sm">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When It's Needed */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              When Do You Need Forensic Audit?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Forensic audit is essential in various situations where financial misconduct is suspected or evidence is required for legal proceedings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">{useCase}</p>
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
              Our Forensic Audit Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures thorough investigation while maintaining evidence integrity and confidentiality.
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

      {/* STARCA's Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose STARCA for Forensic Audit?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise, technology, and proven track record make us the preferred choice for forensic investigations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">Certified forensic accountants with extensive experience in fraud detection and investigation across various industries.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art data analytics tools and forensic software to detect patterns and anomalies in financial data.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Compliance</h3>
              <p className="text-gray-600">All investigations conducted in compliance with legal requirements and evidence can be used in court proceedings.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Response</h3>
              <p className="text-gray-600">Rapid deployment of investigation teams to preserve evidence and minimize further losses from ongoing fraud.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Reports</h3>
              <p className="text-gray-600">Detailed investigation reports with clear findings, evidence documentation, and actionable recommendations.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">Successfully investigated 100+ fraud cases with 95% success rate in uncovering financial irregularities.</p>
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
              Common questions about forensic audit services
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
            Need Professional Forensic Investigation?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Time is critical in fraud investigations. Contact our forensic audit experts immediately 
            to preserve evidence and minimize losses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              to="/contact" 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Emergency Consultation
            </CTAButton>
            <CTAButton 
              href="tel:+91-11-XXXX-XXXX" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Call Now: +91-11-XXXX-XXXX
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForensicAudit;
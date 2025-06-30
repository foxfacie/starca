import React from 'react';
import { BookOpen, FileText, Calculator, Calendar, Download, ExternalLink, Clock, TrendingUp } from 'lucide-react';
import CTAButton from '../components/UI/CTAButton';

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      title: "Tax Calculators",
      description: "Essential calculators for tax planning and financial decisions",
      icon: Calculator,
      resources: [
        { name: "Income Tax Calculator", description: "Calculate your income tax liability", link: "#" },
        { name: "HRA Calculator", description: "Determine HRA exemption amount", link: "#" },
        { name: "EMI Calculator", description: "Calculate loan EMI amounts", link: "#" },
        { name: "Home Loan Calculator", description: "Plan your home loan", link: "#" },
        { name: "Auto Loan Calculator", description: "Calculate vehicle loan EMI", link: "#" },
        { name: "NSC Calculator", description: "National Savings Certificate returns", link: "#" }
      ]
    },
    {
      title: "Legal Acts & Rules",
      description: "Comprehensive collection of acts, rules, and regulations",
      icon: BookOpen,
      resources: [
        { name: "Income Tax Act", description: "Complete Income Tax Act with amendments", link: "#" },
        { name: "Companies Act", description: "Companies Act 2013 with rules", link: "#" },
        { name: "GST Acts", description: "GST laws and regulations", link: "#" },
        { name: "Partnership Act", description: "Indian Partnership Act provisions", link: "#" },
        { name: "LLP Act", description: "Limited Liability Partnership Act", link: "#" },
        { name: "Competition Act", description: "Competition Act and regulations", link: "#" }
      ]
    },
    {
      title: "Forms & Returns",
      description: "Download essential forms and return formats",
      icon: FileText,
      resources: [
        { name: "Income Tax Forms", description: "ITR forms and other IT forms", link: "#" },
        { name: "ROC Forms", description: "Company registration and compliance forms", link: "#" },
        { name: "GST Forms", description: "GST registration and return forms", link: "#" },
        { name: "LLP Forms", description: "LLP incorporation and compliance forms", link: "#" },
        { name: "FEMA Forms", description: "Foreign exchange compliance forms", link: "#" },
        { name: "RBI Forms", description: "Reserve Bank of India forms", link: "#" }
      ]
    },
    {
      title: "Compliance Calendar",
      description: "Important due dates and compliance requirements",
      icon: Calendar,
      resources: [
        { name: "Income Tax Due Dates", description: "IT return filing and payment dates", link: "#" },
        { name: "GST Due Dates", description: "GST return filing calendar", link: "#" },
        { name: "Company Law Dates", description: "ROC filing due dates", link: "#" },
        { name: "Annual Compliance", description: "Year-end compliance checklist", link: "#" },
        { name: "Quarterly Dates", description: "Quarterly compliance requirements", link: "#" },
        { name: "Monthly Dates", description: "Monthly filing requirements", link: "#" }
      ]
    }
  ];

  const latestUpdates = [
    {
      title: "Budget 2024-25: Key Tax Changes",
      description: "Comprehensive analysis of tax proposals and their impact on businesses and individuals",
      date: "March 15, 2024",
      category: "Tax Update",
      downloadLink: "#"
    },
    {
      title: "GST Rate Changes - Notification 2024",
      description: "Latest GST rate modifications and their effective dates",
      date: "March 10, 2024",
      category: "GST Update",
      downloadLink: "#"
    },
    {
      title: "Companies Act Amendment Rules 2024",
      description: "Recent amendments to company law rules and compliance requirements",
      date: "March 8, 2024",
      category: "Corporate Law",
      downloadLink: "#"
    },
    {
      title: "FEMA Compliance Guidelines Update",
      description: "Updated guidelines for foreign exchange compliance and reporting",
      date: "March 5, 2024",
      category: "FEMA",
      downloadLink: "#"
    }
  ];

  const quickLinks = [
    { name: "Income Tax Department", url: "https://www.incometax.gov.in", description: "Official IT department portal" },
    { name: "GST Portal", url: "https://www.gst.gov.in", description: "Official GST portal" },
    { name: "MCA Portal", url: "https://www.mca.gov.in", description: "Ministry of Corporate Affairs" },
    { name: "RBI Website", url: "https://www.rbi.org.in", description: "Reserve Bank of India" },
    { name: "SEBI Portal", url: "https://www.sebi.gov.in", description: "Securities and Exchange Board" },
    { name: "ICAI Website", url: "https://www.icai.org", description: "Institute of Chartered Accountants" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Resources & Tools
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Comprehensive collection of calculators, forms, legal documents, and compliance tools 
              to support your business and financial planning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential Business Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access a wide range of tools and resources designed to simplify your compliance and planning processes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.resources.map((resource, resourceIndex) => (
                    <a
                      key={resourceIndex}
                      href={resource.link}
                      className="block p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                            {resource.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Updates & Notifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest regulatory changes, notifications, and important updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestUpdates.map((update, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {update.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {update.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{update.title}</h3>
                <p className="text-gray-600 mb-4">{update.description}</p>
                <a
                  href={update.downloadLink}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Important Government Portals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick access to essential government websites and regulatory portals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl hover:from-primary-100 hover:to-primary-200 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {link.name}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest Changes
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for regular updates on tax laws, compliance requirements, 
              and important regulatory changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Personalized Advisory?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            While our resources provide valuable information, every business situation is unique. 
            Get personalized advice from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              to="/contact" 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Schedule Consultation
            </CTAButton>
            <CTAButton  
              variant="outline" 
              size="lg"
              className="bg-white text-primary-700 hover:bg-gray-100 shadow-glow hover:shadow-glow-lg font-black text-xl"
            >
              View Our Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
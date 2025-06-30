import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Building2, 
  Calculator, 
  Shield, 
  TrendingUp, 
  FileText,
  Users,
  Globe,
  Scale,
  Briefcase,
  BookOpen,
  Target,
  ArrowRight
} from 'lucide-react';
import CTAButton from '../components/UI/CTAButton';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Audit & Investigation",
      description: "Comprehensive audit and forensic investigation services",
      icon: Search,
      services: [
        { name: "Forensic Audit & Investigation", path: "/services/forensic-audit", description: "Professional fraud detection and investigation services" },
        { name: "Statutory Audit", path: "/services/statutory-audit", description: "Mandatory audit services for companies" },
        { name: "Internal Audit", path: "/services/internal-audit", description: "Risk assessment and internal control evaluation" },
        { name: "Tax Audit", path: "/services/tax-audit", description: "Compliance audit for tax regulations" }
      ]
    },
    {
      title: "Corporate Services",
      description: "Business formation and restructuring solutions",
      icon: Building2,
      services: [
        { name: "Company Formation", path: "/services/company-formation", description: "Private, public, OPC, and LLP registrations" },
        { name: "Corporate Restructuring", path: "/services/corporate-restructuring", description: "Mergers, acquisitions, and business optimization" },
        { name: "Insolvency & Bankruptcy", path: "/services/insolvency-bankruptcy", description: "IBC services and NCLT proceedings" },
        { name: "Foreign Company Setup", path: "/services/foreign-company-setup", description: "Subsidiary, branch, and liaison office setup" }
      ]
    },
    {
      title: "Tax Advisory",
      description: "Comprehensive tax planning and compliance services",
      icon: Calculator,
      services: [
        { name: "GST Advisory & Litigation", path: "/services/gst-advisory", description: "End-to-end GST compliance and dispute resolution" },
        { name: "Income Tax Advisory", path: "/services/income-tax-advisory", description: "Tax planning and litigation support" },
        { name: "International Tax", path: "/services/international-tax", description: "Cross-border tax structuring and compliance" },
        { name: "Customs Advisory", path: "/services/customs-advisory", description: "Import/export duty optimization" }
      ]
    },
    {
      title: "Legal & Compliance",
      description: "Legal support and regulatory compliance services",
      icon: Scale,
      services: [
        { name: "FEMA Compliance", path: "/services/fema-compliance", description: "Foreign exchange regulations compliance" },
        { name: "Secretarial Services", path: "/services/secretarial-services", description: "Company secretarial and compliance support" },
        { name: "Legal Documentation", path: "/services/legal-documentation", description: "Contracts, agreements, and legal drafting" },
        { name: "Regulatory Approvals", path: "/services/regulatory-approvals", description: "Government approvals and licensing" }
      ]
    },
    {
      title: "Financial Services",
      description: "Financial planning and advisory solutions",
      icon: TrendingUp,
      services: [
        { name: "Business Valuation", path: "/services/business-valuation", description: "Asset and business valuation services" },
        { name: "Financial Planning", path: "/services/financial-planning", description: "Strategic financial planning and analysis" },
        { name: "Investment Advisory", path: "/services/investment-advisory", description: "Investment planning and portfolio management" },
        { name: "Financing Arrangement", path: "/services/financing-arrangement", description: "Capital raising and funding solutions" }
      ]
    },
    {
      title: "Specialized Services",
      description: "Industry-specific and specialized advisory services",
      icon: Target,
      services: [
        { name: "Due Diligence", path: "/services/due-diligence", description: "Comprehensive business due diligence" },
        { name: "Risk Management", path: "/services/risk-management", description: "Enterprise risk assessment and mitigation" },
        { name: "Management Consulting", path: "/services/management-consulting", description: "Strategic business consulting" },
        { name: "Digital Transformation", path: "/services/digital-transformation", description: "Technology and process optimization" }
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Qualified CAs, CS, and legal professionals with specialized expertise"
    },
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "15+ years of excellence serving 500+ satisfied clients"
    },
    {
      icon: Globe,
      title: "Comprehensive Solutions",
      description: "End-to-end services covering all business and compliance needs"
    },
    {
      icon: Briefcase,
      title: "Industry Experience",
      description: "Deep expertise across manufacturing, IT, real estate, and healthcare"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Comprehensive financial, legal, and business advisory services tailored to your needs. 
              From audit and compliance to strategic consulting, we're your trusted partner for success.
            </p>
            <CTAButton to="/contact" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Schedule Consultation
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              STARCA offers a comprehensive suite of professional services designed to meet all your 
              business, financial, and compliance requirements under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mr-4 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                    <category.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.path}
                      className="block p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group/service"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover/service:text-primary-600 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover/service:text-primary-600 group-hover/service:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
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
              Why Choose STARCA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence, comprehensive expertise, and client-focused approach 
              make us the preferred choice for businesses across Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure quality service delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Understanding your specific needs and requirements</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Developing customized solutions and strategies</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-600 to-accent-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">Implementing solutions with precision and expertise</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Ongoing support and maintenance as needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across diverse industries, providing specialized solutions 
              tailored to sector-specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Manufacturing", "Information Technology", "Real Estate", "Healthcare",
              "Financial Services", "Retail & E-commerce", "Education", "Hospitality",
              "Construction", "Import/Export", "Pharmaceuticals", "Automotive"
            ].map((industry, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 group">
                <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let's discuss your specific requirements and how our comprehensive services 
            can help your business achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              to="/contact" 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Schedule Free Consultation
            </CTAButton>
            <CTAButton 
              href="tel:+011-XXXX-XXXX" 
              variant="outline" 
              size="lg"
              className="bg-white text-primary-700 hover:bg-gray-100 shadow-glow hover:shadow-glow-lg font-black text-xl"
            >
              Call Now: +011-XXXX-XXXX
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
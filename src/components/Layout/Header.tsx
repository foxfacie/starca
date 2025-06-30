import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Calculator, FileText, BookOpen, Calendar, Building, Scale, TrendingUp, Users, Globe, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      category: "Company Formation & Restructuring",
      icon: Building,
      items: [
        { name: 'Company Formation', path: '/services/company-formation' },
        { name: 'LLP Formation', path: '/services/llp-formation' },
        { name: 'One Person Company', path: '/services/opc-registration' },
        { name: 'Partnership Registration', path: '/services/partnership-registration' },
        { name: 'Corporate Restructuring', path: '/services/corporate-restructuring' },
      ]
    },
    {
      category: "Specialized Services",
      icon: Shield,
      items: [
        { name: 'Forensic Audit & Investigation', path: '/services/forensic-audit' },
        { name: 'Insolvency & Bankruptcy', path: '/services/insolvency-bankruptcy' },
        { name: 'Business Valuation', path: '/services/business-valuation' },
        { name: 'Audit & Assurance', path: '/services/audit-assurance' },
      ]
    },
    {
      category: "Taxation & Advisory",
      icon: Calculator,
      items: [
        { name: 'GST Advisory & Litigation', path: '/services/gst-advisory' },
        { name: 'Income Tax Advisory', path: '/services/income-tax-advisory' },
        { name: 'International Tax', path: '/services/international-tax' },
        { name: 'Custom Advisory', path: '/services/custom-advisory' },
      ]
    },
    {
      category: "Legal & Compliance",
      icon: Scale,
      items: [
        { name: 'RBI/FEMA Compliance', path: '/services/rbi-fema-compliance' },
        { name: 'Secretarial Services', path: '/services/secretarial-services' },
        { name: 'Legal Support', path: '/services/legal-support' },
        { name: 'Compliance Management', path: '/services/compliance-management' },
      ]
    }
  ];

  const tools = [
    { name: 'Income Tax Calculator', path: '/tools/income-tax-calculator', icon: Calculator },
    { name: 'HRA Calculator', path: '/tools/hra-calculator', icon: Calculator },
    { name: 'EMI Calculator', path: '/tools/emi-calculator', icon: Calculator },
    { name: 'GST Calculator', path: '/tools/gst-calculator', icon: Calculator },
    { name: 'Home Loan Calculator', path: '/tools/home-loan-calculator', icon: Calculator },
    { name: 'Auto Loan Calculator', path: '/tools/auto-loan-calculator', icon: Calculator },
    { name: 'NSC Calculator', path: '/tools/nsc-calculator', icon: Calculator },
    { name: 'SIP Calculator', path: '/tools/sip-calculator', icon: TrendingUp },
  ];

  const resources = [
    {
      category: "Forms & Returns",
      icon: FileText,
      items: [
        { name: 'Income Tax Forms', path: '/resources/income-tax-forms' },
        { name: 'GST Forms', path: '/resources/gst-forms' },
        { name: 'Company Forms', path: '/resources/company-forms' },
        { name: 'LLP Forms', path: '/resources/llp-forms' },
      ]
    },
    {
      category: "Legal Acts & Rules",
      icon: BookOpen,
      items: [
        { name: 'Income Tax Act', path: '/resources/income-tax-act' },
        { name: 'Companies Act', path: '/resources/companies-act' },
        { name: 'GST Acts', path: '/resources/gst-acts' },
        { name: 'Partnership Act', path: '/resources/partnership-act' },
      ]
    },
    {
      category: "Compliance & Calendar",
      icon: Calendar,
      items: [
        { name: 'Due Date Calendar', path: '/resources/due-date-calendar' },
        { name: 'Compliance Checklist', path: '/resources/compliance-checklist' },
        { name: 'Government Portals', path: '/resources/government-portals' },
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-glass-50 backdrop-blur-2xl border-b border-white/20 shadow-glass' 
        : 'bg-glass-100 backdrop-blur-xl'
    }`}>
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91-11-XXXX-XXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@starca.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="flex items-center space-x-2">
              <span>🏆</span>
              <span>ICAI & ICSI Registered | 15+ Years of Excellence</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">STARCA</h1>
              <p className="text-xs text-secondary-600 font-medium">Chartered Accountants</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                location.pathname === '/' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-secondary-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                location.pathname === '/about' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-secondary-700 hover:text-primary-600'
              }`}
            >
              About
            </Link>
            <Link 
              to="/team" 
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                location.pathname === '/team' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-secondary-700 hover:text-primary-600'
              }`}
            >
              Team
            </Link>
            
            {/* Services Mega Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 font-medium text-secondary-700 hover:text-primary-600 transition-all duration-300 hover:scale-105">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-glass-50 backdrop-blur-2xl rounded-3xl shadow-glass-lg border border-white/20 p-6 animate-fade-in">
                  <div className="grid grid-cols-2 gap-6">
                    {services.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                            <category.icon className="w-4 h-4 text-primary-600" />
                          </div>
                          <h3 className="font-semibold text-secondary-800">{category.category}</h3>
                        </div>
                        {category.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            to={item.path}
                            className="block px-3 py-2 text-sm text-secondary-700 hover:bg-glass-200 hover:text-primary-600 rounded-xl transition-all duration-300 hover:scale-105"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <Link
                      to="/services"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Tools Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('tools')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 font-medium text-secondary-700 hover:text-primary-600 transition-all duration-300 hover:scale-105">
                <span>Tools</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
              </button>
              
              {activeDropdown === 'tools' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-glass-50 backdrop-blur-2xl rounded-3xl shadow-glass-lg border border-white/20 p-4 animate-fade-in">
                  <div className="grid grid-cols-1 gap-2">
                    {tools.map((tool, index) => (
                      <Link
                        key={index}
                        to={tool.path}
                        className="flex items-center px-3 py-2 text-sm text-secondary-700 hover:bg-glass-200 hover:text-primary-600 rounded-xl transition-all duration-300 hover:scale-105"
                      >
                        <tool.icon className="w-4 h-4 mr-3" />
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/20">
                    <Link
                      to="/tools"
                      className="block text-center px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-xl font-medium hover:from-accent-600 hover:to-accent-700 transition-all duration-300 hover:scale-105"
                    >
                      View All Tools →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Mega Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 font-medium text-secondary-700 hover:text-primary-600 transition-all duration-300 hover:scale-105">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-glass-50 backdrop-blur-2xl rounded-3xl shadow-glass-lg border border-white/20 p-6 animate-fade-in">
                  {resources.map((category, index) => (
                    <div key={index} className="mb-6 last:mb-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-trust-100 to-trust-200 rounded-xl flex items-center justify-center">
                          <category.icon className="w-4 h-4 text-trust-600" />
                        </div>
                        <h3 className="font-semibold text-secondary-800">{category.category}</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {category.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            to={item.path}
                            className="block px-3 py-2 text-sm text-secondary-700 hover:bg-glass-200 hover:text-primary-600 rounded-xl transition-all duration-300 hover:scale-105"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/20">
                    <Link
                      to="/resources"
                      className="block text-center px-4 py-2 bg-gradient-to-r from-trust-500 to-trust-600 text-white rounded-xl font-medium hover:from-trust-600 hover:to-trust-700 transition-all duration-300 hover:scale-105"
                    >
                      View All Resources →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/news" 
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                location.pathname === '/news' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-secondary-700 hover:text-primary-600'
              }`}
            >
              News
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                location.pathname === '/contact' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-secondary-700 hover:text-primary-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-2xl font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-glass-200 transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-6 bg-glass-50 backdrop-blur-2xl rounded-3xl shadow-glass border border-white/20 animate-fade-in">
            <div className="space-y-4">
              <Link to="/" className="block py-3 text-secondary-700 hover:text-primary-600 transition-colors font-medium">Home</Link>
              <Link to="/about" className="block py-3 text-secondary-700 hover:text-primary-600 transition-colors font-medium">About</Link>
              <Link to="/team" className="block py-3 text-secondary-700 hover:text-primary-600 transition-colors font-medium">Team</Link>
              <Link to="/services" className="block py-3 text-secondary-700 hover:text-primary-600 transition-colors font-medium">Services</Link>
              <Link to="/tools" className="block py-3 text-secondary-700 hover:text-primary-600 transition-colors font-medium">Tools</Link>
              <Link to="/resources" className="block py-3 text-secondary-700 hover:text-primary-600 transition-colors font-medium">Resources</Link>
              <Link to="/news" className="block py-3 text-secondary-700 hover:text-primary-600 transition-colors font-medium">News</Link>
              <Link to="/contact" className="block py-3 text-secondary-700 hover:text-primary-600 transition-colors font-medium">Contact</Link>
              <Link 
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-2xl font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 mt-6"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
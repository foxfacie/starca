import React from 'react';
import HeroSlider from '../components/UI/HeroSlider';
import ServiceCard from '../components/UI/ServiceCard';
import CTAButton from '../components/UI/CTAButton';
import { 
  Search, 
  Building2, 
  Calculator, 
  Shield, 
  TrendingUp, 
  FileText,
  Award,
  Users,
  Star,
  Clock,
  CheckCircle,
  MapPin,
  Globe,
  Target,
  Zap,
  Sparkles,
  BarChart,
  Briefcase,
  Lightbulb,
  Receipt
} from 'lucide-react';

const Home: React.FC = () => {
  const featuredServices = [
    {
      title: "Forensic Audit & Investigation",
      description: "Comprehensive fraud detection and investigation services with expert forensic accountants and legal support.",
      icon: Search,
      link: "/services/forensic-audit",
      features: ["Fraud Detection", "Evidence Collection", "Expert Testimony", "Risk Assessment"]
    },
    {
      title: "Corporate Restructuring",
      description: "Strategic mergers, acquisitions, and business restructuring to optimize performance and growth.",
      icon: Building2,
      link: "/services/corporate-restructuring",
      features: ["M&A Advisory", "Due Diligence", "Valuation Services", "Regulatory Compliance"]
    },
    {
      title: "GST Advisory & Litigation",
      description: "End-to-end GST compliance, advisory, and representation in disputes and appeals.",
      icon: Calculator,
      link: "/services/gst-advisory",
      features: ["GST Registration", "Compliance Support", "Dispute Resolution", "Refund Claims"]
    },
    {
      title: "Insolvency & Bankruptcy",
      description: "Expert IBC services for creditors and debtors, including NCLT proceedings and resolution processes.",
      icon: Shield,
      link: "/services/insolvency-bankruptcy",
      features: ["IBC Filing", "NCLT Representation", "Resolution Planning", "Liquidation Support"]
    },
    {
      title: "Income Tax Advisory",
      description: "Comprehensive tax planning, compliance, and litigation support for individuals and businesses.",
      icon: TrendingUp,
      link: "/services/income-tax-advisory",
      features: ["Tax Planning", "Return Filing", "Appeals & Litigation", "International Tax"]
    },
    {
      title: "Company Formation",
      description: "Complete business incorporation services including private, public, OPC, and LLP registrations.",
      icon: FileText,
      link: "/services/company-formation",
      features: ["Company Registration", "LLP Formation", "OPC Setup", "Foreign Subsidiaries"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "ICAI & ICSI Registered",
      description: "Certified professionals with recognized qualifications and memberships.",
      gradient: "from-primary-400 to-primary-600"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced CAs, CS, and legal professionals with specialized expertise.",
      gradient: "from-accent-400 to-accent-600"
    },
    {
      icon: Star,
      title: "500+ Satisfied Clients",
      description: "Trusted by businesses across various industries in Delhi NCR.",
      gradient: "from-warning-400 to-warning-600"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Efficient service delivery without compromising on quality.",
      gradient: "from-trust-400 to-trust-600"
    },
    {
      icon: CheckCircle,
      title: "End-to-End Solutions",
      description: "Comprehensive services from consultation to implementation.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Delhi-Based Excellence",
      description: "Deep understanding of local regulations and business environment.",
      gradient: "from-indigo-400 to-indigo-600"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Industries",
      text: "STARCA's forensic audit services helped us identify and resolve significant financial irregularities. Their professionalism and expertise are exceptional.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Priya Sharma",
      company: "Tech Solutions Pvt Ltd",
      text: "Excellent GST advisory services. They helped us navigate complex compliance requirements and saved us from potential penalties.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Amit Gupta",
      company: "Gupta Enterprises",
      text: "Outstanding support during our company restructuring. STARCA's team provided strategic insights that significantly improved our business efficiency.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const newsUpdates = [
    {
      title: "GST Amendment Act 2024: Key Changes Every Business Should Know",
      excerpt: "Latest updates on GST compliance requirements and their impact on businesses...",
      date: "March 15, 2024",
      category: "Tax Update",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "New IBC Regulations: Streamlined Insolvency Process",
      excerpt: "Recent amendments to the Insolvency and Bankruptcy Code bring significant changes...",
      date: "March 12, 2024",
      category: "Corporate Law",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Foreign Investment Guidelines: Latest FDI Policy Updates",
      excerpt: "Updated regulations for foreign companies establishing operations in India...",
      date: "March 10, 2024",
      category: "Investment",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Clients Served", gradient: "from-primary-500 to-primary-600" },
    { icon: Award, value: "15+", label: "Years Experience", gradient: "from-accent-500 to-accent-600" },
    { icon: Target, value: "100%", label: "Success Rate", gradient: "from-trust-500 to-trust-600" },
    { icon: Globe, value: "50+", label: "Cities Covered", gradient: "from-warning-500 to-warning-600" }
  ];

  const quickTools = [
    { name: "Income Tax Calculator", icon: Calculator, path: "/tools/income-tax-calculator", color: "from-blue-500 to-blue-600" },
    { name: "GST Calculator", icon: Receipt, path: "/tools/gst-calculator", color: "from-green-500 to-green-600" },
    { name: "EMI Calculator", icon: BarChart, path: "/tools/emi-calculator", color: "from-purple-500 to-purple-600" },
    { name: "SIP Calculator", icon: TrendingUp, path: "/tools/sip-calculator", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Advanced Background Animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-200/30 to-warning-300/30 rounded-full animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-warning-200/30 to-primary-200/30 rounded-full animate-blob animation-delay-4000"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-300/20 to-accent-300/20 rounded-2xl animate-float transform rotate-45"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-warning-300/20 to-trust-300/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-accent-300/20 to-warning-300/20 rounded-xl animate-float-slow transform rotate-12"></div>
        
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-30 animate-gradient"></div>
      </div>

      {/* Hero Section */}
      <HeroSlider />

      {/* Quick Tools Section */}
      <section className="py-16 bg-white/90 backdrop-blur-xl border-y border-white/20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent mb-4">
              Quick Financial Tools
            </h2>
            <p className="text-xl text-secondary-600">Calculate taxes, EMIs, and plan your finances instantly</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickTools.map((tool, index) => (
              <CTAButton
                key={index}
                to={tool.path}
                className={`bg-gradient-to-r ${tool.color} text-white p-6 rounded-3xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 flex flex-col items-center space-y-3 font-bold`}
                icon={false}
              >
                <tool.icon className="w-8 h-8" />
                <span className="text-sm text-center">{tool.name}</span>
              </CTAButton>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/80 backdrop-blur-xl border-y border-white/20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:shadow-glow-lg transition-all duration-500 group-hover:scale-110 animate-float`} style={{animationDelay: `${index * 0.5}s`}}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-black text-secondary-800 mb-3 bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-secondary-600 font-bold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white/90 backdrop-blur-xl relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="w-8 h-8 text-accent-500 mr-4 animate-spin-slow" />
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-secondary-800 via-primary-600 to-accent-600 bg-clip-text text-transparent">
                Premier Chartered Accountants in Delhi
              </h2>
              <Sparkles className="w-8 h-8 text-warning-500 ml-4 animate-spin-slow" />
            </div>
            <p className="text-2xl text-secondary-700 leading-relaxed mb-10 font-medium">
              With over 15 years of excellence, STARCA has established itself as a leading CA firm in Delhi, 
              providing comprehensive accounting, tax advisory, audit, and business consulting services. 
              Our team of certified professionals combines deep expertise with personalized service to help 
              businesses navigate complex financial and legal challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton to="/about" variant="primary" size="xl" glow={true}>
                <Lightbulb className="w-6 h-6 mr-2" />
                Learn About Us
              </CTAButton>
              <CTAButton to="/contact" variant="neon" size="xl" glow={true}>
                <Briefcase className="w-6 h-6 mr-2" />
                Schedule Consultation
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-gradient-to-br from-white/90 to-primary-50/80 backdrop-blur-xl relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-secondary-800 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-8">
              Our Core Services
            </h2>
            <p className="text-2xl text-secondary-700 max-w-4xl mx-auto font-medium">
              Comprehensive financial and business advisory services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredServices.map((service, index) => (
              <div key={index} className="group bg-white/90 backdrop-blur-xl rounded-4xl p-8 shadow-glass hover:shadow-glass-lg transition-all duration-700 border border-white/30 hover:border-primary-200/50 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl flex items-center justify-center group-hover:from-accent-400 group-hover:to-accent-600 transition-all duration-500 shadow-glow group-hover:shadow-glow-lg animate-float">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-secondary-800 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-secondary-700 mb-8 leading-relaxed text-lg font-medium">
                  {service.description}
                </p>
                
                {service.features.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-secondary-700 font-medium">
                        <div className="w-2 h-2 bg-gradient-to-r from-accent-400 to-warning-500 rounded-full animate-pulse"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <CTAButton
                  to={service.link}
                  variant="gradient"
                  className="w-full justify-center font-bold"
                  glow={true}
                >
                  Learn More
                </CTAButton>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <CTAButton to="/services" variant="neon" size="xl" glow={true}>
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why Choose STARCA */}
      <section className="py-24 bg-white/90 backdrop-blur-xl relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-secondary-800 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-8">
              Why Choose STARCA?
            </h2>
            <p className="text-2xl text-secondary-700 max-w-4xl mx-auto font-medium">
              Your success is our commitment. Here's what sets us apart in the competitive CA landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group text-center p-10 rounded-4xl hover:bg-white/80 transition-all duration-700 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-4xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-glow group-hover:shadow-glow-lg animate-float`} style={{animationDelay: `${index * 0.3}s`}}>
                  <item.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-black text-secondary-800 mb-6 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                <p className="text-secondary-700 leading-relaxed text-lg font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-primary-50/80 to-accent-50/80 backdrop-blur-xl relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-secondary-800 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-8">
              What Our Clients Say
            </h2>
            <p className="text-2xl text-secondary-700 font-medium">
              Trusted by businesses across Delhi NCR
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-xl rounded-4xl p-8 shadow-glass hover:shadow-glass-lg transition-all duration-700 border border-white/30 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex items-center mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-warning-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <p className="text-secondary-800 mb-8 italic leading-relaxed text-lg font-medium">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary-200"
                  />
                  <div>
                    <p className="font-black text-secondary-800 text-lg">{testimonial.name}</p>
                    <p className="text-secondary-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="py-24 bg-white/90 backdrop-blur-xl relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-secondary-800 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-6">
                Latest News & Updates
              </h2>
              <p className="text-2xl text-secondary-700 font-medium">
                Stay informed with the latest regulatory changes and business insights
              </p>
            </div>
            <CTAButton to="/news" variant="outline" size="lg" className="border-2 border-primary-500 text-primary-700 hover:bg-primary-500 hover:text-white font-bold">
              View All News
            </CTAButton>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {newsUpdates.map((news, index) => (
              <article key={index} className="group bg-white/90 backdrop-blur-xl rounded-4xl overflow-hidden shadow-glass hover:shadow-glass-lg transition-all duration-700 border border-white/30 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-primary-400 to-primary-600 text-white text-sm font-bold rounded-full">
                      {news.category}
                    </span>
                    <span className="text-sm text-secondary-500 font-medium">{news.date}</span>
                  </div>
                  <h3 className="text-2xl font-black text-secondary-800 mb-4 group-hover:text-primary-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-secondary-700 mb-6 leading-relaxed font-medium">{news.excerpt}</p>
                  <a href="#" className="text-primary-600 font-bold hover:text-primary-700 transition-colors inline-flex items-center group/link text-lg">
                    Read More
                    <Zap className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 via-accent-600 to-warning-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient bg-400% animate-gradient opacity-30"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/15 rounded-2xl animate-float-delayed blur-sm"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-10">
            Ready to Partner with Delhi's Leading CA Firm?
          </h2>
          <p className="text-2xl md:text-3xl mb-12 opacity-95 max-w-5xl mx-auto leading-relaxed font-medium">
            Get expert financial and business advisory services tailored to your needs. 
            Schedule a consultation today and discover how STARCA can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <CTAButton 
              to="/contact" 
              variant="secondary" 
              size="xl"
              className="bg-white text-primary-700 hover:bg-gray-100 shadow-glow hover:shadow-glow-lg font-black text-xl"
              glow={true}
            >
              Book Free Consultation
            </CTAButton>
            <CTAButton 
              to="" 
              variant="outline" 
              size="xl"
              className="bg-white text-primary-700 hover:bg-gray-100 shadow-glow hover:shadow-glow-lg font-black text-xl"
            >
              Explore Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
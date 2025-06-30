import React from 'react';
import { Award, Users, Star, Clock, CheckCircle, MapPin, Linkedin, Mail, Phone, Sparkles, Building, Globe, Shield } from 'lucide-react';
import CTAButton from '../components/UI/CTAButton';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "CA Rajesh Kumar",
      designation: "Managing Partner & Founder",
      qualifications: "FCA, DISA (ICAI)",
      experience: "15+ Years",
      specialization: "Forensic Audit, Corporate Restructuring, Tax Advisory",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Founder of STARCA with extensive experience in forensic investigations and corporate restructuring. Led over 100+ fraud investigation cases with 95% success rate.",
      email: "rajesh@starca.com",
      linkedin: "#",
      gradient: "from-primary-500 to-primary-600"
    },
    {
      name: "CS Priya Sharma",
      designation: "Partner - Corporate Law",
      qualifications: "ACS, LLB",
      experience: "12+ Years",
      specialization: "Company Law, FEMA Compliance, Corporate Governance",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Expert in corporate law and regulatory compliance with deep knowledge of FEMA, company formations, and corporate governance frameworks.",
      email: "priya@starca.com",
      linkedin: "#",
      gradient: "from-accent-500 to-accent-600"
    },
    {
      name: "CA Amit Gupta",
      designation: "Senior Partner - Tax Advisory",
      qualifications: "FCA, DISA",
      experience: "14+ Years",
      specialization: "GST, Income Tax, International Taxation",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Specialized in complex tax matters including GST litigation, transfer pricing, and international tax structuring for multinational corporations.",
      email: "amit@starca.com",
      linkedin: "#",
      gradient: "from-warning-500 to-warning-600"
    },
    {
      name: "CA Neha Agarwal",
      designation: "Partner - Audit & Assurance",
      qualifications: "FCA, CISA",
      experience: "10+ Years",
      specialization: "Statutory Audit, Internal Audit, Risk Management",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Expert in audit and assurance services with focus on risk management and internal control systems for large enterprises.",
      email: "neha@starca.com",
      linkedin: "#",
      gradient: "from-trust-500 to-trust-600"
    },
    {
      name: "Adv. Vikram Singh",
      designation: "Legal Counsel",
      qualifications: "LLM, Advocate",
      experience: "8+ Years",
      specialization: "Corporate Litigation, IBC, NCLT Matters",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Experienced advocate specializing in corporate litigation, insolvency proceedings, and NCLT matters with strong track record in complex cases.",
      email: "vikram@starca.com",
      linkedin: "#",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      name: "CA Sunita Mehta",
      designation: "Senior Manager - Valuation",
      qualifications: "FCA, Registered Valuer",
      experience: "9+ Years",
      specialization: "Business Valuation, Share Valuation, Asset Valuation",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Certified valuer with expertise in business and asset valuation for M&A transactions, financial reporting, and regulatory compliance.",
      email: "sunita@starca.com",
      linkedin: "#",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  const stats = [
    { icon: Users, value: "25+", label: "Team Members", gradient: "from-primary-500 to-primary-600" },
    { icon: Award, value: "50+", label: "Professional Certifications", gradient: "from-accent-500 to-accent-600" },
    { icon: Star, value: "500+", label: "Clients Served", gradient: "from-warning-500 to-warning-600" },
    { icon: Clock, value: "15+", label: "Years Experience", gradient: "from-trust-500 to-trust-600" }
  ];

  const teamValues = [
    {
      icon: Award,
      title: "Qualified Professionals",
      description: "All team members hold professional qualifications from ICAI, ICSI, or Bar Council with continuous professional development.",
      gradient: "from-primary-500 to-primary-600"
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Cross-functional teams ensure comprehensive solutions by combining accounting, legal, and business expertise.",
      gradient: "from-accent-500 to-accent-600"
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Consistent delivery of high-quality results with 100% client satisfaction and successful case resolutions.",
      gradient: "from-warning-500 to-warning-600"
    },
    {
      icon: Globe,
      title: "Industry Expertise",
      description: "Deep sector knowledge across manufacturing, IT, real estate, healthcare, and financial services.",
      gradient: "from-trust-500 to-trust-600"
    },
    {
      icon: Shield,
      title: "Ethical Standards",
      description: "Unwavering commitment to professional ethics and integrity in all client engagements.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Building,
      title: "Results-Oriented",
      description: "Focus on delivering measurable outcomes and value for every client engagement.",
      gradient: "from-indigo-500 to-indigo-600"
    }
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
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="bg-glass-100 backdrop-blur-2xl rounded-4xl p-12 border border-white/20 shadow-glass-lg">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="w-8 h-8 text-accent-500 mr-4 animate-spin-slow" />
              <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-secondary-800 via-primary-600 to-accent-600 bg-clip-text text-transparent">
                Meet Our Expert Team
              </h1>
              <Sparkles className="w-8 h-8 text-warning-500 ml-4 animate-spin-slow" />
            </div>
            <p className="text-2xl md:text-3xl text-secondary-700 leading-relaxed mb-10 font-medium max-w-4xl mx-auto">
              A dedicated team of qualified Chartered Accountants, Company Secretaries, 
              and legal professionals committed to delivering exceptional service and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton to="/contact" variant="primary" size="xl" glow={true}>
                <Users className="w-6 h-6 mr-2" />
                Work With Us
              </CTAButton>
              <CTAButton to="/about" variant="neon" size="xl" glow={true}>
                <Building className="w-6 h-6 mr-2" />
                Our Story
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 bg-gradient-to-br ${stat.gradient} rounded-4xl flex items-center justify-center mx-auto mb-8 shadow-glow group-hover:shadow-glow-lg transition-all duration-500 group-hover:scale-110 animate-float`} style={{animationDelay: `${index * 0.5}s`}}>
                  <stat.icon className="w-12 h-12 text-white" />
                </div>
                <div className="text-5xl font-black text-secondary-800 mb-4 bg-gradient-to-r from-secondary-800 to-primary-600 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-secondary-600 font-bold text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-secondary-800 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-8">
              Excellence Through Expertise
            </h2>
            <p className="text-2xl text-secondary-700 leading-relaxed font-medium">
              Our multidisciplinary team brings together decades of combined experience in accounting, 
              taxation, corporate law, and business advisory. Each member is carefully selected for their 
              expertise, professional qualifications, and commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamValues.map((value, index) => (
              <div key={index} className="bg-glass-100 backdrop-blur-xl rounded-4xl p-8 shadow-glass-lg border border-white/20 hover:scale-105 transition-all duration-500 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-glow animate-float`} style={{animationDelay: `${index * 0.3}s`}}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-secondary-800 mb-4">{value.title}</h3>
                <p className="text-secondary-700 font-medium leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-secondary-800 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-8">
              Our Leadership Team
            </h2>
            <p className="text-2xl text-secondary-700 max-w-4xl mx-auto font-medium">
              Meet the experienced professionals who lead STARCA's commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-glass-100 backdrop-blur-xl rounded-4xl shadow-glass-lg hover:shadow-glass-xl transition-all duration-700 overflow-hidden border border-white/20 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-black text-secondary-800 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-bold mb-3">{member.designation}</p>
                  <p className="text-sm text-secondary-600 mb-4 font-medium">{member.qualifications} • {member.experience}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm font-bold text-secondary-700 mb-2">Specialization:</p>
                    <p className="text-sm text-secondary-600 font-medium">{member.specialization}</p>
                  </div>
                  
                  <p className="text-sm text-secondary-600 mb-6 leading-relaxed font-medium">{member.bio}</p>
                  
                  <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
                    <a
                      href={`mailto:${member.email}`}
                      className={`w-12 h-12 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-glow hover:shadow-glow-lg`}
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={member.linkedin}
                      className={`w-12 h-12 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-glow hover:shadow-glow-lg`}
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-primary-600 via-accent-600 to-warning-600 rounded-4xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-animated-gradient bg-400% animate-gradient opacity-30"></div>
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full animate-float blur-sm"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/15 rounded-2xl animate-float-delayed blur-sm"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black mb-10">
                Ready to Work with Our Expert Team?
              </h2>
              <p className="text-2xl md:text-3xl mb-12 opacity-95 max-w-5xl mx-auto leading-relaxed font-medium">
                Connect with our experienced professionals and discover how STARCA's team 
                can help your business achieve its financial and strategic objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <CTAButton 
                  to="/contact" 
                  variant="secondary" 
                  size="xl"
                  className="bg-white text-primary-700 hover:bg-gray-100 shadow-glow hover:shadow-glow-lg font-black text-xl"
                  glow={true}
                >
                  Schedule Team Consultation
                </CTAButton>
                <CTAButton 
                  to="/team" 
                  variant="outline" 
                  size="xl"
                  className="bg-white text-primary-700 hover:bg-gray-100 shadow-glow hover:shadow-glow-lg font-black text-xl"
                >
                  Explore Our Services
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
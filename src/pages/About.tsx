import React from 'react';
import { Award, Users, Target, Eye, Heart, Shield, TrendingUp, Globe, Sparkles, Building, CheckCircle, Clock } from 'lucide-react';
import CTAButton from '../components/UI/CTAButton';

const About: React.FC = () => {
  const milestones = [
    { year: '2008', event: 'Founded STARCA with a vision to provide comprehensive CA services' },
    { year: '2012', event: 'Expanded services to include forensic audit and investigation' },
    { year: '2016', event: 'Added insolvency and bankruptcy services following IBC implementation' },
    { year: '2018', event: 'Achieved ICSI registration for corporate secretarial services' },
    { year: '2020', event: 'Digitized operations to serve clients during pandemic seamlessly' },
    { year: '2023', event: 'Crossed 500+ satisfied clients milestone across diverse industries' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our professional dealings, ensuring transparency and honesty.',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering superior quality services that exceed client expectations through continuous improvement.',
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our clients success is our priority. We provide personalized solutions tailored to unique business needs.',
      gradient: 'from-warning-500 to-warning-600'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Embracing technology and modern practices to deliver efficient and effective solutions.',
      gradient: 'from-trust-500 to-trust-600'
    },
    {
      icon: Globe,
      title: 'Expertise',
      description: 'Deep knowledge across accounting, taxation, legal, and business advisory domains.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Relationships',
      description: 'Building long-term partnerships based on trust, reliability, and mutual growth.',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Satisfied Clients", gradient: "from-primary-500 to-primary-600" },
    { icon: Award, value: "15+", label: "Years Experience", gradient: "from-accent-500 to-accent-600" },
    { icon: Target, value: "20+", label: "Service Areas", gradient: "from-warning-500 to-warning-600" },
    { icon: Globe, value: "100%", label: "Client Satisfaction", gradient: "from-trust-500 to-trust-600" }
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
                About STARCA
              </h1>
              <Sparkles className="w-8 h-8 text-warning-500 ml-4 animate-spin-slow" />
            </div>
            <p className="text-2xl md:text-3xl text-secondary-700 leading-relaxed mb-10 font-medium max-w-4xl mx-auto">
              Premier Chartered Accountants firm in Delhi, dedicated to providing comprehensive 
              financial and business advisory services with integrity and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton to="/team" variant="primary" size="xl" glow={true}>
                <Users className="w-6 h-6 mr-2" />
                Meet Our Team
              </CTAButton>
              <CTAButton to="/contact" variant="neon" size="xl" glow={true}>
                <Building className="w-6 h-6 mr-2" />
                Visit Our Office
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Company Introduction */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-secondary-800 mb-8">
                15+ Years of Professional Excellence
              </h2>
              <p className="text-xl text-secondary-700 mb-8 leading-relaxed font-medium">
                Founded in 2008, STARCA has evolved from a traditional audit and tax practice 
                to become a comprehensive business advisory firm. We serve over 500 clients 
                across diverse industries including manufacturing, IT, real estate, healthcare, 
                and financial services.
              </p>
              <p className="text-xl text-secondary-700 mb-8 leading-relaxed font-medium">
                Our multi-disciplinary team of Chartered Accountants, Company Secretaries, 
                and legal experts provides end-to-end solutions for complex business challenges. 
                We combine deep technical expertise with practical business insights to deliver 
                value-driven outcomes.
              </p>
              <p className="text-xl text-secondary-700 mb-10 leading-relaxed font-medium">
                Registered with ICAI, ICSI, and IBBI, we maintain the highest professional 
                standards while embracing innovation to serve our clients better in the 
                digital age.
              </p>
              <CTAButton variant="gradient" size="xl" glow={true}>
                <Award className="w-6 h-6 mr-2" />
                Our Achievements
              </CTAButton>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-glass-100 backdrop-blur-xl p-8 rounded-4xl text-center shadow-glass border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-black text-primary-600 mb-3">500+</div>
                <div className="text-secondary-700 font-bold">Satisfied Clients</div>
              </div>
              <div className="bg-glass-100 backdrop-blur-xl p-8 rounded-4xl text-center shadow-glass border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-black text-accent-600 mb-3">15+</div>
                <div className="text-secondary-700 font-bold">Years Experience</div>
              </div>
              <div className="bg-glass-100 backdrop-blur-xl p-8 rounded-4xl text-center shadow-glass border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-black text-warning-600 mb-3">20+</div>
                <div className="text-secondary-700 font-bold">Service Areas</div>
              </div>
              <div className="bg-glass-100 backdrop-blur-xl p-8 rounded-4xl text-center shadow-glass border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-black text-trust-600 mb-3">100%</div>
                <div className="text-secondary-700 font-bold">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-glass-100 backdrop-blur-xl rounded-4xl p-10 shadow-glass-lg border border-white/20 hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mr-6 shadow-glow">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-secondary-800">Our Mission</h3>
              </div>
              <p className="text-secondary-700 leading-relaxed text-lg font-medium">
                To be the most trusted and reliable chartered accountancy firm in Delhi NCR, 
                providing comprehensive financial, legal, and business advisory services that 
                enable our clients to achieve sustainable growth and success. We are committed 
                to maintaining the highest standards of professional integrity while delivering 
                innovative solutions tailored to each client's unique needs.
              </p>
            </div>
            
            <div className="bg-glass-100 backdrop-blur-xl rounded-4xl p-10 shadow-glass-lg border border-white/20 hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl flex items-center justify-center mr-6 shadow-glow">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-secondary-800">Our Vision</h3>
              </div>
              <p className="text-secondary-700 leading-relaxed text-lg font-medium">
                To become the leading professional services firm in India, recognized for our 
                expertise, innovation, and client-centric approach. We envision expanding our 
                services globally while maintaining our core values of integrity, excellence, 
                and personalized service. Our goal is to be the preferred partner for businesses 
                seeking comprehensive financial and strategic guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-secondary-800 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-8">
              Our Core Values
            </h2>
            <p className="text-2xl text-secondary-700 max-w-4xl mx-auto font-medium">
              The principles that guide everything we do and define who we are as professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div key={index} className="group text-center p-10 bg-glass-100 backdrop-blur-xl rounded-4xl shadow-glass hover:shadow-glass-lg transition-all duration-700 hover:scale-105 animate-fade-in border border-white/20" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-24 h-24 bg-gradient-to-br ${value.gradient} rounded-4xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-glow group-hover:shadow-glow-lg animate-float`} style={{animationDelay: `${index * 0.3}s`}}>
                  <value.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-black text-secondary-800 mb-6 group-hover:text-primary-600 transition-colors">{value.title}</h3>
                <p className="text-secondary-700 leading-relaxed text-lg font-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-secondary-800 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-8">
              Our Journey
            </h2>
            <p className="text-2xl text-secondary-700 font-medium">
              Key milestones in our growth and expansion
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-4xl flex items-center justify-center text-white font-black text-xl mr-10 relative z-10 shadow-glow animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-glass-100 backdrop-blur-xl rounded-4xl p-8 shadow-glass-lg border border-white/20 hover:scale-105 transition-all duration-300">
                    <p className="text-secondary-800 leading-relaxed text-lg font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose STARCA */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-secondary-800 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-8">
              Why Choose STARCA?
            </h2>
            <p className="text-2xl text-secondary-700 max-w-4xl mx-auto font-medium">
              Our unique combination of expertise, experience, and client-focused approach 
              sets us apart in the competitive CA landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 shadow-glow">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-secondary-800 mb-3">Multi-Disciplinary Expertise</h3>
                  <p className="text-secondary-700 font-medium text-lg">Team of CAs, CS, and legal professionals providing comprehensive solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 shadow-glow">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-secondary-800 mb-3">Industry Experience</h3>
                  <p className="text-secondary-700 font-medium text-lg">Deep understanding of various sectors including IT, manufacturing, real estate, and healthcare.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-warning-500 to-warning-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 shadow-glow">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-secondary-800 mb-3">Personalized Service</h3>
                  <p className="text-secondary-700 font-medium text-lg">Tailored solutions based on individual client needs and business requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-trust-500 to-trust-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 shadow-glow">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-secondary-800 mb-3">Technology-Enabled</h3>
                  <p className="text-secondary-700 font-medium text-lg">Modern tools and digital platforms for efficient service delivery and client communication.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 shadow-glow">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-secondary-800 mb-3">Transparent Pricing</h3>
                  <p className="text-secondary-700 font-medium text-lg">Clear, upfront pricing with no hidden costs or surprises.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 shadow-glow">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-secondary-800 mb-3">Quick Turnaround</h3>
                  <p className="text-secondary-700 font-medium text-lg">Efficient processes ensuring timely delivery without compromising quality.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 shadow-glow">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-secondary-800 mb-3">Professional Network</h3>
                  <p className="text-secondary-700 font-medium text-lg">Strong relationships with banks, legal firms, and government agencies.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 shadow-glow">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-secondary-800 mb-3">Continuous Support</h3>
                  <p className="text-secondary-700 font-medium text-lg">Ongoing advisory and support even after project completion.</p>
                </div>
              </div>
            </div>
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
                Ready to Experience STARCA Difference?
              </h2>
              <p className="text-2xl md:text-3xl mb-12 opacity-95 max-w-5xl mx-auto leading-relaxed font-medium">
                Join hundreds of satisfied clients who trust STARCA for their financial and business needs. 
                Let's discuss how we can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <CTAButton 
                  to="/contact" 
                  variant="secondary" 
                  size="xl"
                  className="bg-white text-primary-700 hover:bg-gray-100 shadow-glow hover:shadow-glow-lg font-black text-xl"
                  glow={true}
                >
                  Schedule Consultation
                </CTAButton>
                <CTAButton 
                  to="/about" 
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

export default About;
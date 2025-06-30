import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users, Sparkles, Building, Globe, Shield } from 'lucide-react';
import CTAButton from '../components/UI/CTAButton';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "123 Business Plaza, 5th Floor",
        "Connaught Place",
        "New Delhi - 110001"
      ],
      gradient: "from-primary-500 to-primary-600"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+011-XXXX-XXXX (Main)",
        "+91-98XXX-XXXXX (Mobile)",
        
      ],
      gradient: "from-accent-500 to-accent-600"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@starca.com",
        "contact@starca.com",
        "support@starca.com"
      ],
      gradient: "from-warning-500 to-warning-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ],
      gradient: "from-trust-500 to-trust-600"
    }
  ];

  const services = [
    "Forensic Audit & Investigation",
    "Corporate Restructuring",
    "GST Advisory & Litigation",
    "Income Tax Advisory",
    "Company Formation",
    "Insolvency & Bankruptcy",
    "FEMA Compliance",
    "Business Valuation",
    "Other Services"
  ];

  const teamMembers = [
    { name: "CA Rajesh Kumar", designation: "Managing Partner", specialization: "Forensic Audit, Corporate Restructuring" },
    { name: "CS Priya Sharma", designation: "Partner - Corporate Law", specialization: "Company Law, FEMA Compliance" },
    { name: "CA Amit Gupta", designation: "Senior Partner - Tax", specialization: "GST, Income Tax, International Tax" },
    { name: "CA Neha Agarwal", designation: "Partner - Audit", specialization: "Statutory Audit, Internal Audit" }
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
                Contact STARCA
              </h1>
              <Sparkles className="w-8 h-8 text-warning-500 ml-4 animate-spin-slow" />
            </div>
            <p className="text-2xl md:text-3xl text-secondary-700 leading-relaxed mb-10 font-medium max-w-4xl mx-auto">
              Get in touch with our expert team for personalized financial and business advisory services. 
              We're here to help you navigate complex challenges and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton to="#contact-form" variant="primary" size="xl" glow={true}>
                <MessageCircle className="w-6 h-6 mr-2" />
                Start Conversation
              </CTAButton>
              <CTAButton href="tel:+011-XXXX-XXXX" variant="neon" size="xl" glow={true}>
                <Phone className="w-6 h-6 mr-2" />
                Call Now
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-secondary-800 via-primary-600 to-accent-600 bg-clip-text text-transparent mb-8">
              Get in Touch
            </h2>
            <p className="text-2xl text-secondary-700 max-w-3xl mx-auto font-medium">
              Multiple ways to reach us for consultations, support, and business inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group bg-glass-100 backdrop-blur-xl rounded-4xl p-8 shadow-glass hover:shadow-glass-lg transition-all duration-700 border border-white/20 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-20 h-20 bg-gradient-to-br ${info.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:shadow-glow-lg transition-all duration-500 animate-float`} style={{animationDelay: `${index * 0.3}s`}}>
                  <info.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-secondary-800 mb-6 group-hover:text-primary-600 transition-colors">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-secondary-700 font-medium">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-glass-100 backdrop-blur-xl rounded-4xl p-10 shadow-glass-lg border border-white/20">
              <h3 className="text-3xl font-black text-secondary-800 mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-secondary-700 mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-glass-50 backdrop-blur-xl font-medium"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary-700 mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-glass-50 backdrop-blur-xl font-medium"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-secondary-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-glass-50 backdrop-blur-xl font-medium"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary-700 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-glass-50 backdrop-blur-xl font-medium"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-3">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-glass-50 backdrop-blur-xl font-medium"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-3">
                    Service Required *
                  </label>
                  <select
                    required
                    className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-glass-50 backdrop-blur-xl font-medium"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-glass-50 backdrop-blur-xl font-medium"
                    placeholder="Describe your requirements or questions..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="w-5 h-5 text-primary-600 border-white/20 rounded focus:ring-primary-500 bg-glass-50"
                  />
                  <label htmlFor="privacy" className="ml-3 text-sm text-secondary-700 font-medium">
                    I agree to the <a href="#" className="text-primary-600 hover:text-primary-700 font-bold">Privacy Policy</a> and 
                    <a href="#" className="text-primary-600 hover:text-primary-700 ml-1 font-bold">Terms of Service</a>
                  </label>
                </div>

                <CTAButton
                  variant="gradient"
                  size="xl"
                  className="w-full justify-center font-black"
                  glow={true}
                >
                  <Send className="w-6 h-6 mr-2" />
                  Send Message
                </CTAButton>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-glass-100 backdrop-blur-xl rounded-4xl p-8 shadow-glass-lg border border-white/20">
                <h3 className="text-2xl font-black text-secondary-800 mb-6">Quick Contact Options</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+011-XXXX-XXXX"
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl hover:from-primary-100 hover:to-primary-200 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-secondary-800">Call Now</p>
                      <p className="text-sm text-secondary-600 font-medium">+011-XXXX-XXXX</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@starca.com"
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-accent-50 to-accent-100 rounded-2xl hover:from-accent-100 hover:to-accent-200 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-secondary-800">Email Us</p>
                      <p className="text-sm text-secondary-600 font-medium">info@starca.com</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-warning-50 to-warning-100 rounded-2xl hover:from-warning-100 hover:to-warning-200 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-warning-500 to-warning-600 rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-secondary-800">WhatsApp</p>
                      <p className="text-sm text-secondary-600 font-medium">+91-98XXX-XXXXX</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Schedule Meeting */}
              <div className="bg-glass-100 backdrop-blur-xl rounded-4xl p-8 shadow-glass-lg border border-white/20">
                <h3 className="text-2xl font-black text-secondary-800 mb-6">Schedule a Meeting</h3>
                <p className="text-secondary-700 mb-6 font-medium leading-relaxed">
                  Prefer a face-to-face consultation? Schedule a meeting with our experts 
                  at our Delhi office or request a virtual meeting.
                </p>
                <CTAButton variant="neon" size="lg" className="w-full justify-center font-black" glow={true}>
                  <Calendar className="w-6 h-6 mr-2" />
                  Book Appointment
                </CTAButton>
              </div>

              {/* Team Contact */}
              <div className="bg-glass-100 backdrop-blur-xl rounded-4xl p-8 shadow-glass-lg border border-white/20">
                <h3 className="text-2xl font-black text-secondary-800 mb-6">Direct Team Contact</h3>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-glass-200 to-glass-300 rounded-2xl hover:from-glass-300 hover:to-glass-400 transition-all duration-300">
                      <p className="font-black text-secondary-800">{member.name}</p>
                      <p className="text-sm text-primary-600 font-bold">{member.designation}</p>
                      <p className="text-xs text-secondary-600 font-medium">{member.specialization}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-secondary-800 mb-6">
              Visit Our Office
            </h2>
            <p className="text-2xl text-secondary-700 font-medium">
              Located in the heart of Delhi's business district for easy accessibility
            </p>
          </div>

          <div className="bg-glass-100 backdrop-blur-xl rounded-4xl p-10 shadow-glass-lg border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black text-secondary-800 mb-8">Office Location</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-glow">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-secondary-800">STARCA Chartered Accountants</p>
                      <p className="text-secondary-700 font-medium">123 Business Plaza, 5th Floor</p>
                      <p className="text-secondary-700 font-medium">Connaught Place, New Delhi - 110001</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-trust-500 to-trust-600 rounded-2xl flex items-center justify-center shadow-glow">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-secondary-700 font-medium">Easily accessible by Metro (Rajiv Chowk Station)</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-glow">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-secondary-700 font-medium">Ample parking available in the building</p>
                  </div>
                </div>
                <div className="mt-8">
                  <CTAButton variant="gradient" size="lg" glow={true}>
                    <Globe className="w-6 h-6 mr-2" />
                    Get Directions
                  </CTAButton>
                </div>
              </div>
              <div className="bg-gradient-to-br from-glass-200 to-glass-300 rounded-3xl h-80 flex items-center justify-center border border-white/20">
                <p className="text-secondary-600 font-bold text-xl">Interactive Map Placeholder</p>
                {/* In a real implementation, you would integrate Google Maps or similar */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-primary-600 via-accent-600 to-warning-600 rounded-4xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-animated-gradient bg-400% animate-gradient opacity-30"></div>
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full animate-float blur-sm"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/15 rounded-2xl animate-float-delayed blur-sm"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black mb-10">
                Ready to Get Started?
              </h2>
              <p className="text-2xl md:text-3xl mb-12 opacity-95 max-w-5xl mx-auto leading-relaxed font-medium">
                Don't let complex financial and legal challenges hold your business back. 
                Contact STARCA today and take the first step towards expert solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <CTAButton 
                  href="tel:+011-XXXX-XXXX" 
                  variant="secondary" 
                  size="xl"
                  className="bg-white text-primary-700 hover:bg-gray-100 shadow-glow hover:shadow-glow-lg font-black text-xl"
                  glow={true}
                >
                  Call Now: +011-XXXX-XXXX
                </CTAButton>
                <CTAButton 
                  href="mailto:info@starca.com" 
                  variant="outline" 
                  size="xl"
                  className="bg-white text-primary-700 hover:bg-gray-100 shadow-glow hover:shadow-glow-lg font-black text-xl"

                >
                  Email: info@starca.com
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Award,
  Shield,
  Users
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">STARCA</h3>
                <p className="text-gray-400 text-sm">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premier CA firm in Delhi with 15+ years of excellence in accounting, tax advisory, 
              audit services, and business consulting. Your trusted financial partner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-primary-400 transition-colors">Our Team</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-primary-400 transition-colors">Resources</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-primary-400 transition-colors">News & Updates</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Core Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/forensic-audit" className="text-gray-300 hover:text-primary-400 transition-colors">Forensic Audit</Link></li>
              <li><Link to="/services/gst-advisory" className="text-gray-300 hover:text-primary-400 transition-colors">GST Advisory</Link></li>
              <li><Link to="/services/income-tax-advisory" className="text-gray-300 hover:text-primary-400 transition-colors">Income Tax</Link></li>
              <li><Link to="/services/company-formation" className="text-gray-300 hover:text-primary-400 transition-colors">Company Formation</Link></li>
              <li><Link to="/services/corporate-restructuring" className="text-gray-300 hover:text-primary-400 transition-colors">Restructuring</Link></li>
              <li><Link to="/services/insolvency-bankruptcy" className="text-gray-300 hover:text-primary-400 transition-colors">IBC Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Business Plaza</p>
                  <p className="text-gray-300">Connaught Place</p>
                  <p className="text-gray-300">New Delhi - 110001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <p className="text-gray-300">+91-11-XXXX-XXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <p className="text-gray-300">info@starca.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary-400 mt-1" />
                <div>
                  <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary-400" />
                <span className="text-sm text-gray-300">ICAI Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary-400" />
                <span className="text-sm text-gray-300">ICSI Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary-400" />
                <span className="text-sm text-gray-300">500+ Clients</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              Trusted by businesses across Delhi NCR since 2008
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>&copy; 2024 STARCA Chartered Accountants. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
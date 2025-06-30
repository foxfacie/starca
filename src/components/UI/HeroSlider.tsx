import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
}

const slides: Slide[] = [
  {
    title: "Forensic Audit & Fraud Investigation",
    subtitle: "Protecting Your Business Integrity",
    description: "Expert forensic accounting services to detect, investigate, and prevent financial fraud. Our certified team ensures thorough examination and reliable evidence collection.",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Schedule Investigation"
  },
  {
    title: "GST & Tax Compliance Experts",
    subtitle: "Navigate Tax Complexities with Confidence",
    description: "Comprehensive GST advisory, compliance, and litigation support. Stay compliant and optimize your tax strategy with our expert guidance.",
    image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Get Tax Advisory"
  },
  {
    title: "Corporate Restructuring & M&A",
    subtitle: "Strategic Business Transformation",
    description: "Expert advisory for mergers, acquisitions, and corporate restructuring. Optimize your business structure for growth and efficiency.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Explore Restructuring"
  },
  {
    title: "ICAI & ICSI Registered Professionals",
    subtitle: "15+ Years of Trusted Excellence",
    description: "Registered with premier accounting bodies, serving 500+ clients across Delhi NCR with comprehensive financial and legal solutions.",
    image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Meet Our Team"
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-animated-gradient bg-400% animate-gradient opacity-10"></div>
      
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/90 via-primary-800/80 to-accent-900/70"></div>
        </div>
      ))}

      {/* Floating Animated Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent-400/30 to-warning-500/30 rounded-full animate-float "></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-primary-400/40 to-accent-500/40 rounded-2xl animate-float-delayed "></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-warning-400/30 to-accent-600/30 rounded-xl animate-float-slow "></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-primary-500/30 to-warning-400/30 rounded-full animate-blob "></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                index === currentSlide 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-4xl p-8 md:p-12 border border-white/10 shadow-glass-lg">
                <h2 className="text-xl md:text-2xl text-accent-300 font-bold mb-6 animate-slide-in">
                  {slide.subtitle}
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight animate-slide-up">
                  <span className="bg-gradient-to-r from-white via-accent-200 to-warning-300 bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed animate-fade-in font-medium">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
                  <CTAButton 
                    to="/contact" 
                    variant="primary" 
                    size="xl" 
                    glow={true}
                    className="text-xl font-bold"
                  >
                    {slide.cta}
                  </CTAButton>
                  <CTAButton 
                    to="/team" 
                    variant="outline" 
                    size="xl" 
                    className="bg-white text-primary-700 hover:bg-gray-100 shadow-glow hover:shadow-glow-lg font-black text-xl"
                  >
                    View All Services
                  </CTAButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'bg-white scale-125 shadow-glow animate-pulse'
                : 'bg-white/50 hover:bg-white/70 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Enhanced Floating Context */}
      <div className="absolute bottom-20 right-8 bg-white/10 backdrop-blur-2xl rounded-3xl p-6 text-white animate-float border border-white/20 shadow-glass">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-accent-400 rounded-full animate-pulse"></div>
          <div>
            <p className="text-lg font-bold">📍 Serving Delhi NCR</p>
            <p className="text-sm opacity-90">Your trusted CA partner since 2008</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
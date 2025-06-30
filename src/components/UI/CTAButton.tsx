import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  icon?: boolean;
  glow?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  to,
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon = true,
  glow = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 group relative overflow-hidden transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: `bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl focus:ring-primary-500 ${glow ? 'hover:shadow-glow' : ''}`,
    secondary: `bg-gradient-to-r from-accent-600 to-accent-700 text-white hover:from-accent-700 hover:to-accent-800 shadow-lg hover:shadow-xl focus:ring-accent-500 ${glow ? 'hover:shadow-glow-orange' : ''}`,
    outline: `border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg focus:ring-primary-500`,
    gradient: `bg-gradient-to-r from-primary-500 via-accent-500 to-warning-500 text-white shadow-lg hover:shadow-xl focus:ring-primary-500 hover:from-primary-600 hover:via-accent-600 hover:to-warning-600`,
    neon: `bg-gradient-to-r from-warning-500 to-warning-600 text-secondary-900 hover:from-warning-600 hover:to-warning-700 shadow-lg hover:shadow-xl focus:ring-warning-500 font-bold ${glow ? 'hover:shadow-glow-yellow' : ''}`
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center">
        {variant === 'neon' && <Sparkles className="w-4 h-4 mr-2" />}
        {children}
        {icon && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default CTAButton;
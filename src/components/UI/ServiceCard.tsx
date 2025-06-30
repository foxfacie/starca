import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  link,
  features = []
}) => {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 hover:border-primary-200">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
          <Icon className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      <Link
        to={link}
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group/link"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
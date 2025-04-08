
import React from 'react';
import { Briefcase, BarChart3, Award, FileCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    icon: <Briefcase className="w-10 h-10 text-phatsimo-blue mb-4" />,
    title: "Project and Construction Management",
    description: "Expert project management to optimize operations and deliver successful construction projects.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-phatsimo-blue mb-4" />,
    title: "Civil and Structural Engineering",
    description: "Comprehensive civil and structural engineering solutions for sustainable infrastructure development.",
  },
  {
    icon: <Award className="w-10 h-10 text-phatsimo-blue mb-4" />,
    title: "Transportation and Traffic Engineering",
    description: "Innovative transportation solutions to improve mobility and traffic management systems.",
  },
  {
    icon: <FileCheck className="w-10 h-10 text-phatsimo-blue mb-4" />,
    title: "Electrical and Informatics Engineering",
    description: "Advanced electrical systems and informatics solutions to power your projects.",
  },
  {
    icon: <CheckCircle2 className="w-10 h-10 text-phatsimo-blue mb-4" />,
    title: "Geomatics Engineering",
    description: "Precision geomatics engineering services utilizing the latest surveying technology.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide comprehensive engineering solutions tailored to your specific needs,
            helping you achieve sustainable growth and success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div key={index} className="service-card bg-white">
              {service.icon}
              <h3 className="text-xl font-semibold mb-3 text-phatsimo-blue">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to="/services" 
                className="text-phatsimo-blue font-medium hover:text-phatsimo-red transition-colors inline-flex items-center"
              >
                Learn more
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-1"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

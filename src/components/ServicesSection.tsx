
import React from 'react';
import { Briefcase, BarChart3, LineChart, Search, Users, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    icon: <Briefcase className="w-10 h-10 text-phatsimo-blue mb-4" />,
    title: "Business Consulting",
    description: "Expert guidance to optimize operations and drive business growth through strategic insights.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-phatsimo-blue mb-4" />,
    title: "Financial Advisory",
    description: "Comprehensive financial solutions to improve performance and achieve long-term objectives.",
  },
  {
    icon: <LineChart className="w-10 h-10 text-phatsimo-blue mb-4" />,
    title: "Strategic Planning",
    description: "Develop actionable strategic plans that align with your organizational goals and vision.",
  },
  {
    icon: <Search className="w-10 h-10 text-phatsimo-blue mb-4" />,
    title: "Market Research",
    description: "In-depth market analysis to identify opportunities and inform business decisions.",
  },
  {
    icon: <Users className="w-10 h-10 text-phatsimo-blue mb-4" />,
    title: "Talent Management",
    description: "Effective strategies for attracting, developing, and retaining top talent in your organization.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-phatsimo-blue mb-4" />,
    title: "Risk Management",
    description: "Identify and mitigate potential risks to protect your business and ensure sustainability.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide comprehensive business solutions tailored to your specific needs,
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
                Learn more <ChevronRightIcon className="ml-1 w-4 h-4" />
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

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default ServicesSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ClientsLogos from './ClientsLogos';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-phatsimo-blue to-corporate-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Partner with Phatsimo Group for innovative solutions that drive growth, 
            efficiency and sustainable success for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-phatsimo-blue px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center"
            >
              Get Started <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-6 py-[10px] rounded-md hover:bg-white/10 transition-all duration-300 font-medium"
            >
              Learn More
            </Link>
            <Link
              to="/project"
              className="bg-white text-phatsimo-blue px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center"
            >
              Adding project <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
          <ClientsLogos/>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-phatsimo-blue to-corporate-800 text-white overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 w-96 h-96 rounded-full bg-phatsimo-gold/10 blur-3xl"></div>
        <div className="absolute -left-40 bottom-20 w-96 h-96 rounded-full bg-phatsimo-red/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Businesses for a Better Future
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Phatsimo Group delivers innovative business solutions that drive growth, 
              efficiency and sustainable success for organizations across South Africa.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="bg-white text-phatsimo-blue px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Started
              </Link>
              <Link to="/services" className="flex items-center border-2 border-white text-white px-6 py-[10px] rounded-md hover:bg-white/10 transition-all duration-300 font-medium">
                Our Services 
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
            <div className="pt-8">
              <p className="text-gray-300 mb-3">Trusted by leading organizations</p>
              <div className="flex flex-wrap items-center gap-8">
                <Link to="/project/company-a" className="bg-white/20 px-4 py-2 rounded-md text-white font-semibold hover:bg-white/40 transition-colors">
                  Company A
                </Link>
                <Link to="/project/company-b" className="bg-white/20 px-4 py-2 rounded-md text-white font-semibold hover:bg-white/40 transition-colors">
                  Company B
                </Link>
                <Link to="/project/company-c" className="bg-white/20 px-4 py-2 rounded-md text-white font-semibold hover:bg-white/40 transition-colors">
                  Company C
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              {/* Main image container with fancy border */}
              <div className="rounded-lg overflow-hidden border-4 border-white/20 shadow-xl relative z-10">
                <div className="aspect-[4/3] bg-gradient-to-br from-phatsimo-blue/80 to-phatsimo-blue flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-2xl font-bold mb-4">Business Excellence</h3>
                    <p className="text-gray-200">Delivering tailored solutions for sustainable growth and success</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-phatsimo-gold/50 rounded-lg z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-phatsimo-red/50 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

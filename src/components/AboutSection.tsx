
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                <div className="h-full flex items-center justify-center bg-phatsimo-blue/5 p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-phatsimo-blue mb-3">Our Purpose</h3>
                    <p className="text-gray-700">Empowering businesses to achieve sustainable excellence</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-phatsimo-blue/20 rounded-lg z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-phatsimo-red/20 rounded-lg z-0"></div>
          </div>
          
          {/* Right column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-phatsimo-blue mb-6">
              About Phatsimo Group
            </h2>
            
            <p className="text-gray-700 mb-6">
              Phatsimo Group is a leading South African business consulting firm with a mission to help organizations 
              unlock their full potential. With decades of combined experience, our team of experts delivers 
              tailored solutions that drive growth and prosperity.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="text-phatsimo-blue mr-3 mt-1 shrink-0" size={20} />
                <p className="text-gray-700">
                  <span className="font-semibold">Expert Team</span> - Seasoned professionals with extensive industry knowledge
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-phatsimo-blue mr-3 mt-1 shrink-0" size={20} />
                <p className="text-gray-700">
                  <span className="font-semibold">Proven Results</span> - Track record of successful business transformations
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-phatsimo-blue mr-3 mt-1 shrink-0" size={20} />
                <p className="text-gray-700">
                  <span className="font-semibold">Client-Focused</span> - Customized solutions that address your specific challenges
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-phatsimo-blue mr-3 mt-1 shrink-0" size={20} />
                <p className="text-gray-700">
                  <span className="font-semibold">Innovative Approach</span> - Embracing the latest trends and technologies
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

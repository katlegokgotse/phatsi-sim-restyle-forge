
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, Users, Clock, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-phatsimo-blue text-white pt-28 pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Phatsimo Group</h1>
              <p className="text-xl text-gray-200">
                We're a team of dedicated professionals committed to helping businesses
                thrive in today's challenging environment.
              </p>
            </div>
          </div>
        </div>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-phatsimo-blue mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To empower organizations with innovative solutions and expert guidance,
                  enabling them to achieve sustainable growth and excellence in their industries.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-phatsimo-blue mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To be the trusted partner of choice for businesses seeking transformative
                  strategies that drive success in an ever-evolving global marketplace.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Company Story */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-phatsimo-blue mb-6 text-center">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2008, Phatsimo Group began with a vision to transform how businesses
                operate in South Africa. Our founder, recognizing the need for strategic consulting
                services that understand the unique challenges of the African market, assembled a
                team of experts with diverse backgrounds and extensive experience.
              </p>
              <p className="text-gray-700 mb-6">
                Over the years, we've grown from a small consultancy to a comprehensive business
                solutions provider, serving clients across multiple industries and expanding our
                reach throughout the continent and beyond.
              </p>
              <p className="text-gray-700">
                Today, Phatsimo Group stands as a beacon of excellence, known for our innovative
                approaches, client-centered focus, and measurable results. We continue to evolve
                with the changing business landscape while staying true to our core values of
                integrity, excellence, and partnership.
              </p>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-phatsimo-blue mb-12 text-center">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-phatsimo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-phatsimo-blue" size={28} />
                </div>
                <h3 className="text-xl font-bold text-phatsimo-blue mb-3">Integrity</h3>
                <p className="text-gray-700">
                  We uphold the highest ethical standards in all our dealings, ensuring transparency
                  and honesty with our clients and partners.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-phatsimo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-phatsimo-blue" size={28} />
                </div>
                <h3 className="text-xl font-bold text-phatsimo-blue mb-3">Partnership</h3>
                <p className="text-gray-700">
                  We build long-lasting relationships with our clients, working collaboratively to
                  achieve shared goals and mutual success.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-phatsimo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-phatsimo-blue" size={28} />
                </div>
                <h3 className="text-xl font-bold text-phatsimo-blue mb-3">Excellence</h3>
                <p className="text-gray-700">
                  We strive for excellence in all our endeavors, delivering high-quality solutions
                  and exceeding client expectations.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-phatsimo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-phatsimo-blue" size={28} />
                </div>
                <h3 className="text-xl font-bold text-phatsimo-blue mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We embrace innovation and creative thinking, staying ahead of industry trends
                  to provide cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

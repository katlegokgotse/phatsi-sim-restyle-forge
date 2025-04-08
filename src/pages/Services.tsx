
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CtaSection from '../components/CtaSection';
import { Briefcase, CheckCircle2, Award, Users, BarChart, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParallaxSlideshow from '../components/ParallaxSlideshow';

const serviceItems = [
  {
    icon: <Briefcase className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Project and Construction Management",
    description: "Comprehensive project and construction management services to optimize operations, improve efficiency, and drive sustainable growth for your organization.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Civil and Structural Engineering",
    description: "Expert civil and structural engineering solutions designed to meet your specific requirements with precision and excellence.",
  },
  {
    icon: <Award className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Transportation and Traffic Engineering",
    description: "Specialized transportation and traffic engineering services providing innovative solutions for modern infrastructure challenges.",
  },
  {
    icon: <FileCheck className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Electrical and Informatics Engineering",
    description: "Advanced electrical and informatics engineering solutions leveraging cutting-edge technology to power your projects.",
  },
  {
    icon: <CheckCircle2 className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Geomatics Engineering",
    description: "Precise geomatics engineering services utilizing the latest surveying technology and mapping solutions for accurate spatial data.",
  }
];

const coreValues = [
  { title: "Quality", description: "We never compromise when it comes to quality. We have a team of quality assurance team that make sure that projects deliverables have been met." },
  { title: "Integrity", description: "We uphold the highest standards of integrity in all our business dealings, ensuring transparency and ethical conduct." },
  { title: "Passion", description: "We are passionate about our work and committed to delivering exceptional results for our clients." },
  { title: "Team Work", description: "Not only do we work as a team within the organization but we also have high collaboration standards with all the clients we work with." },
  { title: "Excellence", description: "We strive for excellence in everything we do, constantly pushing boundaries to achieve the best outcomes." },
  { title: "Accuracy", description: "Precision and accuracy are paramount in our engineering solutions, ensuring reliable and dependable results." },
];

const statsItems = [
  {
    number: "750+",
    text: "Projects Done",
    description: "Phatsimo Management Consultants Pty (Ltd) has over 750+ team of experts from Civil engineers all the way to IT Specialist s",
  },
  {
    number: "8000+",
    text: "Happy Clients",
    description: "Phatsimo Management Consultants Pty (Ltd) has done over 8000 projects since inception",
  },
  {
    number: "750+",
    text: "Team Experts",
    description: "From banking and insurance to wealth the management and securitie on there",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-phatsimo-blue text-white pt-28 pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-200">
                Services We render. Phatsimo Management Consultants Pty (Ltd) was founded in 2008. 
                The leadership saw an opportunity to develop the organization in the built environment.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-phatsimo-blue mr-3" />
                  <h3 className="text-xl font-semibold">Realize Profits</h3>
                </div>
                <p className="text-gray-600">
                  On each and every project we work on, we insure that our clients save by making sure that unnecessary expenses are eliminated.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <FileCheck className="w-8 h-8 text-phatsimo-blue mr-3" />
                  <h3 className="text-xl font-semibold">Tax Compliant</h3>
                </div>
                <p className="text-gray-600">
                  Phatsimo Management Consultants Pty (Ltd) is tax complaint. We have a team of professional accountants who look after our books.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="section-title">Our Mission</h2>
              <p className="text-lg text-gray-700 mt-6">
                Our mission is to provide a quality project, construction management and engineering solutions 
                to the private and public sector by being a value-adding supplier that follows our industry best practice,
                using the latest technology and training and developing our employees to the benefit of the communities 
                who are the final recipients of our services.
              </p>
              <div className="mt-8">
                <span className="text-lg font-semibold text-phatsimo-blue">
                  Successfully Providing Engineering Solution for 23 years
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Slideshow */}
        <ParallaxSlideshow />

        {/* Core Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="section-title">Core Values</h2>
              <p className="section-subtitle">
                Here at Phatsimo Management Consultants Pty (Ltd) we believe that an organization is shaped through its values.
                Each and every project we embark on we ensure that the team in charge of that particular project is aware of the organization's values.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {coreValues.map((value, index) => (
                <div key={index} className="flex flex-col items-center p-4 text-center">
                  <span className="w-16 h-16 bg-phatsimo-blue/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-phatsimo-blue">{value.title.charAt(0)}</span>
                  </span>
                  <h3 className="text-xl font-semibold text-phatsimo-blue mb-2">{value.title}</h3>
                </div>
              ))}
            </div>
            
            {/* Values Detail */}
            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-phatsimo-blue mb-6 text-center">Our Values In Detail</h3>
              <p className="text-center mb-8">
                Phatsimo Management Consultants Pty (Ltd) has been consistent since inception
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold text-phatsimo-blue mb-4">Quality</h4>
                  <p className="text-gray-600">
                    We never compromise when it comes to quality. We have a team of quality assurance team that make sure that projects deliverables have been met.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold text-phatsimo-blue mb-4">Team Work</h4>
                  <p className="text-gray-600">
                    Not only do we work as a team within the organization but we also have high collaboration standards with all the clients we work with.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Link to="/contact" className="btn-primary">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Services</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceItems.map((service, index) => (
                <div key={index} className="service-card">
                  {service.icon}
                  <h3 className="text-2xl font-semibold mb-3 text-phatsimo-blue">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to="/contact" 
                    className="text-phatsimo-blue font-medium hover:text-phatsimo-red transition-colors inline-flex items-center"
                  >
                    Read more
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
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="section-title">We are the best</h2>
              <p className="section-subtitle">
                Phatsimo Management Consultants Pty (Ltd) has been giving the best of work since inception
              </p>
              <p className="mt-4 text-xl font-medium">
                Excellence Record
              </p>
              <p className="text-gray-600">
                We are a very organized company and our record says exactly that.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {statsItems.map((stat, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <h3 className="text-4xl font-bold text-phatsimo-blue mb-2">{stat.number}</h3>
                  <h4 className="text-xl font-semibold mb-4">{stat.text}</h4>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Clients</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="flex justify-center">
                  <div className="bg-gray-100 w-32 h-32 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 font-medium">Client Logo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Free Quote</h2>
            <p className="text-lg text-gray-600 mb-8">
              Complete the contact form below and one of our friendly representatives will be InTouch with you shortly
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, Users, Clock, Globe, Building, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: "TITUS MODINGWANE",
      position: "DIRECTOR",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "ABRAM MODINGWANE",
      position: "DIRECTOR",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Mrs Pearl",
      position: "DIRECTOR",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    }
  ];

  const testimonials = [
    {
      quote: "This serves to confirm that Aganang Consulting Engineers has been appointed by Ehlanzeni District Municipality on Tender No: EDM/17/2018-19 to review a study on the District Integrated Transport Plan. \"The performance of the consulting firm is satisfactory.\"",
      name: "F.S SIBOZA",
      position: "MUNICIPAL MANAGER"
    },
    {
      quote: "I hereby confirm that Aganang Consulting Engineers has rendered a professional service on all facets of the project as per the agreed teams and conditions of the project thereof and with in the agreed budget and within the specified time frames.",
      name: "AMOS KHUMALO",
      position: "DIRECTOR"
    },
    {
      quote: "The project was done in a professional and diligent manner. Aganang Consulting Engineers prides themselves in the ability to pay attention to detail as well as relentless determination to give quality services on a timely fashion and within the agreed upon terms.",
      name: "O.A BAIKGAKI",
      position: "DIRECTOR"
    },
    {
      quote: "Aganang Consulting Engineers have been performing their work in a professional and reliable manner all the projects we have embark on with Aganang Consulting Engineers has always been completed to perfection within agreed upon terms and conditions.",
      name: "M.K.E MASIPA",
      position: "MANAGER"
    }
  ];

  const services = [
    {
      title: "Project and Construction Management",
      icon: Building
    },
    {
      title: "Civil and Structural Engineering",
      icon: Briefcase
    },
    {
      title: "Transportation and Traffic Engineering",
      icon: Globe
    },
    {
      title: "Electrical and Informatics Engineering",
      icon: CheckCircle2
    },
    {
      title: "Geomatics Engineering",
      icon: Users
    }
  ];

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
                Successfully Providing Engineering Solutions for 25 years
              </p>
            </div>
          </div>
        </div>
        
        {/* Company Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-phatsimo-blue mb-6">Phatsimo Management Consultants Pty (Ltd)</h2>
              <p className="text-gray-700 mb-6">
                As a way to penetrate new foreign and local markets Phatsimo Management Consultants PTY (Ltd) 
                felt it prudent and recognised a strong business case to build on existing capacity and a 
                revered reputation that Aganang Consulting Engineers cc, already possessed. This essentially 
                means despite being a relatively new entity Phatsimo Management Consultants PTY (Ltd) would 
                leverage on the staff of Aganang Consulting Engineers (Technical capacity) as well as its 
                history, by way of previous projects successfully carried out.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-phatsimo-blue mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  Provide quality precision engineering and management solutions in the built and transport environment.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-phatsimo-blue mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  Our mission is to provide a quality project, construction management and engineering solutions to the 
                  private and public sector by being a value-adding supplier that follows our industry best practice, 
                  using the latest technology and training and developing our employees to the benefit of the 
                  communities who are the final recipients of our services.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-phatsimo-blue mb-4">Our Value</h2>
                <p className="text-gray-700">
                  The company is geared towards developmental impact approach in implementation of projects thereby 
                  bridging the gap between technical and social aspects in every project. We have a team of Quality 
                  Assurance that makes sure that project deliverables have been met.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-phatsimo-blue mb-12 text-center">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-phatsimo-blue/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="text-phatsimo-blue" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-phatsimo-blue mb-3">{service.title}</h3>
                  <Link to="/services" className="text-phatsimo-blue flex items-center gap-1 mt-4 hover:underline">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats */}
        <section className="py-16 bg-phatsimo-blue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">We are the best</h2>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              Phatsimo Management Consultants Pty (Ltd) has been giving the best of work since inception
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">350+</div>
                <p className="text-lg">Projects Done</p>
                <p className="text-sm opacity-80 mt-2">From banking and insurance to wealth management and securities</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <p className="text-lg">Happy Clients</p>
                <p className="text-sm opacity-80 mt-2">Phatsimo Management Consultants Pty (Ltd) has done over 8000 projects since inception</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">750+</div>
                <p className="text-lg">Team Experts</p>
                <p className="text-sm opacity-80 mt-2">Phatsimo Management Consultants Pty (Ltd) has over 750+ team of experts from Civil engineers all the way to IT Specialists</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
                <p className="text-lg">Years Experience</p>
                <p className="text-sm opacity-80 mt-2">Excellence Record - We are a very organized company and our record says exactly that</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-phatsimo-blue mb-12 text-center">Our Team</h2>
            <p className="text-center mb-12 text-gray-700 max-w-2xl mx-auto">Here is Our Team</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-phatsimo-blue">{member.name}</h3>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-phatsimo-blue mb-6 text-center">Client Testimonials</h2>
            <p className="text-center mb-12 text-gray-700">What Our Clients Say About Us</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-bold text-phatsimo-blue">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-phatsimo-blue">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Get Free Quote</h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Complete the contact form below and one of our friendly representatives will be InTouch with you shortly
            </p>
            <Button asChild className="bg-white text-phatsimo-blue hover:bg-gray-100 px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CtaSection from '../components/CtaSection';
import { Briefcase, BarChart3, LineChart, Search, Users, ShieldCheck, Lightbulb, Layers, Globe, FileSpreadsheet, PieChart, MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    icon: <Briefcase className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Business Consulting",
    description: "Comprehensive business consulting services to optimize operations, improve efficiency, and drive sustainable growth for your organization. Our expert consultants provide tailored strategies based on in-depth analysis of your specific challenges and opportunities.",
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Financial Advisory",
    description: "Strategic financial guidance to improve performance, maximize profitability, and achieve long-term financial objectives. Our advisory services include financial planning, risk assessment, investment strategies, and capital management solutions.",
  },
  {
    icon: <LineChart className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Strategic Planning",
    description: "Collaborative development of actionable strategic plans that align with your organizational goals and vision. We help you identify market opportunities, navigate challenges, and create roadmaps for sustainable growth and competitive advantage.",
  },
  {
    icon: <Search className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Market Research",
    description: "In-depth market analysis to identify opportunities, understand customer needs, and inform business decisions. Our comprehensive research methodologies provide actionable insights that drive strategic planning and marketing effectiveness.",
  },
  {
    icon: <Users className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Talent Management",
    description: "Effective strategies for attracting, developing, and retaining top talent in your organization. We help you build strong teams through improved recruitment processes, performance management systems, and employee engagement initiatives.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies to protect your business and ensure sustainability. We identify potential vulnerabilities, develop risk management frameworks, and implement protocols to safeguard your operations.",
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Innovation Consulting",
    description: "Foster a culture of innovation and develop new products, services, and business models that keep you ahead of the competition. Our innovation frameworks help transform ideas into practical, market-ready solutions.",
  },
  {
    icon: <Layers className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Process Optimization",
    description: "Streamline your business processes to eliminate inefficiencies, reduce costs, and improve quality. We analyze your current workflows and implement proven methodologies to enhance operational effectiveness.",
  },
  {
    icon: <Globe className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Market Expansion",
    description: "Strategic guidance for entering new markets and expanding your business reach. Our market expansion services include location analysis, competitive assessment, regulatory compliance, and go-to-market strategy development.",
  },
  {
    icon: <FileSpreadsheet className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Compliance & Governance",
    description: "Ensure adherence to regulatory requirements and establish robust governance structures. We help you navigate complex regulatory environments and implement best practices in corporate governance.",
  },
  {
    icon: <PieChart className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights that drive better decision-making. Our analytics services help you harness the power of your business data to identify trends, opportunities, and areas for improvement.",
  },
  {
    icon: <MonitorSmartphone className="w-12 h-12 text-phatsimo-blue mb-4" />,
    title: "Digital Transformation",
    description: "Guide your organization through digital evolution with strategies that leverage technology to improve operations, customer experiences, and business models. We help you navigate the digital landscape and implement solutions that drive growth.",
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
                Comprehensive business solutions tailored to your specific needs,
                helping you achieve sustainable growth and success.
              </p>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceItems.map((service, index) => (
                <div key={index} className="service-card bg-white">
                  {service.icon}
                  <h3 className="text-2xl font-semibold mb-3 text-phatsimo-blue">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to="/contact" 
                    className="text-phatsimo-blue font-medium hover:text-phatsimo-red transition-colors inline-flex items-center"
                  >
                    Request service
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
        
        {/* Approach Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="section-title">Our Approach</h2>
              <p className="text-gray-700">
                We follow a proven methodology to deliver exceptional results for our clients.
                Our structured yet flexible approach ensures that we address your unique needs
                while maintaining the highest standards of quality and effectiveness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 relative">
                <div className="w-10 h-10 bg-phatsimo-blue text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-phatsimo-blue">Discover</h3>
                <p className="text-gray-600">
                  We begin with a thorough assessment of your business, identifying challenges,
                  opportunities, and key objectives.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 relative">
                <div className="w-10 h-10 bg-phatsimo-blue text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-phatsimo-blue">Analyze</h3>
                <p className="text-gray-600">
                  Our experts analyze the gathered information, leveraging industry insights and
                  best practices to develop tailored solutions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 relative">
                <div className="w-10 h-10 bg-phatsimo-blue text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-phatsimo-blue">Implement</h3>
                <p className="text-gray-600">
                  We work with you to implement strategies and solutions, providing guidance and
                  support throughout the process.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 relative">
                <div className="w-10 h-10 bg-phatsimo-blue text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3 text-phatsimo-blue">Optimize</h3>
                <p className="text-gray-600">
                  We continuously monitor progress, measure results, and refine strategies to
                  ensure long-term success and sustainability.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-phatsimo-blue text-white pt-28 pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-200">
                We're here to answer your questions and discuss how we can help your business thrive.
                Reach out to our team today.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Form Section */}
        <ContactSection />
        
        {/* Office Locations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Offices</h2>
              <p className="section-subtitle">
                Visit us at one of our convenient locations across South Africa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-phatsimo-blue mb-3">Johannesburg</h3>
                <p className="text-gray-700 mb-4">
                  123 Business Park<br />
                  Sandton<br />
                  Johannesburg, 2196<br />
                  South Africa
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +27 11 234 5678<br />
                  <strong>Email:</strong> jhb@phatsimogroup.co.za
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-phatsimo-blue mb-3">Cape Town</h3>
                <p className="text-gray-700 mb-4">
                  456 Waterfront Drive<br />
                  V&A Waterfront<br />
                  Cape Town, 8001<br />
                  South Africa
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +27 21 345 6789<br />
                  <strong>Email:</strong> cpt@phatsimogroup.co.za
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-phatsimo-blue mb-3">Durban</h3>
                <p className="text-gray-700 mb-4">
                  789 Umhlanga Rocks Drive<br />
                  Umhlanga<br />
                  Durban, 4320<br />
                  South Africa
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +27 31 456 7890<br />
                  <strong>Email:</strong> dbn@phatsimogroup.co.za
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Find answers to common questions about our services and how we work with clients.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-phatsimo-blue mb-2">How does the consultation process work?</h3>
                  <p className="text-gray-700">
                    Our consultation process begins with an initial meeting to understand your needs and objectives. 
                    We then develop a customized proposal outlining our recommended approach, timeline, and investment. 
                    Upon approval, we begin our structured methodology to deliver results.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-phatsimo-blue mb-2">What industries do you specialize in?</h3>
                  <p className="text-gray-700">
                    We have extensive experience across multiple industries, including manufacturing, financial services, 
                    healthcare, retail, technology, and public sector. Our diverse team brings specialized knowledge to 
                    address industry-specific challenges.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-phatsimo-blue mb-2">How long do typical projects take?</h3>
                  <p className="text-gray-700">
                    Project timelines vary depending on scope, complexity, and your organization's needs. 
                    Some focused initiatives may be completed within weeks, while comprehensive transformations 
                    might span several months. We always provide clear timelines during our proposal stage.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-phatsimo-blue mb-2">Do you work with small businesses or only large corporations?</h3>
                  <p className="text-gray-700">
                    We work with organizations of all sizes, from startups and SMEs to large corporations. 
                    Our services are scalable and tailored to meet the specific needs and budget considerations 
                    of each client, regardless of their size.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

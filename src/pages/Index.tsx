
import React from 'react';
import Navbar from '../components/Navbar';
import ParallaxHeaderSlideshow from '../components/ParallaxHeaderSlideshow';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ImageSlideshow from '../components/ImageSlideshow';
import ContactSection from '../components/ContactSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <ParallaxHeaderSlideshow />
        <ServicesSection />
        <AboutSection />
        <StatsSection />
        <ImageSlideshow />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

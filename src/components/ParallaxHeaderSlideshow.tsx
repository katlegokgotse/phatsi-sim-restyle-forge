import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const slides = [
  {
    id: 1,
    title: "Transforming Businesses for a Better Future",
    description: "Phatsimo Group delivers innovative business solutions that drive growth, efficiency and sustainable success for organizations across South Africa.",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    bgColor: "from-phatsimo-blue to-corporate-800"
  },
  {
    id: 2,
    title: "Excellence in Engineering",
    description: "With over 25 years of experience, we provide top-tier engineering solutions that meet and exceed client expectations.",
    bgImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    bgColor: "from-phatsimo-red to-phatsimo-blue"
  },
  {
    id: 3,
    title: "Building the Future Together",
    description: "Through innovative solutions and strategic partnerships, we're helping to build a more sustainable and connected future.",
    bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    bgColor: "from-phatsimo-gold to-phatsimo-red"
  }
];

const ParallaxHeaderSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY * 0.4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (!isAnimating) {
        goToNextSlide();
      }
    }, 6000);

    return () => clearInterval(slideInterval);
  }, [currentSlide, isAnimating]);

  const goToNextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 750);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 750);
  };

  return (
    <div className="relative text-white overflow-hidden pt-16 pb-16 md:pt-24 md:pb-16">
      {/* Background slides with parallax effect */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-gradient-to-r ${slide.bgColor}
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              transform: `translateY(${scrollPosition}px)`,
              opacity: 0.3,
              transition: 'transform 0.3s ease-out'
            }}
          />
          
          {/* Abstract shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-40 top-20 w-96 h-96 rounded-full bg-phatsimo-gold/10 blur-3xl"></div>
            <div className="absolute -left-40 bottom-20 w-96 h-96 rounded-full bg-phatsimo-red/10 blur-3xl"></div>
          </div>
        </div>
      ))}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="min-h-[70vh] md:min-h-[80vh] flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content slides with animations */}
            <div className="space-y-6 relative h-full">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute w-full transition-all duration-700 ease-in-out 
                    ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {slide.description}
                  </p>
                </div>
              ))}
              
              <div className="pt-40 md:pt-48 relative z-10">
                <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <Link to="/contact" className="bg-white text-phatsimo-blue px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold">
                    Get Started
                  </Link>
                  <Link to="/services" className="flex items-center border-2 border-white text-white px-6 py-[10px] rounded-md hover:bg-white/10 transition-all duration-300 font-medium">
                    Our Services 
                    <ChevronRight size={18} className="ml-1" />
                  </Link>
                </div>
                {/* Removed duplicate Company A, B, C buttons */}
              </div>
            </div>
            
            {/* Image/visual section */}
            <div className="hidden md:block">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`transition-all duration-700 ease-in-out
                    ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="relative">
                    {/* Main image container with fancy border */}
                    <div className="rounded-lg overflow-hidden border-4 border-white/20 shadow-xl relative z-10">
                      <div 
                        className="aspect-[4/3] bg-gradient-to-br from-black/50 to-black/30 flex items-center justify-center"
                        style={{ 
                          backgroundImage: `url(${slide.bgImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="text-center p-8 bg-black/40 rounded-lg">
                          <h3 className="text-2xl font-bold mb-4">Excellence in Action</h3>
                          <p className="text-gray-200">Delivering tailored solutions for sustainable growth and success</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-phatsimo-gold/50 rounded-lg z-0 animate-fade-in" style={{ animationDelay: '0.3s' }}></div>
                    <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-phatsimo-red/50 rounded-lg z-0 animate-fade-in" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Navigation dots and arrows */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-6 z-20">
          <button 
            onClick={goToPrevSlide} 
            className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
            disabled={isAnimating}
          >
            <ArrowLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== currentSlide) {
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), 750);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={goToNextSlide} 
            className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
            disabled={isAnimating}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHeaderSlideshow;

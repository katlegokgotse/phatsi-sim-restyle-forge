
import React, { useEffect, useState, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const parallaxImages = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    alt: "Engineering solutions",
    caption: "Project Management Excellence"
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    alt: "Civil engineering",
    caption: "Innovative Engineering Solutions"
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "Electrical engineering",
    caption: "Advanced Technical Implementation"
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    alt: "Construction project",
    caption: "Delivering Quality Results"
  }
];

const ParallaxSlideshow = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const element = sectionRef.current;
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isInView) {
          setIsVisible(true);
          const scrollPos = window.scrollY;
          const sectionTop = rect.top + scrollPos;
          const relativeScroll = scrollPos - sectionTop;
          setScrollPosition(relativeScroll * 0.4); // Adjust the parallax effect speed
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-12">Our Work</h2>
        
        <Carousel className="w-full"
          opts={{
            loop: true,
            align: "center",
          }}
        >
          <CarouselContent>
            {parallaxImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
                <div className="h-[400px] md:h-[500px] relative overflow-hidden rounded-xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-200 ease-out"
                    style={{
                      backgroundImage: `url(${image.src})`,
                      transform: isVisible ? `translateY(${scrollPosition}px)` : 'translateY(0)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-white text-2xl font-bold mb-2">{image.caption}</h3>
                    <p className="text-white/80">Excellence in every project we deliver</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ParallaxSlideshow;

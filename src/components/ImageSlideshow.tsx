
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    alt: "Business consulting image 1",
    caption: "Strategic Business Solutions"
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    alt: "Business consulting image 2",
    caption: "Innovation & Growth"
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    alt: "Business consulting image 3",
    caption: "Collaborative Partnerships"
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    alt: "Business consulting image 4",
    caption: "Digital Transformation"
  }
];

const ImageSlideshow = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Our Work</h2>
        <p className="section-subtitle text-center">Delivering excellence across industries</p>
        
        <div className="mt-12 relative max-w-4xl mx-auto">
          <Carousel className="w-full"
            opts={{
              loop: true,
              align: "center",
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                      <h3 className="text-white text-lg md:text-xl font-semibold">{image.caption}</h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 md:-left-16 border-phatsimo-blue text-phatsimo-blue">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="absolute -right-12 md:-right-16 border-phatsimo-blue text-phatsimo-blue">
              <ChevronRight className="h-6 w-6" /> 
            </CarouselNext>
          </Carousel>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">Swipe or use the arrows to navigate through our project showcase</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlideshow;

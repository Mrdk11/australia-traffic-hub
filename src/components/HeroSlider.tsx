import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import trafficNight from "@/assets/traffic-night.jpg";
import trafficAerial from "@/assets/traffic-aerial.jpg";
import trafficEquipment from "@/assets/traffic-equipment.jpg";
import trafficController from "@/assets/traffic-controller.jpg";

const slides = [
  {
    image: trafficNight,
    alt: "Traffic management at night",
  },
  {
    image: trafficController,
    alt: "Traffic controller at work",
  },
  {
    image: trafficAerial,
    alt: "Aerial view of traffic management",
  },
  {
    image: trafficEquipment,
    alt: "Traffic control equipment",
  },
];

interface HeroSliderProps {
  className?: string;
}

const HeroSlider = ({ className = "" }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.alt}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm border border-border/30 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm border border-border/30 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent w-6"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

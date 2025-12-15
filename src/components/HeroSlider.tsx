import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop",
    alt: "Fish collagen production facility",
  },
  {
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&h=1080&fit=crop",
    alt: "Laboratory research",
  },
  {
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920&h=1080&fit=crop",
    alt: "Premium collagen products",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[500px] md:h-[700px] lg:h-[800px] bg-primary overflow-hidden">
      {/* Heading Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 h-[53px] flex items-center justify-center bg-primary/90">
        <h1 className="text-primary-foreground text-sm md:text-base lg:text-lg tracking-wider text-center px-4">
          World's Best Premium Quality Fish Collagen Peptide
        </h1>
      </div>

      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/30" />
          </div>
        ))}
      </div>

      {/* CTA Overlay */}
      <div className="absolute bottom-20 left-4 md:left-8 lg:left-16 xl:left-[300px] z-20">
        <div className="bg-green-600/80 backdrop-blur-sm rounded-tl-2xl rounded-br-2xl px-6 md:px-10 py-4 md:py-5">
          <p className="text-primary-foreground text-xl md:text-2xl lg:text-[28px] font-semibold text-center">
            Make life healthy & beautiful
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all ${
              index === currentSlide
                ? "w-3 h-3 bg-secondary"
                : "w-2.5 h-2.5 bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

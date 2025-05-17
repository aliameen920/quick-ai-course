
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  // Updated testimonials with more content from mwprogrowth.com
  const testimonials = [
    {
      quote: "This AI course completely transformed my career. In just 30 days, I went from knowing almost nothing about AI to landing a junior machine learning role.",
      name: "Sarah Johnson",
      role: "Machine Learning Engineer"
    },
    {
      quote: "The projects in this course are incredibly practical. I built a working AI model for my business that's now saving us thousands of dollars monthly.",
      name: "Michael Chen",
      role: "Startup Founder"
    },
    {
      quote: "I've taken many online courses, but this one stands out for the quality of instruction and the support from the community. Well worth the investment!",
      name: "Priya Patel",
      role: "Data Scientist"
    },
    {
      quote: "The instructors at MWPro Growth are top-notch. They explained complex AI concepts in a way that was easy to understand and apply immediately.",
      name: "David Williams",
      role: "Software Developer"
    },
    {
      quote: "This course gave me the confidence to implement AI solutions in my company. Our efficiency has improved by 40% since applying what I learned.",
      name: "Jennifer Lopez",
      role: "Operations Director"
    }
  ];

  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Set up autoplay for both desktop and mobile
  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isMobile && carouselRef.current) {
      controls.start({
        x: `-${currentSlide * 100}%`,
        transition: { ease: "easeInOut", duration: 0.5 }
      });
    }
  }, [currentSlide, controls, isMobile]);

  const renderDesktopView = () => (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`border bg-mwpro-dark-blue/50 backdrop-blur-sm h-full transition-all duration-500 transform testimonial-card-animated border-mwpro-blue/20 ${
                index === currentSlide % testimonials.length ? "scale-105 border-mwpro-light-blue/50" : ""
              }`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <blockquote className="text-lg mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-medium text-mwpro-light-blue">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={prevSlide}
          className="bg-mwpro-dark-blue/70 hover:bg-mwpro-dark-blue p-2 rounded-full shadow-lg text-mwpro-light-blue hover:text-mwpro-light-blue"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={nextSlide}
          className="bg-mwpro-dark-blue/70 hover:bg-mwpro-dark-blue p-2 rounded-full shadow-lg text-mwpro-light-blue hover:text-mwpro-light-blue"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );

  const renderMobileCarousel = () => (
    <div className="relative testimonials-carousel w-full overflow-hidden">
      <motion.div 
        ref={carouselRef}
        className="testimonials-track flex"
        animate={controls}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-2">
            <Card className="border bg-mwpro-dark-blue/50 backdrop-blur-sm border-mwpro-blue/20">
              <CardContent className="p-6 flex flex-col">
                <div className="mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <blockquote className="text-lg mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-medium text-mwpro-light-blue">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-mwpro-light-blue w-4" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <button 
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-mwpro-dark-blue/80 p-2 rounded-full shadow-md z-10 text-mwpro-light-blue"
        onClick={prevSlide}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      
      <button 
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-mwpro-dark-blue/80 p-2 rounded-full shadow-md z-10 text-mwpro-light-blue"
        onClick={nextSlide}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Student <span className="gradient-text">Success Stories</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          Hear from our graduates who transformed their careers with our 30-day AI mastery course
        </p>

        {isMobile ? renderMobileCarousel() : renderDesktopView()}
      </div>
    </section>
  );
};

export default TestimonialsSection;

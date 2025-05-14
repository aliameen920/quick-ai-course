
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
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
    }
  ];

  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isMobile) {
      // Auto-slide on mobile
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && carouselRef.current) {
      controls.start({
        x: `-${currentSlide * 100}%`,
        transition: { ease: "easeInOut", duration: 0.5 }
      });
    }
  }, [currentSlide, controls, isMobile]);

  const renderDesktopView = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="h-full"
        >
          <Card className="border bg-card/50 backdrop-blur-sm h-full testimonial-card-animated">
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
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const renderMobileCarousel = () => (
    <div className="relative testimonials-carousel w-full">
      <motion.div 
        ref={carouselRef}
        className="testimonials-track w-full"
        animate={controls}
      >
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="border bg-card/50 backdrop-blur-sm mx-2">
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
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-accent" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <button 
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md"
        onClick={prevSlide}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      
      <button 
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md"
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


import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Student <span className="gradient-text">Success Stories</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          Hear from our graduates who transformed their careers with our 30-day AI mastery course
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

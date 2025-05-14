
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="bg-gradient-to-r from-accent/90 to-primary/90 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white/10 rounded-full"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Begin Your AI Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of successful students who have transformed their careers with our accelerated AI course.
              Master AI in just 30 days or your money back.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-accent hover:bg-white/90 button-glow text-lg px-8 py-6" asChild>
                <a href="https://buzurgai.com" target="_blank" rel="noopener noreferrer">
                  Buy Now - $149
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10" asChild>
                <a href="https://buzurgai.com" target="_blank" rel="noopener noreferrer">
                  View Course Details
                </a>
              </Button>
            </div>
            
            <p className="mt-6 text-white/80 text-sm">
              30-day money-back guarantee • Lifetime access • Immediate enrollment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

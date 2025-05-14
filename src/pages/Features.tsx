
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import { Button } from '@/components/ui/button';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col dark">
      <Navbar />
      <main className="flex-grow">
        <div className="container px-4 md:px-6 py-12 md:py-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            Course <span className="gradient-text">Features</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 md:mb-12 max-w-3xl">
            Discover what makes our AI course stand out from the rest. We've designed a comprehensive learning experience with features that accelerate your path to mastery.
          </p>
          
          <FeaturesSection />
          
          <div className="mt-12 text-center">
            <Button className="bg-accent hover:bg-accent/90 button-glow" size="lg" asChild>
              <a href="https://buzurgai.com" target="_blank" rel="noopener noreferrer">
                Start Your Journey
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;

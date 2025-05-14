
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CurriculumSection from '@/components/CurriculumSection';
import { Button } from '@/components/ui/button';

const Curriculum = () => {
  return (
    <div className="min-h-screen flex flex-col dark">
      <Navbar />
      <main className="flex-grow">
        <div className="container px-4 md:px-6 py-12 md:py-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            Our <span className="gradient-text">Curriculum</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 md:mb-12 max-w-3xl">
            Our comprehensive AI course curriculum is designed to take you from the fundamentals to advanced concepts in just 30 days, with practical projects at each step of the way.
          </p>
          
          <CurriculumSection />
          
          <div className="mt-12 text-center">
            <Button className="bg-accent hover:bg-accent/90 button-glow" size="lg" asChild>
              <a href="https://buzurgai.com" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Curriculum;

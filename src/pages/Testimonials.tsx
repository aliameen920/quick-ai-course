
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col dark bg-mwpro-dark-blue">
      <Helmet>
        <title>MWPro Growth Student Testimonials | Real Success Stories</title>
        <meta name="description" content="Read real testimonials from MWPro Growth students who have transformed their careers and businesses with our comprehensive AI course." />
        <meta name="keywords" content="AI course testimonials, student reviews, AI training success stories, MWPro Growth reviews, artificial intelligence course feedback" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="container px-4 md:px-6 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 md:mb-8">
              Student <span className="gradient-text">Testimonials</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 md:mb-12 max-w-3xl">
              Hear directly from our graduates about their experiences with our AI course and how it has transformed their careers and businesses.
            </p>
          </motion.div>
          
          <TestimonialsSection />
          
          <div className="mt-12 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-mwpro-blue hover:bg-mwpro-blue/90 button-glow" size="lg">
                Join Our Community
              </Button>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;

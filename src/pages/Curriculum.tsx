
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CurriculumSection from '@/components/CurriculumSection';
import { Button } from '@/components/ui/button';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Curriculum = () => {
  return (
    <div className="min-h-screen flex flex-col dark bg-mwpro-dark-blue">
      <Helmet>
        <title>MWPro Growth Curriculum | Comprehensive 30-Day AI Course</title>
        <meta name="description" content="Explore our comprehensive AI curriculum. Our 30-day structured program takes you from fundamentals to advanced AI concepts with hands-on projects." />
        <meta name="keywords" content="AI curriculum, artificial intelligence course, machine learning syllabus, deep learning program, 30-day AI course" />
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
              Our <span className="gradient-text">Curriculum</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 md:mb-12 max-w-3xl">
              Our comprehensive AI course curriculum is designed to take you from the fundamentals to advanced concepts in just 30 days, with practical projects at each step of the way.
            </p>
          </motion.div>
          
          <CurriculumSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Curriculum;

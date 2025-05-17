
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import { Button } from '@/components/ui/button';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col dark bg-mwpro-dark-blue">
      <Helmet>
        <title>MWPro Growth Course Features | Premium AI Training Experience</title>
        <meta name="description" content="Discover what makes our AI course exceptional. Expert-led lessons, hands-on projects, fast-track learning, and comprehensive resources to accelerate your AI journey." />
        <meta name="keywords" content="AI course features, artificial intelligence training, hands-on AI projects, expert-led AI lessons, interactive AI learning" />
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
              Course <span className="gradient-text">Features</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 md:mb-12 max-w-3xl">
              Discover what makes our AI course stand out from the rest. We've designed a comprehensive learning experience with features that accelerate your path to mastery.
            </p>
          </motion.div>
          
          <FeaturesSection />
          
          <div className="mt-12 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-mwpro-blue hover:bg-mwpro-blue/90 button-glow" size="lg">
                Start Your Journey
              </Button>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;

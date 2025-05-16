
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col dark">
      <Helmet>
        <title>Master AI Course Pricing | Affordable AI Training Options</title>
        <meta name="description" content="View our flexible pricing options for Master AI courses. We offer affordable plans to make comprehensive AI training accessible to everyone." />
        <meta name="keywords" content="AI course pricing, artificial intelligence training cost, affordable AI education, Master AI course fees" />
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
              Pricing <span className="gradient-text">Options</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 md:mb-12 max-w-3xl">
              We offer affordable pricing options to make our AI course accessible to everyone. Choose the plan that best fits your needs and budget.
            </p>
          </motion.div>
          
          <PricingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;

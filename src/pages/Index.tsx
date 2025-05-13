
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CurriculumSection from '@/components/CurriculumSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import ScheduleMeetingSection from '@/components/ScheduleMeetingSection';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const Index = () => {
  const [showPromo, setShowPromo] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled more than 400px
      if (window.scrollY > 400 && !hasScrolled) {
        setHasScrolled(true);
        // Show popup 1 second after scrolling past threshold
        setTimeout(() => {
          setShowPromo(true);
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <div className="min-h-screen flex flex-col dark">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CurriculumSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <ScheduleMeetingSection />
      </main>
      <Footer />
      
      {/* Promotional Popup - Only shows after scrolling */}
      <AlertDialog open={showPromo} onOpenChange={setShowPromo}>
        <AlertDialogTrigger className="hidden">Open Popup</AlertDialogTrigger>
        <AlertDialogContent className="max-w-md rounded-xl overflow-hidden border-none p-0 bg-transparent shadow-2xl">
          <AlertDialogTitle className="sr-only">Special Launch Offer</AlertDialogTitle>
          <AlertDialogDescription className="sr-only">
            Get 30% off when you enroll in our AI Master course today!
          </AlertDialogDescription>
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
            transition={{ 
              type: "spring", 
              damping: 15,
              duration: 0.7 
            }}
            className="bg-gradient-to-br from-violet-600 to-indigo-700 dark:from-violet-700 dark:to-indigo-900 p-6 rounded-xl relative overflow-hidden"
          >
            <motion.div 
              className="absolute top-2 right-2 z-10"
              whileHover={{ scale: 1.2, rotate: 90 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button 
                onClick={() => setShowPromo(false)}
                className="text-white/80 hover:text-white p-1 rounded-full bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="z-20 relative"
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-2"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                🎉 Special Launch Offer!
              </motion.h3>
              <p className="text-white/90 mb-4">Get 30% off when you enroll in our AI Master course today!</p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  className="w-full bg-white text-indigo-700 hover:bg-white/90 font-medium py-2 rounded-md" 
                  onClick={() => setShowPromo(false)}
                >
                  Claim Your 30% Discount Now
                </button>
              </motion.div>
              
              <p className="text-white/70 text-sm mt-3 text-center">Limited time offer. Expires in 24 hours.</p>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 bg-white/5 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -45, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            />
          </motion.div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Index;

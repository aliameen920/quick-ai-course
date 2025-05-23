
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <div className="relative w-full min-h-[85vh] pb-2 md:pb-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-mwpro-blue/20 via-mwpro-light-blue/20 to-mwpro-blue/20 animate-gradient-shift"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-mwpro-blue/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-mwpro-light-blue/20 rounded-full blur-3xl animate-float-delay"></div>
      </div>
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-3 md:gap-5 pt-0 mt-0">
        {/* Eyebrow tag */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={0}
          className="inline-flex items-center rounded-full border border-mwpro-light-blue/30 px-4 py-1.5 text-xs font-medium mt-0 sm:mt-2"
        >
          <span className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-mwpro-light-blue" />
            <span>Learn AI in just 30 days</span>
          </span>
        </motion.div>
        
        {/* Main headline - reduced top margin on mobile */}
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={1}
          className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl mt-0"
        >
          Master <span className="gradient-text">AI Tools</span> in Just One Month
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={2}
          className="max-w-[42rem] text-base md:text-lg text-muted-foreground font-light mb-1"
        >
          Our comprehensive 30-day course takes you from AI beginner to proficient practitioner with hands-on projects and expert guidance.
        </motion.p>
        
        {/* Video embedded below headline but still prominent */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={3}
          className="w-full max-w-2xl mt-1"
        >
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-mwpro-light-blue/20">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="AI Course Preview" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
        
        {/* Action button with reduced margin-top */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={4}
          className="mt-2 md:mt-3"
        >
          <Button 
            size={isMobile ? "default" : "lg"} 
            className="bg-mwpro-blue hover:bg-mwpro-blue/90 button-glow text-base md:text-lg px-6 md:px-8 py-4 md:py-6"
          >
            Buy Now - $149 
            <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

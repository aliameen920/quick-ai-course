
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const isMobile = useIsMobile();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const aiTechnologies = ["Chatbot", "AI automation", "ChatGPT", "LLM's", "AI Tools"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % aiTechnologies.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

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
    <div className="relative w-full min-h-[90vh] py-8 md:py-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient blur effects */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/30 dark:bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-4 md:gap-6">
        {/* Eyebrow tag */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={0}
          className="inline-flex items-center rounded-full border border-accent/30 px-4 py-1.5 text-xs font-medium mt-6"
        >
          <span className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-pink-500" />
            <span>Learn AI in just 30 days</span>
          </span>
        </motion.div>
        
        {/* Main headline - moved above video and reduced size */}
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={1}
          className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl"
        >
          Master <span className="gradient-text animate-pulse">{aiTechnologies[currentWordIndex]}</span> in Just One Month
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={2}
          className="max-w-[42rem] text-base md:text-lg text-muted-foreground font-light mb-4"
        >
          Our comprehensive 30-day course takes you from AI beginner to proficient practitioner with hands-on projects and expert guidance.
        </motion.p>
        
        {/* Video embedded below headline but still prominent */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={3}
          className="w-full max-w-2xl mt-2"
        >
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-accent/20">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="AI Course Preview" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
        
        {/* Action button underneath video */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={4}
          className="mt-4 md:mt-6"
        >
          <Button size={isMobile ? "default" : "lg"} className="bg-accent hover:bg-accent/90 button-glow text-base md:text-lg px-6 md:px-8 py-4 md:py-6 animate-pulse-soft">
            Buy Now - $149 
            <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
          </Button>
        </motion.div>
        
        {/* Video dialog (hidden) */}
        <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
          <DialogTrigger asChild>
            <div className="hidden"></div>
          </DialogTrigger>
          
          <DialogContent className="sm:max-w-4xl">
            <div className="aspect-video w-full bg-black flex items-center justify-center text-white">
              {/* Placeholder for actual video player */}
              <div className="text-center">
                <p className="text-lg font-medium mb-2">Course Preview Video</p>
                <p className="text-sm text-gray-400">This would be a real video in production</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default HeroSection;

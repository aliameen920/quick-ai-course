
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);

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
    <div className="relative w-full min-h-[90vh] py-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient blur effects */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-8">
        {/* Eyebrow tag */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={0}
          className="inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium"
        >
          <span className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-pink-500" />
            <span>Learn AI in just 30 days</span>
          </span>
        </motion.div>
        
        {/* Main headline */}
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={1}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-3xl"
        >
          Master <span className="gradient-text animate-pulse">Artificial Intelligence</span> in Just One Month
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={2}
          className="max-w-[42rem] text-lg md:text-xl text-muted-foreground font-light"
        >
          Our comprehensive 30-day course takes you from AI beginner to proficient practitioner with hands-on projects and expert guidance.
        </motion.p>
        
        {/* Video embed replacing CTA button */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          custom={3}
          className="w-full max-w-2xl mt-4"
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
          className="mt-6"
        >
          <Button size="lg" className="bg-accent hover:bg-accent/90 button-glow text-lg px-8 py-6 animate-pulse-soft">
            Buy Now - $149 
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
        
        {/* Video trigger area */}
        <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
          <DialogTrigger asChild>
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={textAnimation}
              custom={4}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative mt-12 w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border cursor-pointer hidden" /* Hidden now */
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center shadow-lg"
                >
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </motion.div>
              </div>
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <motion.h3 
                  whileHover={{ y: -5 }}
                  className="text-white text-xl font-medium drop-shadow-lg"
                >
                  Watch Course Preview
                </motion.h3>
              </div>
              {/* This would be a real video in production */}
              <div className="w-full h-full bg-gradient-to-br from-violet-900/40 to-indigo-900/40"></div>
            </motion.div>
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

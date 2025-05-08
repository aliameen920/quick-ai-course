
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[90vh] py-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient blur effects */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-8 animate-fade-in">
        {/* Eyebrow tag */}
        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium">
          <span className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-pink-500" />
            <span>Learn AI in just 30 days</span>
          </span>
        </div>
        
        {/* Main headline */}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-3xl">
          Master <span className="gradient-text">Artificial Intelligence</span> in Just One Month
        </h1>
        
        {/* Subheading */}
        <p className="max-w-[42rem] text-lg md:text-xl text-muted-foreground">
          Our comprehensive 30-day course takes you from AI beginner to proficient practitioner with hands-on projects and expert guidance.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
          <Button size="lg" className="bg-accent hover:bg-accent/90 button-glow text-lg px-8 py-6 animate-pulse-soft">
            Buy Now - $149 
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            View Curriculum
          </Button>
        </div>
        
        {/* Video preview */}
        <div className="relative mt-12 w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center cursor-pointer shadow-lg">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-end justify-center pb-8">
            <h3 className="text-white text-xl font-medium drop-shadow-lg">
              Watch Course Preview
            </h3>
          </div>
          {/* This would be a real video in production */}
          <div className="w-full h-full bg-gradient-to-br from-violet-900/40 to-indigo-900/40"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

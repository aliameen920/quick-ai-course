
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center">
        <h2 className="font-heading font-bold text-2xl gradient-text">AI<span className="text-foreground">Master</span></h2>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#features" className="hover:text-accent transition-colors">Features</a>
        <a href="#curriculum" className="hover:text-accent transition-colors">Curriculum</a>
        <a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a>
        <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
      </div>
      
      <div>
        <Button className="bg-accent hover:bg-accent/90 button-glow">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

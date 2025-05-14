
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    // This would normally connect to your newsletter service
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    form.reset();
  };

  return (
    <footer className="bg-card py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-3">
            <h2 className="font-heading font-bold text-2xl">
              <span className="text-foreground">Buzurg</span><span className="gradient-text">AI</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Master artificial intelligence skills in just 30 days with our comprehensive course.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-5">
            <div>
              <h3 className="font-medium text-lg mb-4">Course</h3>
              <ul className="space-y-2">
                <li><Link to="/curriculum" className="text-muted-foreground hover:text-accent">Curriculum</Link></li>
                <li><Link to="/features" className="text-muted-foreground hover:text-accent">Features</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-accent">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-accent">About</Link></li>
                <li><Link to="/testimonials" className="text-muted-foreground hover:text-accent">Testimonials</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-muted-foreground hover:text-accent">Contact Us</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-accent">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-accent">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="font-medium text-lg mb-4">Subscribe to our Newsletter</h3>
            <p className="text-muted-foreground mb-4">Stay up to date with the latest AI news and course updates</p>
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
              <Input 
                type="email" 
                name="email" 
                placeholder="your@email.com" 
                className="flex-grow" 
                required 
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} BuzurgAI. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/privacy" className="hover:text-accent">Privacy</Link>
            <Link to="/terms" className="hover:text-accent">Terms</Link>
            <Link to="/contact" className="hover:text-accent">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

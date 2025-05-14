
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-heading font-bold text-2xl gradient-text">AI<span className="text-foreground">Master</span></h2>
            <p className="text-muted-foreground mt-2 max-w-xs">
              Master artificial intelligence skills in just 30 days with our comprehensive course.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium text-lg mb-4">Course</h3>
              <ul className="space-y-2">
                <li><a href="#curriculum" className="text-muted-foreground hover:text-accent">Curriculum</a></li>
                <li><a href="#features" className="text-muted-foreground hover:text-accent">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-accent">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-accent">About</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent">Blog</a></li>
                <li><a href="#testimonials" className="text-muted-foreground hover:text-accent">Testimonials</a></li>
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
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} AIMaster. All rights reserved.</p>
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


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  // Load Mailchimp validation script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize Mailchimp validation
      if (window.jQuery) {
        const $ = window.jQuery;
        window.fnames = new Array();
        window.ftypes = new Array();
        window.fnames[0] = 'EMAIL';
        window.ftypes[0] = 'email';
        window.fnames[1] = 'FNAME';
        window.ftypes[1] = 'text';
        window.fnames[2] = 'LNAME';
        window.ftypes[2] = 'text';
        window.fnames[3] = 'ADDRESS';
        window.ftypes[3] = 'address';
        window.fnames[4] = 'PHONE';
        window.ftypes[4] = 'phone';
        window.fnames[5] = 'BIRTHDAY';
        window.ftypes[5] = 'birthday';
        window.fnames[6] = 'COMPANY';
        window.ftypes[6] = 'text';
        $.noConflict(true);
      }
    };

    // Handle form submission
    const handleFormSubmit = (event) => {
      const form = document.getElementById('mc-embedded-subscribe-form');
      if (form && form === event.target) {
        event.preventDefault();
        const email = form.querySelector('#mce-EMAIL').value;
        if (email) {
          // Show success toast notification
          toast.success("Thank you for subscribing!", {
            description: "You'll receive our newsletter updates soon.",
            duration: 5000,
          });
          form.reset();
        }
        
        // Allow the form to submit to Mailchimp after showing the toast
        setTimeout(() => {
          form.submit();
        }, 1000);
      }
    };

    document.addEventListener('submit', handleFormSubmit);

    return () => {
      document.body.removeChild(script);
      document.removeEventListener('submit', handleFormSubmit);
    };
  }, []);

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
                <li><Link to="/book-now" className="text-muted-foreground hover:text-accent">Book Now</Link></li>
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
                <li><Link to="/ai-resources" className="text-muted-foreground hover:text-accent">AI Resources</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter - Mailchimp Form */}
          <div className="md:col-span-4">
            <h3 className="font-medium text-lg mb-4">Subscribe to our Newsletter</h3>
            <p className="text-muted-foreground mb-4">Stay up to date with the latest AI news and course updates</p>
            
            <div className="newsletter-form bg-card/50 backdrop-blur-sm border border-border/40 rounded-lg p-4">
              <form 
                action="https://gmail.us1.list-manage.com/subscribe/post?u=455f7fd2cfb606dc4995b3a30&amp;id=2a3da9346e&amp;f_id=00051de0f0" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="validate w-full" 
                target="_blank"
              >
                <div className="flex flex-col space-y-3">
                  <Input 
                    type="email" 
                    name="EMAIL" 
                    id="mce-EMAIL"
                    placeholder="your@email.com" 
                    className="w-full" 
                    required 
                  />
                  
                  {/* Hidden field for bot protection */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    <input type="text" name="b_455f7fd2cfb606dc4995b3a30_2a3da9346e" tabIndex={-1} defaultValue="" />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
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

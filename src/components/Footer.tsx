
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
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
    const handleFormSubmit = (event: Event) => {
      const form = document.getElementById('mc-embedded-subscribe-form');
      if (form && form === event.target) {
        event.preventDefault();
        const emailElement = form.querySelector('#mce-EMAIL') as HTMLInputElement;
        if (emailElement && emailElement.value) {
          // Show success toast notification
          toast({
            title: "Thank you for subscribing!",
            description: "You'll receive our newsletter updates soon.",
            duration: 5000
          });

          // Reset the form using the form element's reset method
          (form as HTMLFormElement).reset();
        }

        // Allow the form to submit to Mailchimp after showing the toast
        setTimeout(() => {
          (form as HTMLFormElement).submit();
        }, 1000);
      }
    };
    document.addEventListener('submit', handleFormSubmit);
    return () => {
      document.body.removeChild(script);
      document.removeEventListener('submit', handleFormSubmit);
    };
  }, []);
  return <footer className="bg-mwpro-dark-blue py-12 border-t border-mwpro-blue/20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <img src="/lovable-uploads/98a8dd43-3a23-42a5-ac73-4759defd04ed.png" alt="MWPro Growth Logo" className="h-24" />
              <h2 className="font-heading font-bold text-2xl">
                <span className="text-foreground"> Growth</span>
              </h2>
            </div>
            <p className="text-muted-foreground mt-2">
              Master artificial intelligence skills in just 30 days with our comprehensive course.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-5">
            <div>
              <h3 className="font-medium text-lg mb-4">Course</h3>
              <ul className="space-y-2">
                <li><a href="#curriculum" className="text-muted-foreground hover:text-mwpro-light-blue">Curriculum</a></li>
                <li><a href="#features" className="text-muted-foreground hover:text-mwpro-light-blue">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-mwpro-light-blue">Pricing</a></li>
                <li><a href="#book-now" className="text-muted-foreground hover:text-mwpro-light-blue">Book Now</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-mwpro-light-blue">About</Link></li>
                <li><a href="#testimonials" className="text-muted-foreground hover:text-mwpro-light-blue">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-muted-foreground hover:text-mwpro-light-blue">Contact Us</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-mwpro-light-blue">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-mwpro-light-blue">Terms & Conditions</Link></li>
                <li><Link to="/ai-resources" className="text-muted-foreground hover:text-mwpro-light-blue">AI Resources</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter - Mailchimp Form */}
          <div className="md:col-span-4">
            <h3 className="font-medium text-lg mb-4">Subscribe to our Newsletter</h3>
            <p className="text-muted-foreground mb-4">Stay up to date with the latest AI news and course updates</p>
            
            <div className="newsletter-form bg-mwpro-dark-blue/50 backdrop-blur-sm border border-mwpro-blue/20 rounded-lg p-4">
              <form action="https://gmail.us1.list-manage.com/subscribe/post?u=455f7fd2cfb606dc4995b3a30&amp;id=2a3da9346e&amp;f_id=00051de0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate w-full" target="_blank">
                <div className="flex flex-col space-y-3">
                  <Input type="email" name="EMAIL" id="mce-EMAIL" placeholder="your@email.com" className="w-full" required />
                  
                  {/* Hidden field for bot protection */}
                  <div aria-hidden="true" style={{
                  position: 'absolute',
                  left: '-5000px'
                }}>
                    <input type="text" name="b_455f7fd2cfb606dc4995b3a30_2a3da9346e" tabIndex={-1} defaultValue="" />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-mwpro-blue to-mwpro-light-blue hover:from-mwpro-blue hover:to-mwpro-blue">
                    <Mail className="h-4 w-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-mwpro-blue/20 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} MWPro Growth. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/privacy" className="hover:text-mwpro-light-blue">Privacy</Link>
            <Link to="/terms" className="hover:text-mwpro-light-blue">Terms</Link>
            <Link to="/contact" className="hover:text-mwpro-light-blue">Contact</Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;

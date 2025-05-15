
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet-async";

const Contact = () => {
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
        window.fnames[1] = 'FNAME';
        window.ftypes[1] = 'text';
        window.fnames[0] = 'EMAIL';
        window.ftypes[0] = 'email';
        window.fnames[4] = 'PHONE';
        window.ftypes[4] = 'phone';
        window.fnames[2] = 'LNAME';
        window.ftypes[2] = 'text';
        window.fnames[3] = 'ADDRESS';
        window.ftypes[3] = 'address';
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
        const nameElement = form.querySelector('#mce-FNAME') as HTMLInputElement;
        const emailElement = form.querySelector('#mce-EMAIL') as HTMLInputElement;
        const phoneElement = form.querySelector('#mce-PHONE') as HTMLInputElement;
        
        if (nameElement?.value && emailElement?.value && phoneElement?.value) {
          // Show success toast notification
          toast({
            title: "Message sent successfully!",
            description: "Thank you for contacting us. We'll get back to you soon.",
            duration: 5000,
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

  return (
    <div className="min-h-screen flex flex-col dark">
      <Helmet>
        <title>Contact BuzurgAI - Get in Touch with Our AI Experts</title>
        <meta name="description" content="Contact BuzurgAI for questions about our AI courses, custom training solutions, or to schedule a consultation with our AI experts." />
        <meta name="keywords" content="AI course contact, artificial intelligence experts, AI training consultation, BuzurgAI support" />
      </Helmet>
      
      <Navbar />
      <main className="flex-1 py-8 md:py-16 relative">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-8 md:mb-12">
              <motion.h1 
                className="text-4xl md:text-5xl font-heading font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Get in Touch
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Have questions about our courses or need help getting started? We're here to help!
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-16">
              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-heading font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">Mon-Fri 9am to 6pm EST</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">contact@buzurgai.com</p>
                      <p className="text-muted-foreground">support@buzurgai.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Office Location</h3>
                      <p className="text-muted-foreground">123 AI Street</p>
                      <p className="text-muted-foreground">Tech City, TC 12345</p>
                      <p className="text-muted-foreground">United States</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="pt-6">
                  <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="#" 
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8.245V12h4.755a5 5 0 1 0-4.755-3.755ZM9 16a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm12.5 0a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 8.98V15a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7V9a7 7 0 0 1 7-7h5a1 1 0 0 1 .7 1.7L14.4 6H11a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-3.1l-3.3 3.29a1 1 0 0 1-1.4-1.42l5-5A1 1 0 0 1 22 8.98Z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form - Mailchimp Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="border border-border/40 rounded-lg p-6 bg-card/50 shadow-lg backdrop-blur-sm">
                  <h2 className="text-2xl font-heading font-semibold mb-6">Send Us a Message</h2>
                  
                  <form 
                    action="https://gmail.us1.list-manage.com/subscribe/post?u=455f7fd2cfb606dc4995b3a30&amp;id=2a3da9346e&amp;f_id=00041de0f0" 
                    method="post" 
                    id="mc-embedded-subscribe-form" 
                    name="mc-embedded-subscribe-form" 
                    className="validate space-y-6" 
                    target="_blank"
                  >
                    <div>
                      <label htmlFor="mce-FNAME" className="block text-sm font-medium mb-2">Full Name <span className="text-destructive">*</span></label>
                      <Input 
                        id="mce-FNAME"
                        name="FNAME"
                        placeholder="Your full name"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="mce-EMAIL" className="block text-sm font-medium mb-2">Email Address <span className="text-destructive">*</span></label>
                      <Input 
                        id="mce-EMAIL"
                        name="EMAIL"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="mce-PHONE" className="block text-sm font-medium mb-2">Phone Number <span className="text-destructive">*</span></label>
                      <Input 
                        id="mce-PHONE"
                        name="PHONE"
                        placeholder="+1 (555) 123-4567"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        id="message"
                        name="MESSAGE"
                        placeholder="How can we help you?"
                        className="w-full min-h-[150px]"
                      />
                    </div>
                    
                    {/* Hidden field for bot protection */}
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                      <input type="text" name="b_455f7fd2cfb606dc4995b3a30_2a3da9346e" tabIndex={-1} defaultValue="" />
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button 
                        type="submit"
                        name="subscribe" 
                        id="mc-embedded-subscribe"
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

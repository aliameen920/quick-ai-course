
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Switch } from "@/components/ui/switch";

const ScheduleMeetingSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="schedule">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 text-xs md:text-sm rounded-full border border-accent/40 bg-accent/5 text-accent inline-block mb-4"
          >
            Book a personalized session
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
          >
            Ready to <span className="gradient-text">Transform</span> Your AI Skills?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl text-lg"
          >
            Schedule a free consultation with one of our AI instructors who can answer your questions and help you determine if this course is the right fit for you.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="max-w-5xl mx-auto overflow-hidden border-2 border-accent/20 shadow-2xl relative bg-gradient-to-br from-background/80 to-card/50 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left side - Information */}
                <div className="p-6 md:p-10 space-y-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">Meet Our AI Experts</h3>
                    <p className="text-muted-foreground mb-6">Get personalized guidance from our expert instructors and discover how this course can accelerate your AI career.</p>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 text-lg">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">
                        <Clock className="h-5 w-5" />
                      </div>
                      <span className="font-medium">30 minute complimentary session</span>
                    </div>
                    <div className="flex items-center gap-3 text-lg">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <span className="font-medium">Available Monday-Friday</span>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 rounded-xl p-5 border border-border/40">
                    <h4 className="font-semibold text-lg mb-3 text-accent">What to expect:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-accent/20 p-1 mt-0.5">
                          <svg className="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <span className="text-muted-foreground">Personalized course overview tailored to your goals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-accent/20 p-1 mt-0.5">
                          <svg className="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <span className="text-muted-foreground">Opportunity to ask questions about curriculum</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-accent/20 p-1 mt-0.5">
                          <svg className="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <span className="text-muted-foreground">Discussion about career opportunities and outcomes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Schedule Your Free Consultation
                      <span className="ml-2">→</span>
                    </Button>
                    <p className="text-center text-sm text-muted-foreground mt-3">No credit card required • No obligation to enroll</p>
                  </div>
                </div>
                
                {/* Right side - Calendar visual */}
                <div className="relative">
                  <div className="hidden lg:block h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20">
                      <div className="absolute inset-0 backdrop-blur-sm">
                        <AspectRatio ratio={3/4} className="h-full">
                          <div className="w-full h-full p-10 flex flex-col justify-center items-center">
                            <div className="w-full max-w-sm bg-background/90 rounded-xl border border-border/50 p-5 shadow-xl">
                              <div className="flex justify-between items-center mb-6">
                                <h4 className="font-medium">May 2025</h4>
                                <div className="flex space-x-1">
                                  <button className="p-1.5 rounded-md hover:bg-muted">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                  <button className="p-1.5 rounded-md hover:bg-muted">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div className="grid grid-cols-7 gap-2 text-center mb-3">
                                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                                  <div key={i} className="text-xs text-muted-foreground">{day}</div>
                                ))}
                              </div>
                              <div className="grid grid-cols-7 gap-2">
                                {[...Array(31)].map((_, i) => {
                                  const day = i + 1;
                                  const isAvailable = [3, 5, 8, 10, 12, 15, 17, 19, 22, 24, 26, 29].includes(day);
                                  const isSelected = day === 15;
                                  return (
                                    <button 
                                      key={i} 
                                      className={`p-2 rounded-md text-sm ${
                                        isSelected 
                                          ? 'bg-accent text-white' 
                                          : isAvailable 
                                            ? 'hover:bg-accent/20' 
                                            : 'text-muted-foreground/50'
                                      }`}
                                    >
                                      {day}
                                    </button>
                                  );
                                })}
                              </div>
                              <div className="mt-6 space-y-4">
                                <h5 className="font-medium">Available Times</h5>
                                <div className="grid grid-cols-2 gap-2">
                                  <button className="p-2 text-sm border border-border rounded-md hover:bg-accent/10">10:00 AM</button>
                                  <button className="p-2 text-sm border border-border rounded-md bg-accent text-white">1:00 PM</button>
                                  <button className="p-2 text-sm border border-border rounded-md hover:bg-accent/10">3:30 PM</button>
                                  <button className="p-2 text-sm border border-border rounded-md hover:bg-accent/10">5:00 PM</button>
                                </div>
                              </div>
                            </div>
                            <div className="mt-10 w-full max-w-sm">
                              <div className="bg-background/90 rounded-xl border border-border/50 p-5 shadow-xl">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                    <Switch id="email-notifications" defaultChecked />
                                    <label htmlFor="email-notifications" className="text-sm">
                                      Email notifications
                                    </label>
                                  </div>
                                  <div className="text-sm text-accent">
                                    15 min before
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AspectRatio>
                      </div>
                    </div>
                  </div>
                  {/* Mobile view will just show a simplified version */}
                  <div className="lg:hidden p-6 pb-10 flex flex-col items-center">
                    <Calendar className="h-16 w-16 text-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Ready to book?</h3>
                    <p className="text-muted-foreground text-center mb-6">Click the button below to schedule your free consultation session.</p>
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-6"
                    >
                      Open Calendar
                      <span className="ml-2">→</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleMeetingSection;

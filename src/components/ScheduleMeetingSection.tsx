
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const ScheduleMeetingSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-16 relative overflow-hidden" id="schedule">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4"
          >
            Not Sure Yet? <span className="gradient-text">Talk to an Expert</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl"
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
          <Card className="max-w-3xl mx-auto overflow-hidden border-2 border-accent/20 shadow-2xl relative bg-gradient-to-br from-background to-card">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            
            <CardContent className="p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">Book Your Session</h3>
                  <p className="text-muted-foreground mb-6">Get personalized guidance from our expert instructors and discover how this course can accelerate your AI career.</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-5 w-5 text-accent" />
                      <span>30 minute session</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-5 w-5 text-accent" />
                      <span>Available Monday-Friday</span>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-lg p-4 border border-border/40 bg-card/50 backdrop-blur-sm">
                    <div className="font-medium mb-1">What you'll discuss:</div>
                    <ul className="text-sm text-muted-foreground space-y-2 ml-5 list-disc">
                      <li>Your current AI knowledge and goals</li>
                      <li>Course curriculum and learning path</li>
                      <li>Career opportunities after completion</li>
                      <li>Pricing options and special offers</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  {/* Replace form with Calendly embed */}
                  <div className={`calendly-inline-widget ${isMobile ? 'h-[500px]' : 'h-[600px]'}`} 
                      data-url="https://calendly.com/your-calendly-link" 
                      style={{ minWidth: '320px' }}>
                  </div>
                  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
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

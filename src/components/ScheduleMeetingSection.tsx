
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { ArrowRight, CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const ScheduleMeetingSection = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | undefined>();
  
  // Generate time slots from 9am to 5pm
  const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const hour = Math.floor((i + 18) / 2);
    const minute = (i + 18) % 2 === 0 ? '00' : '30';
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${hour12}:${minute} ${ampm}`;
  });

  // Redirect to external booking site
  const handleScheduleMeeting = () => {
    window.open('https://buzurgai.com', '_blank');
  };

  return (
    <section id="schedule" className="py-20 bg-gradient-to-t from-muted/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Schedule Your <span className="gradient-text">Free Consultation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book a call with our AI experts to discuss how our course can help you achieve your learning goals and advance your career
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r">
                  <h3 className="text-xl font-semibold mb-4">Select a Date & Time</h3>
                  
                  {/* Date Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="p-3 pointer-events-auto"
                          disabled={(date) => {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            return date < today;
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  {/* Time Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Time</label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a time">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            {time || "Select a time"}
                          </div>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent 
                        className="h-[300px] overflow-y-auto bg-background border-border shadow-lg"
                        position="popper"
                      >
                        {timeSlots.map((slot) => (
                          <SelectItem 
                            key={slot} 
                            value={slot}
                            className="cursor-pointer hover:bg-accent/20"
                          >
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-accent" />
                              {slot}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={handleScheduleMeeting}
                      className="w-full bg-accent hover:bg-accent/90 button-glow"
                      size="lg"
                      asChild
                    >
                      <a href="https://buzurgai.com" target="_blank" rel="noopener noreferrer">
                        Book Your Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </motion.div>
                </div>

                <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-accent/20 p-1 rounded mr-3 mt-1">
                        <span className="h-4 w-4 text-accent">✓</span>
                      </div>
                      <span>15-minute personalized session with an AI expert</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent/20 p-1 rounded mr-3 mt-1">
                        <span className="h-4 w-4 text-accent">✓</span>
                      </div>
                      <span>Custom learning path based on your goals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent/20 p-1 rounded mr-3 mt-1">
                        <span className="h-4 w-4 text-accent">✓</span>
                      </div>
                      <span>Answers to all your questions about the course</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent/20 p-1 rounded mr-3 mt-1">
                        <span className="h-4 w-4 text-accent">✓</span>
                      </div>
                      <span>Exclusive discounts for early enrollment</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 border border-accent/30 rounded-lg bg-accent/5">
                    <p className="italic text-sm">
                      "Our consultation helped me determine if this course was right for my career goals. 
                      The team was knowledgeable and helped me make the right decision."
                    </p>
                    <p className="text-sm font-medium mt-2">— David K., Course Graduate</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleMeetingSection;

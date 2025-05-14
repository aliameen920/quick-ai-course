
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const BookNow = () => {
  return (
    <div className="min-h-screen flex flex-col dark">
      <Helmet>
        <title>Book Your BuzurgAI Course Now | Start Your AI Journey Today</title>
        <meta name="description" content="Book your AI training course with BuzurgAI. Secure your spot in our comprehensive 30-day AI masterclass and start your journey toward AI mastery." />
        <meta name="keywords" content="book AI course, AI course enrollment, BuzurgAI registration, artificial intelligence training registration" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="container px-4 md:px-6 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8 md:mb-12">
              <motion.h1 
                className="font-heading text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Book Your <span className="gradient-text">Course Now</span>
              </motion.h1>
              <motion.p 
                className="text-muted-foreground text-lg mb-8 md:mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Take the next step in your AI journey and secure your spot in our comprehensive 30-day course designed to transform beginners into AI professionals.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="rounded-xl overflow-hidden border border-border/50 bg-card/50">
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-bold">Complete AI Course</h2>
                      <div className="px-3 py-1 rounded-full bg-accent/20 text-accent font-medium text-sm">
                        Limited Spots
                      </div>
                    </div>
                    
                    <div className="text-3xl font-bold">
                      $149 <span className="text-muted-foreground text-lg font-normal line-through ml-2">$299</span>
                    </div>
                    
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        30 days comprehensive training
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Expert-led instruction
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Hands-on projects & exercises
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Lifetime access to course materials
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Community support
                      </li>
                    </ul>
                    
                    <motion.a 
                      href="https://nas.io/checkout-global?communityId=67d943d3a0941b6b5877b8d6&communityCode=BUZURG_AI_3&requestor=signupRequestor&linkClicked=https%3A%2F%2Fnas.io%2Fbuzurg"
                      className="block w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg text-center mt-6"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enroll Now
                    </motion.a>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden border border-border/50 bg-card/50">
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-bold">Free Consultation</h2>
                      <div className="px-3 py-1 rounded-full bg-accent/20 text-accent font-medium text-sm">
                        No Obligation
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">
                      Not sure if this course is right for you? Schedule a free consultation with our AI experts to discuss your goals.
                    </p>
                    
                    <motion.a 
                      href="https://nas.io/buzurg./products/lets-talk-your-ai-problems"
                      className="block w-full py-3 px-4 border border-accent text-accent hover:bg-accent/10 font-medium rounded-lg text-center mt-6"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Consultation
                    </motion.a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="relative h-[500px] overflow-hidden rounded-xl border border-border/50">
                  <div className="w-full h-full">
                    <iframe 
                      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ39gTBP-IncLZ2lauwj_sKN4oSlvZZ18JcW_p8y9nyZtbZq_iX_0yoz3enF_WACRxdOYaTb6LmO?gv=true" 
                      style={{ border: 0 }} 
                      width="100%" 
                      height="100%"
                      frameBorder="0"
                    ></iframe>
                  </div>
                  
                  {/* Animated overlay for the calendar */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none"
                    animate={{ 
                      opacity: [0.8, 0.2, 0.8],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      repeatType: "reverse"
                    }}
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Animated AI Elements */}
            <div className="mt-16 relative h-64">
              <motion.div 
                className="absolute top-0 left-0 w-20 h-20 bg-purple-500/30 rounded-full blur-xl"
                animate={{ 
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8 
                }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"
                animate={{ 
                  x: [0, -40, 0],
                  y: [0, 40, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10,
                  delay: 1
                }}
              />
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Start Your AI Journey Today
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Join thousands of students who have already transformed their careers with BuzurgAI
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookNow;

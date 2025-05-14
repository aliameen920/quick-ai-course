
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, GraduationCap, Zap, Book, Monitor, Code, Users } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      title: "Expert-Led Lessons",
      description: "Learn from industry experts with years of practical AI experience",
      icon: <GraduationCap className="h-12 w-12 text-accent" />
    },
    {
      title: "Hands-on Projects",
      description: "Build your own AI models with guided step-by-step projects",
      icon: <Brain className="h-12 w-12 text-accent" />
    },
    {
      title: "Fast-Track Learning",
      description: "Accelerated curriculum designed to get you job-ready in 30 days",
      icon: <Zap className="h-12 w-12 text-accent" />
    },
    {
      title: "Comprehensive Resources",
      description: "Access to code libraries, datasets, and supplemental reading materials",
      icon: <Book className="h-12 w-12 text-accent" />
    },
    {
      title: "Interactive Sessions",
      description: "Weekly live Q&A sessions to clarify concepts and get feedback",
      icon: <Monitor className="h-12 w-12 text-accent" />
    },
    {
      title: "Community Support",
      description: "Join our community of AI learners and professionals for networking and collaboration",
      icon: <Users className="h-12 w-12 text-accent" />
    }
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-6 relative">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose Our <span className="text-white">Buzurg</span><span className="gradient-text">AI</span> Course
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          Our course is designed to take you from zero to AI hero in just 30 days with these powerful features:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="border bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-colors duration-300">
                <CardHeader>
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* AI Animation Below Features */}
        <div className="mt-20 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Done with AI Prompting</span>
            </h3>
          </motion.div>
          
          <div className="relative h-64 md:h-80 max-w-4xl mx-auto">
            {/* Animated Neural Network Nodes */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  {/* Neural Network Lines - These will be animated */}
                  {[...Array(20)].map((_, i) => (
                    <motion.line
                      key={`line-${i}`}
                      x1={(i % 5) * 200 + 50}
                      y1={Math.floor(i / 5) * 100 + 50}
                      x2={((i + 1) % 5) * 200 + 50}
                      y2={Math.floor((i + 5) / 5) * 100 + 50}
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0.2 }}
                      animate={{ pathLength: 1, opacity: 0.8 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.1
                      }}
                    />
                  ))}
                  
                  {/* Neural Network Nodes */}
                  {[...Array(15)].map((_, i) => (
                    <motion.circle
                      key={`node-${i}`}
                      cx={(i % 5) * 200 + 50}
                      cy={Math.floor(i / 5) * 100 + 50}
                      r="12"
                      fill="url(#nodeGradient)"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 3
                      }}
                    />
                  ))}
                </motion.g>
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9b87f5" />
                    <stop offset="100%" stopColor="#6E59A5" />
                  </linearGradient>
                  
                  <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#D6BCFA" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            
            {/* Floating Data Points */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`data-${i}`}
                className="absolute"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              >
                <div className={`h-6 w-6 rounded-full bg-gradient-to-br ${
                  i % 2 === 0 ? 'from-purple-400 to-purple-600' : 'from-indigo-400 to-indigo-600'
                } shadow-lg`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, GraduationCap, Zap, Book, Monitor, Code, Users } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [{
    title: "Expert-Led Lessons",
    description: "Learn from industry experts with years of practical AI experience",
    icon: <GraduationCap className="h-12 w-12 text-mwpro-light-blue" />
  }, {
    title: "Hands-on Projects",
    description: "Build your own AI models with guided step-by-step projects",
    icon: <Brain className="h-12 w-12 text-mwpro-light-blue" />
  }, {
    title: "Fast-Track Learning",
    description: "Accelerated curriculum designed to get you job-ready in 30 days",
    icon: <Zap className="h-12 w-12 text-mwpro-light-blue" />
  }, {
    title: "Comprehensive Resources",
    description: "Access to code libraries, datasets, and supplemental reading materials",
    icon: <Book className="h-12 w-12 text-mwpro-light-blue" />
  }, {
    title: "Interactive Sessions",
    description: "Weekly live Q&A sessions to clarify concepts and get feedback",
    icon: <Monitor className="h-12 w-12 text-mwpro-light-blue" />
  }, {
    title: "Community Support",
    description: "Join our community of AI learners and professionals for networking and collaboration",
    icon: <Users className="h-12 w-12 text-mwpro-light-blue" />
  }];
  
  return <section id="features" className="py-20 px-4 md:px-6 relative">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose Our <span className="text-white">MWPro</span><span className="gradient-text">Growth</span> Course
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          Our course is designed to take you from zero to AI hero in just 30 days with these powerful features:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true,
          margin: "-100px"
        }}>
              <Card className="border bg-card/50 backdrop-blur-sm hover:border-mwpro-light-blue/50 transition-colors duration-300">
                <CardHeader>
                  <motion.div className="mb-4" whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.9
              }}>
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
        
        {/* AI Animation Below Features */}
        
      </div>
    </section>;
};
export default FeaturesSection;

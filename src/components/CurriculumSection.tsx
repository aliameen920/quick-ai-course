
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const CurriculumSection = () => {
  const modules = [
    {
      week: "Week 1",
      title: "AI Foundations & Python",
      topics: ["Introduction to AI concepts", "Python for AI development", "Data processing fundamentals"]
    },
    {
      week: "Week 2",
      title: "Machine Learning Basics",
      topics: ["Supervised vs unsupervised learning", "Model training & evaluation", "Practical ML projects"]
    },
    {
      week: "Week 3",
      title: "Deep Learning & Neural Networks",
      topics: ["Neural network architecture", "Building models with TensorFlow", "Computer vision applications"]
    },
    {
      week: "Week 4",
      title: "Advanced AI & Project Work",
      topics: ["Natural language processing", "Generative AI models", "Final project development"]
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          30-Day <span className="gradient-text">Curriculum</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          Our carefully structured 4-week program takes you from fundamental concepts to advanced AI applications
        </p>

        <div className="space-y-6">
          {modules.map((module, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border overflow-hidden card-3d-effect">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gradient-to-br from-accent to-accent/70 md:w-1/4 p-6 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-accent-foreground">{module.week}</h3>
                  </div>
                  <CardContent className="md:w-3/4 p-6">
                    <h4 className="text-xl font-semibold mb-3">{module.title}</h4>
                    <ul className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-accent"></div>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 button-glow text-lg"
            >
              Enroll Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// We need to import Button and ArrowRight
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default CurriculumSection;

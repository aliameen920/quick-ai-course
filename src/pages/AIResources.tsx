
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AIResources = () => {
  const aiTopics = [
    {
      title: "Machine Learning Fundamentals",
      description: "Learn the core concepts of machine learning, including supervised and unsupervised learning, regression, classification, and clustering techniques.",
      link: "/ai-resources/machine-learning",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Deep Learning & Neural Networks",
      description: "Explore the architecture of neural networks, including CNNs, RNNs, LSTM networks, and how they're revolutionizing computer vision and NLP.",
      link: "/ai-resources/deep-learning",
      image: "https://images.unsplash.com/photo-1677442135146-2e66ba287bbc?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Natural Language Processing",
      description: "Discover how AI is transforming text analysis, language translation, sentiment analysis, and conversational interfaces.",
      link: "/ai-resources/nlp",
      image: "https://images.unsplash.com/photo-1677442135121-2224dc8a8619?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Generative AI & Prompt Engineering",
      description: "Master the techniques for working with generative AI models like GPT-4, DALL-E, and Midjourney through effective prompt engineering.",
      link: "/ai-resources/generative-ai",
      image: "https://images.unsplash.com/photo-1685090498405-00f2f56d2c39?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "AI Ethics & Responsible AI",
      description: "Understand the ethical considerations in AI development, including bias mitigation, fairness, transparency, and privacy concerns.",
      link: "/ai-resources/ai-ethics",
      image: "https://images.unsplash.com/photo-1678995632928-b25f7101a55b?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "AI Business Applications",
      description: "Learn how businesses are implementing AI to improve operations, enhance customer experiences, and drive innovation across industries.",
      link: "/ai-resources/business-applications",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60"
    }
  ];

  const featuredArticles = [
    {
      title: "How to Build a ChatGPT-like Application from Scratch",
      description: "Learn the step-by-step process of building your own conversational AI application using the latest large language models.",
      tags: ["Large Language Models", "Practical Guide", "ChatGPT", "Development"]
    },
    {
      title: "The Future of AI in Healthcare: Trends and Innovations",
      description: "Discover how artificial intelligence is transforming diagnostics, treatment planning, drug discovery, and patient care.",
      tags: ["Healthcare", "AI Innovation", "Medical Technology", "Future Trends"]
    },
    {
      title: "Mastering Prompt Engineering for Better AI Results",
      description: "Effective techniques and best practices for crafting prompts that generate accurate, relevant, and creative AI outputs.",
      tags: ["Prompt Engineering", "AI Optimization", "Content Generation", "Best Practices"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col dark">
      <Helmet>
        <title>AI Resources & Learning Hub | BuzurgAI</title>
        <meta name="description" content="Explore our comprehensive collection of AI resources including tutorials, guides, and articles on machine learning, deep learning, NLP, generative AI, and more." />
        <meta name="keywords" content="artificial intelligence resources, machine learning tutorials, deep learning guides, AI learning materials, generative AI, NLP, neural networks, AI ethics, AI business applications, prompt engineering" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                AI <span className="gradient-text">Resources Hub</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Your comprehensive guide to artificial intelligence concepts, techniques, tools, and applications. Explore our curated resources to accelerate your AI journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={topic.image} 
                          alt={topic.title}
                          className="object-cover w-full h-full rounded-t-md"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">{topic.title}</h3>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground mb-4">{topic.description}</p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={topic.link}>
                          Explore Resources <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-card relative">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Featured AI Content</h2>
              <p className="text-muted-foreground">Handpicked articles and tutorials to advance your AI knowledge</p>
            </motion.div>

            <div className="space-y-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Card className="overflow-hidden border bg-card/80 backdrop-blur-sm hover:bg-card transition-colors duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl md:text-2xl">{article.title}</CardTitle>
                      <CardDescription className="text-base">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 relative overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
          />
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Ready to Master AI?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Join our comprehensive 30-day AI course and transform your career with in-demand skills.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white button-glow" 
                    size="lg"
                    asChild
                  >
                    <a 
                      href="https://nas.io/checkout-global?communityId=67d943d3a0941b6b5877b8d6&communityCode=BUZURG_AI_3&requestor=signupRequestor&linkClicked=https%3A%2F%2Fnas.io%2Fbuzurg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enroll in BuzurgAI Course
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Featured Video */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <h3 className="text-2xl font-bold mb-6">Featured AI Tutorial</h3>
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl border">
                  <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/JBpWyJrRfOE" 
                    title="Introduction to Machine Learning" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full rounded-xl"
                  ></iframe>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Learn the fundamental concepts of machine learning and how to implement them in Python.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIResources;

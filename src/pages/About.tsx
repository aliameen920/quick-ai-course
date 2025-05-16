
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Emma Chen",
      role: "Lead AI Instructor",
      bio: "Former AI research scientist at Google with 10+ years of experience in machine learning and natural language processing.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "Technical Director",
      bio: "Ex-Meta engineer specializing in AI application development with extensive experience building enterprise-scale AI systems.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Sophia Williams",
      role: "Curriculum Director",
      bio: "AI education specialist with experience designing learning programs for major tech companies and universities.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Dr. James Liu",
      role: "AI Ethics Advisor",
      bio: "Published author on AI ethics and responsible AI implementation with a Ph.D. in Computer Science from MIT.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col dark">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
              >
                About <span className="gradient-text">Master AI</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-3xl"
              >
                Transforming AI education through expert-led courses and hands-on learning experiences.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-card/50">
          <div className="container px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg">
                <p>
                  Master AI was founded in 2023 by a team of AI researchers and educators who recognized that traditional education was failing to keep up with the rapid advancement of artificial intelligence technologies.
                </p>
                <p>
                  What began as a series of workshops for tech professionals has grown into a comprehensive AI education platform that has helped thousands of students and professionals harness the power of artificial intelligence in their careers.
                </p>
                <p>
                  Our mission is to democratize AI education by making cutting-edge knowledge accessible to everyone, regardless of their technical background. We believe that understanding AI is no longer optional in today's world—it's essential.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl font-heading font-bold mb-12 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-background/80 to-card/50 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-4 gradient-text">Excellence</h3>
                    <p className="text-muted-foreground">
                      We are committed to excellence in everything we do, from the quality of our course materials to the support we provide to our students.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-background/80 to-card/50 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-4 gradient-text">Innovation</h3>
                    <p className="text-muted-foreground">
                      We stay at the forefront of AI education by constantly updating our curriculum to reflect the latest advancements in the field.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-background/80 to-card/50 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-4 gradient-text">Accessibility</h3>
                    <p className="text-muted-foreground">
                      We believe that AI education should be accessible to everyone, regardless of their background or prior technical knowledge.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-background/80 to-card/50 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-4 gradient-text">Ethical Responsibility</h3>
                    <p className="text-muted-foreground">
                      We emphasize the ethical implications of AI and teach our students to build and use AI responsibly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl font-heading font-bold mb-12 text-center">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-accent/30">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">{member.name}</h3>
                    <p className="text-accent mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-heading font-bold mb-12">Why Choose Master AI</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 text-accent">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397a1 1 0 011.354-.36l.104.045a1 1 0 11-.856 1.805l-.104-.045a1 1 0 01-.498-1.445zM5.762 12.553a1 1 0 011.354-.36l.104.045a1 1 0 11-.856 1.805l-.104-.045a1 1 0 01-.498-1.445zM8.862 15.066a1 1 0 011.354-.36l.104.045a1 1 0 11-.856 1.805l-.104-.045a1 1 0 01-.498-1.445z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Expert Instructors</h3>
                  <p className="text-muted-foreground">Learn from AI professionals with real-world industry experience.</p>
                </div>
                
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 text-accent">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Practical Projects</h3>
                  <p className="text-muted-foreground">Build real AI applications that you can add to your portfolio.</p>
                </div>
                
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 text-accent">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Industry-Relevant</h3>
                  <p className="text-muted-foreground">Curriculum designed to prepare you for in-demand AI roles.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

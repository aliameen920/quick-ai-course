
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col dark">
      <Navbar />
      <main className="flex-1 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Terms and Conditions</h1>
              <p className="text-muted-foreground">Last Updated: May 14, 2025</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Agreement to Terms</h2>
                <p className="mb-4">
                  These Terms and Conditions ("Terms") govern your access to and use of AIMaster's website, courses, and services. By accessing our website or enrolling in our courses, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our website or use our services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Intellectual Property Rights</h2>
                <p className="mb-4">
                  Unless otherwise stated, we own the intellectual property rights for all materials on AIMaster. All intellectual property rights are reserved. You may view and/or print pages from our website for your own personal use subject to restrictions set in these Terms.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-2">You must not:</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Republish material from our website or courses</li>
                  <li>Sell, rent, or sub-license material from our website or courses</li>
                  <li>Reproduce, duplicate, or copy material from our website or courses</li>
                  <li>Redistribute content from AIMaster (unless content is specifically made for redistribution)</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Course Enrollment and Access</h2>
                <p className="mb-4">
                  Upon enrolling in our courses, you will gain access to course materials for the specified duration of the course. Access to course materials may be subject to limitations based on your enrollment type.
                </p>
                <p className="mb-4">
                  You agree not to share your account credentials with others or allow others to access course materials through your account.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-2">Refund Policy</h3>
                <p>
                  We offer a 14-day money-back guarantee for our courses. If you're not satisfied with your purchase, you can request a full refund within 14 days of enrollment. After this period, no refunds will be issued.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">User Accounts</h2>
                <p className="mb-4">
                  When you create an account with us, you guarantee that the information you provide is accurate, complete, and current. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account.
                </p>
                <p>
                  You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Prohibited Uses</h2>
                <p className="mb-4">
                  You may only use our website and services for lawful purposes and in accordance with these Terms. You agree not to use our website or services:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
                  <li>To impersonate or attempt to impersonate AIMaster, an AIMaster employee, another user, or any other person or entity</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website, or which may harm AIMaster or users of the website or expose them to liability</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Limitation of Liability</h2>
                <p className="mb-4">
                  In no event shall AIMaster, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Your access to or use of or inability to access or use the service</li>
                  <li>Any conduct or content of any third party on the service</li>
                  <li>Any content obtained from the service</li>
                  <li>Unauthorized access, use or alteration of your transmissions or content</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Changes to These Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                <p>
                  By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the service.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

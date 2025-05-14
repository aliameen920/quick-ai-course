
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";

const Privacy = () => {
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
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last Updated: May 14, 2025</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Introduction</h2>
                <p className="mb-4">
                  At AIMaster ("we," "us," or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p>
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Information We Collect</h2>
                <p className="mb-4">
                  We collect information that you provide directly to us when you register for our courses, sign up for our newsletter, fill out a form, or communicate with us.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-2">Personal Data</h3>
                <p className="mb-4">
                  Personal data refers to any information that identifies you or makes you identifiable. We may collect the following personal data:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Billing information</li>
                  <li>Professional background information</li>
                  <li>Course preferences and learning goals</li>
                </ul>
                <h3 className="text-xl font-heading font-semibold mb-2">Usage Data</h3>
                <p>
                  We may also collect information on how you access and use our website and services, including your IP address, browser type, device information, pages you visit, time spent on those pages, and other diagnostic data.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">How We Use Your Information</h2>
                <p className="mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To allow you to participate in interactive features</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our services</li>
                  <li>To monitor the usage of our services</li>
                  <li>To detect, prevent and address technical issues</li>
                  <li>To send you marketing and promotional communications</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Disclosure of Your Information</h2>
                <p className="mb-4">
                  We may share your information with third parties in certain situations, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect and defend our rights or property</li>
                  <li>To prevent or investigate possible wrongdoing in connection with the service</li>
                  <li>To protect the personal safety of users of the service or the public</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Security of Your Data</h2>
                <p>
                  The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Your Data Protection Rights</h2>
                <p className="mb-4">
                  You have the following data protection rights:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>The right to access, update, or delete the information we have on you</li>
                  <li>The right of rectification - the right to have your information corrected if it is inaccurate or incomplete</li>
                  <li>The right to object to our processing of your personal data</li>
                  <li>The right of restriction - the right to request that we restrict the processing of your personal information</li>
                  <li>The right to data portability - the right to receive a copy of your personal data in a structured, machine-readable format</li>
                  <li>The right to withdraw consent at any time where we relied on your consent to process your personal information</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="p-4 border border-border/40 bg-card/50 rounded-lg">
                  <p>Email: privacy@aimaster.example.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 AI Street, Tech City, TC 12345, United States</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

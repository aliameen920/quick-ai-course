
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 px-6 md:px-12 flex items-center justify-between"
    >
      <div className="flex items-center">
        <motion.h2 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-heading font-bold text-2xl gradient-text"
        >
          AI<span className="text-foreground">Master</span>
        </motion.h2>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {["Features", "Curriculum", "Testimonials", "Pricing"].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * (i + 1), duration: 0.5 }}
            whileHover={{ y: -3 }}
            className="hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center"
          >
            {item}
          </motion.a>
        ))}
      </div>
      
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-accent hover:bg-accent/90 button-glow">
                Get Started
              </Button>
            </motion.div>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold gradient-text">Join AI Master Course</h2>
              <p className="text-muted-foreground">Fill out this form to get exclusive access to our AI course materials.</p>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input id="name" className="border rounded p-2 w-full" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" className="border rounded p-2 w-full" placeholder="you@example.com" type="email" />
                </div>
                <Button className="w-full mt-4 bg-accent hover:bg-accent/90">
                  Start Your AI Journey
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <AlertDialog open={showPopup} onOpenChange={setShowPopup}>
          <AlertDialogTrigger className="hidden">Open Popup</AlertDialogTrigger>
          <AlertDialogContent className="max-w-md rounded-xl overflow-hidden border-none p-0 bg-transparent shadow-2xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 12 }}
              className="bg-gradient-to-br from-violet-600 to-indigo-700 p-6 rounded-xl relative overflow-hidden"
            >
              <motion.div 
                className="absolute top-2 right-2"
                whileHover={{ scale: 1.2 }}
              >
                <button 
                  onClick={() => setShowPopup(false)}
                  className="text-white/80 hover:text-white p-1 rounded-full bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">Limited Time Offer!</h3>
                <p className="text-white/90 mb-4">Get 20% off when you enroll in the next 24 hours!</p>
                <Button 
                  className="w-full bg-white text-indigo-700 hover:bg-white/90" 
                  onClick={() => setShowPopup(false)}
                >
                  Claim Discount
                </Button>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 45, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </motion.nav>
  );
};

export default Navbar;


import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "Schedule", href: "#schedule" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full py-3 px-4 sm:px-6 md:px-8 flex items-center justify-between sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/20" 
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        {/* Mobile menu button on left for mobile */}
        {isMobile && (
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px] overflow-y-auto">
              <div className="flex flex-col gap-6 mt-8">
                <h2 className="font-heading font-bold text-xl"><span className="gradient-text">MWPro</span><span className="text-foreground"> Growth</span></h2>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a 
                      key={item.name} 
                      href={item.href}
                      className="text-lg font-medium hover:text-accent transition-colors" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <Button className="w-full" variant="outline" onClick={() => setMobileMenuOpen(false)}>
                    About Us
                  </Button>
                  <Button className="w-full mt-2" variant="outline" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
        
        <motion.h2 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-heading font-bold text-xl sm:text-2xl"
        >
          <Link to="/" className="text-foreground">
            <span className="gradient-text">MWPro</span><span className="text-foreground"> Growth</span>
          </Link>
        </motion.h2>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        {navItems.map((item, i) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * (i + 1), duration: 0.5 }}
            whileHover={{ y: -3 }}
            className="hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center"
          >
            {item.name}
          </motion.a>
        ))}
      </div>
      
      <div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-accent hover:bg-accent/90 button-glow">
            Get Started
          </Button>
        </motion.div>

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

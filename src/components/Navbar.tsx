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
  const navItems = [{
    name: "Features",
    href: "#features"
  }, {
    name: "Curriculum",
    href: "#curriculum"
  }, {
    name: "Testimonials",
    href: "#testimonials"
  }, {
    name: "Pricing",
    href: "#pricing"
  }, {
    name: "Schedule",
    href: "#schedule"
  }];
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
  return <motion.nav initial={{
    y: -20,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.5
  }} className={`w-full py-5 px-4 sm:px-8 md:px-10 flex items-center justify-between sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#132031] shadow-md border-b border-border/20" : "bg-[#132031]"}`}>
      {/* Logo Section - Always shown on both mobile and desktop */}
      <motion.div initial={{
      x: -20,
      opacity: 0
    }} animate={{
      x: 0,
      opacity: 1
    }} transition={{
      delay: 0.2,
      duration: 0.5
    }} className="flex items-center gap-3 px-2">
        <img src="/lovable-uploads/6a5a0a5a-3a32-4db2-a658-93393bb0c54f.png" alt="MWPro Growth Logo" className="h-20 md:h-20 object-contain" />
        {!isMobile && <h2 className="font-heading font-bold text-2xl sm:text-3xl">
            <Link to="/" className="text-white"></Link>
          </h2>}
      </motion.div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-base font-medium">
        {navItems.map((item, i) => <motion.a key={item.name} href={item.href} initial={{
        y: -10,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.1 * (i + 1),
        duration: 0.5
      }} whileHover={{
        y: -3
      }} className="text-white hover:text-mwpro-light-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-mwpro-light-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center">
            {item.name}
          </motion.a>)}
      </div>
      
      {/* Mobile Actions and Desktop Get Started Button */}
      <div className="flex items-center gap-3">
        {/* Get Started Button - Only on Desktop */}
        {!isMobile && <motion.div whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }}>
            <Button size="lg" className="bg-mwpro-light-blue hover:bg-mwpro-blue text-[#132031] font-semibold button-mwpro text-base">
              Get Started
            </Button>
          </motion.div>}

        {/* Mobile Menu Button - Only on Mobile */}
        {isMobile && <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white h-12 w-12">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px] overflow-y-auto bg-[#132031]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <img src="/lovable-uploads/6a5a0a5a-3a32-4db2-a658-93393bb0c54f.png" alt="MWPro Growth Logo" className="h-20" />
                </div>
                <div className="flex flex-col space-y-5">
                  {navItems.map(item => <a key={item.name} href={item.href} className="text-xl font-medium text-white hover:text-mwpro-light-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </a>)}
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/20">
                  <Button className="w-full text-base" variant="outline" onClick={() => setMobileMenuOpen(false)}>
                    About Us
                  </Button>
                  {/* Get Started Button - Now inside mobile menu */}
                  <Button className="w-full mt-3 bg-mwpro-light-blue text-[#132031] hover:bg-mwpro-blue font-semibold text-base button-mwpro" size="lg" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>}

        <AlertDialog open={showPopup} onOpenChange={setShowPopup}>
          <AlertDialogTrigger className="hidden">Open Popup</AlertDialogTrigger>
          <AlertDialogContent className="max-w-md rounded-xl overflow-hidden border-none p-0 bg-transparent shadow-2xl">
            <motion.div initial={{
            scale: 0.8,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0.8,
            opacity: 0
          }} transition={{
            type: "spring",
            damping: 12
          }} className="bg-gradient-to-br from-mwpro-blue to-mwpro-light-blue p-6 rounded-xl relative overflow-hidden">
              <motion.div className="absolute top-2 right-2" whileHover={{
              scale: 1.2
            }}>
                <button onClick={() => setShowPopup(false)} className="text-white/80 hover:text-white p-1 rounded-full bg-white/10">
                  <X className="h-5 w-5" />
                </button>
              </motion.div>
              
              <motion.div initial={{
              y: 20,
              opacity: 0
            }} animate={{
              y: 0,
              opacity: 1
            }} transition={{
              delay: 0.2
            }}>
                <h3 className="text-xl font-bold text-white mb-2">Limited Time Offer!</h3>
                <p className="text-white/90 mb-4">Get 20% off when you enroll in the next 24 hours!</p>
                <Button className="w-full bg-white text-mwpro-blue hover:bg-white/90" onClick={() => setShowPopup(false)}>
                  Claim Discount
                </Button>
              </motion.div>
              
              <motion.div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full" animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0]
            }} transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }} />
            </motion.div>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </motion.nav>;
};
export default Navbar;
import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RunningLogo } from "../../../../components/ui/running-logo";

export const NavbarByAnima = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "Resources", href: "/resources" },
    { title: "About Us", href: "/about" },
    { title: "Employee Management", href: "/employee-management" },
  ];

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 font-jost ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="h-16 max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between"
      >
        <Link to="/" className="flex items-center">
          <RunningLogo />
        </Link>

        <button
          className="md:hidden p-2 rounded-full hover:bg-app-accent/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-dark-primary text-lg font-medium hover:text-app-primary transition-colors ${
                      location.pathname === link.href ? "text-app-primary" : ""
                    }`}
                    aria-current={location.pathname === link.href ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Button
                    className="w-full bg-app-primary hover:bg-app-secondary text-white text-lg py-3"
                    aria-label="Sign up"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-dark-primary font-medium hover:text-app-primary transition-colors ${
                location.pathname === link.href ? "text-app-primary" : ""
              }`}
              aria-current={location.pathname === link.href ? "page" : undefined}
            >
              {link.title}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-dark-primary hover:text-app-primary text-base"
              aria-label="Custom request"
            >
              Custom Request
            </Button>
            <Button
              className="bg-app-primary hover:bg-app-secondary px-6 py-2 text-white text-base"
              aria-label="Contact sales"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
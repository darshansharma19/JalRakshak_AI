import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Droplets, Menu, X } from 'lucide-react';

interface NavigationProps {
  onViewDashboard: () => void;
  onRequestPilot: () => void;
}

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'Pilot', href: '#pilot' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation({ onViewDashboard, onRequestPilot }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Determine active section
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a 
              href="#" 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center"
                whileHover={{ rotate: 10 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Droplets className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-white font-bold text-xl hidden sm:block">JalRakshak AI</span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-all ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-cyan-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-cyan-500/10 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onViewDashboard}
                  className="text-slate-300 hover:text-white hover:bg-white/5"
                >
                  Dashboard
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="sm"
                  onClick={onRequestPilot}
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-lg shadow-cyan-500/20"
                >
                  Request Pilot
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden"
          >
            <div className="bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-4 mx-4 rounded-2xl shadow-2xl">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`px-4 py-3 text-left rounded-lg transition-all ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    onViewDashboard();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full border-slate-700 text-slate-300"
                >
                  View Dashboard
                </Button>
                <Button
                  onClick={() => {
                    onRequestPilot();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
                >
                  Request Pilot
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

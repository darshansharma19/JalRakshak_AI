import { motion } from 'framer-motion';
import { Droplets, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Github } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Features', href: '#solution' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pilot' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Impact', href: '#impact' },
    { label: 'Partners', href: '#pilot' },
    { label: 'Careers', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Case Studies', href: '#impact' },
    { label: 'Blog', href: '#' },
    { label: 'Support', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Github, href: '#', label: 'GitHub' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-2">
            <motion.a 
              href="#" 
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center"
                whileHover={{ rotate: 10 }}
              >
                <Droplets className="w-7 h-7 text-white" />
              </motion.div>
              <span className="text-white font-bold text-2xl">JalRakshak AI</span>
            </motion.a>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Community-owned smart groundwater protection and prediction system for rural India.
            </p>
            <div className="space-y-4">
              <motion.a 
                href="mailto:contact@jalrakshak.ai" 
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5" />
               darshusharma9755@gmail.com
              </motion.a>
              <motion.a 
                href="tel:+919876543210" 
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5" />
                +91 9179136979
              </motion.a>
              <motion.div 
                className="flex items-center gap-3 text-slate-400"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5" />
                Indore, India
              </motion.div>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} JalRakshak AI. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

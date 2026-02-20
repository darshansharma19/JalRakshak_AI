import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplets, Activity, Shield, ChevronDown } from 'lucide-react';

interface HeroProps {
  onViewDashboard: () => void;
  onRequestPilot: () => void;
}

export function Hero({ onViewDashboard, onRequestPilot }: HeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img 
          src="/images/hero-bg.jpg" 
          alt="Water Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Glowing Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: 150 + i * 100,
              height: 150 + i * 100,
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: `radial-gradient(circle, rgba(6, 182, 212, ${0.1 - i * 0.015}) 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
          />
        ))}
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        style={{ opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="text-cyan-300 text-sm font-medium">AI-Powered Groundwater Monitoring</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
        >
          <span className="block">Predicting Water</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Crisis Before It Happens
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          JalRakshak AI combines IoT sensors, machine learning, and community engagement 
          to protect groundwater resources and prevent borewell failures in rural India.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: Droplets, text: 'Real-time Monitoring' },
            { icon: Activity, text: 'AI Predictions' },
            { icon: Shield, text: 'Community Owned' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <item.icon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              onClick={onViewDashboard}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl shadow-cyan-500/30 transition-all"
            >
              View Live Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              variant="outline"
              onClick={onRequestPilot}
              className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-7 text-lg rounded-2xl backdrop-blur-sm"
            >
              Request Pilot Deployment
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            {[
              { value: '600M+', label: 'People Dependent' },
              { value: '164K', label: 'Villages at Risk' },
              { value: '87%', label: 'Agriculture Usage' },
              { value: '90 Days', label: 'Prediction Window' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <motion.div 
                  className="text-3xl sm:text-4xl font-bold text-white mb-2"
                  whileHover={{ scale: 1.1, color: '#22d3ee' }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

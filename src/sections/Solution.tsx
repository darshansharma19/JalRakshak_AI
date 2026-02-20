import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Radio, Brain, LayoutDashboard, ArrowRight } from 'lucide-react';

const solutionLayers = [
  {
    icon: Cpu,
    title: 'IoT Sensor Layer',
    subtitle: 'Real-time Data Collection',
    description: 'Solar-powered monitoring nodes equipped with pressure transducers, TDS sensors, and temperature probes continuously measure groundwater levels and quality.',
    features: [
      'Water level monitoring (0-100m depth)',
      'TDS & pH quality measurement',
      'Solar + battery power system',
      'IP67 weatherproof enclosure',
    ],
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/10',
  },
  {
    icon: Radio,
    title: 'Data Transmission Layer',
    subtitle: 'Reliable Connectivity',
    description: 'Multi-mode connectivity ensures data reaches the cloud even in remote rural areas with limited infrastructure.',
    features: [
      'GSM/GPRS cellular connectivity',
      'LoRaWAN for low-power transmission',
      'Edge buffering during outages',
      'Encrypted data transmission',
    ],
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Brain,
    title: 'AI Prediction Engine',
    subtitle: 'Intelligent Forecasting',
    description: 'Hybrid machine learning models analyze historical patterns, rainfall data, and extraction rates to predict depletion 30-90 days in advance.',
    features: [
      'LSTM neural networks',
      'ARIMA seasonal modeling',
      'Prophet trend analysis',
      'Ensemble prediction engine',
    ],
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-500/10',
  },
  {
    icon: LayoutDashboard,
    title: 'Community Dashboard',
    subtitle: 'Actionable Insights',
    description: 'Intuitive web and mobile dashboards provide real-time visibility, alerts, and recommendations to farmers and Panchayat leaders.',
    features: [
      'Real-time water level charts',
      'Risk level indicators',
      'SMS alerts in local languages',
      'Gamified conservation scoring',
    ],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Solution() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-5 py-2 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-6 border border-teal-500/20"
            whileHover={{ scale: 1.05 }}
          >
            Our Solution
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Four Layers of{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Protection
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            JalRakshak AI combines hardware, connectivity, artificial intelligence, 
            and community engagement into a comprehensive groundwater protection system.
          </p>
        </motion.div>

        {/* Architecture Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="bg-slate-900/50 border-slate-800 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center items-center gap-4">
                {solutionLayers.map((layer, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div
                      className={`flex flex-col items-center p-5 rounded-2xl bg-gradient-to-br ${layer.bgColor} border border-slate-700/50 min-w-[160px] cursor-pointer`}
                      whileHover={{ 
                        scale: 1.08, 
                        boxShadow: `0 0 30px rgba(6, 182, 212, 0.2)`,
                        borderColor: 'rgba(6, 182, 212, 0.5)'
                      }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <motion.div 
                        className={`p-3 rounded-xl bg-gradient-to-br ${layer.color} mb-3`}
                        whileHover={{ rotate: 10 }}
                      >
                        <layer.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <span className="text-white font-semibold text-sm text-center">{layer.title}</span>
                      <span className="text-slate-400 text-xs text-center mt-1">{layer.subtitle}</span>
                    </motion.div>
                    {index < solutionLayers.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <ArrowRight className="w-6 h-6 text-slate-600 mx-3 hidden sm:block" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sensor Device Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-8">
                <motion.img 
                  src="/images/sensor-device.jpg" 
                  alt="IoT Sensor Device"
                  className="w-full rounded-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-sm font-medium">Live Monitoring Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <div>
              <motion.h3 
                className="text-3xl font-bold text-white mb-6"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Smart Sensor Technology
              </motion.h3>
              <motion.p 
                className="text-slate-400 text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                Our submersible IoT nodes are designed for harsh rural conditions. 
                With IP67 rating, solar power, and 7+ days battery backup, they 
                provide uninterrupted monitoring year-round.
              </motion.p>
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                {[
                  { label: 'Accuracy', value: '±0.1%' },
                  { label: 'Depth Range', value: '0-100m' },
                  { label: 'Battery Life', value: '7+ days' },
                  { label: 'Data Interval', value: '15 min' },
                ].map((spec, i) => (
                  <motion.div 
                    key={i}
                    className="p-4 rounded-xl bg-slate-800/50 border border-slate-700"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                  >
                    <div className="text-slate-400 text-sm">{spec.label}</div>
                    <div className="text-cyan-400 text-xl font-bold">{spec.value}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Layer Cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {solutionLayers.map((layer, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-600 transition-all h-full group overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <motion.div 
                        className={`p-4 rounded-2xl bg-gradient-to-br ${layer.color} flex-shrink-0`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <layer.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">{layer.title}</h3>
                        <p className={`text-sm bg-gradient-to-r ${layer.color} bg-clip-text text-transparent font-medium mb-4`}>
                          {layer.subtitle}
                        </p>
                        <p className="text-slate-400 mb-5 leading-relaxed">{layer.description}</p>
                        
                        <ul className="space-y-3">
                          {layer.features.map((feature, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-center gap-3 text-sm text-slate-300"
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.7 + i * 0.1 }}
                            >
                              <motion.div 
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${layer.color}`}
                                whileHover={{ scale: 1.5 }}
                              />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, TrendingDown, Users, Sprout } from 'lucide-react';

function AnimatedCounter({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const problemCards = [
  {
    icon: TrendingDown,
    title: 'Groundwater Depletion',
    stat: '60.63',
    suffix: '%',
    statLabel: 'of replenishable resources extracted',
    description: 'India extracts more groundwater than the US and China combined, with extraction exceeding recharge in critical states.',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: AlertTriangle,
    title: 'Borewell Failures',
    stat: '70',
    suffix: '%',
    statLabel: 'failure rate within 10 years',
    description: 'Farmers face devastating losses as borewells fail suddenly, forcing them deeper into debt with each new drilling attempt.',
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Users,
    title: 'Rural Communities',
    stat: '600',
    suffix: 'M',
    statLabel: 'people dependent on groundwater',
    description: 'Over 600 million Indians rely on groundwater for drinking, with rural communities most vulnerable to depletion.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Sprout,
    title: 'Agriculture at Risk',
    stat: '87',
    suffix: '%',
    statLabel: 'of groundwater used for agriculture',
    description: 'Indian agriculture depends heavily on groundwater irrigation, making crop yields vulnerable to water scarcity.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
  },
];

const crisisStates = [
  { state: 'Punjab', extraction: 156, status: 'Critical', color: 'text-red-500' },
  { state: 'Haryana', extraction: 137, status: 'Critical', color: 'text-red-500' },
  { state: 'Rajasthan', extraction: 147, status: 'Critical', color: 'text-red-500' },
  { state: 'Delhi', extraction: 92, status: 'High Risk', color: 'text-orange-500' },
  { state: 'Karnataka', extraction: 66, status: 'Moderate', color: 'text-yellow-500' },
];

export function Problem() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const isImageInView = useInView(imageRef, { once: true, margin: '-50px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={sectionRef} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
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
            className="inline-block px-5 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-6 border border-red-500/20"
            whileHover={{ scale: 1.05 }}
          >
            The Crisis
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            India's Groundwater{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Emergency
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            India faces the world's most severe groundwater crisis. Without intervention, 
            millions of rural communities will lose access to their primary water source.
          </p>
        </motion.div>

        {/* Crisis Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isImageInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 relative"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <motion.img 
              src="/images/crisis-visual.jpg" 
              alt="Groundwater Crisis"
              className="w-full h-[400px] object-cover"
              style={{ y: imageY }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="max-w-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  When the Water Runs Out
                </h3>
                <p className="text-slate-300">
                  Failed borewells devastate rural livelihoods. Farmers are forced into debt, 
                  crops fail, and communities face an uncertain future.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {problemCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all h-full group overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <motion.div 
                        className={`p-4 rounded-2xl ${card.bgColor} flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <card.icon className={`w-7 h-7 bg-gradient-to-br ${card.color}`} style={{ stroke: 'url(#iconGradient)' }} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className={`text-4xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                            <AnimatedCounter target={parseFloat(card.stat)} suffix={card.suffix} />
                          </span>
                          <span className="text-slate-400 text-sm">{card.statLabel}</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Crisis States Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="bg-slate-900/50 border-slate-800 overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">State-wise Groundwater Extraction Crisis</h3>
              <div className="space-y-6">
                {crisisStates.map((state, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-32 font-medium text-white">{state.state}</div>
                    <div className="flex-1">
                      <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full rounded-full bg-gradient-to-r ${state.color.replace('text-', 'from-').replace('500', '500')} to-transparent`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${Math.min(state.extraction, 100)}%` } : {}}
                          transition={{ duration: 1.5, delay: 1 + index * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                    <div className={`w-20 font-bold ${state.color}`}>{state.extraction}%</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${state.color.replace('text-', 'bg-').replace('500', '500/10')} ${state.color} border ${state.color.replace('text-', 'border-').replace('500', '500/30')}`}>
                      {state.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

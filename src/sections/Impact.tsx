import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { 
  Shield, 
  TrendingUp, 
  Droplets, 
  Leaf, 
  Users, 
  Sprout,
  CheckCircle2,
  Quote
} from 'lucide-react';

const impactMetrics = [
  {
    icon: Shield,
    title: 'Prevent Borewell Failure',
    current: '70%',
    target: '40%',
    description: 'Reduce borewell failure rate from 70% to 40% through early warning and preventive action.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'Crop Yield Stability',
    current: 'Variable',
    target: '+25%',
    description: 'Improve agricultural income stability by 25% through reliable water access planning.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    current: '0%',
    target: '30%',
    description: 'Achieve 30% reduction in agricultural water waste through optimized irrigation.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Leaf,
    title: 'Climate Resilience',
    current: 'Low',
    target: 'High',
    description: 'Build community resilience to drought and climate variability.',
    color: 'from-green-500 to-emerald-500',
  },
];

const projectionData = [
  { year: 'Year 1', villages: 50, farmers: 2500, waterSaved: 150, failuresPrevented: 45 },
  { year: 'Year 2', villages: 200, farmers: 12000, waterSaved: 720, failuresPrevented: 180 },
  { year: 'Year 3', villages: 500, farmers: 35000, waterSaved: 2100, failuresPrevented: 450 },
  { year: 'Year 4', villages: 1000, farmers: 75000, waterSaved: 4500, failuresPrevented: 900 },
  { year: 'Year 5', villages: 2000, farmers: 150000, waterSaved: 9000, failuresPrevented: 1800 },
];

const testimonials = [
  {
    quote: "Before JalRakshak, we had no idea our borewell was about to fail. Now we get alerts 2 months in advance and can plan accordingly.",
    author: "Ramesh Patel",
    role: "Farmer, Kolar District",
    village: "Grama Panchayat Kolar",
  },
  {
    quote: "The dashboard helps our Panchayat make collective decisions about water allocation. It's brought our community together.",
    author: "Lakshmi Devi",
    role: "Panchayat President",
    village: "Village Malur",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Impact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
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
            className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6 border border-emerald-500/20"
            whileHover={{ scale: 1.05 }}
          >
            Impact
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Measurable{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Change
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            JalRakshak AI delivers tangible benefits to rural communities, 
            from preventing borewell failures to improving agricultural livelihoods.
          </p>
        </motion.div>

        {/* Community Impact Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src="/images/community-impact.jpg" 
              alt="Community Impact"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold text-white mb-3">
                Empowering Rural Communities
              </h3>
              <p className="text-slate-300 text-lg max-w-2xl">
                Technology that puts farmers first. Real-time data, AI-powered insights, 
                and community-driven water governance.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Impact Metrics Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {impactMetrics.map((metric, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div whileHover={{ y: -8, transition: { duration: 0.2 } }}>
                <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-600 transition-all h-full group overflow-hidden">
                  <CardContent className="p-6">
                    <motion.div 
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${metric.color} mb-5`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <metric.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white mb-3">{metric.title}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-slate-500 text-sm">Current:</span>
                      <span className="text-slate-400 font-medium">{metric.current}</span>
                      <motion.span 
                        className="text-slate-600"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                      <span className={`text-xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                        {metric.target}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{metric.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* 5-Year Projection Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <Card className="bg-slate-900/50 border-slate-800 overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">5-Year Impact Projection</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Villages & Farmers Chart */}
                <div>
                  <h4 className="text-sm text-slate-400 mb-4">Communities Reached</h4>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={projectionData}>
                        <defs>
                          <linearGradient id="villageGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="farmerGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                        <XAxis dataKey="year" stroke="#64748b" fontSize={12} />
                        <YAxis yAxisId="left" stroke="#64748b" fontSize={12} />
                        <YAxis yAxisId="right" orientation="right" stroke="#64748b" fontSize={12} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#0f172a', 
                            border: '1px solid #1e293b',
                            borderRadius: '8px'
                          }}
                        />
                        <Area 
                          yAxisId="left"
                          type="monotone" 
                          dataKey="villages" 
                          name="Villages"
                          stroke="#06b6d4" 
                          strokeWidth={2}
                          fill="url(#villageGradient)"
                        />
                        <Area 
                          yAxisId="right"
                          type="monotone" 
                          dataKey="farmers" 
                          name="Farmers"
                          stroke="#10b981" 
                          strokeWidth={2}
                          fill="url(#farmerGradient)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-cyan-400" />
                      <span className="text-sm text-slate-400">Villages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      <span className="text-sm text-slate-400">Farmers</span>
                    </div>
                  </div>
                </div>

                {/* Water Saved */}
                <div>
                  <h4 className="text-sm text-slate-400 mb-4">Water Saved (Million Liters)</h4>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={projectionData}>
                        <defs>
                          <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                        <XAxis dataKey="year" stroke="#64748b" fontSize={12} />
                        <YAxis stroke="#64748b" fontSize={12} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#0f172a', 
                            border: '1px solid #1e293b',
                            borderRadius: '8px'
                          }}
                          formatter={(value: number) => [`${value}M L`, 'Water Saved']}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="waterSaved" 
                          name="Water Saved (Million L)"
                          stroke="#3b82f6" 
                          strokeWidth={2}
                          fill="url(#waterGradient)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <motion.div 
                    className="mt-4 p-5 rounded-xl bg-blue-500/10 border border-blue-500/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4">
                      <Droplets className="w-8 h-8 text-blue-400" />
                      <div>
                        <div className="text-white text-2xl font-bold">9 Billion Liters</div>
                        <div className="text-blue-400 text-sm">Projected water saved by Year 5</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 overflow-hidden">
            <CardContent className="p-10">
              <h3 className="text-2xl font-semibold text-white mb-10 text-center">Key Benefits for Communities</h3>
              
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    icon: Sprout,
                    title: 'Agricultural Security',
                    color: 'emerald',
                    items: [
                      'Predict borewell failures 60-90 days ahead',
                      'Optimize irrigation scheduling',
                      'Reduce crop loss from water shortage',
                      'Plan crop selection based on water availability',
                    ],
                  },
                  {
                    icon: Users,
                    title: 'Community Empowerment',
                    color: 'cyan',
                    items: [
                      'Data-driven water governance',
                      'Equitable water distribution',
                      'Collective decision-making',
                      'Transparent resource management',
                    ],
                  },
                  {
                    icon: Shield,
                    title: 'Financial Protection',
                    color: 'amber',
                    items: [
                      'Avoid costly emergency drilling',
                      'Reduce debt from failed borewells',
                      'Stable agricultural income',
                      'Lower water pumping costs',
                    ],
                  },
                ].map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${benefit.color}-500/10 mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <benefit.icon className={`w-8 h-8 text-${benefit.color}-400`} />
                    </motion.div>
                    <h4 className="text-xl font-semibold text-white mb-5">{benefit.title}</h4>
                    <ul className="space-y-3 text-left">
                      {benefit.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                          <CheckCircle2 className={`w-5 h-5 text-${benefit.color}-400 flex-shrink-0 mt-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Community Voices</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-slate-900/50 border-slate-800 h-full">
                  <CardContent className="p-8">
                    <Quote className="w-10 h-10 text-cyan-500/30 mb-4" />
                    <blockquote className="text-slate-300 mb-6 text-lg leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-white font-bold">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </motion.div>
                      <div>
                        <div className="text-white font-medium">{testimonial.author}</div>
                        <div className="text-slate-400 text-sm">{testimonial.role}</div>
                        <div className="text-slate-500 text-xs">{testimonial.village}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

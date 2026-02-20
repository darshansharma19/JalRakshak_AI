import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { 
  Droplets, 
  AlertTriangle, 
  TrendingDown, 
  Calendar, 
  Thermometer, 
  Activity,
  Award,
  Users,
  Bell,
  CheckCircle2,
  Info,
  Brain,
  Zap
} from 'lucide-react';
import { generateVillageData, generateAIInsights, type VillageData, type AIInsight } from '@/data/waterData';

// Simulated live data hook
function useLiveData() {
  const [villageData, setVillageData] = useState<VillageData>(() => generateVillageData());
  const [insights, setInsights] = useState<AIInsight[]>(() => generateAIInsights(generateVillageData()));
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    const data = generateVillageData();
    setVillageData(data);
    setInsights(generateAIInsights(data));

    const interval = setInterval(() => {
      setVillageData(prev => {
        const newReading = {
          timestamp: new Date().toISOString(),
          waterLevel: Math.max(8, prev.currentLevel + (Math.random() - 0.5) * 0.02),
          tds: prev.readings[prev.readings.length - 1].tds + Math.floor((Math.random() - 0.5) * 5),
          temperature: prev.readings[prev.readings.length - 1].temperature + (Math.random() - 0.5) * 0.2,
          extractionRate: Math.max(500, prev.readings[prev.readings.length - 1].extractionRate + Math.floor((Math.random() - 0.5) * 50)),
          rainfall: 0
        };
        
        const newReadings = [...prev.readings.slice(-89), newReading];
        const updated = {
          ...prev,
          currentLevel: newReading.waterLevel,
          readings: newReadings
        };
        setInsights(generateAIInsights(updated));
        setLastUpdate(new Date());
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { villageData, insights, lastUpdate };
}

function getRiskColor(risk: string) {
  switch (risk) {
    case 'low': return 'bg-emerald-500';
    case 'medium': return 'bg-yellow-500';
    case 'high': return 'bg-orange-500';
    case 'critical': return 'bg-red-500';
    default: return 'bg-slate-500';
  }
}

function getRiskTextColor(risk: string) {
  switch (risk) {
    case 'low': return 'text-emerald-400';
    case 'medium': return 'text-yellow-400';
    case 'high': return 'text-orange-400';
    case 'critical': return 'text-red-400';
    default: return 'text-slate-400';
  }
}

function getInsightIcon(type: string) {
  switch (type) {
    case 'warning': return AlertTriangle;
    case 'alert': return Bell;
    case 'recommendation': return CheckCircle2;
    case 'info': return Info;
    default: return Info;
  }
}

function getInsightColor(type: string) {
  switch (type) {
    case 'warning': return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
    case 'alert': return 'bg-red-500/10 text-red-400 border-red-500/30';
    case 'recommendation': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    case 'info': return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    default: return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
  }
}

export function Dashboard() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { villageData, insights, lastUpdate } = useLiveData();
  const [selectedTimeRange, setSelectedTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  const chartData = villageData.readings.slice(selectedTimeRange === '7d' ? -7 : selectedTimeRange === '30d' ? -30 : -90).map(r => ({
    date: new Date(r.timestamp).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
    waterLevel: r.waterLevel,
    tds: r.tds,
    extraction: r.extractionRate,
    rainfall: r.rainfall
  }));

  const daysUntilDry = Math.ceil((villageData.predictedDryDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <section ref={sectionRef} id="dashboard" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 border border-cyan-500/20"
            whileHover={{ scale: 1.05 }}
          >
            Live Demo
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Village Water{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-6">
            Real-time groundwater monitoring and AI-powered predictions for {villageData.name}, {villageData.district}
          </p>
          <motion.div 
            className="flex items-center justify-center gap-3 text-sm text-slate-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Live data • Last updated: {lastUpdate.toLocaleTimeString('en-IN')}</span>
          </motion.div>
        </motion.div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Key Metrics */}
          <div className="space-y-6">
            {/* Risk Level Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div whileHover={{ y: -5 }}>
                <Card className="bg-slate-900/50 border-slate-800 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-slate-400 text-sm flex items-center gap-2">
                        <Activity className="w-4 h-4" />
                        Current Risk Level
                      </span>
                      <motion.div 
                        className={`w-3 h-3 rounded-full ${getRiskColor(villageData.riskLevel)}`}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`text-4xl font-bold capitalize ${getRiskTextColor(villageData.riskLevel)}`}>
                        {villageData.riskLevel}
                      </span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={((villageData.currentLevel - villageData.minLevel) / (villageData.maxLevel - villageData.minLevel)) * 100} 
                        className="h-3 bg-slate-800"
                      />
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${((villageData.currentLevel - villageData.minLevel) / (villageData.maxLevel - villageData.minLevel)) * 100}%` }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                      />
                    </div>
                    <p className="text-slate-500 text-sm mt-3">
                      Water level: <span className="text-white font-medium">{villageData.currentLevel.toFixed(2)}m</span> / {villageData.maxLevel}m max
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Predicted Dry Date */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div whileHover={{ y: -5 }}>
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-slate-400 text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Predicted Critical Level
                      </span>
                    </div>
                    <motion.div 
                      className="text-5xl font-bold text-white mb-2"
                      key={daysUntilDry}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {daysUntilDry}
                      <span className="text-xl text-slate-400 ml-2">days</span>
                    </motion.div>
                    <p className="text-slate-400 text-sm mb-5">
                      Estimated: {villageData.predictedDryDate.toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </p>
                    <motion.div 
                      className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3 text-yellow-400">
                        <AlertTriangle className="w-5 h-5" />
                        <span className="text-sm font-medium">Plan conservation measures</span>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Water Quality */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div whileHover={{ y: -5 }}>
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-slate-400 text-sm flex items-center gap-2">
                        <Droplets className="w-4 h-4" />
                        Water Quality (TDS)
                      </span>
                    </div>
                    <motion.div 
                      className="text-4xl font-bold text-white mb-3"
                      key={villageData.readings[villageData.readings.length - 1].tds}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                    >
                      {villageData.readings[villageData.readings.length - 1].tds} 
                      <span className="text-lg text-slate-400">ppm</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Badge 
                        variant="outline" 
                        className={`${
                          villageData.readings[villageData.readings.length - 1].tds < 500 
                            ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10' 
                            : villageData.readings[villageData.readings.length - 1].tds < 800 
                              ? 'border-yellow-500 text-yellow-400 bg-yellow-500/10' 
                              : 'border-orange-500 text-orange-400 bg-orange-500/10'
                        }`}
                      >
                        {villageData.readings[villageData.readings.length - 1].tds < 500 
                          ? 'Good' 
                          : villageData.readings[villageData.readings.length - 1].tds < 800 
                            ? 'Acceptable' 
                            : 'Monitor'
                        }
                      </Badge>
                    </motion.div>
                    <div className="mt-5 flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-300 text-sm">
                          {villageData.readings[villageData.readings.length - 1].temperature.toFixed(1)}°C
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Village Water Score */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div whileHover={{ y: -5 }}>
                <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-slate-400 text-sm flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-500" />
                        Village Water Score
                      </span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="relative w-24 h-24">
                        <svg className="w-full h-full -rotate-90">
                          <circle cx="48" cy="48" r="44" fill="none" stroke="#1e293b" strokeWidth="8" />
                          <motion.circle
                            cx="48"
                            cy="48"
                            r="44"
                            fill="none"
                            stroke="url(#scoreGradient)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={`${(villageData.waterScore / 100) * 276} 276`}
                            initial={{ strokeDasharray: '0 276' }}
                            animate={{ strokeDasharray: `${(villageData.waterScore / 100) * 276} 276` }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                          />
                          <defs>
                            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#10b981" />
                              <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.span 
                            className="text-2xl font-bold text-white"
                            key={villageData.waterScore}
                            initial={{ scale: 1.3 }}
                            animate={{ scale: 1 }}
                          >
                            {villageData.waterScore}
                          </motion.span>
                        </div>
                      </div>
                      <div>
                        <motion.div 
                          className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-sm font-medium mb-2 inline-block"
                          whileHover={{ scale: 1.05 }}
                        >
                          Gold Rank
                        </motion.div>
                        <p className="text-slate-400 text-sm">
                          Top 15% in {villageData.district} district
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Middle & Right - Charts & Insights */}
          <div className="lg:col-span-2 space-y-6">
            {/* Water Level Chart */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div whileHover={{ y: -3 }}>
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-lg flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-cyan-400" />
                        Water Level Trend
                      </CardTitle>
                      <div className="flex gap-2">
                        {(['7d', '30d', '90d'] as const).map((range) => (
                          <motion.button
                            key={range}
                            onClick={() => setSelectedTimeRange(range)}
                            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                              selectedTimeRange === range
                                ? 'bg-cyan-500 text-white'
                                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {range}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <defs>
                            <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4}/>
                              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                          <XAxis dataKey="date" stroke="#64748b" fontSize={12} tickLine={false} />
                          <YAxis 
                            stroke="#64748b" 
                            fontSize={12} 
                            tickLine={false}
                            domain={['dataMin - 1', 'dataMax + 1']}
                            label={{ value: 'Depth (m)', angle: -90, position: 'insideLeft', fill: '#64748b' }}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#0f172a', 
                              border: '1px solid #1e293b',
                              borderRadius: '12px',
                              padding: '12px'
                            }}
                            labelStyle={{ color: '#94a3b8' }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="waterLevel" 
                            stroke="#06b6d4" 
                            strokeWidth={3}
                            fill="url(#waterGradient)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* AI Insights */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div whileHover={{ y: -3 }}>
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-lg flex items-center gap-2">
                      <Brain className="w-5 h-5 text-purple-400" />
                      AI Insights & Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <AnimatePresence mode="popLayout">
                        {insights.slice(0, 4).map((insight, index) => {
                          const Icon = getInsightIcon(insight.type);
                          return (
                            <motion.div
                              key={insight.id}
                              layout
                              initial={{ opacity: 0, x: -20, scale: 0.95 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              exit={{ opacity: 0, x: 20, scale: 0.95 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02, x: 5 }}
                              className={`p-4 rounded-xl border ${getInsightColor(insight.type)} cursor-pointer`}
                            >
                              <div className="flex items-start gap-4">
                                <motion.div
                                  whileHover={{ rotate: 10 }}
                                  className="p-2 rounded-lg bg-white/5"
                                >
                                  <Icon className="w-5 h-5 flex-shrink-0" />
                                </motion.div>
                                <div>
                                  <h4 className="font-semibold text-sm mb-1">{insight.title}</h4>
                                  <p className="text-sm opacity-80 leading-relaxed">{insight.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Bottom Row - Extraction & Community */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Extraction Rate */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div whileHover={{ y: -3 }}>
                  <Card className="bg-slate-900/50 border-slate-800">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-sm flex items-center gap-2">
                        <Zap className="w-4 h-4 text-emerald-400" />
                        Daily Extraction Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData.slice(-7)}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                            <XAxis dataKey="date" stroke="#64748b" fontSize={10} tickLine={false} />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#0f172a', 
                                border: '1px solid #1e293b',
                                borderRadius: '8px'
                              }}
                            />
                            <Bar dataKey="extraction" radius={[6, 6, 0, 0]}>
                              {chartData.slice(-7).map((_, index) => (
                                <Cell 
                                  key={`cell-${index}`} 
                                  fill={index === 6 ? '#06b6d4' : '#10b981'} 
                                />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="mt-4 text-center">
                        <motion.span 
                          className="text-3xl font-bold text-white"
                          key={villageData.readings[villageData.readings.length - 1].extractionRate}
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                        >
                          {villageData.readings[villageData.readings.length - 1].extractionRate.toLocaleString()}
                        </motion.span>
                        <span className="text-slate-400 text-sm ml-1">L/day</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Community Stats */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div whileHover={{ y: -3 }}>
                  <Card className="bg-slate-900/50 border-slate-800">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-sm flex items-center gap-2">
                        <Users className="w-4 h-4 text-amber-400" />
                        Community Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { label: 'Active Farmers', value: '247' },
                          { label: 'Monitoring Nodes', value: '12' },
                          { label: 'Avg. Borewell Depth', value: '185m' },
                          { label: 'Conservation Pledges', value: '89%', color: 'text-emerald-400' },
                        ].map((stat, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.7 + i * 0.1 }}
                          >
                            <span className="text-slate-400 text-sm">{stat.label}</span>
                            <span className={`font-semibold ${stat.color || 'text-white'}`}>{stat.value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

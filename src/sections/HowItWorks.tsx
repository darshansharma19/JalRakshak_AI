import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sun, Wifi, Brain, MessageSquare, Battery, Settings } from 'lucide-react';

const steps = [
  {
    id: 'sensor',
    icon: Settings,
    title: 'IoT Sensor Deployment',
    description: 'Solar-powered monitoring nodes are installed in borewells across the village, continuously measuring water levels and quality.',
    specs: [
      'Pressure transducer: 0-100m range, ±0.1% accuracy',
      'TDS sensor: 0-5000 ppm range',
      'Temperature sensor: ±0.5°C accuracy',
      'Data logging: Every 15 minutes',
    ],
  },
  {
    id: 'power',
    icon: Battery,
    title: 'Solar Power System',
    description: 'Each node operates autonomously with a solar-battery system designed for year-round operation in rural conditions.',
    specs: [
      '10W monocrystalline solar panel',
      '12V 7Ah LiFePO4 battery (3000+ cycles)',
      'MPPT charge controller',
      '7+ days autonomy without sun',
    ],
  },
  {
    id: 'connectivity',
    icon: Wifi,
    title: 'Data Transmission',
    description: 'Multi-mode connectivity ensures reliable data transmission even in areas with limited infrastructure.',
    specs: [
      'GSM/GPRS for cellular coverage areas',
      'LoRaWAN for low-power long-range',
      'Edge buffering during outages',
      'AES-256 encrypted transmission',
    ],
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Prediction Engine',
    description: 'Hybrid machine learning models analyze patterns to predict groundwater depletion 30-90 days in advance.',
    specs: [
      'LSTM neural networks for time series',
      'ARIMA for seasonal patterns',
      'Prophet for trend analysis',
      'Ensemble model for accuracy',
    ],
  },
  {
    id: 'alerts',
    icon: MessageSquare,
    title: 'SMS Alert System',
    description: 'Farmers receive timely alerts and recommendations in their local language via SMS.',
    specs: [
      'Multi-language support (Hindi, Kannada, etc.)',
      'Critical threshold alerts',
      'Weekly status updates',
      'Actionable recommendations',
    ],
  },
];

export function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            From Sensor to Insight
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            A complete end-to-end system that transforms raw sensor data into 
            actionable predictions for rural communities.
          </p>
        </motion.div>

        {/* Step Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="sensor" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-slate-900/50 p-2 mb-8">
              {steps.map((step) => (
                <TabsTrigger
                  key={step.id}
                  value={step.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-teal-500 data-[state=active]:text-white text-slate-400"
                >
                  <step.icon className="w-4 h-4 mr-2 hidden sm:inline" />
                  <span className="text-xs sm:text-sm">{step.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {steps.map((step) => (
              <TabsContent key={step.id} value={step.id}>
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 mb-6`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-slate-400 mb-6">{step.description}</p>
                        <ul className="space-y-3">
                          {step.specs.map((spec, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative">
                        {/* Visual representation for each step */}
                        <StepVisual stepId={step.id} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Technical Architecture Deep Dive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">AI Model Architecture</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* LSTM */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 mb-4">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">LSTM Networks</h4>
                  <p className="text-slate-400 text-sm mb-4">
                    Long Short-Term Memory networks capture long-term dependencies in groundwater level time series data.
                  </p>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      3-layer architecture
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      64-32-16 neurons
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      Trained on 23 years data
                    </div>
                  </div>
                </div>

                {/* ARIMA */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v18h18" />
                      <path d="M7 16l4-4 4 4 6-6" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">ARIMA Model</h4>
                  <p className="text-slate-400 text-sm mb-4">
                    AutoRegressive Integrated Moving Average captures seasonal patterns and trend components.
                  </p>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      Seasonal decomposition
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      Monsoon pattern detection
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      AIC-optimized parameters
                    </div>
                  </div>
                </div>

                {/* Prophet */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Prophet</h4>
                  <p className="text-slate-400 text-sm mb-4">
                    Facebook's Prophet handles missing data, outliers, and irregular seasonal patterns.
                  </p>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      Trend + seasonality
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      Holiday effects
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      Uncertainty intervals
                    </div>
                  </div>
                </div>
              </div>

              {/* Ensemble */}
              <div className="mt-8 p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-purple-400 font-semibold">LSTM</div>
                    <div className="text-slate-500 text-xs">33%</div>
                  </div>
                  <span className="text-slate-600">+</span>
                  <div className="text-center">
                    <div className="text-blue-400 font-semibold">ARIMA</div>
                    <div className="text-slate-500 text-xs">33%</div>
                  </div>
                  <span className="text-slate-600">+</span>
                  <div className="text-center">
                    <div className="text-emerald-400 font-semibold">Prophet</div>
                    <div className="text-slate-500 text-xs">34%</div>
                  </div>
                  <span className="text-slate-600">=</span>
                  <div className="text-center">
                    <div className="text-cyan-400 font-semibold">Ensemble</div>
                    <div className="text-slate-500 text-xs">Best Result</div>
                  </div>
                </div>
                <p className="text-center text-slate-400 text-sm">
                  Weighted ensemble combines all three models, dynamically adjusting weights based on recent validation performance.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function StepVisual({ stepId }: { stepId: string }) {
  switch (stepId) {
    case 'sensor':
      return (
        <div className="aspect-square max-w-xs mx-auto bg-slate-800 rounded-2xl p-6 relative overflow-hidden">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Borewell casing */}
            <rect x="70" y="20" width="60" height="180" fill="#334155" rx="4" />
            {/* Water */}
            <rect x="75" y="80" width="50" height="115" fill="url(#waterGrad)" rx="2" />
            {/* Sensor */}
            <rect x="85" y="140" width="30" height="20" fill="#06b6d4" rx="2">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </rect>
            {/* Cable */}
            <line x1="100" y1="140" x2="100" y2="40" stroke="#64748b" strokeWidth="2" strokeDasharray="4 2" />
            {/* Data transmission indicator */}
            <circle cx="100" cy="40" r="6" fill="#22c55e">
              <animate attributeName="r" values="4;8;4" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <span className="text-xs text-slate-400">Submersible Sensor Node</span>
          </div>
        </div>
      );
    case 'power':
      return (
        <div className="aspect-square max-w-xs mx-auto bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center">
          <div className="relative">
            <Sun className="w-20 h-20 text-amber-400" />
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-4 bg-amber-400/50 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translateY(-50px)`,
                    transformOrigin: 'center',
                  }}
                />
              ))}
            </motion.div>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">10W</div>
              <div className="text-xs text-slate-400">Solar Panel</div>
            </div>
            <div className="text-slate-600">→</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">7Ah</div>
              <div className="text-xs text-slate-400">LiFePO4</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-xs text-slate-500">7+ days autonomy</span>
          </div>
        </div>
      );
    case 'connectivity':
      return (
        <div className="aspect-square max-w-xs mx-auto bg-slate-800 rounded-2xl p-6 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-32 h-32">
              {/* Tower */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-20 bg-slate-600 rounded-t" />
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-600" />
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-600" />
              {/* Signal waves */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-20 left-1/2 -translate-x-1/2 w-8 h-8 border-2 border-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 3, 3],
                    opacity: [1, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.6,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-between text-xs text-slate-400">
              <span>GSM</span>
              <span>LoRa</span>
              <span>NB-IoT</span>
            </div>
          </div>
        </div>
      );
    case 'ai':
      return (
        <div className="aspect-square max-w-xs mx-auto bg-slate-800 rounded-2xl p-6">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Neural network visualization */}
            {[0, 1, 2].map(layer => (
              <g key={layer}>
                {[0, 1, 2].map(node => (
                  <circle
                    key={node}
                    cx={50 + layer * 50}
                    cy={50 + node * 50}
                    r="8"
                    fill={layer === 1 ? '#a855f7' : '#06b6d4'}
                    opacity={0.8}
                  >
                    <animate
                      attributeName="opacity"
                      values="0.5;1;0.5"
                      dur={`${2 + Math.random()}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </g>
            ))}
            {/* Connections */}
            {[0, 1, 2].map(i =>
              [0, 1, 2].map(j =>
                [0, 1, 2].map(k => (
                  <line
                    key={`${i}-${j}-${k}`}
                    x1={50}
                    y1={50 + i * 50}
                    x2={100}
                    y2={50 + j * 50}
                    stroke="#475569"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                ))
              )
            )}
            {[0, 1, 2].map(i =>
              [0, 1, 2].map(j => (
                <line
                  key={`out-${i}-${j}`}
                  x1={100}
                  y1={50 + i * 50}
                  x2={150}
                  y2={50 + j * 50}
                  stroke="#475569"
                  strokeWidth="1"
                  opacity="0.3"
                />
              ))
            )}
            {/* Output */}
            <rect x="140" y="85" width="40" height="30" fill="#10b981" rx="4" opacity="0.8" />
            <text x="160" y="105" textAnchor="middle" fill="white" fontSize="10">30d</text>
          </svg>
          <div className="text-center">
            <span className="text-xs text-slate-400">Hybrid ML Ensemble</span>
          </div>
        </div>
      );
    case 'alerts':
      return (
        <div className="aspect-square max-w-xs mx-auto bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center">
          <div className="space-y-3 w-full max-w-[200px]">
            {[
              { type: 'alert', text: 'Water level critical!', color: 'bg-red-500' },
              { type: 'info', text: 'Weekly update: Level stable', color: 'bg-blue-500' },
              { type: 'recommend', text: 'Reduce irrigation 15%', color: 'bg-emerald-500' },
            ].map((msg, i) => (
              <motion.div
                key={i}
                className={`p-3 rounded-lg ${msg.color} bg-opacity-20 border border-opacity-30`}
                style={{ borderColor: msg.color.replace('bg-', '') }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span className="text-white text-xs">{msg.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <span className="text-xs text-slate-500">SMS in local language</span>
          </div>
        </div>
      );
    default:
      return null;
  }
}

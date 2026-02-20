import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight,
  Building2,
  HandHeart,
  Landmark
} from 'lucide-react';

const deploymentRoadmap = [
  {
    phase: 'Phase 1',
    title: 'Pilot Deployment',
    timeline: 'Months 1-6',
    locations: '10 villages in Karnataka',
    nodes: '100 monitoring nodes',
    focus: 'Technology validation & community feedback',
    status: 'current',
  },
  {
    phase: 'Phase 2',
    title: 'Karnataka Scale',
    timeline: 'Months 7-12',
    locations: '50 villages across 5 districts',
    nodes: '500 monitoring nodes',
    focus: 'Refinement & local partnerships',
    status: 'upcoming',
  },
  {
    phase: 'Phase 3',
    title: 'Multi-State Expansion',
    timeline: 'Year 2',
    locations: '200 villages in 5 states',
    nodes: '2,000 monitoring nodes',
    focus: 'Government & CSR partnerships',
    status: 'upcoming',
  },
  {
    phase: 'Phase 4',
    title: 'National Scale',
    timeline: 'Year 3',
    locations: '500+ villages across India',
    nodes: '5,000+ monitoring nodes',
    focus: 'Sustainable scale & replication',
    status: 'upcoming',
  },
];

const costBreakdown = [
  { item: 'IoT Monitoring Node (10 units)', cost: '₹1,30,000', details: '₹13,000 per node' },
  { item: 'LoRa Gateway (1 unit)', cost: '₹25,000', details: 'Village-wide coverage' },
  { item: 'Installation & Setup', cost: '₹50,000', details: 'Professional installation' },
  { item: 'Community Training', cost: '₹10,000', details: 'Workshops & materials' },
  { item: 'Dashboard & Software', cost: '₹15,000', details: 'One-time setup' },
];

const annualCosts = [
  { item: 'SIM Data (10 cards)', cost: '₹12,000', details: '₹100/month each' },
  { item: 'Cloud Services', cost: '₹24,000', details: 'AWS IoT + storage' },
  { item: 'Maintenance', cost: '₹30,000', details: 'Sensor replacement' },
  { item: 'Local Technician', cost: '₹60,000', details: 'Part-time support' },
  { item: 'SMS Alerts', cost: '₹6,000', details: '~500 SMS/month' },
];

const partnershipModels = [
  {
    icon: HandHeart,
    title: 'CSR Partnerships',
    description: 'Corporate Social Responsibility funding from water-intensive industries.',
    benefits: [
      'Full village deployment covered',
      'Brand visibility in rural communities',
      'ESG reporting & sustainability credentials',
      'Employee engagement opportunities',
    ],
    investment: '₹50,000 - ₹75,000 per village',
  },
  {
    icon: Landmark,
    title: 'Government Integration',
    description: 'Integration with Atal Bhujal Yojana and Jal Jeevan Mission.',
    benefits: [
      'Aligned with national water policies',
      'Cost-effective DWLR alternative',
      'Village-level implementation support',
      'Data for policy decisions',
    ],
    investment: 'Through government schemes',
  },
  {
    icon: Building2,
    title: 'NGO Collaboration',
    description: 'Partnerships with rural development organizations.',
    benefits: [
      'Community mobilization expertise',
      'Local trust and relationships',
      'Implementation support',
      'Monitoring & evaluation',
    ],
    investment: 'Shared cost model',
  },
];

export function Pilot() {
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
          <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
            Pilot & Scale
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            From Pilot to National Scale
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            A phased approach to deployment, starting with validation pilots 
            and scaling through partnerships with government, CSR, and NGOs.
          </p>
        </motion.div>

        {/* Deployment Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Deployment Roadmap</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 md:-translate-x-1/2" />
            
            <div className="space-y-8">
              {deploymentRoadmap.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`relative flex items-start gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 md:-translate-x-1/2 z-10 ${
                    phase.status === 'current' 
                      ? 'bg-cyan-500 border-cyan-500' 
                      : 'bg-slate-900 border-slate-600'
                  }`}>
                    {phase.status === 'current' && (
                      <span className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-50" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <Card className={`bg-slate-900/50 border-slate-800 ${
                      phase.status === 'current' ? 'border-cyan-500/50' : ''
                    }`}>
                      <CardContent className="p-5">
                        <div className={`flex items-center gap-2 mb-2 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          <Badge 
                            variant={phase.status === 'current' ? 'default' : 'secondary'}
                            className={phase.status === 'current' ? 'bg-cyan-500' : ''}
                          >
                            {phase.phase}
                          </Badge>
                          <span className="text-slate-400 text-sm">{phase.timeline}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2">{phase.title}</h4>
                        <div className={`space-y-1 text-sm ${
                          index % 2 === 0 ? 'md:text-right' : ''
                        }`}>
                          <div className="flex items-center gap-2 text-slate-400">
                            <MapPin className="w-4 h-4" />
                            <span>{phase.locations}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Users className="w-4 h-4" />
                            <span>{phase.nodes}</span>
                          </div>
                          <p className="text-slate-500 mt-2">{phase.focus}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cost Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* One-time Costs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-slate-900/50 border-slate-800 h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                  One-Time Deployment Cost
                </h3>
                <div className="space-y-3">
                  {costBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
                      <div>
                        <div className="text-slate-300 text-sm">{item.item}</div>
                        <div className="text-slate-500 text-xs">{item.details}</div>
                      </div>
                      <div className="text-emerald-400 font-medium">{item.cost}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-2xl font-bold text-emerald-400">₹2,30,000</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-1">Per village (10 nodes)</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Annual Costs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-slate-900/50 border-slate-800 h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  Annual Operational Cost
                </h3>
                <div className="space-y-3">
                  {annualCosts.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
                      <div>
                        <div className="text-slate-300 text-sm">{item.item}</div>
                        <div className="text-slate-500 text-xs">{item.details}</div>
                      </div>
                      <div className="text-cyan-400 font-medium">{item.cost}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Total Annual</span>
                    <span className="text-2xl font-bold text-cyan-400">₹1,32,000</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-1">~₹13,200 per node/year</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Partnership Models */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6">Partnership Models</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {partnershipModels.map((model, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 mb-4">
                    <model.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{model.title}</h4>
                  <p className="text-slate-400 text-sm mb-4">{model.description}</p>
                  <ul className="space-y-2 mb-4">
                    {model.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-800">
                    <span className="text-slate-500 text-xs">Investment:</span>
                    <p className="text-cyan-400 font-medium">{model.investment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-br from-cyan-900/30 to-teal-900/30 border-cyan-500/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Protect Your Community's Water?
              </h3>
              <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                Join our pilot program and be among the first villages to benefit from 
                AI-powered groundwater protection. Limited slots available for Phase 1.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8"
              >
                Request Pilot Deployment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

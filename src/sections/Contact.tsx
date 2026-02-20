import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2,
  Droplets
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const states = [
  'Karnataka',
  'Maharashtra',
  'Gujarat',
  'Rajasthan',
  'Punjab',
  'Haryana',
  'Uttar Pradesh',
  'Madhya Pradesh',
  'Andhra Pradesh',
  'Telangana',
  'Tamil Nadu',
  'Kerala',
  'Other',
];

const organizationTypes = [
  'Panchayat / Rural Local Body',
  'NGO / Non-Profit',
  'Corporate / CSR',
  'Government Department',
  'Educational Institution',
  'Individual Farmer',
  'Other',
];

export function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    orgType: '',
    state: '',
    village: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowSuccess(true);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Request a Pilot Deployment
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Interested in bringing JalRakshak AI to your community? 
            Fill out the form below and our team will get in touch within 48 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-slate-900/50 border-slate-800">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">
                        Full Name <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-slate-300">
                        Organization Name
                      </Label>
                      <Input
                        id="organization"
                        placeholder="Organization or village name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="orgType" className="text-slate-300">
                        Organization Type <span className="text-red-400">*</span>
                      </Label>
                      <Select 
                        value={formData.orgType} 
                        onValueChange={(value) => setFormData({ ...formData, orgType: value })}
                      >
                        <SelectTrigger className="bg-slate-800 border-slate-700 text-white focus:border-cyan-500">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          {organizationTypes.map((type) => (
                            <SelectItem key={type} value={type} className="text-white hover:bg-slate-700">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-slate-300">
                        State <span className="text-red-400">*</span>
                      </Label>
                      <Select 
                        value={formData.state} 
                        onValueChange={(value) => setFormData({ ...formData, state: value })}
                      >
                        <SelectTrigger className="bg-slate-800 border-slate-700 text-white focus:border-cyan-500">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700 max-h-60">
                          {states.map((state) => (
                            <SelectItem key={state} value={state} className="text-white hover:bg-slate-700">
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="village" className="text-slate-300">
                      Village / Region <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="village"
                      placeholder="Enter village or region name"
                      value={formData.village}
                      onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                      required
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">
                        Email <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-300">
                        Phone Number <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 9xxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-300">
                      Additional Information
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your water challenges, number of borewells, or any specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Request Pilot Deployment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="bg-slate-900/50 border-slate-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">Email</div>
                      <a href="mailto:contact@jalrakshak.ai" className="text-white hover:text-cyan-400 transition-colors">
                        darshusharma9755@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">Phone</div>
                      <a href="tel:+919179136979" className="text-white hover:text-cyan-400 transition-colors">
                        +91 9179136979
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">Headquarters</div>
                      <p className="text-white">
                        Indore, Madhya Pradesh<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-cyan-900/30 to-teal-900/30 border-cyan-500/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">Why Partner With Us?</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Proven AI technology with 85%+ accuracy',
                    'Low-cost, solar-powered solution',
                    'Community-owned and operated',
                    'Aligned with government schemes',
                    'End-to-end implementation support',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-slate-900/50 border-slate-800">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">48 Hours</div>
                  <div className="text-slate-400 text-sm">Average response time</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Thank You!</DialogTitle>
            <DialogDescription className="text-center text-slate-400">
              Your pilot deployment request has been received.
            </DialogDescription>
          </DialogHeader>
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <p className="text-slate-300 mb-2">
              Our team will review your request and get in touch within 48 hours.
            </p>
            <p className="text-slate-500 text-sm">
              Reference ID: JR-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
          <Button 
            onClick={() => setShowSuccess(false)}
            className="w-full bg-gradient-to-r from-cyan-500 to-teal-500"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}

import { useCallback } from 'react';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Problem } from '@/sections/Problem';
import { Solution } from '@/sections/Solution';
import { Dashboard } from '@/sections/Dashboard';
import { HowItWorks } from '@/sections/HowItWorks';
import { Impact } from '@/sections/Impact';
import { Pilot } from '@/sections/Pilot';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const scrollToDashboard = useCallback(() => {
    const element = document.querySelector('#dashboard');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToContact = useCallback(() => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation 
        onViewDashboard={scrollToDashboard} 
        onRequestPilot={scrollToContact} 
      />
      
      <main>
        <Hero 
          onViewDashboard={scrollToDashboard} 
          onRequestPilot={scrollToContact} 
        />
        
        <div id="problem">
          <Problem />
        </div>
        
        <div id="solution">
          <Solution />
        </div>
        
        <Dashboard />
        
        <div id="how-it-works">
          <HowItWorks />
        </div>
        
        <div id="impact">
          <Impact />
        </div>
        
        <div id="pilot">
          <Pilot />
        </div>
        
        <Contact />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
